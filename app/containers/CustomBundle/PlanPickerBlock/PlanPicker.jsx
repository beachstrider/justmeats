import React, { useContext } from 'react'

import { DELIVERY_EVERY_15_DAYS, DELIVERY_EVERY_30_DAYS } from '~/consts'
import { CustomBundleContext } from '~/contexts'
import { Calendar } from '~/icons/Calendar'
import { GreenCheck } from '~/icons/GreenCheck'
import { cn } from '~/lib/utils'

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
  } = useContext(CustomBundleContext)

  return (
    <>
      <p
        className={cn(
          'font-nunito sm:text-[13px] text-[12px] font-extrabold text-[#637160] mb-[2px] sm:pl-[20px] pl-[10px]',
        )}
      >
        SAVE {firstSavingPercentage}% ON YOUR FIRST ORDER
      </p>
      <div className="bg-white border border-[#EFEEED] rounded-[8px] overflow-hidden [box-shadow:_0px_20px_50px_-10px_rgba(0,0,0,0.15)]">
        <div className="flex font-medium font-dunbar sm:tracking-[0.8px] tracking-[0.9px]">
          <div
            className={cn(
              'px-[30px] py-[10px] flex-1 rounded-l-[8px] border-2 border-[#7A392D] text-center',
              sellingPlan
                ? 'bg-[#7A392D] text-white cursor-default'
                : 'text-[#7A392D] cursor-pointer',
            )}
            onClick={() => {
              setSellingPlan(sellingPlanFrequency)
            }}
          >
            SUBSCRIBE & SAVE
          </div>
          <div
            className={cn(
              'sm:px-[30px] px-[22px] py-[10px] rounded-r-[8px] border-2 border-[#7A392D]',
              !sellingPlan
                ? 'bg-[#7A392D] text-white cursor-default'
                : 'text-[#7A392D] cursor-pointer',
            )}
            onClick={() => {
              setSellingPlan('')
            }}
          >
            ONE TIME
          </div>
        </div>
        <div className={cn(sellingPlan ? '' : 'text-[#999]')}>
          <div className="flex justify-between sm:px-[24px] px-[20px] sm:py-[24px] py-[20px]">
            <div className="flex items-center">
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
            <div className="flex font-medium font-dunbar sm:text-[16px] text-[14px] tracking-[0.7px]">
              <div
                className={cn(
                  'sm:px-[20px] px-[20px] py-[6px] flex-1 rounded-l-[8px] border-2 text-center',
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
      </div>
    </>
  )
}
