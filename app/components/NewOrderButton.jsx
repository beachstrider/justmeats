import React from 'react'

import { NavLink } from '@remix-run/react'

import { cn } from '~/lib/utils'

export const OrderButton = ({ className }) => {
  return (
    <NavLink
      end
      prefetch="intent"
      to="/products/custom-bundle"
      className={cn(
        'btn-order inline-block bg-[#6B1626] cursor-pointer font-barlow font-medium leading-none text-[#fff] hover:bg-[#BF4745] transition py-[10px] px-[20px] text-sm tracking-[0.7px]',
        className,
      )}
    >
      ORDER NOW
    </NavLink>
  )
}
