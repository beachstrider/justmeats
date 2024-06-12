import React from 'react'

import { PlanPicker } from './PlanPicker'

export const PlanPickerBlock = () => {
  const review = (
    <div className="flex gap-1">
      <div className="flex">
        <svg
          className="star"
          width={24}
          height={22.8}
          viewBox="0 12.705 512 486.59"
          x="0px"
          y="0px"
          xmlSpace="preserve"
          style={{ fill: '#EBB932' }}
        >
          <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566" />
        </svg>
        <svg
          className="star"
          width={24}
          height={22.8}
          viewBox="0 12.705 512 486.59"
          x="0px"
          y="0px"
          xmlSpace="preserve"
          style={{ fill: '#EBB932' }}
        >
          <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566" />
        </svg>
        <svg
          className="star"
          width={24}
          height={22.8}
          viewBox="0 12.705 512 486.59"
          x="0px"
          y="0px"
          xmlSpace="preserve"
          style={{ fill: '#EBB932' }}
        >
          <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566" />
        </svg>
        <svg
          className="star"
          width={24}
          height={22.8}
          viewBox="0 12.705 512 486.59"
          x="0px"
          y="0px"
          xmlSpace="preserve"
          style={{ fill: '#EBB932' }}
        >
          <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566" />
        </svg>
        <svg
          className="star"
          viewBox="0 0 26 26"
          width={24}
          height="22.8"
          fill="#EBB932"
          stroke="#EBB932"
          strokeWidth={1}
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="65%"
                style={{ stopColor: '#EBB932', stopOpacity: 1 }}
              />
              <stop
                offset="65%"
                style={{ stopColor: '#FFFFFF', stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M12 1.755l3.511 8.577h8.989l-6.891 5.718 2.816 8.692-7.425-5.628-7.424 5.628 2.816-8.692-6.891-5.718h8.989z"
            fill="url(#grad)"
          />
        </svg>
      </div>
      <div className="">
        <span className="text-base font-bold text-black">1,134 Reviews</span>
      </div>
    </div>
  )

  return (
    <div className="w-[100%] pb-[0px] sm:pb-[25px] border-b border-[#EFEEED]">
      <div className="flex flex-col">
        <div className="block sm:hidden">
          <h2 className="font-bold text-[28px] hidden lg:block">
            GET YOUR MEATS NOW
          </h2>
          <p className="italic text-center text-black text-[14px] sm:text-[20px] font-bold">
            We guarantee you&apos;ll love it or your money back !
          </p>
          <div className="flex pt-2 min-h-[30px] sm:min-h-[auto] font-semibold">
            {review}
          </div>
        </div>

        <div className="sm:px-[40px] px-[20px] font-hudson sm:mb-[15px] mb-[20px]">
          <div className="sm:hidden w-[32px] h-[32px] flex justify-center items-center bg-[#231B19] text-white rounded-[4px]">
            1
          </div>
          <h3 className="font-bold leading-7 text-[20px] sm:uppercase sm:tracking-[1px] tracking-[1px]">
            SELECT YOUR FREQUENCY
          </h3>
        </div>
        <div className="sm:px-[40px] px-[20px]">
          <PlanPicker />
        </div>
      </div>
    </div>
  )
}
