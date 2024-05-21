import React from 'react'

import { NavLink } from '@remix-run/react'

import { Back } from '~/icons/Back'
import { Logo } from '~/icons/Logo'
import { NewAccount } from '~/icons/NewAccount'
import { cn } from '~/lib/utils'

export const OrderHeader = () => {
  return (
    <header className="container relative h-[80px] sm:h-[90px] sm:px-[22px] px-[13px] navBar flex justify-between items-center">
      <NavLink prefetch="intent" to="/" className="w-[48px]">
        <Back />
      </NavLink>
      <a
        href="/"
        target="_blank"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-[148px] sm:w-[178px] sm:mr-[11px] mr-[1px]"
      >
        <Logo />
      </a>
      <div className={cn('w-full max-w-[40%] flex justify-end')}>
        <div className="flex items-center justify-between gap-4 headerIcons sm:gap-10 w-[fit-content]">
          <NavLink end prefetch="intent" to="/account">
            <span className="hidden w-[32px] cursor-pointer loginIcon lg:flex">
              <NewAccount />
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
