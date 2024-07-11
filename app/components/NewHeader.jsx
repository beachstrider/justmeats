import { useContext, useEffect, useRef, useState } from 'react'

import { NavLink, useMatches } from '@remix-run/react'

import logo from '~/assets/logo.png'
import { LayoutContext } from '~/contexts'
import { HamburgerOpen } from '~/icons/HamburgerOpen'
import { Logo } from '~/icons/Logo'
import { cn } from '~/lib/utils'

import { Button } from './Button'
import { CartButton } from './NewCartButton'
import { OrderButton } from './NewOrderButton'

export function Header() {
  const matches = useMatches()
  // const { setMenuToggle } = useContext(LayoutContext)
  const { menuOpen, setMenuToggle } = useContext(LayoutContext)
  const isRoute = matches[1].params.bundle === 'custom-bundle'
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to update our state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    // Clean up event listener
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
          'navLink py-4 px-[16px] hover:text-[#862E1B] cursor-pointer transition text-[#1d1d1d] uppercase font-barlow text-[14px] font-medium tracking-[0.7px]',
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

  const Mainheader = () => {
    return !isMobile ? (
      <div className="container-small relative h-[88px] sm:h-[120px] flex items-center justify-between py-4">
        <div className="relative flex items-center justify-between w-full navBar">
          <ul
            className={cn(
              'hidden navLinks lg:flex w-full max-w-[40%] custom-padding-header font-dunbar text-[14px]',
            )}
          >
            {HoverUnderNavLink('/products/custom-bundle', 'Menu')}
            {HoverUnderNavLink('/about', 'About Us')}
            {HoverUnderNavLink('/recipes', 'Recipes')}
            {/* {HoverUnderNavLink('/', 'Specials')} */}
          </ul>
          <NavLink
            end
            prefetch="intent"
            to="/"
            className="w-full max-w-[20%] flex justify-center absolute -translate-x-1/2 left-1/2"
          >
            <div className="w-[120px] sm:w-[178px]">
              <Logo />
            </div>
          </NavLink>
          <div className={cn('w-full max-w-[40%] flex justify-end')}>
            <div className="flex items-center justify-between gap-[10px] headerIcons sm:gap-[18px] w-[fit-content]">
              <NavLink end prefetch="intent" to="/account">
                <span className="hidden w-[32px] cursor-pointer loginIcon lg:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M23.3333 24.5V22.1667C23.3333 20.929 22.8416 19.742 21.9665 18.8668C21.0913 17.9917 19.9043 17.5 18.6666 17.5H9.33329C8.09562 17.5 6.90863 17.9917 6.03346 18.8668C5.15829 19.742 4.66663 20.929 4.66663 22.1667V24.5"
                      stroke="#231B19"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 12.8333C16.5774 12.8333 18.6667 10.744 18.6667 8.16667C18.6667 5.58934 16.5774 3.5 14 3.5C11.4227 3.5 9.33337 5.58934 9.33337 8.16667C9.33337 10.744 11.4227 12.8333 14 12.8333Z"
                      stroke="#231B19"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </NavLink>
              <Button
                className="block lg:hidden"
                onClick={() => setMenuToggle(true)}
              >
                <HamburgerOpen />
              </Button>
              <CartButton />
              <div className="hidden lg:block pl-[20px]">
                <OrderButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div
        className={cn(
          'container-small relative h-[88px] sm:h-[120px] flex items-center justify-between py-4 mainheader sm:pl-[20px] sm:pr-[20px] pl-[10px] pr-[20px]',
          headerClass,
        )}
      >
        <div className="flex items-center justify-between gap-10 navBar">
          <div className="flex items-center justify-between headerIcons sm:gap-10">
            <Button
              className="block lg:hidden"
              onClick={() => setMenuToggle(true)}
            >
              <HamburgerOpen />
            </Button>
          </div>
        </div>

        <div className="absolute-center">
          <a href="/" target="_blank">
            <div className="w-full sm:w-[214px] min-w-[120px] -ml-[20px] sm:ml-[0]">
              <Logo />
            </div>
          </a>
        </div>
        <div className="flex items-center justify-between gap-[5px] headerIcons sm:gap-10">
          <NavLink end prefetch="intent" to="/account">
            <span className="w-5 cursor-pointer loginIcon lg:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M23.3333 24.5V22.1667C23.3333 20.929 22.8416 19.742 21.9665 18.8668C21.0913 17.9917 19.9043 17.5 18.6666 17.5H9.33329C8.09562 17.5 6.90863 17.9917 6.03346 18.8668C5.15829 19.742 4.66663 20.929 4.66663 22.1667V24.5"
                  stroke="#231B19"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 12.8333C16.5774 12.8333 18.6667 10.744 18.6667 8.16667C18.6667 5.58934 16.5774 3.5 14 3.5C11.4227 3.5 9.33337 5.58934 9.33337 8.16667C9.33337 10.744 11.4227 12.8333 14 12.8333Z"
                  stroke="#231B19"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </NavLink>
          <CartButton />
        </div>
      </div>
    )
  }

  const Landingheader = () => {
    return (
      <div className="container-small flex justify-center items-center py-[3px] mx-auto relative landingheader">
        <NavLink end prefetch="intent" to="/">
          <img
            src={logo}
            className="object-contain sm:w-[156px] h-[40px] sm:h-[90px]"
            alt="Logo"
          />
        </NavLink>
        <NavLink end prefetch="intent" to="/" className="absolute left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 m-4 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
              aria-label="Back Home"
            ></path>
          </svg>
        </NavLink>
      </div>
    )
  }

  return (
    <header className="relative [box-shadow:0px_0px_15px_0px_rgba(0,0,0,0.15)]">
      {isRoute ? <Landingheader /> : <Mainheader />}
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
