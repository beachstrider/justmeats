import React, { useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { cn } from '~/lib/utils'

export const Dropdown = ({
  placeholder,
  children,
  menuMinWidth = 100,
  align = 'start',
}) => {
  const [isOpened, setIsOpened] = useState(false)

  const DownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
      <path
        d="M9.3335 13.3333L16.0002 20L22.6668 13.3333"
        stroke={isOpened ? 'white' : '#7A392D'}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <DropdownMenu.Root onOpenChange={(v) => setIsOpened(v)}>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            'flex justify-between items-center font-dunbar font-medium sm:text-[14px] py-[4px] pl-[14px] pr-[10px] rounded-[4px] border-2 border-[#7A392D] tracking-[0.7px]',
            isOpened ? 'bg-[#7A392D] text-white' : 'text-[#7A392D]',
          )}
        >
          <div>{placeholder}</div>
          <div className={'w-[22px]'}>
            <DownIcon />
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
