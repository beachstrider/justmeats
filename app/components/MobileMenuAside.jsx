import { useContext } from 'react'

import { Form, useMatches } from '@remix-run/react'

import { Button } from '~/components/Button'
import { HamburgerClose } from '~/icons/HamburgerClose'
import { LayoutContext } from '~/providers/LayoutProvider'

import { MenuNavLink } from './MenuNavLink'

export function MobileMenuAside() {
  const matches = useMatches()

  const { pathname } = matches.at(-1)

  const isAccount = pathname.split('/')[1] === 'account'
  const isSignin = pathname === '/account/signin'

  const { menuToggle, setMenuToggle } = useContext(LayoutContext)

  return (
    <>
      <div
        className={`${
          menuToggle ? 'block' : 'hidden'
        } fixed top-0 bg-[#0000005c] z-[25] w-[100vw] h-[100vh] transition-all duration-300 `}
      ></div>
      <div
        className={`${
          menuToggle ? 'translate-x-0' : 'translate-x-[-4000px]'
        } fixed top-0 max-w-[420px] w-full transition-all duration-500 z-[100] h-[100vh] bg-white`}
      >
        <div className="flex justify-between items-center py-5 px-10 border-b border-[#1d1d1d26] ">
          <p className="text-[20px] text-black">Menu</p>
          <Button onClick={() => setMenuToggle(false)}>
            <HamburgerClose />
          </Button>
        </div>
        <div className="h-[20px] bg-[#1d1d1d0a]"></div>
        <ul className=" border-t  border-[#1d1d1d26]">
          <li className="text-[16px] px-10 py-4 text-black border-b border-[#1d1d1d26]">
            {' '}
            <MenuNavLink to="/products/custom-bundle">Menu</MenuNavLink>{' '}
          </li>
          <li className="text-[16px] px-10 py-4 text-black border-b border-[#1d1d1d26]">
            {' '}
            <MenuNavLink to="/about">About Us</MenuNavLink>{' '}
          </li>
          <li className="text-[16px] px-10 py-4 text-black border-b border-[#1d1d1d26]">
            {' '}
            <MenuNavLink to="/recipes">Recipes</MenuNavLink>{' '}
          </li>
          <li className="text-[16px] px-10 py-4 text-black border-b border-[#1d1d1d26]">
            <MenuNavLink to="/account">Account</MenuNavLink>{' '}
          </li>
          {isAccount && !isSignin && (
            <Form
              method="POST"
              action="/account/signout"
              onSubmit={() => setMenuToggle(false)}
            >
              <button
                className="text-[16px] px-10 py-4 text-black border-b border-[#1d1d1d26] w-full text-left"
                type="submit"
              >
                Logout
              </button>
            </Form>
          )}
        </ul>
      </div>
    </>
  )
}
