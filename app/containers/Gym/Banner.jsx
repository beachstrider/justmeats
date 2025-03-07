import React from 'react'

import gymprogrambannerlogo from '~/assets/images/gymprogram-bannerlogo.png'

export const Banner = () => {
  return (
    <section className="sm:bg-[url('../assets/images/NewBannerYourgym1.png')] bg-[url('../assets/images/gym-program-banner-mob.png')] bg-cover bg-right-top bg-no-repeat">
      <div className="bg-[url('../assets/images/gym-program-banner.png')] sm:bg-[url('')] bg-no-repeat bg-transparent bg-bottom [background-size:100%_100%] mb-[-3px]">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row pt-[100px] text-center sm:text-left">
            <div className="basis-2/2">
              <div className="flex flex-col md:flex-col md:items-left md:pb-0 pb-[30px]">
                <div className="w-full md:w-[100%] h-auto  lg:pt-[50px] md:pt-[50px] max-w-[70%] sm:max-w-[100%] m-auto mb-[30px]">
                  <img className="" src={gymprogrambannerlogo} />
                </div>
                <div className="py-8">
                  <div className="sm:block hidden text-center text-white sm:text-[20px] font-bold md:pb-[100px] tracking-[1px] leading-normal uppercase">
                    maximize results with
                    <br />
                    just meats
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('../assets/images/Hatbandnew.png')] bg-repeat px-[13px] py-[13px]"></div>
    </section>
  )
}
