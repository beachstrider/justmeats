import { useLocation } from 'react-router-dom'

import { NavLink, useMatches } from '@remix-run/react'

import { Facebook } from '~/icons/Facebook'
import { Instagram } from '~/icons/Instagram'
import { LogoWhite } from '~/icons/LogoWhite'
import { Mail } from '~/icons/Mail'
import { Phone } from '~/icons/Phone'
import { Tiktok } from '~/icons/Tiktok'

export const Footer = () => {
  const matches = useMatches()
  const location = useLocation()
  const isSpecialsPage =
    location.pathname === '/gym-launch' || location.pathname === '/gym'
  const page = matches.at(-1).pathname
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`${
        isSpecialsPage ? 'bg-[#6B1626]' : 'bg-[#231b19]  pt-[40px]'
      }`}
    >
      {page === '/rich-froning' && (
        <div className="bg-lower-footer bg-cover text-center sm:[background-position-x:0] [background-position-x:-750px]">
          <div className="container-small relative text-[#EFEEED] sm:pt-[80px] sm:pb-[92px] pt-[113px] pb-[137px] lg:pl-0 lg:pr-0">
            <div className="sm:text-[18px] sm:leading-[26px] sm:tracking-[0.36px] sm:text-center text-justify [word-spacing:-1px] sm:[word-spacing:0] text-[16px] leading-[150%] tracking-[0.48px] font-nunito sm:mb-[16px] mb-[18px]">
              “Nutrition is the foundation of Fitness, and the success of any
              training program starts in your kitchen. It takes time, and
              attention. But I love food, and I believe it&rsquo;s meant to be
              enjoyed. <span className="font-bold">JUST MEATS</span> has allowed
              me to eat delicious, high-quality protein at every meal, without
              compromising my responsibilities as a father, husband, business
              owner, and professional athlete.”
            </div>
            <div className="text-[16px] font-bold font-dunbar tracking-[0.8px]">
              RICH FRONING
            </div>
          </div>
        </div>
      )}
      {page != '/how-it-works' && (
        <div className="container-small relative h-[88px] sm:h-[128px] flex items-center justify-between py-4">
          <div className="absolute-center">
            <NavLink to="/" end prefetch="intent">
              <div className="w-[160px] sm:w-[196px]">
                <LogoWhite />
              </div>
            </NavLink>
          </div>
        </div>
      )}
      <div className="bg-[#6B1626] text-[#EFEEED] sm:pt-[55px] sm:pb-[25px] pt-[48px] pb-[22px]">
        <div className="container-small">
          <div className="max-w-[740px] w-full mx-auto flex justify-center">
            <div className="flex flex-col sm:gap-[53px] gap-[30px]">
              <div className="flex sm:flex-row flex-col sm:gap-[128px] gap-[35px]">
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
                    <NavLink end prefetch="intent" to="/faq">
                      FAQ
                    </NavLink>
                  </div>
                </div>
                <div>
                  <div className="font-bold tracking-[0.8px] sm:mb-[22px] mb-[18px]">
                    NEED HELP?
                  </div>
                  <div className="flex flex-col sm:text-[14px] text-[16px] font-bold sm:leading-[170%] leading-[190%]">
                    {/* <NavLink to="#">FAQs</NavLink> */}
                    {page === '/gym-program' && <NavLink to="#">FAQs</NavLink>}
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
      </div>
    </footer>
  )
}
