import React, { useContext, useEffect, useState } from 'react'

import { useLoaderData, useMatches } from '@remix-run/react'

import { PlanPickerBlock } from '~/containers/CustomBundle/PlanPickerBlock'
import { CustomBundleContext, RootContext } from '~/contexts'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { Star4 } from '~/icons/Star4'
import { Star5 } from '~/icons/Star5'

import { PROMO_CODES } from '../../promo-codes'
import { Cart } from './Cart'
import { MobileCart } from './Cart/MobileCart'
import { PlanPicker } from './PlanPickerBlock/PlanPicker'
import { ProductCard } from './ProductCard'
import { ProductModal } from './ProductModal'

export const CustomBundle = () => {
  const submit = useSubmitPromise()
  const matches = useMatches()

  const {
    id,
    bundleId,
    purchase_item_id,
    products,
    bonusProduct,
    freeProduct,
    discountCodes,
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

  const [clickedProduct, setClickedProduct] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const isCartPage = matches.at(-1).pathname.includes('/products/custom-bundle')

  const selectedProducts = isCartPage ? cartProducts : subscriptionProducts
  const sellingPlan = isCartPage ? cartSellingPlan : subscriptionSellingPlan
  const sellingPlanFrequency = isCartPage
    ? cartSellingPlanFrequency
    : subscriptionSellingPlanFrequency
  const bonusVariant = isCartPage ? cartBonusVariant : subscriptionBonusVariant

  const productsBasedOnSellingPlan = sellingPlan
    ? products
    : products.filter((product) => !product.requiresSellingPlan)

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

  const tags = freeProduct.tags
  let freeProductPrice

  if (tags && tags.length > 0) {
    tags.forEach((tag) => {
      if (tag.includes('free-')) {
        freeProductPrice = parseFloat(tag.split('-')[1])
      }
    })
  }

  const originalCost = costForOneTime + freeProductPrice

  async function handleSubmit() {
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

      if (res.success) {
        location.href = res.checkoutUrl
      }
    } else {
      const res = await submit(
        {
          body: JSON.stringify({
            api: 'update-bundle',
            bundleId,
            purchase_item_id,
            products,
          }),
        },
        {
          method: 'post',
          action: `/account/subscriptions/${id}`,
        },
      )

      if (res.success) {
        console.debug('ok')
      } else {
        console.error(res.message)
      }
    }

    setSubmitting(false)
  }

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
      <div className="max-w-ful custom-collection-wrap">
        <div className="flex flex-col flex-1 gap-2 border-gray-400 border-solid main-section sm:border">
          <div className="relative flex product-and-cart mb-[62px] md:mb-0">
            <section className="container-small sm:pt-[52px] pt-[16px]">
              {isCartPage && (
                <>
                  <div className="block sm:hidden">
                    <div className="px-[27px] py-[22px] rounded-[8px] bg-rec-96 bg-cover overflow-hidden [box-shadow:_0px_20px_40px_-10px_rgba(0,0,0,0.20)] sm:mb-0 mb-[34px]">
                      <div className="text-[18px] text-center font-semibold font-dunbar mb-[12px]">
                        WE GUARANTEE YOU&apos;LL LOVE IT
                        <br />
                        OR YOUR MONEY BACK!
                      </div>
                      <div className="flex justify-center">
                        <div className="flex gap-[14px]">
                          <div className="flex gap-[1px]">
                            <Star5 />
                            <Star5 />
                            <Star5 />
                            <Star5 />
                            <Star4 />
                          </div>
                          <div className="font-nunito text-[15px] font-semibold">
                            1,134 Reviews
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sm:uppercase mb-[24px]">
                      <div className="flex items-center w-full gap-[14px] sm:mb-[56px] mb-[20px] font-semibold leading-7 text-[20px] sm:text-[24px] sm:tracking-[1.2px] tracking-[1px]">
                        <div className="sm:hidden w-[32px] h-[32px] flex justify-center items-center bg-[#231B19] text-white rounded-[4px] font-nunito">
                          1
                        </div>
                        <h2 className="font-dunbar">SELECT YOUR FREQUENCY</h2>
                      </div>
                      <PlanPicker />
                    </div>
                  </div>
                  <div className="flex items-center w-full gap-[14px] sm:mb-[56px] mb-[20px] font-semibold leading-7 text-[20px] sm:text-[24px] sm:uppercase sm:tracking-[1.2px] tracking-[1px]">
                    <div className="sm:hidden w-[32px] h-[32px] flex justify-center items-center bg-[#231B19] text-white rounded-[4px] font-nunito">
                      2
                    </div>
                    <h2 className="font-dunbar">SELECT YOUR MEATS</h2>
                  </div>
                </>
              )}
              <div className="grid grid-cols-2 product-grid md:grid-cols-3 xl:grid-cols-4 gap-x-[20px] gap-y-[62px] sm:p-3 xl:pr-5 xl:mb-[0px] mb-[50px]">
                {productsBasedOnSellingPlan.map((product, key) => (
                  <ProductCard
                    key={key}
                    product={product}
                    onClick={() => setClickedProduct(product)}
                  />
                ))}
              </div>
            </section>
            <aside className="cart-wrapper sticky top-[0] h-fit hidden lg:block sm:max-w-[480px] w-full bg-white sm:pt-[54px] pt-[16px]">
              {isCartPage && <PlanPickerBlock />}
              <div className="h-full border">
                <div className="py-5 text-center text-white bg-black top-section">
                  <div className="py-2 text-wrapper">
                    {isCartPage ? (
                      <>
                        <h1 className="font-roboto_medium text-[17px] leading-none">
                          Subscribers Save {firstSavingPercentage}% on Orders
                        </h1>
                        <p className="text-[14px] leading-none font-roboto_medium mt-3">
                          Applied at checkout
                        </p>
                      </>
                    ) : (
                      <h1 className="font-roboto_medium text-[17px] leading-none">
                        YOUR SUBSCRIPTION
                      </h1>
                    )}
                  </div>
                </div>
                <div className="cart">
                  <Cart layout="aside" />
                </div>
              </div>
            </aside>
          </div>
        </div>
        <MobileCart />

        <ProductModal
          product={clickedProduct}
          onClose={() => setClickedProduct(null)}
        />
      </div>
    </CustomBundleContext.Provider>
  )
}
