import React, { useContext, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { NavLink, useLoaderData, useRevalidator } from '@remix-run/react'

import { Button } from '~/components/Button'
import { FaqAccordion } from '~/components/FaqAccordion'
import { PlanPickerBlock } from '~/containers/CustomBundle/PlanPickerBlock'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { cn } from '~/lib/utils'
import { CustomBundleContext } from '~/providers/CustomBundleProvider'

import { FeedbackAside } from '../Account/Subscriptions/FeedbackAside'
import { Cart } from './Cart'
import { MobileCart } from './Cart/MobileCart'
import { Filter } from './Filter'
import { PlanPicker } from './PlanPickerBlock/PlanPicker'
import { ProductCard } from './ProductCard'
import { ProductModal } from './ProductModal'

export const CustomBundle = () => {
  // For Cart
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
    specialTypes: ['Premium', 'Popular', 'Subscriber Exclusive'],
  }

  const filteredProducts = getFilteredProducts(
    productsBasedOnSellingPlan,
    filter,
  )

  const onFilterChange = (newFilter) => {
    setFilter(newFilter)
  }
  // End

  // For Subscription
  const submit = useSubmitPromise()
  const revalidator = useRevalidator()

  const { id, subscription, upcomingChargeId } = useLoaderData()
  const next_charge_scheduled_at = subscription?.next_charge_scheduled_at

  const [processing, setProcessing] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [feedbackAsideOpen, setFeedbackAsideOpen] = useState(false)
  const [isProcessDialogOpen, setProcessDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState({
    title: '',
    description: '',
  })

  const [delayDialogOpen, setDelayDialogOpen] = useState(false)
  const [delayResultDialogOpen, setDelayResultDialogOpen] = useState(false)
  const [delayDialogContent, setDelayDialogContent] = useState({
    title: '',
    description: '',
  })

  const [delaying, setDelaying] = useState(false)

  const handleProcess = async () => {
    setProcessing(true)

    const res = await submit(
      {
        body: JSON.stringify({
          api: 'process-charge',
          chargeId: upcomingChargeId,
        }),
      },
      {
        method: 'post',
        action: `/account/subscriptions/${id}`,
      },
    )

    if (res.success) {
      setDialogContent({
        title: 'Congrats!',
        description: 'Your order is being processed immediately.',
      })
    } else {
      setDialogContent({
        title: 'Error!',
        description: 'There was a problem processing your order.',
      })
    }

    setTimeout(revalidator.revalidate, 5000)

    setProcessing(false)
    setDialogOpen(false)
    setProcessDialogOpen(true)
  }

  const handleDelay = async () => {
    setDelaying(true)

    const res = await submit(
      {
        body: JSON.stringify({
          api: 'delay-subscription',
          next_charge_scheduled_at,
        }),
      },
      { method: 'post', action: `/account/subscriptions/${id}` },
    )

    if (res.success) {
      setDelayDialogContent({
        title: 'Success!',
        description: 'Your order is now delayed 1 week.',
      })
    } else {
      setDelayDialogContent({
        title: 'Error!',
        description: 'There was a problem delaying your order.',
      })
    }

    setDelaying(false)
    setDelayDialogOpen(false)
    setDelayResultDialogOpen(true)
  }
  // End

  return (
    <div className="max-w-ful custom-collection-wrap">
      <div className="flex flex-col flex-1 gap-2 main-section">
        <div className="relative flex product-and-cart mb-[62px] md:mb-0">
          <div className="container-small lg:pt-[30px] pt-[16px]">
            <section className="lg:mb-[124px] mb-[80px]">
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
              {!isCartPage && (
                <div className="2xl:px-0 px-[20px] mb-[24px]">
                  <NavLink
                    end
                    prefetch="intent"
                    className="flex gap-1 items-center mb-[4px] text-[14px] font-bold underline text-[#BF4745]"
                    to="/account/subscriptions"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="7"
                      viewBox="0 0 6 7"
                      fill="none"
                    >
                      <path
                        d="M-1.5299e-07 3.5L5.25 0.468911L5.25 6.53109L-1.5299e-07 3.5Z"
                        fill="#BF4745"
                      />
                    </svg>
                    Back to Account
                  </NavLink>
                  <div className="font-hudson lg:text-[36px] text-[24px] tracking-[1.2px] lg:text-left text-center font-bold lg:tracking-[1.8px] text-[#231B19] mb-[14px]">
                    CUSTOMIZE YOUR ORDER
                  </div>

                  <div className="flex gap-[17px]">
                    <Button
                      onClick={() => setDialogOpen(true)}
                      className="py-[8px] px-[10px] lg:px-[10px] border-2 border-[#BF4745] border-solid text-[#BF4745] text-[14px] font-medium leading-none tracking-[0.7px] lg:w-auto w-full"
                    >
                      PROCESS NOW
                    </Button>
                    <Button
                      disabled={!next_charge_scheduled_at}
                      onClick={() => setDelayDialogOpen(true)}
                      className="py-[8px] px-[10px] lg:px-[10px] border-2 border-[#BF4745] border-solid text-[#BF4745] text-[14px] font-medium leading-none tracking-[0.7px] lg:w-auto w-full"
                    >
                      1 WEEK DELAY
                    </Button>
                  </div>
                </div>
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
              {!isCartPage && (
                <div className="flex justify-center lg:mt-[87px] mt-[40px]">
                  <Button
                    onClick={() => setFeedbackAsideOpen(true)}
                    className="max-w-[396px] w-full lg:py-[14px] py-[10px] px-[30px] border-2 border-[#BF4745] border-solid font-bold lg:text-[20px] text-[18px] text-[#BF4745] leading-none"
                  >
                    <div>Cancel Subscription</div>
                  </Button>
                </div>
              )}
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
              'cart-wrapper sticky hidden lg:block lg:max-w-[480px] w-full bg-white',
              isCartPage
                ? 'h-[calc(100vh+300px)] 2xl:top-[-324px] lg:top-[-300px]'
                : 'h-[calc(100vh)] 2xl:top-0 xl:top-0 lg:top-0 md:top-[-32px]',
            )}
          >
            {isCartPage && <PlanPickerBlock />}
            {!isCartPage && (
              <div className="w-[100%] pt-[34px] pb-[27px] font-hudson text-[20px] font-bold tracking-[1px] text-center border-b border-[#EFEEED]">
                UPDATED SUBSCRIPTION
              </div>
            )}
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

      <FeedbackAside
        subscriptionId={id}
        open={feedbackAsideOpen}
        onClose={() => setFeedbackAsideOpen(false)}
      />

      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-20 bg-black/30" />
          <Dialog.Content className="fixed z-30 p-8 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
            <Dialog.Title className="text-lg font-bold">WAIT!</Dialog.Title>
            <Dialog.Description className="mt-2">
              So you know, if you click the Process Now button, your order will
              be placed and you will be charged immediately. Plus{' '}
              <span className="font-semibold">
                EACH TIME THE BUTTON IS CLICKED, YOU WILL PLACE A NEW ORDER
              </span>
              , so make sure to be patient and only press it once.
              <br />
              <br />
              If you don’t want to place an order or be charged today, simply
              exit out of this message now. If you want to update your order,
              exit out of this message and click &quot;Update Now.&quot;
            </Dialog.Description>
            <div className="flex justify-end mt-4 space-x-2">
              <Button
                onClick={() => setDialogOpen(false)}
                className="px-6 py-2 text-white transition duration-150 ease-in-out bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
              >
                Back Now
              </Button>
              <Button
                loading={processing}
                onClick={() => {
                  handleProcess()
                }}
                className="px-6 py-2 text-white transition duration-150 ease-in-out bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
              >
                Process Now
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root
        open={isProcessDialogOpen}
        onOpenChange={setProcessDialogOpen}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-20 bg-black/30" />
          <Dialog.Content className="fixed z-30 p-8 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
            <Dialog.Title className="text-lg font-bold">
              {dialogContent.title}
            </Dialog.Title>
            <Dialog.Description className="mt-2">
              {dialogContent.description}
            </Dialog.Description>
            <div className="flex justify-end mt-4">
              <Button
                className="px-6 py-2 text-white rounded-md shadow hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ backgroundColor: '#862e1b', borderColor: '#862e1b' }}
                onClick={() => setProcessDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={delayDialogOpen} onOpenChange={setDelayDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-20 bg-black/30" />
          <Dialog.Content className="fixed z-30 p-8 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
            <Dialog.Title className="text-lg font-bold">
              Are you Sure?
            </Dialog.Title>
            <Dialog.Description className="mt-2">
              If you press this button you will push your next schedule order
              out by 1 week. If you would like to push out your order for a
              longer period, you can also repeatedly press this button to push
              it out an additional week each time. You can also contact{' '}
              <a
                href="mailto:support@justmeats.com"
                style={{ color: '#0000EE' }}
              >
                support@justmeats.com
              </a>{' '}
              for assistance in pushing out your order, or updating your
              subscription frequency
            </Dialog.Description>
            <div className="flex justify-end mt-4 space-x-2">
              <Button
                onClick={() => setDelayDialogOpen(false)}
                className="px-6 py-2 text-white transition duration-150 ease-in-out bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
              >
                Back Now
              </Button>
              <Button
                loading={delaying}
                onClick={() => {
                  handleDelay()
                }}
                className="px-6 py-2 text-white transition duration-150 ease-in-out bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
              >
                Confirm
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root
        open={delayResultDialogOpen}
        onOpenChange={setDelayResultDialogOpen}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-20 bg-black/30" />
          <Dialog.Content className="fixed z-30 p-8 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2">
            <Dialog.Title className="text-lg font-bold">
              {delayDialogContent.title}
            </Dialog.Title>
            <Dialog.Description className="mt-2">
              {delayDialogContent.description}
            </Dialog.Description>
            <div className="flex justify-end mt-4">
              <Button
                className="px-6 py-2 text-white rounded-md shadow hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ backgroundColor: '#862e1b', borderColor: '#862e1b' }}
                onClick={() => setDelayResultDialogOpen(false)}
              >
                Close
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

const getProductsMetaValues = (products, key) => {
  return [...new Set(products.map((el) => el[key]?.value).filter((el) => el))]
}

const getFilteredProducts = (products, filter) => {
  return products.filter((product) => {
    let isServingTypeMatch = true
    let isMeatTypeMatch = true
    let isSpecialTypeMatch = true

    const productServingType = product.serving_type?.value ?? ''
    const productMeatType = product.meat_type?.value ?? ''

    if (filter.servingType) {
      isServingTypeMatch = filter.servingType === productServingType
    }

    if (filter.meatTypes.length) {
      isMeatTypeMatch = filter.meatTypes.includes(productMeatType)
    }

    if (filter.specialTypes.length) {
      isSpecialTypeMatch = filter.specialTypes.some((element) =>
        product.tags.includes(element),
      )
    }

    return isServingTypeMatch && isMeatTypeMatch && isSpecialTypeMatch
  })
}
