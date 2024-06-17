import { NavLink } from '@remix-run/react'

import { BannerIcon } from '~/icons/BannerIcon'

export const Banner = () => {
  return (
    <section className="relative">
      <div className="sm:h-[calc(100vh-120px)] max-h-[770px] flex flex-col sm:pt-0">
        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2">
          <div className="flex items-center justify-center flex-1 sm:px-0 px-[22px] sm:pb-0 pt-[40px] pb-[30px]">
            <div>
              <div className="sm:w-[492px] w-[344px] sm:mb-[32px] mb-[14px]">
                <BannerIcon />
              </div>
              <div className="sm:text-[18px] text-[#231B19] sm:mb-[36px] mb-[23px] sm:pl-[22px] pl-[18px]">
                Meticulously cooked and seasoned beef,{' '}
                <br className="hidden sm:block" />
                pork, and chicken delivered fresh to your door!
              </div>
              <div className="sm:pl-[22px] pl-[18px]">
                <NavLink
                  end
                  prefetch="intent"
                  to="/products/custom-bundle"
                  className="px-[28px] py-[14px] leading-none bg-[#BF4745] hover:bg-[#6B1626] text-white font-bold tracking-[0.9px] text-[18px]"
                >
                  GET MEATS
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-justmeats-banner sm:h-auto h-[366px]">
            <div className=""></div>
          </div>
        </div>
        <div className="sm:px-0 px-[20px] bg-[#F8F2E8]">
          <div className="bg-pattern2 sm:pt-0 sm:pb-0 pt-[28px] pb-[22px] sm:mt-0 mt-[-90px]">
            <div className="container-small sm:text-left text-center sm:py-[24px] grid grid-cols-1 sm:grid-cols-3">
              <div className="flex flex-col items-center flex-1 sm:flex-row">
                <div className="flex flex-col justify-center flex-1 sm:flex-row">
                  <div className="text-[#EFEEED]">
                    <div className="font-bold leading-none mb-[20px]">
                      Meats delivered
                    </div>
                    <div className="font-espiritu text-[75px] tracking-[2.25px] leading-none">
                      1,006,928
                    </div>
                  </div>
                </div>
                <div className="shrink-0 sm:w-[3px] w-[110px] sm:h-full h-[3px] rounded-full bg-white sm:my-0 my-[20px]" />
              </div>
              <div className="flex flex-col items-center flex-1 sm:flex-row">
                <div className="flex flex-col justify-center flex-1 sm:flex-row">
                  <div className="text-[#EFEEED]">
                    <div className="font-bold leading-none mb-[20px]">
                      Pounds Cooked
                    </div>
                    <div className="font-espiritu text-[75px] tracking-[2.25px] leading-none">
                      345,431 <span className="text-[48px]">LBS.</span>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 sm:w-[3px] w-[110px] sm:h-full h-[3px] rounded-full bg-white sm:my-0 my-[20px]" />
              </div>
              <div className="flex flex-col flex-1 sm:flex-row">
                <div className="flex flex-col justify-center flex-1 sm:flex-row">
                  <div className="text-[#EFEEED]">
                    <div className="font-bold leading-none mb-[20px]">
                      Happy Customers
                    </div>
                    <div className="font-espiritu text-[75px] tracking-[2.25px] leading-none">
                      84,097
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:block hidden h-[21px] bg-pattern1" />
        </div>
      </div>
    </section>
  )
}
