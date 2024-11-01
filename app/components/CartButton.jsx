import { useContext } from 'react'

import { NavLink } from '@remix-run/react'

import { Cart as CartIcon } from '~/icons/Cart'
import { OnetimeBundleContext } from '~/providers/OnetimeBundleProvider'
import { RootContext } from '~/providers/RootProvider'

import { Button } from './Button'

export function CartButton({ cartType }) {
  const customCount = useContext(RootContext)?.cartCount ?? 0
  const onetimeCount = useContext(OnetimeBundleContext)?.cartCount ?? 0
  const setOnetimeCartOpen = useContext(OnetimeBundleContext)?.setCartOpen

  if (cartType === 'custom') {
    return (
      <NavLink end prefetch="intent" to="/products/custom-bundle">
        <span className="relative flex cursor-pointer CartIcon">
          <CartIcon />
          <span className="absolute top-[-5px] right-[-8px] w-[17px] h-[17px] text-[10px] font-barlow rounded-[100%] items-center bg-[#BF4745] text-white flex justify-center ">
            {customCount}
          </span>
        </span>
      </NavLink>
    )
  }

  return (
    <Button onClick={() => setOnetimeCartOpen((prev) => !prev)}>
      <span className="relative flex cursor-pointer CartIcon">
        <CartIcon />
        <span className="absolute top-[-5px] right-[-8px] w-[17px] h-[17px] text-[10px] font-barlow rounded-[100%] items-center bg-[#BF4745] text-white flex justify-center ">
          {onetimeCount}
        </span>
      </span>
    </Button>
  )
}
