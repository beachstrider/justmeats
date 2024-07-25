import { NavLink } from '@remix-run/react'

import yourGym from '~/assets/images/gymrewardimg1.png'
import yourCommunity from '~/assets/images/gymrewardimg2.png'
import justmeatsBlack from '~/assets/images/gymrewardimg3.png'

export const Rewards = () => {
  return (
    <section>
      <div className="sm:py-[80px] py-[60px]">
        <div className="container-small">
          <div className="font-hudson sm:text-[36px] text-[24px] font-[620] tracking-[2px] text-center mb-[50px] uppercase">
            <div>Reap the Rewards of </div>
            <div>Positive Results</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:h-[225px] h-[150px] flex flex-col lg:justify-end justify-center items-center">
              <div className="lg:flex-1 lg:mb-[0px] mb-[20px] flex justify-center items-center">
                <div className="w-[260px]">
                  <img src={yourGym} className="m-auto" />
                </div>
              </div>
              <div className="text-[#000] sm:text-[18px] text-[16px] leading-[21px] sm:tracking-[1.8px] tracking-[1.6px] font-medium text-center max-w-[304px]">
                {/* <div className="opacity-0">EMPTY STRING TO MATCH HEIGHT</div> */}
                Provides the facility, training, and expertise that lead to
                results.
              </div>
            </div>
            <div className="lg:h-[225px] h-[150px] flex flex-col lg:justify-end justify-center items-center">
              <div className="lg:flex-1 lg:mb-[0px] mb-[20px] flex justify-center items-center">
                <div className="w-[260px]">
                  <img src={yourCommunity} className="m-auto" />
                </div>
              </div>
              <div className="text-[#000] sm:text-[18px] text-[16px]  leading-[21px] sm:tracking-[1.8px] tracking-[1.6px] font-medium text-center max-w-[304px]">
                Provides the support, environment, and coaching that lead to
                results.
              </div>
            </div>
            <div className="lg:h-[225px] h-[200px] flex flex-col lg:justify-end justify-center items-center">
              <div className="lg:flex-1 lg:mb-[0px] mb-[20px] flex justify-center items-center">
                <div className="w-[260px]">
                  <img src={justmeatsBlack} className="m-auto" />
                </div>
              </div>
              <div className="text-[#000] sm:text-[18px] text-[16px] leading-[21px] sm:tracking-[1.8px] tracking-[1.6px] font-medium text-center max-w-[304px]">
                Provides a universal nutrition solution highlighting proper
                protein intake that leads to results.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:gap-[20px] gap-[8px] text-[#EFEEED] px-[25px] lg:pb-0 pb-[50px] lg:pt-[50px] pt-[20px] text-center">
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
    </section>
  )
}
