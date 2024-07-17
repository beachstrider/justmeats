import React, { useContext, useState } from 'react'

import { useLoaderData } from '@remix-run/react'

import { FaqAccordion } from '~/components/NewFaqAccordion'
import { PlanPickerBlock } from '~/containers/CustomBundle/PlanPickerBlock'
import { cn } from '~/lib/utils'
import { CustomBundleContext } from '~/providers/CustomBundleProvider'

import { Cart } from './Cart'
import { MobileCart } from './Cart/MobileCart'
import { Filter } from './Filter'
import { PlanPicker } from './PlanPickerBlock/PlanPicker'
import { ProductCard } from './ProductCard'
import { ProductModal } from './ProductModal'

export const CustomBundle = () => {
  const { products } = useLoaderData()

  const { sellingPlan, isCartPage, firstSavingPercentage } =
    useContext(CustomBundleContext)

  const [filter, setFilter] = useState({
    servingType: '',
    meatTypes: [],
    specialTypes: [],
  })

  const [clickedProduct, setClickedProduct] = useState(null)

  const productsBasedOnSellingPlan = sellingPlan
    ? products
    : products.filter((product) => !product.requiresSellingPlan)

  const filters = {
    servingTypes: getProductsMetaValues(products, 'serving_type'),
    meatTypes: getProductsMetaValues(products, 'meat_type'),
    specialTypes: getProductsMetaValues(products, 'special_type'),
  }

  const filteredProducts = getFilteredProducts(
    productsBasedOnSellingPlan,
    filter,
  )

  const onFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  return (
    <div className="max-w-ful custom-collection-wrap">
      <div className="flex flex-col flex-1 gap-2 border-gray-400 border-solid main-section lg:border">
        <div className="relative flex product-and-cart mb-[62px] md:mb-0">
          <div className="container-small lg:pt-[30px] pt-[16px]">
            <section className="lg:mb-[80px] mb-[36px]">
              {isCartPage && (
                <>
                  <div className="relative lg:px-[27px] px-[20px] py-[22px] rounded-[8px] bg-rec-96 lg:mb-[40px] mb-[34px] [box-shadow:_0px_20px_40px_-10px_rgba(0,0,0,0.20)] overflow-hidden">
                    <div className="relative 2xl:text-[26px] lg:text-[20px] text-[18px] text-center font-semibold font-hudson mb-[12px]">
                      WE GUARANTEE YOU&apos;LL LOVE IT&nbsp;
                      <br className="block lg:hidden" />
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
                  <div className="lg:hidden block lg:uppercase mb-[24px] font-hudson">
                    <div className="flex items-center w-full gap-[8px] lg:mb-[56px] mb-[20px] font-semibold leading-7 text-[20px] lg:text-[24px] lg:tracking-[1.2px] tracking-[0.6px]">
                      <div className="lg:hidden w-[32px] h-[32px] flex justify-center items-center bg-[#231B19] text-white">
                        1
                      </div>
                      <h2 className="font-bold">SELECT YOUR FREQUENCY</h2>
                    </div>
                    <PlanPicker type="mobile" />
                  </div>
                  <div className="flex justify-between lg:mb-[36px] mb-[12px] font-hudson">
                    <div className="flex items-center w-full gap-[8px] font-semibold leading-7 text-[20px] lg:text-[24px] lg:uppercase lg:tracking-[1.2px] tracking-[0.6px]">
                      <div className="lg:hidden w-[32px] h-[32px] flex justify-center items-center bg-[#231B19] text-white">
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
              <div className="relative grid grid-cols-2 product-grid xl:grid-cols-3 2xl:grid-cols-4 gap-x-[20px] lg:gap-y-[62px] gap-y-[20px] xl:mb-[0px] mb-[50px]">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    onClick={() => setClickedProduct(product)}
                  />
                ))}
              </div>
            </section>
            <section className="relative z-10 max-w-[740px] w-full mx-auto pb-4 lg:pb-20">
              <div className="text-center font-hudson font-bold lg:text-[36px] lg:tracking-[1.6px] text-[24px] tracking-[1.2px] lg:mb-[40px] mb-[32px]">
                YOU ASK. WE ANSWER.
              </div>
              <FaqAccordion />
            </section>
          </div>
          <aside
            className={cn(
              'cart-wrapper sticky h-[calc(100vh+300px)] hidden lg:block lg:max-w-[480px] w-full bg-white 2xl:pt-[54px] lg:pt-[30px] pt-[16px]',
              isCartPage
                ? '2xl:top-[-324px] lg:top-[-300px]'
                : '2xl:top-[-56px] lg:top-[-32px]',
            )}
          >
            {isCartPage && <PlanPickerBlock />}
            <div className="h-full lg:h-auto">
              <div className="lg:hidden lg:px-[40px] px-[20px] py-[30px] text-center top-section border-y border-[#EFEEED]">
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
