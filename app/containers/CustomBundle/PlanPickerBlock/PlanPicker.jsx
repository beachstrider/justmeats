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
        'px-[30px] sm:py-[10px] py-[6px] flex-1 sm:rounded-l-[8px] sm:rounded-r-none rounded-l-[8px] rounded-r-[8px] border-2 border-[#7A392D] text-center',
        sellingPlan
          ? 'bg-[#7A392D] text-white cursor-default'
          : 'text-[#7A392D] cursor-pointer',
      )}
      onClick={() => {
        setSellingPlan(sellingPlanFrequency)
      }}
    >
      Subscribe & Save
    </div>
  )

  const oneTimeButton = (
    <div
      className={cn(
        'sm:block hidden sm:px-[30px] px-[22px] sm:py-[10px] py-[6px] rounded-r-[8px] border-2 border-[#7A392D]',
        !sellingPlan
          ? 'bg-[#7A392D] text-white cursor-default'
          : 'text-[#7A392D] cursor-pointer',
      )}
      onClick={onOneTimeClick}
    >
      One Time
    </div>
  )

  return (
    <>
      <p
        className={cn(
          'font-nunito sm:text-[13px] text-[12px] font-extrabold text-[#637160] mb-[2px] sm:pl-[20px] pl-[10px]',
        )}
      >
        SAVE {firstSavingPercentage}% ON YOUR FIRST ORDER
      </p>
      <div className="bg-white sm:border border-[#EFEEED] rounded-[8px] overflow-hidden sm:[box-shadow:_0px_20px_50px_-10px_rgba(0,0,0,0.15)]">
        <div className="flex sm:font-medium font-bold sm:font-dunbar font-nunito sm:tracking-[0.8px] tracking-[0.9px] sm:uppercase">
          {subscriptionButton}
          {oneTimeButton}
        </div>
        <div className={cn(sellingPlan ? '' : 'text-[#999]')}>
          <div className="flex justify-between sm:px-[24px] px-[16px] sm:pt-[24px] sm:pb-[24px] pt-[16px] pb-[12px] plan-picker-freq-div">
            <div className="flex items-center flex-1">
              <div
                className={cn(
                  'w-[22px]',
                  sellingPlan ? 'fill-[#7A392D]' : 'fill-[#999]',
                )}
              >
                <Calendar />
              </div>
              <div className="font-nunito text-[16px] font-extrabold leading-none">
                Deliver <br className="block sm:hidden" />
                every
              </div>
            </div>
            <div className="flex font-medium font-dunbar sm:text-[16px] text-[12px] tracking-[0.7px]">
              <div
                className={cn(
                  'sm:px-[20px] px-[16px] py-[6px] flex-1 rounded-l-[8px] border-2 text-center',
                  sellingPlan
                    ? `border-[#7A392D] ${
                        sellingPlanFrequency === DELIVERY_EVERY_15_DAYS
                          ? 'cursor-default bg-[#7A392D] text-white'
                          : 'cursor-pointer bg-white text-[#7A392D]'
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
                  'sm:px-[20px] px-[20px] py-[6px] rounded-r-[8px] border-2',
                  sellingPlan
                    ? `border-[#7A392D] ${
                        sellingPlanFrequency === DELIVERY_EVERY_30_DAYS
                          ? 'cursor-default bg-[#7A392D] text-white'
                          : 'cursor-pointer bg-white text-[#7A392D]'
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
              'grid grid-cols-2 sm:gap-y-[18px] gap-y-[8px] sm:pt-[16px] pt-0 sm:pb-[20px] pb-[16px] sm:px-[20px] px-[12px] font-nunito sm:text-[14px] text-[12px] font-bold',
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
        <div
          className={cn(
            'sm:hidden block sm:px-[30px] px-[22px] sm:py-[10px] py-[6px] sm:rounded-r-[8px] rounded-[8px] border-2 border-[#7A392D] text-center font-nunito font-bold',
            !sellingPlan
              ? 'bg-[#7A392D] text-white cursor-default'
              : 'text-[#7A392D] cursor-pointer',
          )}
          onClick={onOneTimeClick}
        >
          One Time
        </div>
      </div>
      <ConfirmDialog
        products={losingProducts}
        onOpenChange={onDialogOpenChange}
        onConfirm={onConfirm}
      />
    </>
  )
}
