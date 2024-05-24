import { useContext, useEffect, useState } from 'react'

import { CustomBundleContext } from '~/contexts'
import { cn } from '~/lib/utils'

import { Quantity } from '../ProductActions/Quantity'
import { LockedItem } from './LockedItem'

export function CartLineItem({ line, type, lineType = 'paid' }) {
  const {
    title,
    tags,
    featuredImage,
    priceRange,
    variants: { nodes },
    cart_drawer_img,
  } = line
  const { costForOneTime } = useContext(CustomBundleContext)

  const freeTag = tags.find((el) => el.includes('free-'))
  const originalPriceOfFreeProduct = freeTag?.split('-')?.[1]

  const image =
    line?.product_icon_1?.reference.image.url ??
    cart_drawer_img?.reference.image.url ??
    nodes[0]?.image.url ??
    featuredImage.url

  const desktop = (
    <div
      className={cn(
        'flex sm:flex-row flex-col gap-[34px] relative',
        lineType === 'free' ? 'border-[#1b7084]' : 'border-[#425b34]',
      )}
    >
      <div>
        <img
          src={image}
          height={100}
          loading="lazy"
          className={cn(
            'w-full sm:w-[85px]',
            lineType === 'bonus'
              ? costForOneTime >= 125
                ? ''
                : 'opacity-50'
              : '',
          )}
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col sm:flex-row pr-[0px] justify-between items-center font-nunito">
          {lineType === 'bonus' && <LockedItem />}
          {lineType !== 'bonus' && (
            <div className="pt-[20px] flex-1">
              <p className="font-bold text-[14px] sm:text-[16px]">{title}</p>
            </div>
          )}
        </div>

        {lineType === 'paid' && (
          <div className="flex flex-1 items-end py-[16px]">
            <div className="flex items-center justify-between flex-1">
              <div className="flex justify-start">
                <Quantity line={line} />
              </div>
              <div className="font-nunito sm:text-[18px] text-[16px] font-semibold">
                ${priceRange.maxVariantPrice.amount}
              </div>
            </div>
          </div>
        )}
        {lineType !== 'paid' && (
          <div className="flex items-end flex-1 font-nunito">
            <div className="">
              <div className="line-through text-[#666] text-[14px] font-semibold leading-none sm:mb-[4px]">{`$ ${originalPriceOfFreeProduct}`}</div>
              <div className="font-bold text-[24px] text-[#CF2A2A] leading-none">
                FREE
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const mobile = (
    <div className="flex flex-col flex-1 product-grid">
      <div className="relative px-[25px] pt-[12%] pb-[5%] mt-[40%] rounded-t-[8px] aspect-[111/100] flex bg-[#572D2D] text-white">
        <div className="flex items-end justify-center flex-1">
          <div className="absolute w-[84%] top-[32%] -translate-y-1/2">
            <img src={image} loading="lazy" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between bg-white rounded-b-[8px] border-x border-b border-[#EFEEED] overflow-hidden [box-shadow:0px_8px_14px_-5px_rgba(0,0,0,0.15)]">
        <div className="flex-1 flex flex-col justify-between px-[10px] pt-[12px] pb-[10px] font-nunito text-center">
          <div className="font-extrabold leading-none text-[12px] mb-[8px]">
            {line.title}
          </div>
          <div className="font-bold text-[12px]">
            {lineType === 'paid' &&
              `$${line.priceRange.minVariantPrice.amount}`}
          </div>
        </div>
        <div className="flex h-[33px] justify-center items-center border-t border-[#efeeed]">
          {lineType === 'paid' && <Quantity line={line} type={type} />}
          {lineType === 'bonus' && <LockedItem />}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="hidden sm:block">{desktop}</div>
      <div className="flex flex-col sm:hidden">{mobile}</div>
    </>
  )
}
