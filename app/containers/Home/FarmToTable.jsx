import { NavLink } from '@remix-run/react'

import fresh from '~/assets/images/fresh.png'

export const FarmToTable = () => {
  return (
    <section className="relative sm:h-[678px] flex sm:flex-row flex-col-reverse">
      <div className="sm:w-[50%]">
        <div className="bg-img-1 bg-cover bg-center sm:w-[88%] sm:h-full h-[280px]"></div>
      </div>
      <div className="flex-1 bg-white">
        <div className="sm:w-[540px] sm:pt-[100px] sm:pb-0 pt-[46px] pb-[45px] sm:px-0 px-[20px]">
          <div className="flex sm:justify-start justify-center">
            <div className="relative sm:text-left font-hudson font-bold sm:text-[36px] text-[24px] sm:mb-[40px] mb-[52px] sm:tracking-[1.8px] tracking-[1.2px]">
              <div className="relative z-[2]">FARM-TO-TABLE</div>
              <div className="absolute z-[1] sm:w-auto w-full sm:right-[-150px] sm:top-[-24px] top-[4px] flex sm:justify-start justify-center">
                <img src={fresh} />
              </div>
            </div>
          </div>
          <div className="sm:text-left text-center sm:text-[18px] text-[14px] font-medium sm:mb-[70px] mb-[22px]">
            Just Meats is committed to the ethical sourcing of meats from local
            farms where animals are raised in humane, stress-free environments.
            This allows us to provide healthier choices and support sustainable
            farming practices.
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
          </div>

          <div className="sm:text-left text-center">
            <NavLink
              end
              prefetch="intent"
              to="/about"
              className="px-[28px] py-[14px] leading-none bg-[#BF4745] hover:bg-[#6B1626] text-white font-bold tracking-[0.9px]"
            >
              LEARN MORE
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}
