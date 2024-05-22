import { useContext, useEffect, useState } from 'react'

import { CustomBundleContext } from '~/contexts'
import { cn } from '~/lib/utils'

import { Quantity } from '../ProductActions/Quantity'
import { LockedItem } from './LockedItem'

export function CartLineItem({ line, lineType = 'paid' }) {
  const {
    title,
    tags,
    featuredImage,
    priceRange,
    variants: { nodes },
    cart_drawer_img,
  } = line
  const { costForOneTime } = useContext(CustomBundleContext)

  const [freeTag, setFreeTag] = useState('')

  useEffect(() => {
    if (tags && tags.length > 0) {
      tags.forEach((tag) => {
        if (tag.includes('free-')) {
          let priceForFreeProduct = tag.split('-')
          priceForFreeProduct = +priceForFreeProduct[1]
          setFreeTag(priceForFreeProduct)
        }
      })
    }
  }, [tags])

  const image =
    cart_drawer_img?.reference.image.url ??
    nodes[0]?.image.url ??
    featuredImage.url

  return (
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
          {lineType === 'free' && (
            <div className="pt-[20px] for_mobile_range absolute right-[0] top-[20px] bg-[#1b7084] block left-[0] px-[5px] py-[2px] text-[11px] font-bold text-[white] w-[35.42px] max-w-max rounded-[3px]">
              FREE
            </div>
          )}
          {lineType === 'bonus' && <LockedItem />}
          {lineType !== 'bonus' && (
            <div className="pt-[20px] flex-1">
              <p className="font-bold text-[14px] sm:text-[16px]">{title}</p>
            </div>
          )}
        </div>

        {lineType === 'paid' && (
          <div className="flex flex-1 items-end py-[20px]">
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
              <div className="line-through text-[#666] text-[14px] font-semibold leading-none">{`$ ${freeTag}`}</div>
              <div className="font-bold text-[24px] text-[#CF2A2A] leading-none">
                FREE
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
