import React from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const Dropdown = ({ placeholder, children, align = 'start' }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex justify-between items-center font-dunbar font-medium sm:text-[14px] py-[4px] pl-[14px] pr-[10px] rounded-[4px] border-2 border-[#7A392D] text-[#7A392D]">
          <div>{placeholder}</div>
          <div className="w-[22px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M9.3335 13.3333L16.0002 20L22.6668 13.3333"
                stroke={'#7A392D'}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white border border-[#EFEEED] rounded-[4px] p-[5px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          align={align}
          sideOffset={2}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
