import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { Form, useRouteLoaderData } from '@remix-run/react'

import { Button } from '~/components/Button'
import { HamburgerClose } from '~/icons/HamburgerClose'
import { LayoutContext } from '~/providers/LayoutProvider'

import { MenuNavLink } from './MenuNavLink'

export function MobileMenuAside() {
  const location = useLocation()

  const { customer } = useRouteLoaderData('root')
  const { menuToggle, setMenuToggle } = useContext(LayoutContext)

  const isSpecialsPage =
    location.pathname === '/rich-froning' ||
    location.pathname === '/gym' ||
    location.pathname === '/recipes' ||
    location.pathname === '/recipe' ||
    location.pathname === '/how-it-works'

  return (
    <>
      <div
        className={`${
          menuToggle ? 'block' : 'hidden'
        } fixed top-0 bg-[#0000005c] z-20 w-[100vw] h-[100vh] transition-all duration-300 `}
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
          {isSpecialsPage && (
            <li className="text-[16px] px-10 py-4 text-black border-b border-[#1d1d1d26]">
              <MenuNavLink to="/">Specials</MenuNavLink>
            </li>
          )}
          <li className="text-[16px] px-10 py-4 text-black border-b border-[#1d1d1d26]">
            <MenuNavLink to="/account">Account</MenuNavLink>{' '}
          </li>
          {customer !== null && (
            <Form
              method="POST"
              action="/account/logout"
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
