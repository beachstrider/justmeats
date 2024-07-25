import { NavLink } from '@remix-run/react'

import cow from '~/assets/images/Cow.png'

import { StepSlider } from './StepSlider'

export const HowItWorks = () => {
  return (
    <section className="relative flex flex-col items-center">
      <img
        src={cow}
        alt=""
        className="absolute top-[-46px] right-0 hidden lg:block"
      />
      <div className="md:pt-[62px] pt-[54px] lg:pb-[60px] pb-[60px] w-full">
        <div className="lg:text-[14px] font-bold leading-[23px] lg:tracking-[2.8px] text-[12px] tracking-[2.8px] text-[#231B19] text-center">
          HOW OUR NEW PARTY SIZED PREMIUM BBQ MEAT TRAYS WORK
        </div>
        <div className="container-small">
          <div className="text-center text-[#6B1626] lg:text-[36px] text-[24px] font-bold leading-tight lg:tracking-[1.8px] tracking-[1.2px] lg:mb-[20px] mb-[17px] font-hudson">
            A LEGENDARY BBQ EXPERIENCE
          </div>
        </div>
        <div className="flex justify-center lg:mb-[43px] mb-[35px] lg:px-0 px-[12px]">
          <div className="max-w-[932px] text-[#231b19] lg:text-center text-justify [word-spacing:-1px] lg:[word-spacing:0] lg:text-[18px] text-[16px] font-normal lg:leading-[26px] leading-[25px] tracking-[0.16px]">
            Every Just Meats product is a memorable taste experience, but this
            new 3lb portion is a new premium offering that will help you
            entertain your biggest and most important gatherings. These meats
            are delivered in whole form, which seals in even more juicy flavor
            to wow your guests with. Congrats, your going to become a backyard
            BBQ legend.
          </div>
        </div>
        <div className="text-[#EFEEED]">
          <StepSlider />
        </div>
        <div className="flex justify-center lg:gap-[20px] gap-[8px] text-[#EFEEED] px-[25px] py-[0] text-center">
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
