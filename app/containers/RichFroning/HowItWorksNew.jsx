import { NavLink } from '@remix-run/react'

import cow from '~/assets/images/Cow.png'
import { HowItWorksStepsSlider } from '~/components/HowItWorksStepsSlider'

export const HowItWorksNew = () => {
  return (
    <section className="relative flex flex-col items-center bg-yellow-pattern">
      <img
        src={cow}
        alt=""
        className="absolute top-[-46px] right-0 hidden sm:block"
      />
      <div className="md:pt-[62px] pt-[54px] sm:pb-[60px] pb-[60px] w-full">
        <div className="sm:text-[14px] font-bold leading-[23px] sm:tracking-[2.8px] text-[12px] tracking-[2.8px] text-[#231B19] text-center">
          HOW JUST MEATS WORKS
        </div>
        <div className="container-small">
          <div className="text-center text-[#6B1626] sm:text-[36px] text-[24px] font-bold leading-tight sm:tracking-[1.8px] tracking-[1.2px] sm:mb-[20px] mb-[17px] mt-[10px] font-hudson">
            THE ULTI-MEAT EXPERIENCE
          </div>
        </div>
        <div className="flex justify-center sm:mb-[43px] mb-[35px] sm:px-0 px-[12px]">
          <div className="max-w-[645px] text-[#231b19] sm:text-center text-center [word-spacing:-1px] sm:[word-spacing:0] sm:text-[18px] text-[16px] font-normal sm:leading-[26px] leading-[25px] tracking-[0.16px]">
            Here’s how having Just Meats delivered to your door changes the
            game: our meats marinate on the way to your door, while our
            innovative cooking sauce preserves the moisture and fills the meat
            with an infusion of flavor. 
          </div>
        </div>
        <div className="text-[#EFEEED]">
          <HowItWorksStepsSlider />
        </div>
        <div className="flex justify-center sm:gap-[20px] gap-[8px] text-[#EFEEED] px-[25px] py-[0] text-center">
          <NavLink
            end
            to="/about"
            prefetch="intent"
            className="font-bold px-[18px] md:px-[24px] py-[12px] bg-[#BF4745] hover:bg-[#6B1626] tracking-[1px]"
          >
            HOW IT WORKS
          </NavLink>
        </div>
      </div>
      <div className="h-[21px] bg-pattern3 w-full" />
    </section>
  )
}
