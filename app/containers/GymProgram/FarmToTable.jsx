import React, { useState } from 'react'

import fresh from '~/assets/images/fresh.png'

export const FarmToTable = () => {
  const [readMore, setReadMore] = useState(false)
  const extraContent = (
    <div className="font-barlow lg:text-left text-center lg:text-[18px] text-[14px] sm:font-medium font-normal mb-[30px] sm:leading-[26px] leading-[25px] tracking-[0px]">
      We believe in the transparency of our supply chain, from the lush pastures
      to your plate. This farm-to-table approach not only enhances the flavor
      and quality of our meats but also aligns with our values of honesty,
      health, and sustainability.
      <br />
      <br />
      It’s our great pride to offer a delicious, ethically- sourced product to
      our customers.
      <br />
      <br />
      <div className="font-hudson lg:text-left text-center lg:text-[24px] text-[20px] font-[620] leading-normal tracking-[1.2px] uppercase ">
        GRASS FED & FINISHED
      </div>
      <br />
      <div className="font-barlow lg:text-left text-center text-[14px] font-bold tracking-[0px]">
        NEVER ANY:{' '}
        <span className="text-[#BF4745]">
          ARTIFICIAL COLORS, ARTIFICIAL FLAVORS, ANTIBIOTICS, HORMONES, OR SEED
          OILS.
        </span>
      </div>
    </div>
  )
  const linkName = readMore ? 'Read Less' : 'Read All'
  return (
    <section>
      <div className="bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat px-[13px] py-[13px]"></div>
      <div className="relative lg:h-[678px] flex flex-col-reverse lg:flex-row bg-[#F8F2E8] text-[#231B19]">
        <div className="lg:w-[50%]">
          <div className="lg:bg-[url('../assets/images/richfroning-image1.png')] bg-[url('../assets/images/richfroning-image1-mob.png')]  bg-cover bg-center lg:w-[88%] lg:h-full h-[350px]"></div>
        </div>
        <div className="flex-1">
          <div className="lg:w-[540px] lg:pt-[80px] lg:pb-0 pt-[45px] pb-[45px] lg:px-0 px-[20px] xl:pr-0 lg:pr-[20px] md:pr-[20px]">
            <div className="flex flex-wrap justify-center items-center lg:justify-start lg:text-left font-hudson font-[620] lg:text-[36px] text-[24px] mb-[40px] lg:tracking-[1.8px] tracking-[1.2px] leading-normal">
              {/* FARM-TO-TABLE <img src={fresh} /> */}
              <div className="relative lg:text-left font-hudson">
                <div className="relative z-[2]">FARM-TO-TABLE</div>
                <div className="absolute z-[1] lg:w-auto w-full lg:right-[-150px] lg:top-[-24px] top-[10px] flex lg:justify-start justify-center">
                  <img src={fresh} />
                </div>
              </div>
            </div>
            <div className="lg:block hidden font-barlow lg:text-left text-center lg:text-[18px] text-[14px] sm:font-medium font-normal mb-[30px] sm:leading-[26px] leading-[25px] tracking-[0px]">
              Just Meats is committed to the ethical sourcing of meats from
              local farms where animals are raised in humane, stress-free
              environments. This allows us to provide healthier choices and
              support sustainable farming practices.
              <br />
              <br />
              We believe in the transparency of our supply chain, from the lush
              pastures to your plate. This farm-to-table approach not only
              enhances the flavor and quality of our meats but also aligns with
              our values of honesty, health, and sustainability.
              <br />
              <br />
              It’s our great pride to offer a delicious, ethically- sourced
              product to our customers.
              <br />
              <br />
              <div className="font-hudson lg:text-left text-center lg:text-[24px] text-[20px] font-[620] leading-normal tracking-[1.2px] uppercase ">
                GRASS FED & FINISHED
              </div>
              <br />
              <div className="font-barlow lg:text-left text-center text-[14px] font-bold tracking-[0px]">
                NEVER ANY:{' '}
                <span className="text-[#BF4745]">
                  ARTIFICIAL COLORS, ARTIFICIAL FLAVORS, ANTIBIOTICS, HORMONES,
                  OR SEED OILS.
                </span>
              </div>
            </div>

            <div className="lg:hidden block font-barlow lg:text-left text-center lg:text-[18px] text-[14px] sm:font-medium font-normal pt-[30px] sm:leading-[26px] leading-[25px] tracking-[0px]">
              Just Meats is committed to the ethical sourcing of meats from
              local farms where animals are raised in humane, stress-free
              environments. This allows us to provide healthier choices and
              support sustainable farming practices.
              <br />
              <br />
              {readMore && extraContent}
            </div>

            <div
              className="lg:hidden block text-center text-[#BF4745] text-[16px] font-bold leading-normal tracking-[0.8px] uppercase"
              onClick={() => {
                setReadMore(!readMore)
              }}
            >
              {linkName}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
