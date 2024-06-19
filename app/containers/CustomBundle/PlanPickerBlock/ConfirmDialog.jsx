import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Close32 } from '~/icons/Close32'

export const ConfirmDialog = ({ products, onOpenChange, onConfirm }) => {
  return (
    <Dialog.Root open={products.length > 0} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[590px] translate-x-[-50%] translate-y-[-50%] bg-white p-[36px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-40">
          <div>
            <div className="flex justify-center lg:mb-[26px] mb-[20px]">
              <div className="flex lg:gap-[10px] gap-[6px]">
                {products.map((el, index) => (
                  <div key={index} className="shrink">
                    <img
                      width={113}
                      loading="lazy"
                      src={el.product_icon_1.reference.image.url}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="font-barlow font-medium text-[20px] tracking-[1px] text-center lg:mb-[12px] mb-[14px]">
              ARE YOU SURE?
            </div>
            <div className="text-center font-barlow lg:mb-[26px] mb-[34px] lg:leading-[130%] leading-[150%]">
              Switching to “One Time” will remove these subscriber-only meats
              from your cart:{' '}
              <strong>“{products.map((el) => el.title).join(', ')}”</strong>{' '}
              Subscribers get access to exclusive meats and huge discounts.
            </div>
            <div className="flex justify-center font-barlow font-medium text-[14px]">
              <div className="flex lg:gap-[20px] gap-[10px]">
                <Dialog.Close asChild>
                  <button className="px-[20px] py-[10px] text-[#6B1626] border-2 border-[#6B1626] tracking-[0.7px]">
                    CANCEL
                  </button>
                </Dialog.Close>
                <button
                  onClick={onConfirm}
                  className="px-[20px] py-[10px] text-white border-2 border-[#BF4745] bg-[#BF4745] tracking-[0.7px]"
                >
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className="hover:bg-[#7a392d1c] focus:shadow-[#7a392d1c] absolute top-[10px] right-[10px] inline-flex appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Close32 />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
