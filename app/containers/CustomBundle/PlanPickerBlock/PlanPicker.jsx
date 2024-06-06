import React, { useContext, useState } from 'react'

import { DELIVERY_EVERY_15_DAYS, DELIVERY_EVERY_30_DAYS } from '~/consts'
import { CustomBundleContext } from '~/contexts'
import { Calendar } from '~/icons/Calendar'
import { GreenCheck } from '~/icons/GreenCheck'
import { cn } from '~/lib/utils'

import { ConfirmDialog } from './ConfirmDialog'

export const PlanPicker = ({ type = 'normal' }) => {
  const {
    costForOneTime,
    costForSubscription,
    originalCost,
    firstSavingPercentage,
    sellingPlan,
    setSellingPlan,
    sellingPlanFrequency,
    setSellingPlanFrequency,
    selectedProducts,
  } = useContext(CustomBundleContext)

  const [losingProducts, setLosingProducts] = useState([])

  const onOneTimeClick = () => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => !product.requiresSellingPlan,
    )
    const newSelectedProductIds = newSelectedProducts.map((el) => el.id)

    const diff = selectedProducts.filter(
      (el) => !newSelectedProductIds.includes(el.id),
    )

    if (diff.length > 0) {
      setLosingProducts(diff)
    } else {
      onConfirm()
    }
  }

  const onConfirm = () => {
    setSellingPlan('')
    setLosingProducts([])
  }

  const onDialogOpenChange = (v) => {
    if (!v) {
      setLosingProducts([])
    }
  }

  const subscriptionButton = (
    <div
      className={cn(
        'flex justify-center sm:px-[30px] px-[20px] sm:py-[10px] py-[6px] flex-1 border-2 border-[#6B1626] text-center',
        sellingPlan
          ? 'bg-[#6B1626] text-white cursor-default'
          : 'text-[#6B1626] cursor-pointer',
      )}
      onClick={() => {
        setSellingPlan(sellingPlanFrequency)
      }}
    >
      <div className="flex">
        {type === 'mobileCart' && (
          <div className="">
            <span className="text-[#CBCBCB] line-through">
              ${originalCost}&nbsp;
            </span>
            ${costForSubscription}&nbsp;
          </div>
        )}
        <div>Subscribe & Save</div>
      </div>
    </div>
  )

  const oneTimeButton = (
    <div
      className={cn(
        'sm:block hidden sm:px-[30px] px-[22px] sm:py-[10px] py-[6px] border-2 border-[#6B1626]',
        !sellingPlan
          ? 'bg-[#6B1626] text-white cursor-default'
          : 'text-[#6B1626] cursor-pointer',
      )}
      onClick={onOneTimeClick}
    >
      One Time
    </div>
  )

  const mobileCartOnetimeButton = (
    <div
      className={cn(
        'sm:hidden flex justify-center sm:px-[30px] px-[22px] sm:py-[10px] py-[6px] border-2 border-[#6B1626] text-center font-barlow font-bold',
        !sellingPlan
          ? 'bg-[#6B1626] text-white cursor-default'
          : 'text-[#6B1626] cursor-pointer',
      )}
      onClick={onOneTimeClick}
    >
      <div className="flex">
        {type === 'mobileCart' && <span>${costForOneTime}&nbsp;</span>}
        One Time
      </div>
    </div>
  )

  return (
    <>
      <p
        className={cn(
          'font-barlow sm:text-[13px] text-[12px] font-bold mb-[2px] sm:pl-[20px] sm:text-left text-center',
        )}
      >
        SAVE {firstSavingPercentage}% ON YOUR FIRST ORDER
      </p>
      <div className="bg-white sm:border border-[#EFEEED] overflow-hidden sm:[box-shadow:_0px_20px_50px_-10px_rgba(0,0,0,0.15)]">
        <div className="flex sm:font-medium font-bold font-barlow sm:tracking-[0.8px] tracking-[0.9px] sm:uppercase">
          {subscriptionButton}
          {oneTimeButton}
        </div>
        <div className={cn(sellingPlan ? '' : 'text-[#999]')}>
          <div className="flex justify-between sm:px-[24px] px-[16px] sm:pt-[24px] sm:pb-[24px] pt-[16px] pb-[12px] plan-picker-freq-div">
            <div className="flex items-center flex-1">
              <div
                className={cn(
                  'w-[22px]',
                  sellingPlan ? 'fill-[#6B1626]' : 'fill-[#999]',
                )}
              >
                <Calendar />
              </div>
              <div className="font-barlow text-[16px] font-extrabold leading-none">
                Deliver <br className="block sm:hidden" />
                every
              </div>
            </div>
            <div className="flex font-medium font-barlow sm:text-[16px] text-[12px] tracking-[0.7px]">
              <div
                className={cn(
                  'sm:px-[20px] px-[16px] py-[6px] flex-1 border-2 text-center',
                  sellingPlan
                    ? `border-[#6B1626] ${
                        sellingPlanFrequency === DELIVERY_EVERY_15_DAYS
                          ? 'cursor-default bg-[#6B1626] text-white'
                          : 'cursor-pointer bg-white text-[#6B1626]'
                      }`
                    : `border-[#999] ${
                        sellingPlanFrequency === DELIVERY_EVERY_15_DAYS
                          ? 'cursor-default bg-[#999] text-white'
                          : 'cursor-pointer bg-white text-[#999]'
                      }`,
                )}
                onClick={() => {
                  setSellingPlanFrequency(DELIVERY_EVERY_15_DAYS)
                }}
              >
                15 DAYS
              </div>
              <div
                className={cn(
                  'sm:px-[20px] px-[20px] py-[6px] border-2',
                  sellingPlan
                    ? `border-[#6B1626] ${
                        sellingPlanFrequency === DELIVERY_EVERY_30_DAYS
                          ? 'cursor-default bg-[#6B1626] text-white'
                          : 'cursor-pointer bg-white text-[#6B1626]'
                      }`
                    : `border-[#999] ${
                        sellingPlanFrequency === DELIVERY_EVERY_30_DAYS
                          ? 'cursor-default bg-[#999] text-white'
                          : 'cursor-pointer bg-white text-[#999]'
                      }`,
                )}
                onClick={() => {
                  setSellingPlanFrequency(DELIVERY_EVERY_30_DAYS)
                }}
              >
                30 DAYS
              </div>
            </div>
          </div>
          <hr className="sm:block hidden bg-[#EFEEED]" />
          <div
            className={cn(
              'grid grid-cols-2 sm:gap-y-[18px] gap-y-[8px] sm:pt-[16px] pt-0 sm:pb-[20px] pb-[16px] sm:px-[20px] px-[12px] font-barlow sm:text-[14px] text-[12px] font-bold',
              sellingPlan ? 'fill-[#637160]' : 'fill-[#999]',
            )}
          >
            <div className="flex justify-start items-start text-[12px] sm:text-[14px] font-bold">
              <div className="shrink-0 w-[32px] text-[#425B34] -mt-[4px]">
                <GreenCheck />
              </div>{' '}
              <div>
                {firstSavingPercentage}% Off <br className="hidden sm:block" />
                First Order
              </div>
            </div>
            <div className="flex justify-start items-start text-[12px] sm:text-[14px] font-bold">
              <div className="shrink-0 w-[32px] text-[#425B34] -mt-[4px]">
                <GreenCheck />
              </div>{' '}
              <div>
                10% Off <br className="hidden sm:block" />
                Future Orders
              </div>
            </div>
            <div className="flex justify-start items-start text-[12px] sm:text-[14px] font-bold">
              <div className="shrink-0 w-[32px] text-[#425B34] -mt-[4px]">
                <GreenCheck />
              </div>{' '}
              <div>
                Subscriber-Only <br className="hidden sm:block" />
                Monthly Flavors
              </div>
            </div>
            <div className="flex justify-start items-start text-[12px] sm:text-[14px] font-bold">
              <div className="shrink-0 w-[32px] text-[#425B34] -mt-[4px]">
                <GreenCheck />
              </div>{' '}
              <div>
                Customize or <br className="hidden sm:block" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
        {mobileCartOnetimeButton}
      </div>
      <ConfirmDialog
        products={losingProducts}
        onOpenChange={onDialogOpenChange}
        onConfirm={onConfirm}
      />
    </>
  )
}
