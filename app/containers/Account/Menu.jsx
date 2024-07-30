import { useState } from 'react'

import { NavLink, useMatches, useRouteLoaderData } from '@remix-run/react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/Tooltip'
import { DownSmall } from '~/icons/DownSmall'
import { cn } from '~/lib/utils'

const accountPages = [
  {
    route: 'dashboard',
    name: 'DASHBOARD',
    path: '/account/dashboard',
  },
  {
    route: 'subscriptions',
    name: 'SUBSCRIPTIONS',
    path: '/account/subscriptions',
  },
  {
    route: 'orders',
    name: 'ORDER HISTORY',
    path: '/account/orders',
  },
  {
    route: 'details',
    name: 'ACCOUNT DETAILS',
    path: '/account/details',
  },
  {
    route: 'payment-methods',
    name: 'PAYMENT METHODS',
    path: '/account/payment-methods',
  },
]

export function Menu() {
  const matches = useMatches()
  const { credit } = useRouteLoaderData('root')

  const [showMenu, setShowMenu] = useState(false)

  const { pathname } = matches.at(-1)
  const route = pathname.split('/account/')[1]
  const accountPage = accountPages.find((el) => el.route === route)

  const desktopNavList = accountPages.map((el, index) => (
    <NavLink
      key={index}
      to={el.path}
      className={({ isActive }) =>
        isActive ? 'text-[#6B1626]' : 'text-[#231B19]'
      }
      onClick={() => setShowMenu(false)}
    >
      {el.name}
    </NavLink>
  ))

  const mobileNavList = accountPages
    .filter((el) => el.path !== pathname)
    .map((el, index) => (
      <NavLink
        key={index}
        to={el.path}
        className={({ isActive }) =>
          isActive ? 'text-[#6B1626]' : 'text-[#231B19]'
        }
        onClick={() => setShowMenu(false)}
      >
        {el.name}
      </NavLink>
    ))

  const navLinks = (
    <>
      <nav className="lg:flex hidden lg:text-[16px] text-[14px] font-bold lg:tracking-[0.8px] tracking-[0.7px] flex-col lg:flex-row lg:text-center gap-[10px] lg:gap-[48px] lg:py-0 py-[20px]">
        {desktopNavList}
      </nav>
      <nav className="lg:hidden flex lg:text-[16px] text-[14px] font-bold lg:tracking-[0.8px] tracking-[0.7px] flex-col lg:flex-row lg:text-center gap-[10px] lg:gap-[48px] lg:py-0 py-[20px]">
        {mobileNavList}
      </nav>
    </>
  )

  return (
    <div className="relative bg-white border-t z-20 border-t-[#EFEEED] [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.03)]">
      <div className="lg:py-[22px] py-[15px] border-b border-b-[#EFEEED]">
        <div className="container-small">
          <div className="flex justify-between gap-[20px]">
            <div className="hidden lg:block">{navLinks}</div>
            <div className="flex justify-between w-full lg:w-auto">
              <div
                className="flex items-center lg:hidden text-[14px] font-bold"
                onClick={() => setShowMenu(!showMenu)}
              >
                <div className={cn(showMenu ? 'rotate-180' : '')}>
                  <DownSmall />
                </div>
                {accountPage?.name}
              </div>
              {credit?.total_available_balance && (
                <TooltipProvider skipDelayDuration>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-end gap-1">
                        <div className="lg:text-[24px] text-[20px] font-bold text-[#6B1626] leading-[20px]">
                          ${credit.total_available_balance}
                        </div>
                        <div className="lg:text-[16px] text-[14px] font-medium leading-[16px]">
                          Store credit
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="mb-[10px]">
                      <p>Automatically applied to your next payment</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={cn('lg:hidden', showMenu ? 'block' : 'hidden')}>
        <div className="container-small">{navLinks}</div>
      </div>
    </div>
  )
}
