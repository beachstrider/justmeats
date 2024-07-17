import { getDynamicBundleItems } from '@rechargeapps/storefront-client'
import { json, redirect } from '@shopify/remix-oxygen'

import { Notification } from '~/components/Notification'
import { CustomBundle } from '~/containers/CustomBundle'
import { sendPageView } from '~/lib/metaPixel.server'
import { getBundle } from '~/lib/storefront'
import { getFullId, getPureId } from '~/lib/utils'
import { CustomBundleProvider } from '~/providers/CustomBundleProvider'

export const meta = () => {
  return [{ title: 'Custom Bundle - Just Meats' }]
}

export async function loader({ request, context, params }) {
  sendPageView(request)

  if (params.bundle !== context.env.PUBLIC_BUNDLE_PRODUCT_HANDLE) {
    return redirect(`/products/${context.env.PUBLIC_BUNDLE_PRODUCT_HANDLE}`)
  }

  const discountCode = context.session.get('discountCode')
  const discountCodes = discountCode ? [discountCode] : []

  const { products, freeProduct, bonusProduct } = await getBundle({
    request,
    context,
  })

  return json({
    products,
    freeProduct,
    bonusProduct,
    discountCodes,
  })
}

export async function action({ request, context }) {
  const cart = context.cart
  const discountCode = context.session.get('discountCode')

  const { collection, bundleProduct, freeProduct } = await getBundle({
    request,
    context,
  })

  const form = await request.formData()
  const data = JSON.parse(form.get('body'))
  const products = data.products
  const sellingPlanName = data.sellingPlanName

  const bundleCollectionId = getPureId(collection.id, 'Collection')
  const bundleProductExternalProductId = getPureId(bundleProduct.id, 'Product')
  const bundleProductExternalVariantId = getPureId(
    bundleProduct.variants.nodes[0].id,
    'ProductVariant',
  )

  let cartData

  if (sellingPlanName) {
    const bundle = {
      externalProductId: bundleProductExternalProductId,
      externalVariantId: bundleProductExternalVariantId,

      selections: products.map((product) => {
        const collectionId = bundleCollectionId
        const externalProductId = getPureId(product.id, 'Product')
        const externalVariantId = getPureId(
          product.variants.nodes[0].id,
          'ProductVariant',
        )
        const quantity = product.quantity

        let sellingPlans = []
        for (const el of product.sellingPlanGroups.nodes) {
          sellingPlans = [...sellingPlans, ...el.sellingPlans.nodes]
        }
        const sellingPlan = Number(
          getPureId(
            sellingPlans.find((el) => el.name === sellingPlanName).id,
            'SellingPlan',
          ),
        )

        return {
          collectionId,
          externalProductId,
          externalVariantId,
          quantity,
          sellingPlan,
        }
      }),
    }

    const bundleItems = await getDynamicBundleItems(
      bundle,
      'shopifyProductHandle',
    )

    cartData = bundleItems.map((bundleItem) => ({
      quantity: bundleItem.quantity,
      merchandiseId: getFullId(bundleItem.id, 'ProductVariant'),
      sellingPlanId: getFullId(bundleItem.selling_plan, 'SellingPlan'),
      attributes: Object.keys(bundleItem.properties).map((key) => {
        return { key, value: String(bundleItem.properties[key]) }
      }),
    }))
  } else {
    cartData = products.map((product) => ({
      quantity: product.quantity,
      merchandiseId: product.variants.nodes[0].id,
    }))
  }

  let cartResult
  let checkoutUrl

  cartResult = await cart.addLines([
    { merchandiseId: freeProduct.variants.nodes[0].id },
  ])
  cart.setCartId(cartResult.cart.id)
  checkoutUrl = cartResult.cart.checkoutUrl ?? checkoutUrl

  cartResult = await cart.addLines(cartData)
  cart.setCartId(cartResult.cart.id)
  checkoutUrl = cartResult.cart.checkoutUrl ?? checkoutUrl

  if (discountCode) {
    cartResult = await cart.updateDiscountCodes([discountCode])
    cart.setCartId(cartResult.cart.id)
    checkoutUrl = cartResult.cart.checkoutUrl ?? checkoutUrl
  }

  return json({ checkoutUrl, success: true })
}

export default function Product() {
  return (
    <main className="bg-[#EFEEED] page-custom-bundle">
      <Notification />
      <CustomBundleProvider>
        <CustomBundle />
      </CustomBundleProvider>
    </main>
  )
}
