import React from 'react'

import customBundleImage from '~/assets/images/3g2yuk1drt1h63se54r6gs5erg61ser2g.png'

export const Order = ({ order, isExpanded, setIsExpanded }) => {
  const {
    shipping_address,
    line_items,
    total_price,
    total_discounts,
    subtotal_price,
    shipping_lines,
    external_order_id,
  } = order

  return (
    <div className="bg-white [box-shadow:0px_8px_14px_-5px_rgba(0,0,0,0.15)]">
      <div className="lg:px-[37px] lg:py-[32px] px-[19px] py-[18px]">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div className="grow flex lg:gap-[42px] gap-[15px]">
            <div className="lg:w-[80px] w-[56px]">
              <img
                className="mx-auto md:ml-0"
                src={customBundleImage}
                alt="Custom Bundle"
              />
            </div>
            <div className="flex items-center justify-between grow">
              <div>
                <div className="font-bold lg:text-[24px] text-[16px] lg:mb-[13px] mb-[9px] leading-none">
                  Bundle Subscription
                </div>
                {!isExpanded && (
                  <div className="lg:text-[18px] text-[14px] leading-none">
                    {line_items.length} meats
                  </div>
                )}
              </div>
              <button
                className="block lg:hidden"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={31}
                    height={31}
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M21.9583 18.0833L15.4999 11.625L9.04159 18.0833"
                      stroke="#6B1626"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={31}
                    height={31}
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M9.04175 12.9167L15.5001 19.375L21.9584 12.9167"
                      stroke="#6B1626"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:justify-center lg:items-center shrink-0 lg:mb-0 mb-[8px]">
            <div className="flex lg:flex-row flex-col lg:gap-[35px] gap-[26px]">
              <div className="flex flex-row items-center justify-between lg:flex-col lg:items-end">
                <div className="lg:text-[16px] text-[12px] leading-[163%]">
                  <span className="hidden lg:inline-block">Order&nbsp;</span>
                  <span className="font-bold">
                    #{external_order_id.ecommerce}
                  </span>
                </div>
                <div className="font-bold text-[#6B1626] lg:text-[20px] text-[16px] leading-[163%]">
                  ${total_price}
                </div>
              </div>
              <button
                className="hidden lg:block"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M34 28L24 18L14 28"
                      stroke="#6B1626"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M14 20L24 30L34 20"
                      stroke="#6B1626"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="flex lg:flex-row flex-col lg:pl-[159px] lg:pr-[75px] lg:pt-[29px] lg:pb-[37px] border-t border-[#EFEEED]">
          <div className="lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-0 pl-[20px] pr-[20px] pt-[16px] pb-[21px] border-b lg:border-b-transparent border-b-[#EFEEED] grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-[17px] grow">
            <div className="lg:mb-[11px] mb-[6px]">
              <div className="font-bold lg:text-[18px] text-[16px] leading-[175%]">
                {line_items.length} meats
              </div>
              {line_items.length &&
                line_items.map((item, index) => (
                  <p
                    key={index}
                    className="leading-[175%] lg:text-[16px] text-[14px]"
                  >
                    {item.quantity} x {item.title}
                  </p>
                ))}
            </div>
            <div>
              <div className="font-bold lg:text-[18px] text-[16px] leading-[175%]">
                Delivery to:
              </div>
              <div>
                <p className="leading-[175%] lg:text-[16px] text-[14px]">
                  {shipping_address.first_name} {shipping_address.last_name}
                </p>
                <p className="leading-[175%] lg:text-[16px] text-[14px]">
                  {shipping_address.address1}
                </p>
                <p className="leading-[175%] lg:text-[16px] text-[14px]">
                  {shipping_address.address2}
                </p>
                <p className="leading-[175%] lg:text-[16px] text-[14px]">
                  {shipping_address.city}
                </p>
                <p className="leading-[175%] lg:text-[16px] text-[14px]">
                  {shipping_address.province} {shipping_address.zip}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[190px] w-full lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-0 pl-[20px] pr-[20px] pt-[16px] pb-[24px] shrink-0 flex lg:flex-col flex-col-reverse lg:gap-[27px] gap-[24px]">
            {/* <div className="flex flex-col lg:gap-[13px] gap-[16px]">
              <button className="py-[10px] w-full flex justify-center text-[14px] tracking-[0.7px] border-2 border-[#BF4745] text-[#BF4745] font-bold">
                LEAVE FEEDBACK
              </button>
              <button className="py-[10px] w-full flex justify-center text-[14px] tracking-[0.7px] bg-[#BF4745] text-[#EFEEED] font-bold">
                REPEAT ORDER
              </button>
            </div> */}
            <div className="">
              <div className="flex flex-col gap-[6px] mb-[14px]">
                <div className="flex items-center justify-between">
                  <div className="text-[16px]">Subtotal:</div>
                  <div className="text-[18px]">${subtotal_price}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[16px]">Shipping:</div>
                  <div className="text-[18px]">
                    ${shipping_lines?.[0]?.price ?? '0.00'}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[16px]">Discounts:</div>
                  <div className="text-[18px]">${total_discounts}</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-[16px]">Total:</div>
                <div className="text-[20px] text-[#6B1626] font-bold">
                  ${total_price}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
