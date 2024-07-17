import { useContext } from 'react'

import { NavLink } from '@remix-run/react'

import { Cart as CartIcon } from '~/icons/Cart'
import { RootContext } from '~/providers/RootProvider'

export function CartButton() {
  const { cartCount } = useContext(RootContext)

  return (
    <NavLink end prefetch="intent" to="/products/custom-bundle">
      <span className="relative flex cursor-pointer CartIcon">
        <CartIcon />
        <span className="absolute top-[-5px] right-[-8px] w-[17px] h-[17px] text-[10px] font-barlow rounded-[100%] items-center bg-[#BF4745] text-white flex justify-center ">
          {cartCount}
        </span>
      </span>
    </NavLink>
  )
}
