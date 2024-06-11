import { Fragment, useContext, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import memorialDay from '~/assets/images/image_2024-05-23_154607820.jpg'
import { CustomBundleContext } from '~/contexts'
import { Close } from '~/icons/Close'
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
    background_color,
  } = line
  const { costForOneTime } = useContext(CustomBundleContext)

  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false)

  const freeTag = tags.find((el) => el.includes('free-'))
  const originalPriceOfFreeProduct = freeTag?.split('-')?.[1]

  const image =
    line?.product_icon_1?.reference.image.url ??
    cart_drawer_img?.reference.image.url ??
    nodes[0]?.image.url ??
    featuredImage.url

  const backgroundColor = background_color?.value ?? '#EFEEED'
  const borderColor = background_color?.value ?? '#EFEEED'

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
          onClick={() =>
            lineType === 'gift' ? setIsGiftModalOpen(true) : false
          }
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col sm:flex-row pr-[0px] justify-between items-center font-barlow">
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
              <div className="font-barlow sm:text-[18px] text-[16px] font-semibold">
                ${priceRange.maxVariantPrice.amount}
              </div>
            </div>
          </div>
        )}
        {lineType !== 'paid' && (
          <div className="flex items-end flex-1 font-barlow">
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
      <div
        className="relative px-[25px] pt-[12%] pb-[5%] mt-[40%] aspect-[111/100] flex text-white"
        style={{ backgroundColor, borderColor }}
      >
        <div className="flex items-end justify-center flex-1">
          <div className="absolute w-[84%] top-[32%] -translate-y-1/2">
            <img
              src={image}
              loading="lazy"
              className={cn(
                'cursor-pointer',
                lineType === 'bonus'
                  ? costForOneTime >= 125
                    ? ''
                    : 'opacity-50'
                  : '',
              )}
            />
          </div>
        </div>
        {lineType !== 'paid' && (
          <div
            className={cn(
              'absolute -translate-x-1/2 left-1/2 bottom-[-10px] px-[8px] py-[4px] bg-[#5AAF17] text-[12px] font-bold text-white tracking-[0.6px] leading-none',
              lineType === 'bonus'
                ? costForOneTime >= 125
                  ? ''
                  : 'opacity-50'
                : '',
            )}
          >
            FREE
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between bg-white border-x border-b border-[#EFEEED] overflow-hidden [box-shadow:0px_8px_14px_-5px_rgba(0,0,0,0.15)]">
        <div className="flex-1 flex flex-col justify-between px-[4px] pt-[12px] pb-[10px] text-center">
          <div
            className={cn(
              'font-bold font-hudson leading-none text-[12px] mb-[8px]',
              lineType === 'bonus'
                ? costForOneTime >= 125
                  ? ''
                  : 'opacity-50'
                : '',
            )}
          >
            {line.title}
          </div>
          <div className="font-bold text-[12px] font-barlow">
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
                <img
                  src="https://res.cloudinary.com/meals/image/upload/v1716641993/image_2024-05-23_154607820.jpg"
                  alt=""
                />
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
