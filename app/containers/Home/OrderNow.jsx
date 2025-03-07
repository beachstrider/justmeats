import { NavLink } from '@remix-run/react'

import trayDesktop from '~/assets/images/tray-desktop.png'
import trayMobile from '~/assets/images/tray-mobile.png'

export const OrderNow = () => {
  return (
    <section className="relative sm:pt-[10px] sm:pb-[25px] pb-[32px] z-[0]">
      <div className="container-small z-50 relative sm:w-[80%] mx-auto">
        <div
          className="flex flex-col items-center bg-brown-pattern z-50 text-white sm:pt-[66px] pt-[53px] sm:pb-[53px] pb-[36px]"
          style={{ boxShadow: '0px 32px 43px -8px rgba(0, 0, 0, 0.20)' }}
        >
          <div className="text-[14px] font-medium text-center sm:text-left tracking-[2.8px] leading-[23px] text-white">
            WE DO MEAT RIGHT
          </div>
          <div className="font-hudson text-[#EFEEED] uppercase mt-[4px] px-3 sm:flex sm:text-[36px] sm:text-center text-center text-[24px] font-bold sm:mb-[4px] mb-[3px] leading-normal tracking-[1.8px]">
            THE HARDEST PART OF THE MEAL IS DONE
          </div>
          <div className="w-[70%] text-center leading-[26px] sm:text-[18px] mt-4">
            No longer do you have to sacrifice flavor and quality for time and
            money. With Just Meats, you can have restaurant-quality meats on
            your table in minutes without frustration or breaking the bank.
          </div>
          <div className="mt-8">
            <NavLink
              end
              prefetch="intent"
              to="/products/custom-bundle"
              className="btn-order inline-block cursor-pointer transition py-3 px-9 text-base leading-normal tracking-[0.8px] uppercase bg-[#EFEEED] hover:bg-[#f5f3f1] text-[#6B1626] hover:text-[#8d3a2b] font-bold"
            >
              ORDER NOW
            </NavLink>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-[#f5f5f5]"></div>
      <div className="absolute z-10 sm:w-auto sm:top-[-110px] top-[-320px] right-0">
        <img src={trayDesktop} className="hidden sm:block" />
        <img src={trayMobile} className="block sm:hidden" />
      </div>
    </section>
  )
}
