import React, { useContext, useEffect, useState } from 'react'

import { useLoaderData, useMatches } from '@remix-run/react'

import { FaqAccordion } from '~/components/NewFaqAccordion'
import { PlanPickerBlock } from '~/containers/CustomBundle/PlanPickerBlock'
import { CustomBundleContext, RootContext } from '~/contexts'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { QualitySeal } from '~/icons/QualitySeal'

import { PROMO_CODES } from '../../promo-codes'
import { Cart } from './Cart'
import { MobileCart } from './Cart/MobileCart'
import { Filter } from './Filter'
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

  const [filter, setFilter] = useState({
    servingType: '',
    meatTypes: [],
    specialTypes: [],
  })

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

  const freeTag = freeProduct.tags.find((el) => el.includes('free-'))
  const freeProductPrice = parseFloat(freeTag?.split('-')?.[1])
  const originalCost = costForOneTime + freeProductPrice

  const filters = {
    servingTypes: getProductsMetaValues(products, 'serving_type'),
    meatTypes: getProductsMetaValues(products, 'meat_type'),
    specialTypes: getProductsMetaValues(products, 'special_type'),
  }

  const filteredProducts = getFilteredProducts(
    productsBasedOnSellingPlan,
    filter,
  )

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
            purchase_item_id,
            products,
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

  const onFilterChange = (newFilter) => {
    setFilter(newFilter)
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
            <div className="container-small sm:pt-[30px] pt-[16px]">
              <section className="sm:mb-[80px] mb-[36px]">
                {isCartPage && (
                  <>
                    <div className="relative sm:px-[27px] px-[20px] py-[22px] rounded-[8px] bg-rec-96 sm:mb-[40px] mb-[34px] [box-shadow:_0px_20px_40px_-10px_rgba(0,0,0,0.20)] overflow-hidden">
                      <div className="relative 2xl:text-[26px] sm:text-[20px] text-[18px] text-center font-semibold font-hudson mb-[12px]">
                        WE GUARANTEE YOU&apos;LL LOVE IT&nbsp;
                        <br className="block sm:hidden" />
                        OR YOUR MONEY BACK!
                      </div>
                      <div className="relative flex justify-center">
                        <div className="relative w-[230px] h-[20px] overflow-hidden">
                          <div
                            id="looxReviews"
                            className="!absolute !w-[304px] !h-[50px] !mt-[-30px] overflow-hidden"
                            data-loox-aggregate
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:hidden block sm:uppercase mb-[24px] font-hudson">
                      <div className="flex items-center w-full gap-[8px] sm:mb-[56px] mb-[20px] font-semibold leading-7 text-[20px] sm:text-[24px] sm:tracking-[1.2px] tracking-[0.6px]">
                        <div className="sm:hidden w-[32px] h-[32px] flex justify-center items-center bg-[#231B19] text-white">
                          1
                        </div>
                        <h2 className="font-bold">SELECT YOUR FREQUENCY</h2>
                      </div>
                      <PlanPicker type="mobile" />
                    </div>
                    <div className="flex justify-between sm:mb-[36px] mb-[12px] font-hudson">
                      <div className="flex items-center w-full gap-[8px] font-semibold leading-7 text-[20px] sm:text-[24px] sm:uppercase sm:tracking-[1.2px] tracking-[0.6px]">
                        <div className="sm:hidden w-[32px] h-[32px] flex justify-center items-center bg-[#231B19] text-white">
                          2
                        </div>
                        <h2 className="font-bold">SELECT YOUR MEATS</h2>
                      </div>
                      <Filter
                        filters={filters}
                        filter={filter}
                        onChange={onFilterChange}
                      />
                    </div>
                  </>
                )}
                <div className="relative grid grid-cols-2 product-grid xl:grid-cols-3 2xl:grid-cols-4 gap-x-[20px] sm:gap-y-[62px] gap-y-[20px] xl:mb-[0px] mb-[50px]">
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={index}
                      product={product}
                      onClick={() => setClickedProduct(product)}
                    />
                  ))}
                </div>
              </section>
              <section className="relative z-10 max-w-[740px] w-full mx-auto pb-4 sm:pb-20">
                <div className="text-center font-hudson font-bold sm:text-[36px] sm:tracking-[1.6px] text-[24px] tracking-[1.2px] sm:mb-[40px] mb-[32px]">
                  YOU ASK. WE ANSWER.
                </div>
                <FaqAccordion />
              </section>
            </div>
            <aside className="cart-wrapper hidden lg:block sm:max-w-[480px] w-full bg-white 2xl:pt-[54px] sm:pt-[30px] pt-[16px]">
              {isCartPage && <PlanPickerBlock />}
              <div className="h-full sm:h-auto">
                <div className="sm:hidden sm:px-[40px] px-[20px] py-[30px] text-center top-section border-y border-[#EFEEED]">
                  <div className="text-wrapper">
                    {isCartPage ? (
                      <>
                        <h1 className="font-barlow text-[20px] font-bold leading-none">
                          Subscribers Save {firstSavingPercentage}% on Orders
                        </h1>
                        <p className="text-[16px] leading-none font-barlow mt-[8px]">
                          Applied at checkout
                        </p>
                      </>
                    ) : (
                      <h1 className="font-barlow text-[17px] leading-none">
                        YOUR SUBSCRIPTION
                      </h1>
                    )}
                  </div>
                </div>
                <Cart layout="aside" />
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

const getProductsMetaValues = (products, key) => {
  return [...new Set(products.map((el) => el[key]?.value).filter((el) => el))]
}

const getFilteredProducts = (products, filter) => {
  return products.filter((el) => {
    let isServingTypeMatch = true
    let isMeatTypeMatch = true
    let isSpecialTypeMatch = true

    const productServingType = el.serving_type?.value ?? ''
    const productMeatType = el.meat_type?.value ?? ''
    const productSpecialType = el.special_type?.value ?? ''

    if (filter.servingType) {
      isServingTypeMatch = filter.servingType === productServingType
    }

    if (filter.meatTypes.length) {
      isMeatTypeMatch = filter.meatTypes.includes(productMeatType)
    }

    if (filter.specialTypes.length) {
      isSpecialTypeMatch = filter.specialTypes.includes(productSpecialType)
    }

    return isServingTypeMatch && isMeatTypeMatch && isSpecialTypeMatch
  })
}
