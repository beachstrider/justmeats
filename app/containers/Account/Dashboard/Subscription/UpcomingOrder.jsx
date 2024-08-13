import { useState } from 'react'

import { format } from 'date-fns'

import { NavLink, useLoaderData } from '@remix-run/react'

import customBundleImage from '~/assets/images/3g2yuk1drt1h63se54r6gs5erg61ser2g.png'

export const UpcomingOrder = () => {
  const { subscription } = useLoaderData()

  const [isExpanded, setIsExpanded] = useState(false)

  const orderDetails = (
    <>
      <div className="lg:mb-[33px] mb-[30px]">
        <div className="mb-[12px] lg:text-[16px] text-[15px]">
          <div className="font-bold">Recipient</div>
          <div>
            {subscription.include.address.first_name}{' '}
            {subscription.include.address.last_name}
            <br />
            {subscription.include.address.phone}
            <br />
            {subscription.include.customer.email}
          </div>
        </div>
        <div className="lg:text-[16px] text-[15px]">
          <div className="font-bold">Delivery address</div>
          <div>
            {subscription.include.address.address1},
            <div className="uppercase">
              {subscription.include.address.city},{' '}
              {subscription.include.address.province}{' '}
              {subscription.include.address.zip}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <NavLink
          end
          prefetch="intent"
          to={`/account/subscriptions/${subscription.id}`}
          className="w-[143px] px-[24px] py-[12px] bg-[#BF4745] hover:bg-[#6B1626] text-center text-white font-bold text-[14px] tracking-[0.7px]"
        >
          EDIT ORDER
        </NavLink>
      </div>
    </>
  )

  return (
    <div className="shrink-0 bg-white [box-shadow:0px_18px_25px_-15px_rgba(0,0,0,0.15)] lg:w-[360px] w-full lg:px-[25px] px-[17px] lg:pt-[26px] pt-[15px] lg:pb-[36px] pb-[24px]">
      <div className="lg:mb-[31px] mb-[17px]">
        <div className="font-hudson text-center font-bold text-[24px] tracking-[1.2px] lg:mb-[9px] mb-0">
          UPCOMING SUBSCRIPTION RENEWAL
        </div>
        <div className="text-center text-[#6B1626] lg:text-[18px] text-[16px]">
          You will be charged on{' '}
          <span className="font-bold">
            {format(subscription.next_charge_scheduled_at, 'LLLL dd, yyyy')}
          </span>
        </div>
      </div>
      <div className="flex justify-between lg:mb-[23px] mb-[20px]">
        <div className="flex lg:gap-[20px] gap-[8px]">
          <img src={customBundleImage} className="lg:w-[96px] w-[48px]" />
          <div className="flex items-center">
            <div className="flex flex-col lg:gap-[14px] gap-[4px]">
              <div className="font-bold lg:text-[24px] text-[20px] leading-none">
                Custom Bundle
              </div>
              <div className="flex items-center lg:gap-[10px]">
                <span className="hidden lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M16 18H2V7H16M13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H15V0M14 11H9V16H14V11Z"
                      fill="#7A392D"
                    />
                  </svg>
                </span>
                <div className="lg:text-[18px] text-[16px] leading-none">
                  Ships every {subscription.charge_interval_frequency}{' '}
                  {subscription.order_interval_unit}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex font-bold text-[12px] underline items-center">
          <button onClick={() => setIsExpanded(!isExpanded)}>SEE MORE</button>
        </div>
      </div>
      {isExpanded && <div className="block lg:hidden">{orderDetails}</div>}
      <div className="hidden lg:block">{orderDetails}</div>
    </div>
  )
}
