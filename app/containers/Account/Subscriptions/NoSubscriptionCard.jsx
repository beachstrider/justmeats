import { NavLink } from '@remix-run/react'

import noSubscriptionImage from '~/assets/images/a6w5g41d6rt5h6ty46esr51g6sergf.png'

export const NoSubscriptionCard = () => (
  <div className="max-w-[1120px] w-full mx-auto lg:pt-[57px] lg:pb-[56px] pt-[38px] pb-0">
    <div className="font-hudson font-bold lg:text-[36px] lg:tracking-[1.8px] text-[24px] tracking-[1.2px] text-center lg:mb-[33px] mb-[30px]">
      <div className="hidden lg:block">NO CURRENT SUBSCRIPTIONS</div>
      <div className="block lg:hidden">NO SUBSCRIPTIONS</div>
    </div>
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col lg:items-start items-center lg:px-[92px] lg:py-[124px] px-[20px] pt-[40px] pb-[50px] bg-white flex-1 lg:mx-0 mx-[20px]">
        <div className="font-hudson font-bold lg:text-[40px] lg:leading-[118%] lg:tracking-[2px] text-[24px] leading-[140%] tracking-[1.2px] lg:max-w-full max-w-[268px] w-full lg:text-start text-center lg:mb-[12px] mb-[18px]">
          SUBSCRIBE AND SAVE <span className="text-[#BF4745]">25% OFF</span>{' '}
          YOUR FIRST ORDER
        </div>
        <div className="lg:text-[18px] lg:leading-[26px] lg:max-w-[361px] lg:mb-[24px] mb-[40px] lg:text-start text-center">
          and 10% off future orders. Subscribers also receive access to
          subscriber-only monthly flavors. Customize or cancel anytime.
        </div>
        <NavLink
          to="/products/custom-bundle"
          end
          prefetch="intent"
          className="px-[24px] py-[12px] lg:min-w-[265px] bg-[#BF4745] hover:bg-[#6B1626] text-white text-center font-bold text-[14px] leading-[130%] tracking-[0.7px]"
        >
          START SUBSCRIPTION
        </NavLink>
      </div>
      <div className="lg:w-[521px] w-full shrink-0">
        <img src={noSubscriptionImage} alt="" />
      </div>
    </div>
  </div>
)
