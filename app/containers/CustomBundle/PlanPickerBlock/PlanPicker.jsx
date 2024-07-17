import React, { useContext, useState } from 'react'

import { DELIVERY_EVERY_15_DAYS, DELIVERY_EVERY_30_DAYS } from '~/consts'
import { Calendar } from '~/icons/Calendar'
import { GreenCheck } from '~/icons/GreenCheck'
import { cn } from '~/lib/utils'
import { CustomBundleContext } from '~/providers/CustomBundleProvider'

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
        'flex justify-center lg:px-[30px] px-[20px] lg:py-[4px] py-[6px] flex-1 border-2 border-[#6B1626] text-center',
        type !== 'mobileCart' ? 'uppercase' : '',
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
            <span className="text-[#CBCBCB] line-through">${originalCost}</span>
            &nbsp;${costForSubscription}&nbsp;
          </div>
        )}
        <div>Subscribe & Save</div>
      </div>
    </div>
  )

  const oneTimeButton = (
    <div
      className={cn(
        'lg:block hidden lg:px-[30px] px-[22px] lg:py-[4px] py-[6px] border-2 border-[#6B1626]',
        type !== 'mobileCart' ? 'uppercase' : '',
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
        'lg:hidden flex justify-center lg:px-[30px] px-[22px] lg:py-[10px] py-[6px] border-2 border-[#6B1626] text-center font-barlow font-bold',
        type !== 'mobileCart' ? 'uppercase' : '',
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
          'font-barlow lg:text-[13px] text-[12px] font-bold mb-[2px] lg:pl-[20px] lg:text-left text-center',
        )}
      >
        SAVE {firstSavingPercentage}% ON YOUR FIRST ORDER
      </p>
      <div className="bg-white lg:border border-[#EFEEED] overflow-hidden lg:[box-shadow:_0px_20px_50px_-10px_rgba(0,0,0,0.15)]">
        <div
          className={cn(
            'flex lg:font-medium font-bold font-barlow lg:tracking-[0.8px] tracking-[0.9px]',
          )}
        >
          {subscriptionButton}
          {oneTimeButton}
        </div>
        <div className={cn(sellingPlan ? '' : 'text-[#999]')}>
          <div className="flex justify-between lg:px-[24px] px-[16px] lg:pt-[13px] lg:pb-[13px] pt-[16px] pb-[12px] plan-picker-freq-div">
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
                Deliver every
              </div>
            </div>
            <div className="flex font-medium font-barlow lg:text-[16px] text-[12px] tracking-[0.7px]">
              <div
                className={cn(
                  'lg:px-[20px] px-[16px] py-[8px] lg:py-[5px] flex-1 border-2 text-center leading-none',
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
                  'lg:px-[20px] px-[20px] py-[8px] lg:py-[5px] border-2 leading-none',
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
          <hr className="lg:block hidden bg-[#EFEEED]" />
          <div
            className={cn(
              'flex flex-col lg:gap-y-[4px] gap-y-[8px] lg:pt-[8px] pt-0 lg:pb-[14px] pb-[16px] lg:px-[20px] px-[12px] font-barlow lg:text-[14px] text-[12px] font-bold',
              sellingPlan ? 'fill-[#637160]' : 'fill-[#999]',
            )}
          >
            <div className="flex justify-start items-start text-[12px] font-bold">
              <div className="lg:hidden block shrink-0 w-[32px] text-[#425B34] -mt-[4px]">
                <GreenCheck />
              </div>
              <div className="flex">
                <span className="hidden lg:block">&#8226; &nbsp; </span>
                {firstSavingPercentage}% Off First Order + 10% Off Future Orders
              </div>
            </div>
            <div className="flex justify-start items-start text-[12px] font-bold">
              <div className="lg:hidden block shrink-0 w-[32px] text-[#425B34] -mt-[4px]">
                <GreenCheck />
              </div>
              <div className="flex">
                <span className="hidden lg:block">&#8226; &nbsp; </span>
                Subscriber-Only Monthly Flavors
              </div>
            </div>
            <div className="flex justify-start items-start text-[12px] font-bold">
              <div className="lg:hidden block shrink-0 w-[32px] text-[#425B34] -mt-[4px]">
                <GreenCheck />
              </div>
              <div className="flex">
                <span className="hidden lg:block">&#8226; &nbsp; </span>
                Customize or Cancel Anytime
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
