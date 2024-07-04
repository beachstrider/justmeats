
import { NavLink } from '@remix-run/react'
import JustMeatsBoxPart from '~/assets/images/JustMEATS_Tray_CHK_GRANH_THIGH.png'
import { FreeBox } from '~/icons/FreeBox'
import { Percentage } from '~/icons/Percentage'
import { GiftBox } from '~/icons/GiftBox'
export const Perks = () => {
   return (
    <section className="relative z-[1] bg-[#EFEEED] text-[#231B19] py-[62px] sm:py-[103px]">
      <img src={JustMeatsBoxPart} className="absolute md:block hidden right-0 top-[8%]"/>
      <div className="container flex flex-col items-center sm:mb-[56px] mb-[41px] relative">
        <div className="text-center sm:text-[36px] text-[24px] font-[620] font-hudson leading-normal sm:tracking-[1.8px] tracking-[1.2px] sm:mb-[20px] mb-[17px] font-mobile">
          Perks
        </div>

        <div className="w-full grid md:grid-cols-3 grid-cols-1 sm:gap-[20px] gap-[12px]">
          <div className="bg-white px-[40px] py-[50px]"
            style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}>
            <div className="flex items-center flex-1 justify-center">
              <div className="sm:w-[112px] sm:h-[112px] w-[95px] h-[95px] flex justify-center items-center">
                <div className="sm:w-[74px] w-[74px]">
                  <GiftBox />
                </div>
              </div>
            </div>
            <div className="font-nunito sm:text-[18px] text-[14px] font-normal leading-[26px] pt-[20px] sm:pt-[30px] text-center">
              Get your first box free! That's 6lbs of meats...looks like meat's back on the menu baby!
            </div>
          </div>
          <div className="bg-white px-[40px] py-[50px]"
            style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}>
            <div className="flex items-center flex-1 justify-center">
              <div className="sm:w-[112px] sm:h-[112px] w-[95px] h-[95px] flex justify-center items-center">
                <div className="sm:w-[75px] w-[75px]">
                  <Percentage />
                </div>
              </div>
            </div>
            <div className="font-nunito sm:text-[18px] text-[14px] font-normal leading-[26px] pt-[20px] sm:pt-[30px] text-center">
            You'll get a shareable customer discount promo code to share with your community! Get a 15% Commission on any orders you generate with your discount code.
            </div>
          </div>
          <div className="bg-white px-[40px] py-[50px]"
            style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}>
            <div className="flex items-center flex-1 justify-center">
              <div className="sm:w-[112px] sm:h-[112px] w-[95px] h-[95px] flex justify-center items-center">
                <div className="sm:w-[126px] w-[92px]">
                  <FreeBox />
                </div>
              </div>
            </div>
            <div className="font-nunito sm:text-[18px] text-[14px] font-normal leading-[26px] pt-[20px] sm:pt-[30px] text-center">
              Get a free box of product every time your code generates 5 orders.
            </div>
          </div>
        </div>
      </div>
      <div className="container text-[#EFEEED] relative">
        <div className="flex justify-center sm:gap-[20px] gap-[8px]">
          <NavLink
            end
            to="/about"
            prefetch="intent"
            className="font-dunbar text-[16px] font-medium px-[24px] py-[12px] bg-[#6B1626] leading-normal uppercase"
          >
            Learn more
          </NavLink>
        </div>
      </div>
    </section>
    )
}