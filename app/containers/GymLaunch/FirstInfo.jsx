import Marquee from 'react-fast-marquee'

import GymLaunchLogo from '~/assets/images/Gym_Launch_Logo_GoldBlack.png'
import skillet from '~/assets/images/Skillet.png'
import justmeatsBlack from '~/assets/images/justmeats-black.png'
import mayhemNation from '~/assets/images/mayhem-nation-1.png'
import traningCommunityNutrition from '~/assets/images/traning-community-nutrition.png'
import { Cooking } from '~/icons/Cooking'
import { MeatRecycle } from '~/icons/MeatRecycle'
import { SmilingSun } from '~/icons/SmilingSun'
import { Weighter } from '~/icons/Weighter'

export const FirstInfo = () => {
  return (
    <section className="bg-[#efeeed] overflow-x-hidden">
      <div className="bg-[#121315] sm:pb-[100px] pb-[66px]">
        <div className="relative container-small">
          <div className="flex justify-center sm:mb-[6px]">
            <div className="sm:w-[512px] sm:text-[14px] pt-5 text-[12px] font-normal text-[#E47A0F] sm:tracking-[3px] tracking-[2.5px] text-center sm:text-left">
              LEARN HOW YOU CAN EARN ANYWHERE FROM{' '}
              <span className="text-white">$5K - $10K</span> IN ADDITIONAL
              REVENUE IN AS LITTLE AS 3 MONTHS!
            </div>
          </div>
          <div className="sm:text-[36px] text-[24px] font-bold text-center text-white z-10 relative">
            CLAIM YOUR 6 FREE MEATS, AND WE WILL SHOW YOU HOW
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute w-full sm:h-1/2 h-[calc((100%-12px)/4)] bg-[#121315]">
          <img
            className="absolute sm:top-[-130px] top-[-110px] sm:right-[-30px] right-0 sm:w-auto w-[148px]"
            src={skillet}
          />
        </div>
        <div className="relative">
          <div className="absolute w-full sm:h-1/2 h-[calc((100%-12px)/4)] bg-[#222222]">
            <img
              className="absolute sm:top-[-130px] top-[-110px] sm:right-[-30px] right-0 sm:w-auto w-[148px]"
              src={skillet}
            />
          </div>
          <div className="relative container-small">
            <div className="w-full grid lg:grid-cols-4 grid-cols-2 sm:gap-[20px] gap-[12px]">
              <div
                className="aspect-[23/25] rounded-[8px] bg-white flex flex-col justify-end items-center sm:pt-[18px] pt-[12px] sm:pb-[50px] pb-[30px]"
                style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}
              >
                <div className="flex items-center flex-1">
                  <div className="sm:w-[112px] w-[72px] h-[72px] sm:h-[112px]">
                    <Cooking />
                  </div>
                </div>
                <div className="sm:text-[36px] text-[18px] font-bold tracking-[2px] sm:mb-[22px] mb-[14px]">
                  1,006,928
                </div>
                <div className="sm:text-[14px] text-[12px] text-[#6B1626] font-bold tracking-[3px]">
                  MEATS SOLD
                </div>
              </div>
              <div
                className="aspect-[23/25] rounded-[8px] bg-white flex flex-col justify-end items-center sm:pt-[18px] pt-[12px] sm:pb-[50px] pb-[30px]"
                style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}
              >
                <div className="flex items-center flex-1">
                  <div className="sm:w-[112px] w-[72px] h-[72px] sm:h-[112px]">
                    <SmilingSun />
                  </div>
                </div>
                <div className="sm:text-[36px] text-[18px] font-bold tracking-[2px] sm:mb-[22px] mb-[14px]">
                  84,097
                </div>
                <div className="sm:text-[14px] text-[12px] text-[#6B1626] font-bold tracking-[3px]">
                  CUSTOMERS
                </div>
              </div>
              <div
                className="aspect-[23/25] rounded-[8px] bg-white flex flex-col justify-end items-center sm:pt-[18px] pt-[12px] sm:pb-[50px] pb-[30px]"
                style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}
              >
                <div className="flex items-center flex-1">
                  <div className="sm:w-[112px] w-[72px] h-[72px] sm:h-[112px]">
                    <Weighter />
                  </div>
                </div>
                <div className="sm:text-[36px] text-[18px] font-bold tracking-[2px] sm:mb-[22px] mb-[14px]">
                  345,431 LBS
                </div>
                <div className="sm:text-[14px] text-[12px] text-[#6B1626] font-bold tracking-[3px]">
                  COOKED MEATS
                </div>
              </div>
              <div
                className="aspect-[23/25] rounded-[8px] bg-white flex flex-col justify-end items-center sm:pt-[18px] pt-[12px] sm:pb-[50px] pb-[30px]"
                style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}
              >
                <div className="flex items-center flex-1">
                  <div className="sm:w-[112px] w-[72px] h-[72px] sm:h-[112px]">
                    <MeatRecycle />
                  </div>
                </div>
                <div className="sm:text-[36px] text-[18px] font-bold tracking-[2px] sm:mb-[22px] mb-[14px]">
                  14,000+
                </div>
                <div className="sm:text-[14px] text-[12px] text-[#6B1626] font-bold tracking-[3px]">
                  SUBSCRIPTIONS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:pt-[98px] pt-[62px]">
        <div className="container-small">
          <div className="sm:text-[36px] text-[24px] font-bold tracking-[2px] text-center sm:mb-[100px] mb-[52px]">
            <div>A SUCCESFUL GYM...</div>
            <div>IS DETERMINED BY THE RESULTS IT DELIVERS ITS MEMBERS</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="sm:h-[225px] h-[260px] flex flex-col justify-end items-center">
              <div className="flex-1 sm:mb-[15px] mb-[27px] flex justify-center items-center">
                <div className="w-[260px]">
                  <img src={GymLaunchLogo} />
                </div>
              </div>
              <div className="text-[14px] leading-[23px] tracking-[2px] font-normal text-center max-w-[304px]">
                TAKES CARE OF THE FITNESS PROGRAMMING TO DELIVER OPTIMAL RESULTS
                INSIDE THE GYM{' '}
              </div>
            </div>
            <div className="sm:h-[225px] h-[260px] flex flex-col justify-end items-center">
              <div className="flex-1 sm:mb-[15px] mb-[27px] flex justify-center items-center">
                <div className="text-[60px] tracking-[2px] font-bold">YOU</div>
              </div>
              <div className="text-[14px] leading-[24px] tracking-[2px] font-normal text-center max-w-[300px] sm:mb-[15px] lg:mb-0">
                YOUR COACHING, YOUR PERSONALITY, YOUR GROUP OF MEMBERS BUILD THE
                COMMUNITY YOUR MEMBERS NEED
              </div>
            </div>
            <div className="sm:h-[225px] h-[260px] flex flex-col justify-end items-center">
              <div className="flex-1 sm:mb-[15px] mb-[27px] flex justify-center items-center">
                <div className="w-[260px]">
                  <img src={justmeatsBlack} />
                </div>
              </div>
              <div className="text-[14px] leading-[24px] tracking-[2px] font-normal text-center max-w-[336px]">
                THE ONLY NUTRITION SOLUTION YOU NEED IN ORDER TO FUEL YOUR
                MEMBERS WORKOUTS, ENABLE THEM TO RECOVER, AND SUPPORT ALL THEIR
                GOALS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-[104px] py-[64px] overflow-x-hidden relative">
        <div className="w-full ">
          <Marquee
            pauseOnHover={false}
            direction={'left'}
            speed={150}
            gradient={false}
            pauseOnClick={true}
            loop={100}
          >
            <img src={traningCommunityNutrition} />
          </Marquee>
        </div>
      </div>
    </section>
  )
}
