import React from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Down } from '~/icons/Down'
import { cn } from '~/lib/utils'

export const Dropdown = ({
  placeholder,
  children,
  menuMinWidth = 100,
  align = 'start',
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex justify-between items-center font-dunbar font-medium sm:text-[14px] py-[4px] pl-[14px] pr-[10px] rounded-[4px] border-2 border-[#7A392D] text-[#7A392D] tracking-[0.7px]">
          <div>{placeholder}</div>
          <div className="w-[22px]">
            <Down />
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'flex flex-col gap-[8px] bg-white border-2 border-[#7A392D] rounded-[4px] px-[10px] py-[12px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
          )}
          style={{ minWidth: menuMinWidth }}
          align={align}
          sideOffset={2}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
