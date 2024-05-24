import { Fragment, useEffect, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import memorialDay from '~/assets/images/image_2024-05-23_154607820.jpg'
import { Close } from '~/icons/Close'
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

  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false)

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

  const desktopImage = featuredImage.url || nodes[0]?.image.url

  const mobileImage =
    cart_drawer_img?.reference.image.url || nodes[0]?.image.url

  return (
    <div
      className={cn(
        'rounded-t-xl sm:border-none border-solid overflow-hidden gap-4 relative',
        lineType === 'bonus' ? 'lg:hidden sm:flex block' : 'sm:flex block',
        lineType === 'free' ? 'border-[#1b7084]' : 'border-[#425b34]',
        lineType === 'locked'
          ? 'border-[#EEEDED1b7084] lg:hidden'
          : 'border-[#425b34]',
        lineType !== 'paid' ? 'border' : 'border-t border-l border-r',
      )}
    >
      <img
        src={desktopImage}
        height={100}
        loading="lazy"
        className={`w-full sm:w-[72px] ${
          (lineType === 'locked' ? 'opacity-[.22]' : 'opacity-[1]',
          lineType === 'bonus' ? 'hidden lg:block' : 'hidden sm:block')
        }`}
        onClick={() => (lineType === 'gift' ? setIsGiftModalOpen(true) : false)}
      />
      <img
        src={mobileImage}
        height={100}
        loading="lazy"
        className={`w-full h-[169px] mb-3 sm:w-[72px] ${
          (lineType === 'locked'
            ? 'opacity-[.22]'
            : 'opacity-[1] object-contain',
          lineType === 'bonus'
            ? 'block lg:hidden sm:h-auto'
            : 'block sm:hidden')
        }`}
        onClick={() => (lineType === 'gift' ? setIsGiftModalOpen(true) : false)}
      />

      <div className="flex flex-1 flex-col sm:flex-row pr-[0px] justify-between items-center">
        {lineType === 'bonus' && (
          <div className="for_mobile_range absolute right-[0] top-[20px] bg-[#425B34] block left-[0] px-[5px] py-[2px] text-[11px] font-bold text-[white] w-[35.42px] max-w-max rounded-[3px]">
            FREE
          </div>
        )}
        {lineType === 'free' && (
          <div className="for_mobile_range absolute right-[0] top-[20px] bg-[#1b7084] block left-[0] px-[5px] py-[2px] text-[11px] font-bold text-[white] w-[35.42px] max-w-max rounded-[3px]">
            FREE
          </div>
        )}
        {lineType === 'locked' && (
          <div className="for_mobile_range absolute right-[0] top-[20px] bg-[#862E1B] block left-[0] px-[5px] py-[2px] text-[11px] font-bold text-[white] w-[50.73px] max-w-max rounded-[3px]">
            LOCKED
          </div>
        )}
        <div className="flex-1 hidden sm:block h-fit">
          <p className="font-semibold text-[10px] sm:text-[14px] text-center">
            <strong className="pr-[10px] flex justify-center">{title}</strong>
          </p>

          <div className="flex justify-center font-bold text-center text-[12px] sm:text-[25px]">
            {lineType === 'free' && (
              <div className="flex gap-1">
                <div className="line-through text-[#929292]">{`$ ${freeTag}`}</div>
                <div>FREE</div>
              </div>
            )}
            {lineType === 'gift' && (
              <div
                className="flex gap-1"
                onClick={() => setIsGiftModalOpen(true)}
              >
                <div className="text-[18px] cursor-pointer">Click to see</div>
              </div>
            )}
            {lineType === 'paid' && (
              <div className="hidden sm:block">
                ${priceRange.maxVariantPrice.amount}
              </div>
            )}
          </div>
        </div>
      </div>
      {line && (
        <div
          className={cn(
            'relative flex justify-center items-center sm:mt-0',
            lineType === 'bonus' ? ' -mt-[11px]' : ' -mt-[13px]',
          )}
        >
          {lineType === 'paid' && <Quantity isViewingCart={true} line={line} />}
          {lineType === 'bonus' && <LockedItem />}
          {lineType === 'free' && (
            <>
              <span className="sm:hidden text-black text-sm -mt-15 pb-10 font-roboto font-semibold absolute -top-[24px]">
                Free
              </span>
              <button className="sm:hidden w-full bg-[#1b7084] mt-[0px] text-white px-[10px] pt-[4px] min-h-[36px] text-[12px] font-['Roboto']">
                First Order Gift
              </button>
            </>
          )}
          {lineType === 'gift' && (
            <>
              <button
                className="sm:hidden w-full bg-[#1b7084] mt-[0px] text-white px-[10px] pt-[4px] min-h-[36px] text-[12px] font-['Roboto'] relative"
                onClick={() => setIsGiftModalOpen(true)}
              >
                Click to see
              </button>
            </>
          )}
          {lineType === 'locked' && (
            <>
              <button className="sm:hidden w-full bg-[#EEEDED] uppercase text-black px-[0px] py-[1.5px] text-[11px] font-['Roboto'] font-bold">
                Free Bonus Meat (unlocked at $125)
              </button>
            </>
          )}
        </div>
      )}
      <GiftModal
        open={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
      />
    </div>
  )
}

const GiftModal = ({ open, onClose }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative pt-[20px] w-full max-w-[400px] text-left align-middle transition-all transform bg-white text-[#1d1d1d] shadow-xl">
                <img src={memorialDay} alt="" />
                <button
                  className="absolute top-[8px] right-[8px]"
                  onClick={onClose}
                >
                  <Close />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
