import { NavLink } from '@remix-run/react'

import hungry from '~/assets/images/white-hungry-logo.png'
import { Facebook } from '~/icons/Facebook'
import { Instagram } from '~/icons/Instagram'
import { Mail } from '~/icons/Mail'
import { Phone } from '~/icons/Phone'
import { Tiktok } from '~/icons/Tiktok'

export const Footer = () => {
  return (
    <section className="relative bg-[#0A0A0A] py-[50px] px-[20px] z-10 text-[#FFF]">
      <div className="container-small">
        <div className="flex flex-col text-center items-center gap-[20px] lg:mb-[66px] mb-[57px]">
          <img src={hungry} />
          <div className="text-[16px] font-barlow font-medium leading-[130%] ">
            Follow us on <span className="underline"> Instagram </span> for
            info, deals, recipes, and more.
          </div>
        </div>
        <div className="max-w-[740px] w-full mx-auto flex justify-center">
          <div className="flex flex-col sm:gap-[53px] gap-[30px] w-full">
            <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-[35px]">
              <div>
                <div className="font-bold tracking-[0.8px] sm:mb-[22px] mb-[18px]">
                  ABOUT US
                </div>
                <div className="flex flex-col sm:text-[14px] text-[16px] font-bold sm:leading-[170%] leading-[190%]">
                  <NavLink end prefetch="intent" to="/products/custom-bundle">
                    Menu
                  </NavLink>
                  <NavLink end prefetch="intent" to="/about">
                    How It Works
                  </NavLink>
                </div>
              </div>
              <div>
                <div className="font-bold tracking-[0.8px] sm:mb-[22px] mb-[18px]">
                  NEED HELP?
                </div>
                <div className="flex flex-col sm:text-[14px] text-[16px] font-bold sm:leading-[170%] leading-[190%]">
                  <NavLink end prefetch="intent" to="/faq">
                    FAQs
                  </NavLink>
                  <NavLink end prefetch="intent" to="/term-services">
                    Terms of Service
                  </NavLink>
                  <NavLink end prefetch="intent" to="/refund-policy">
                    Refund & Cancellation Policy
                  </NavLink>
                  <NavLink end prefetch="intent" to="/privacy-policy">
                    Privacy Policy
                  </NavLink>
                </div>
              </div>
              <div>
                <div className="font-bold tracking-[0.8px] sm:mb-[22px] mb-[18px]">
                  CONTACT US
                </div>
                <div className="flex flex-col sm:text-[14px] text-[16px] font-bold sm:leading-[170%] leading-[190%]">
                  <a
                    href="tel:+18883431242"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[8px]"
                  >
                    <div className="w-[22px]">
                      <Phone />
                    </div>
                    <div>888-343-1242</div>
                  </a>
                  <a
                    href="mailto:support@justmeats.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[8px]"
                  >
                    <div className="w-[22px] flex justify-center items-center">
                      <div className="w-[18px]">
                        <Mail />
                      </div>
                    </div>
                    <div>support@justmeats.com</div>
                  </a>
                  <div className="flex items-center gap-[4px] mt-[16px] ml-[-6px]">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/profile.php?id=61550191665305"
                    >
                      <Facebook />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.instagram.com/justmeats.co/"
                    >
                      <Instagram />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.tiktok.com/@justmeats.com"
                      className="ml-[8px]"
                    >
                      <Tiktok />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              ©2023 JUST MEATS, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
