import { useContext, useEffect, useRef, useState } from 'react'

import { Form, NavLink, useMatches } from '@remix-run/react'

import { Account } from '~/icons/Account'
import { HamburgerOpen } from '~/icons/HamburgerOpen'
import { Logo } from '~/icons/Logo'
import { Logout } from '~/icons/Logout'
import { cn } from '~/lib/utils'
import { LayoutContext } from '~/providers/LayoutProvider'

import { Button } from './Button'
import { CartButton } from './CartButton'
import { OrderButton } from './OrderButton'

export function Header({ cartType = 'custom' }) {
  const matches = useMatches()

  const { pathname } = matches.at(-1)
  const { setMenuToggle } = useContext(LayoutContext)

  const [isMobile, setIsMobile] = useState(false)

  const isAccount = pathname.split('/')[1] === 'account'
  const isSignin = pathname === '/account/signin'

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const HoverUnderNavLink = (to, text) => {
    const spanRef = useRef(null)

    const handleMouseEnter = () => {
      if (spanRef.current) {
        spanRef.current.style.width = '100%'
      } else {
        spanRef.current.style.width = '100%'
      }
    }

    const handleMouseLeave = () => {
      if (spanRef.current) {
        spanRef.current.style.width = '0%'
      } else {
        spanRef.current.style.width = '0%'
      }
    }

    return (
      <li
        className={cn(
          'navLink py-4 hover:text-[#862E1B] cursor-pointer transition text-[#1d1d1d] uppercase font-barlow text-[14px] font-medium tracking-[0.7px]',
        )}
      >
        <NavLink
          end
          prefetch="intent"
          style={(activeLinkStyle, { position: 'relative' })}
          to={to}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {text}
          <span
            ref={spanRef}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '2px',
              width: '0%',
              backgroundColor: '#862E1B',
              transition: 'width 0.5s ease',
            }}
          ></span>
        </NavLink>
      </li>
    )
  }

  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const handleScroll = () => {
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop
    const scrolledPastHeader =
      prevScrollPos > currentScrollPos && currentScrollPos > 0
    setIsHeaderVisible(!scrolledPastHeader)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const headerClass = isHeaderVisible ? '' : 'sticky-header w-[100vw]'

  return (
    <header className="relative fixed [box-shadow:0px_0px_15px_0px_rgba(0,0,0,0.15)]">
      <div
        className={cn(
          'container-small relative h-[88px] sm:h-[120px] flex items-center justify-between py-4 mainheader sm:pl-[20px] sm:pr-[20px] pl-[10px] pr-[20px]',
          isMobile ? headerClass : '',
        )}
      >
        <div className="relative flex items-center justify-between w-full navBar">
          <div className="w-full max-w-[40%]">
            <ul
              className={cn(
                'hidden navLinks lg:flex custom-padding-header font-dunbar text-[14px] lg:gap-[32px]',
              )}
            >
              {HoverUnderNavLink('/products/custom-bundle', 'Menu')}
              {HoverUnderNavLink('/about', 'About Us')}
              {HoverUnderNavLink('/recipes', 'Recipes')}
            </ul>
            <div className="flex items-center justify-between gap-10 lg:hidden navBar">
              <div className="flex items-center justify-between headerIcons sm:gap-10">
                <Button
                  className="block lg:hidden"
                  onClick={() => setMenuToggle(true)}
                >
                  <HamburgerOpen />
                </Button>
              </div>
            </div>
          </div>
          <NavLink
            end
            prefetch="intent"
            to="/"
            className="w-full max-w-[20%] flex justify-center absolute-center"
          >
            <div className="w-full sm:w-[178px] min-w-[120px] -ml-[20px] sm:ml-[0]">
              <Logo />
            </div>
          </NavLink>
          <div className={cn('w-full max-w-[40%] flex justify-end')}>
            <div className="flex items-center justify-between gap-[10px] headerIcons sm:gap-[18px] w-[fit-content]">
              {!isAccount && (
                <NavLink end prefetch="intent" to="/account">
                  <span className="lg:w-[32px] w-5 cursor-pointer loginIcon">
                    <Account />
                  </span>
                </NavLink>
              )}
              <CartButton cartType={cartType} />
              {!isAccount && (
                <div className="hidden lg:block pl-[20px]">
                  <OrderButton />
                </div>
              )}
              {isAccount && !isSignin && (
                <Form
                  className="items-center hidden lg:flex account-logout"
                  method="POST"
                  action="/account/signout"
                >
                  <button type="submit">
                    <Logout />
                  </button>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  }
}

/** @typedef {Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>} HeaderProps */
/** @typedef {'desktop' | 'mobile'} Viewport */

/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('./Layout').LayoutProps} LayoutProps */
