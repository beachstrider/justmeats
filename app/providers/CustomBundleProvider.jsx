import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useLoaderData, useMatches, useSearchParams } from '@remix-run/react'

import { DELIVERY_EVERY_15_DAYS, DELIVERY_EVERY_30_DAYS } from '~/consts'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'

import { PROMO_CODES } from '../promo-codes'
import { RootContext } from './RootProvider'

export const CustomBundleContext = createContext()

export const CustomBundleProvider = ({ children }) => {
  const {
    id,
    bundleId,
    products,
    freeProduct,
    bonusProduct,
    discountCodes,
    purchase_item_id,
    isFreeProductSubscribed,
  } = useLoaderData()

  const {
    cartCost,
    cartProducts,
    cartSellingPlan,
    cartSellingPlanFrequency,
    cartBonusVariant,
    subscriptionCost,
    subscriptionSellingPlan,
    subscriptionProducts,
    subscriptionSellingPlanFrequency,
    subscriptionBonusVariant,
    setCartProducts,
    setCartSellingPlan,
    setCartSellingPlanFrequency,
    setCartBonusVariant,
    setSubscriptionSellingPlan,
    setSubscriptionProducts,
    setSubscriptionSellingPlanFrequency,
    setSubscriptionBonusVariant,
  } = useContext(RootContext)

  const matches = useMatches()
  const submit = useSubmitPromise()

  const [submitting, setSubmitting] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const isCartPage = matches.at(-1).pathname.includes('/products/custom-bundle')

  const selectedProducts = isCartPage ? cartProducts : subscriptionProducts
  const sellingPlan = isCartPage ? cartSellingPlan : subscriptionSellingPlan
  const sellingPlanFrequency = isCartPage
    ? cartSellingPlanFrequency
    : subscriptionSellingPlanFrequency
  const bonusVariant = isCartPage ? cartBonusVariant : subscriptionBonusVariant

  const setSelectedProducts = isCartPage
    ? setCartProducts
    : setSubscriptionProducts
  const setSellingPlan = isCartPage
    ? setCartSellingPlan
    : setSubscriptionSellingPlan
  const setSellingPlanFrequency = isCartPage
    ? setCartSellingPlanFrequency
    : setSubscriptionSellingPlanFrequency
  const setBonusVariant = isCartPage
    ? setCartBonusVariant
    : setSubscriptionBonusVariant

  // Get influencer discount codes
  const influencerCode = PROMO_CODES.filter((code) =>
    discountCodes.includes(code.code),
  )[0]

  const costForOneTime = isCartPage ? cartCost : subscriptionCost
  const firstSavingPercentage = influencerCode?.percentage ?? 25

  const costForSubscription =
    costForOneTime - (costForOneTime / 100) * firstSavingPercentage

  const cost = isCartPage && sellingPlan ? costForSubscription : costForOneTime

  const freeTag = freeProduct.tags.find((el) => el.includes('free-'))
  const freeProductPrice = parseFloat(freeTag?.split('-')?.[1])
  const originalCost = costForOneTime + freeProductPrice

  const handleSubmit = async () => {
    const products = [...selectedProducts]

    if (costForOneTime > 125) {
      products.push({
        ...{
          ...bonusProduct,
          variants: {
            nodes: [bonusVariant || bonusProduct.variants.nodes[0]],
          },
        },
        quantity: 1,
      })
    }

    setSubmitting(true)

    if (isCartPage) {
      const res = await submit(
        {
          body: JSON.stringify({
            products,
            sellingPlanName: sellingPlan,
          }),
        },
        {
          method: 'post',
          action: '/products/custom-bundle',
        },
      )

      setSubmitting(false)

      if (res.success) {
        location.href = res.checkoutUrl
      }
    } else {
      const res = await submit(
        {
          body: JSON.stringify({
            api: 'update-bundle',
            bundleId,
            products,
            purchase_item_id,
            isFreeProductSubscribed,
          }),
        },
        {
          method: 'post',
          action: `/account/subscriptions/${id}`,
        },
      )

      setSubmitting(false)
      return res
    }
  }

  const initializeCart = ({ cartItemsInUrl, sellingPlanInUrl }) => {
    const newCartProducts = []
    const correctedSellingPlanInUrl = sellingPlanInUrl.replaceAll('-', ' ')

    for (const cartItem of cartItemsInUrl) {
      const product = products.find((el) => el.handle === cartItem.handle)
      const productQuantity = Number(cartItem.quantity)
      const productPrice = product?.priceRange?.maxVariantPrice?.amount

      if (typeof product !== 'undefined' && productPrice && productQuantity) {
        newCartProducts.push({
          ...product,
          quantity: productQuantity,
          amount: String(productPrice),
          totalAmount: String(productPrice * productQuantity),
        })
      }
    }

    if (
      [DELIVERY_EVERY_15_DAYS, DELIVERY_EVERY_30_DAYS, ''].includes(
        correctedSellingPlanInUrl,
      )
    ) {
      setSellingPlan(correctedSellingPlanInUrl)
      setSellingPlanFrequency(correctedSellingPlanInUrl)
      setSelectedProducts(newCartProducts)
    } else {
      setSelectedProducts(newCartProducts)
    }
  }

  const setParams = useCallback(
    (newParams = {}) => {
      const urlSearchParams = new URLSearchParams()

      for (const _key in newParams) {
        const _value = String(newParams[_key])

        if (_value) {
          urlSearchParams.set(_key, _value)
        }
      }

      setSearchParams(urlSearchParams, {
        preventScrollReset: true,
      })
    },
    [setSearchParams],
  )

  useEffect(() => {
    if (isCartPage) {
      const cartItemsParamInUrl = searchParams.get('cart_items')
      const sellingPlanInUrl = searchParams.get('selling_plan') ?? ''

      if (cartItemsParamInUrl) {
        try {
          const cartItemsInUrl = JSON.parse(cartItemsParamInUrl)
          initializeCart({ cartItemsInUrl, sellingPlanInUrl })
        } catch (_) {
          console.error('Cart param corrupted')
        } finally {
          setParams()
        }
      }
    }
  }, [])

  return (
    <CustomBundleContext.Provider
      value={{
        isCartPage,
        selectedProducts,
        sellingPlan,
        sellingPlanFrequency,
        bonusVariant,
        cost: cost.toFixed(2),
        costForOneTime: costForOneTime.toFixed(2),
        costForSubscription: costForSubscription.toFixed(2),
        originalCost: originalCost.toFixed(2),
        freeProductPrice: freeProductPrice.toFixed(2),
        firstSavingPercentage,
        submitting,
        setSelectedProducts,
        setSellingPlan,
        setSellingPlanFrequency,
        setBonusVariant,
        setSubmitting,
        handleSubmit,
      }}
    >
      {children}
    </CustomBundleContext.Provider>
  )
}
