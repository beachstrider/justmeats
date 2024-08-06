import { useContext, useEffect } from 'react'

import { addDays, format } from 'date-fns'

import {
  cancelSubscription,
  getSubscription,
  listBundleSelections,
  listCharges,
  processCharge,
  sendCustomerNotification,
  updateBundleSelection,
  updateSubscriptionChargeDate,
} from '@rechargeapps/storefront-client'
import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { SubscriptionEditLayout } from '~/containers/Account/Subscriptions/EditLayout'
import { CustomBundle } from '~/containers/CustomBundle'
import { sendPageView } from '~/lib/metaPixel.server'
import { rechargeQueryWrapper } from '~/lib/rechargeUtils'
import { getBundle } from '~/lib/storefront'
import { getFullId, getPureId } from '~/lib/utils'
import { CustomBundleProvider } from '~/providers/CustomBundleProvider'
import { RootContext } from '~/providers/RootProvider'

export const meta = ({ data }) => {
  return [
    {
      title: `Subscription ${data?.subscription?.product_title}${
        data?.subscription?.variant_title
          ? ` (${data?.subscription?.variant_title})`
          : ''
      } - Just Meats`,
    },
  ]
}

export const loader = async ({ request, context, params }) => {
  return await rechargeQueryWrapper(async (rechargeSession) => {
    sendPageView(request)

    const discountCode = context.session.get('discountCode')
    const discountCodes = discountCode ? [discountCode] : []

    const bundleData = getBundle({
      request,
      context,
    })

    const rechargeSubscriptionData = getSubscription(
      rechargeSession,
      params.id,
      {
        include: ['address'],
      },
    )

    const bundleSelectionsData = listBundleSelections(
      rechargeSession,
      params.id,
    )

    const [
      {
        products,
        allProducts,
        freeProduct,
        bonusProduct,
        shippingInsuranceProduct,
      },
      subscription,
      { bundle_selections },
    ] = await Promise.all([
      bundleData,
      rechargeSubscriptionData,
      bundleSelectionsData,
    ])

    const bundle = bundle_selections.find(
      (el) => el.purchase_item_id === Number(params.id),
    )

    if (!bundle) {
      throw new Response('Not a bundle subscription', { status: 404 })
    }

    if (!subscription) {
      throw new Response('Subscription not found', { status: 404 })
    }

    const bundleId = bundle.id
    const purchase_item_id = bundle.purchase_item_id
    const bundleItems = bundle.items

    const { charges } = await listCharges(rechargeSession, {
      limit: 10,
      purchase_item_id,
      customer_id: rechargeSession.customerId,
      scheduled_at_min: new Date().toISOString(),
      sort_by: 'scheduled_at-desc',
      status: ['queued', 'skipped', 'error'],
    })

    const upcomingChargeId = charges[0]?.id

    const idsSubscriptions = []
    const subscriptionData = {}

    let subscriptionProducts = []

    for (const el of bundleItems) {
      const subscriptionId = getFullId(el.external_product_id, 'Product')
      idsSubscriptions.push(subscriptionId)
      subscriptionData[subscriptionId] = el.quantity
    }

    for (const el of allProducts) {
      if (idsSubscriptions.includes(el.id)) {
        const quantity = subscriptionData[el.id]

        const amount = el.priceRange?.maxVariantPrice?.amount
        const totalAmount = (amount * quantity).toFixed(2)

        const bindQuantityObject = {
          ...el,
          quantity,
          amount,
          totalAmount,
        }
        subscriptionProducts.push(bindQuantityObject)
      }
    }

    const bonusItemInBundle = bundleItems.find(
      (el) => getFullId(el.external_product_id, 'Product') === bonusProduct.id,
    )
    const bonusItemVariantId = getFullId(
      bonusItemInBundle?.external_variant_id,
      'ProductVariant',
    )
    const subscriptionBonusVariant = bonusItemInBundle
      ? bonusProduct.variants.nodes.find((el) => el.id === bonusItemVariantId)
      : null

    // NOTE: this free product should appear only for users who already purchased this as it's now only for one-time purchase
    const isFreeProductSubscribed = subscriptionProducts.some(
      (el) => el.id === freeProduct.id,
    )

    // Exclude free & bonus & shipping product
    subscriptionProducts = subscriptionProducts.filter(
      (product) => Number(product.priceRange.minVariantPrice.amount) !== 0,
    )
    subscriptionProducts = subscriptionProducts.filter(
      (product) => product.id !== shippingInsuranceProduct.id,
    )

    return json(
      {
        id: params.id,
        bundleId,
        purchase_item_id,
        products,
        subscription,
        charges,
        freeProduct,
        bonusProduct,
        subscriptionProducts,
        subscriptionBonusVariant,
        upcomingChargeId,
        shopCurrency: 'USD',
        discountCodes,
        isFreeProductSubscribed,
      },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      },
    )
  }, context)
}

export const action = async ({ request, context, params }) => {
  return await rechargeQueryWrapper(async (rechargeSession) => {
    const form = await request.formData()
    const body = JSON.parse(form.get('body'))

    const { api, ...data } = body

    switch (api) {
      case 'update-bundle':
        const bundleId = data.bundleId
        const purchase_item_id = data.purchase_item_id
        const isFreeProductSubscribed = data.isFreeProductSubscribed

        const { collection, freeProduct, shippingInsuranceProduct } =
          await getBundle({
            request,
            context,
          })

        const products = [
          ...data.products,
          { ...shippingInsuranceProduct, quantity: 1 },
        ]

        if (isFreeProductSubscribed) {
          products.push({ ...freeProduct, quantity: 1 })
        }

        const bundleCollectionId = getPureId(collection.id, 'Collection')

        const items = products.map((product) => ({
          collection_id: bundleCollectionId,
          collection_source: 'shopify',
          external_product_id: getPureId(product.id, 'Product'),
          external_variant_id: getPureId(
            product.variants.nodes[0].id,
            'ProductVariant',
          ),
          quantity: product.quantity,
        }))

        try {
          await updateBundleSelection(rechargeSession, bundleId, {
            purchase_item_id,
            items,
          })

          return json({ success: true })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }

      case 'process-charge':
        const chargeId = data.chargeId

        try {
          await processCharge(rechargeSession, chargeId)

          return json({ success: true })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }

      case 'delay-subscription':
        const date = format(
          addDays(data.next_charge_scheduled_at, 7),
          'yyyy-MM-dd',
        )

        try {
          await updateSubscriptionChargeDate(
            rechargeSession,
            Number(params.id),
            date,
          )

          return json({ success: true })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }

      case 'cancel-subscription':
        const feedback = body.feedback || 'Other reason'

        try {
          await cancelSubscription(rechargeSession, Number(params.id), {
            send_email: true,
            cancellation_reason: feedback,
          })

          return json({ success: true })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }

      case 'send-update-payment-email':
        const { address_id, payment_method_id } = data

        try {
          await sendCustomerNotification(
            rechargeSession,
            'SHOPIFY_UPDATE_PAYMENT_INFO',
            {
              address_id,
              payment_method_id,
            },
          )

          return json({ success: true })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }

      default:
        break
    }
  }, context)
}

export default function SubscriptionRoute() {
  const { setSubscriptionProducts, setSubscriptionBonusVariant } =
    useContext(RootContext)
  const { subscriptionProducts, subscriptionBonusVariant } = useLoaderData()

  useEffect(() => {
    setSubscriptionProducts(subscriptionProducts)
    setSubscriptionBonusVariant(subscriptionBonusVariant)
  }, [])

  return (
    <SubscriptionEditLayout>
      <CustomBundleProvider>
        <CustomBundle />
      </CustomBundleProvider>
    </SubscriptionEditLayout>
  )
}
