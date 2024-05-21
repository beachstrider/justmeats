import React from 'react'

import { NavLink } from '@remix-run/react'

import { Back } from '~/icons/Back'
import { Logo } from '~/icons/Logo'
import { NewAccount } from '~/icons/NewAccount'

export const OrderHeader = () => {
  return (
    <header className="container relative h-[80px] sm:h-[90px] sm:px-[22px] px-[13px] navBar flex justify-between items-center [filter:drop-shadow(0px_0px_15px_rgba(0,0,0,0.15))] bg-white">
      <NavLink prefetch="intent" to="/" className="w-[48px]">
        <Back />
      </NavLink>
      <NavLink
        prefetch="intent"
        to="/"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-[148px] sm:w-[178px] sm:mr-[11px] mr-[1px]"
      >
        <Logo />
      </NavLink>
      <NavLink
        end
        prefetch="intent"
        to="/account"
        className="hidden w-[32px] cursor-pointer loginIcon lg:flex sm:mr-[11px]"
      >
        <NewAccount />
      </NavLink>
    </header>
  )
}
