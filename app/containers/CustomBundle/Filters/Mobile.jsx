import React from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Check } from '~/components/Check'
import { Label } from '~/components/Label'
import { RadioGroup, RadioGroupItem } from '~/components/Radio'
import { Close32 } from '~/icons/Close32'
import { Filter } from '~/icons/Filter'

export const Mobile = ({ servingSizes, meatTypes, specials }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex justify-between items-center font-dunbar font-medium sm:text-[14px] py-[2px] pl-[8px] pr-[4px] rounded-[6px] border-2 border-[#7A392D] text-[#7A392D]">
          <div>FILTERS</div>
          <Filter />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[70vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[20px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="font-dunbar m-0 text-[16px] font-medium tracking-[0.8px]">
            FILTERS
          </Dialog.Title>
          <div className="flex flex-col gap-[25px] pt-[20px]">
            <div className="flex flex-col gap-[10px]">
              <RadioGroup defaultValue="comfortable">
                {servingSizes.map((el, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={el} id={`serving-size-${index}`} />
                    <Label
                      className="font-nunito font-bold text-[16px]"
                      htmlFor={`serving-size-${index}`}
                    >
                      {el}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="font-dunbar m-0 text-[16px] font-medium tracking-[0.8px]">
                MEAT TYPES
              </div>
              <div className="grid grid-cols-2 gap-[10px]">
                {meatTypes.map((el, index) => (
                  <div key={index} className="flex gap-[8px] items-center">
                    <Check id={`meat-type-${index}`} />
                    <Label
                      className="font-nunito font-bold text-[16px]"
                      htmlFor={`meat-type-${index}`}
                    >
                      {el}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="font-dunbar m-0 text-[16px] font-medium tracking-[0.8px]">
                SPECIALS
              </div>
              <div className="grid grid-cols-1 gap-[10px]">
                {specials.map((el, index) => (
                  <div key={index} className="flex gap-[8px] items-center">
                    <Check id={`special-${index}`} />
                    <Label
                      className="font-nunito font-bold text-[16px]"
                      htmlFor={`special-${index}`}
                    >
                      {el}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
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
