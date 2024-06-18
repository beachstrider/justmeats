import { NavLink } from '@remix-run/react'

import fresh from '~/assets/images/fresh.png'

export const FarmToTable = () => {
  return (
    <section className="relative lg:h-[678px]">
      <div className="container-small">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-[50%]">
            <div className="bg-img-1 bg-cover bg-center lg:w-[88%] lg:h-full h-[280px]"></div>
          </div>
          <div className="flex-1 bg-white">
            <div className="lg:w-[540px] lg:pt-[100px] lg:pb-0 pt-[46px] pb-[45px]">
              <div className="flex justify-center lg:justify-start">
                <div className="relative lg:text-left font-hudson font-bold lg:text-[36px] text-[24px] lg:mb-[40px] mb-[52px] lg:tracking-[1.8px] tracking-[1.2px]">
                  <div className="relative z-[2]">FARM-TO-TABLE</div>
                  <div className="absolute z-[1] lg:w-auto w-full lg:right-[-150px] lg:top-[-24px] top-[4px] flex lg:justify-start justify-center">
                    <img src={fresh} />
                  </div>
                </div>
              </div>
              <div className="lg:text-left text-center lg:text-[18px] text-[14px] font-medium lg:mb-[70px] mb-[22px]">
                Just Meats is committed to the ethical sourcing of meats from
                local farms where animals are raised in humane, stress-free
                environments. This allows us to provide healthier choices and
                support sustainable farming practices.
                <br />
                <br />
                We believe in the transparency of our supply chain, from the
                lush pastures to your plate. This farm-to-table approach not
                only enhances the flavor and quality of our meats but also
                aligns with our values of honesty, health, and sustainability.
                <br />
                <br />
                It’s our great pride to offer a delicious, ethically- sourced
                product to our customers.
              </div>

              <div className="text-center lg:text-left">
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
        </div>
      </div>
    </section>
  )
}
