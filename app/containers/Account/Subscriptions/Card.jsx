import React from 'react'

import { NavLink } from '@remix-run/react'

import customBundleImage from '~/assets/images/3g2yuk1drt1h63se54r6gs5erg61ser2g.png'

export function Card({ setAddress, subscription }) {
  return (
    <div className="bg-white">
      <div className="lg:px-[32px] px-[20px] lg:py-[23px] py-[18px] bg-[#6B1626] text-white lg:text-[18px] text-[14px]">
        Next order processing on{' '}
        <span className="font-bold">
          {subscription.next_charge_scheduled_at}
        </span>
      </div>
      <div className="lg:px-[42px] px-[26px] lg:py-[40px] py-[30px] border-b border-[#EFEEED] flex lg:gap-[32px] gap-[20px]">
        <div>
          <img
            className="mx-auto md:ml-0"
            src={customBundleImage}
            alt="Custom Bundle"
          />
        </div>
        <div className="flex items-center">
          <div>
            <div className="font-bold lg:text-[24px] text-[20px] lg:mb-[10px] mb-[12px] leading-none">
              {subscription.product_title}
            </div>
            <div className="flex items-center gap-[7px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1M17 12H12V17H17V12Z"
                  fill="#6B1626"
                />
              </svg>
              <div className="lg:text-[18px] text-[16px]">
                Ships every {subscription.charge_interval_frequency}{' '}
                {subscription.order_interval_unit}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-[42px] px-[26px] lg:pt-[26px] lg:pb-[30px] pt-[20px] pb-[30px] grid grid-cols-2 border-b border-[#EFEEED]">
        <div>
          <div className="font-bold leading-[175%] lg:text-[18px] text-[16px]">
            Recipent
          </div>
          <div className="leading-[175%] lg:text-[16px] text-[14px]">
            <div>
              {subscription.include.address.first_name}{' '}
              {subscription.include.address.last_name}
            </div>
            <div>{subscription.include.address.phone}</div>
            <div>{subscription.include.customer.email}</div>
          </div>
        </div>
        <div className="lg:pl-[30px] pl-[10px]">
          <div
            className="font-bold leading-[175%] lg:text-[18px] text-[16px] cursor-pointer"
            onClick={() => setAddress(subscription.include.address)}
          >
            Delivery address
          </div>
          <div className="leading-[175%] lg:text-[16px] text-[14px] max-w-[132px]">
            <div>{subscription.include.address.address1}</div>
            <div>{subscription.include.address.city}</div>
            <div className="uppercase">
              {subscription.include.address.province}{' '}
              {subscription.include.address.zip}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-[42px] px-[20px] lg:py-[23px] py-[22px] flex lg:justify-start justify-center">
        <NavLink
          to={`/account/subscriptions/${subscription.id}`}
          end
          prefetch="intent"
          className="px-[24px] py-[12px] font-bold text-[14px] tracking-[0.7px] leading-[130%] bg-[#BF4745] hover:bg-[#6B1626] text-white"
        >
          EDIT SUBSCRIPTION
        </NavLink>
      </div>
    </div>
  )
}
