import { useLocation } from 'react-router-dom'

import { NavLink, useMatches } from '@remix-run/react'

import { LogoWhite } from '~/icons/LogoWhite'

export const Footer = () => {
  const matches = useMatches()
  const location = useLocation()
  const isSpecialsPage = location.pathname === '/gym-launch' || location.pathname === '/gym'
  const currentYear = new Date().getFullYear()
  return (
    <footer className={`${isSpecialsPage ? 'bg-[#6B1626]' : 'bg-[#231b19]'}`}>
      <div className="container-small relative h-[88px] sm:h-[128px] flex items-center justify-between py-4">
        <div className="absolute-center">
          <NavLink to="/" end prefetch="intent">
            <div className="w-[148px] sm:w-[214px]">
              <LogoWhite />
            </div>
          </NavLink>
        </div>
      </div>
      {matches.at(-1).pathname === '/rich-froning' && (
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
      {matches.at(-1).pathname === '/all-recipes' || matches.at(-1).pathname === '/recipe' && (
        <div className="footer max-w-[100%] bg-[#6B1626]">
          <div className="container-small">
            <div className="flex flex-wrap items-start justify-between gap-10 py-10 lg:flex-nowrap lg:gap-10 sm:py-20 ">
              <div className="flex items-start justify-between w-full gap-10 navLinks sm:w-5/12 lg:w-1/4">
                <ul className="">
                  <li className="mb-4 text-xl font-medium text-white ">
                    About Us
                  </li>
                  <li className="text-white font-normal text-base my-2 transition hover:text-[#862E1B] cursor-pointer ">
                    <NavLink end prefetch="intent" to="/products/custom-bundle">
                      Menu
                    </NavLink>
                  </li>
                  <li className="text-white font-normal text-base my-2 transition hover:text-[#862E1B] cursor-pointer ">
                    <NavLink end prefetch="intent" to="/about">
                      How It Works
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="flex items-start justify-between w-full gap-10 navLinks sm:w-5/12 lg:w-1/4">
                <ul className="">
                  <li className="mb-4 text-xl font-medium text-white ">
                    Need Help?
                  </li>
                  <li className="text-white font-normal text-base my-2 transition hover:text-[#862E1B] cursor-pointer ">
                    <NavLink end prefetch="intent" to="">
                      FAQs
                    </NavLink>
                  </li>
                  <li className="text-white font-normal text-base my-2 transition hover:text-[#862E1B] cursor-pointer ">
                    <NavLink end prefetch="intent" to="/term-services">
                      Terms of Service
                    </NavLink>
                  </li>
                  <li className="text-white font-normal text-base my-2 transition hover:text-[#862E1B] cursor-pointer ">
                    <NavLink end prefetch="intent" to="/refund-policy">
                      Refund & Cancellation Policy
                    </NavLink>
                  </li>
                  <li className="text-white font-normal text-base my-2 transition hover:text-[#862E1B] cursor-pointer ">
                    <NavLink end prefetch="intent" to="/privacy-policy">
                      Privacy Policy
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="w-full contactInfo sm:w-5/12 lg:w-1/4">
                <ul>
                  <li className="mb-4 text-3xl font-medium text-white ">
                    Contact Us
                  </li>
                  <li className="flex items-center my-2 text-base font-normal text-white " style={{ gap: '15px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                      <g id="bxs:phone">
                        <path id="Vector" d="M19.3949 15.7117L15.6661 12.3237C15.4898 12.1636 15.2582 12.0782 15.0201 12.0856C14.782 12.093 14.5561 12.1925 14.3901 12.3631L12.195 14.6191C11.6666 14.5182 10.6044 14.1873 9.51095 13.0974C8.41753 12.0038 8.08638 10.9396 7.98823 10.4152L10.2439 8.22072C10.4149 8.05492 10.5146 7.82914 10.522 7.59116C10.5293 7.35318 10.4437 7.12168 10.2833 6.94564L6.89389 3.22031C6.7334 3.04372 6.51035 2.9366 6.2721 2.92171C6.03385 2.90682 5.79918 2.98533 5.61792 3.14056L3.62737 4.84647C3.46878 5.00553 3.37413 5.21722 3.36136 5.44139C3.3476 5.67056 3.08525 11.0991 7.2975 15.3102C10.9722 18.9815 15.5752 19.2501 16.8429 19.2501C17.0282 19.2501 17.142 19.2446 17.1723 19.2427C17.3966 19.2302 17.6083 19.1352 17.7667 18.976L19.4729 16.9859C19.6288 16.8053 19.7079 16.571 19.6934 16.3329C19.6788 16.0949 19.5717 15.8719 19.3949 15.7117Z" fill="#EFEEED" />
                      </g>
                    </svg>
                    888-343-1242
                  </li>
                  <li className="flex items-center my-2 text-base font-normal text-white " style={{ gap: '15px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                      <g id="material-symbols:mail">
                        <path id="Vector" d="M3.60553 15C3.19275 15 2.8395 14.8533 2.5458 14.5598C2.25209 14.2663 2.10499 13.913 2.10449 13.5V4.5C2.10449 4.0875 2.25159 3.7345 2.5458 3.441C2.84 3.1475 3.19325 3.0005 3.60553 3H15.6139C16.0267 3 16.3802 3.147 16.6744 3.441C16.9686 3.735 17.1154 4.088 17.1149 4.5V13.5C17.1149 13.9125 16.9681 14.2658 16.6744 14.5598C16.3807 14.8538 16.0272 15.0005 15.6139 15H3.60553ZM9.60971 9.75L15.6139 6V4.5L9.60971 8.25L3.60553 4.5V6L9.60971 9.75Z" fill="#EFEEED" />
                      </g>
                    </svg> support@justmeats.com
                  </li>
                  <li className="my-2 text-base font-normal text-white "></li>
                </ul>
                <div className="flex mt-5 social-icons" style={{ gap: '15px' }}>
                  <a
                    href="https://www.facebook.com/profile.php?id=61550191665305"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      height="18"
                      className="social-icon"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/justmeats.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="18"
                      className="social-icon"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@justmeats.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="18"
                      className="social-icon"
                    >
                      <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyRight">
            <div className="container py-6 mx-auto">
              <p className="text-lg font-normal text-white">
                &copy; {currentYear} JUST MEATS, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
