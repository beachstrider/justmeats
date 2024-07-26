import Marquee from 'react-fast-marquee'

import marqueeimagetext from '~/assets/images/marqueeimagetext.png'
import traningCommunityNutrition from '~/assets/images/traning-community-nutrition.png'
import { EndQuate } from '~/icons/EndQuate'
import { StartQuate } from '~/icons/StartQuate'

export const MarqueeImage = () => {
  return (
    <section>
      <div className="black-horizontal relative">
        <div className="container-small">
          <div className="flex items-center gap-[30px]">
            <div>
              <img
                src={marqueeimagetext}
                className="absolute md:top-[-26%] top-[-15%] md:left-[10%] md:-translate-x-1 left-1/2 -translate-x-1/2 "
              />
            </div>
            <div className="text-[#231B19] sm:text-[18px] text-[16px] font-medium tracking-[1.8px] leading-[24px] py-[30px] md:px-0 px-[20px] md:ml-[320px] md:pt-[30px] pt-[45%] text-center">
              <StartQuate />
              <span>
                I’ve trained hundreds of clients and they always want the best
                meal delivery service. I’ve suggested so many but I never found
                one that I truly loved. Until
                <span className="sm:font-medium font-bold">Just Meats</span>!
                The best, hands down!
              </span>
              <EndQuate />
              <span className="font-bold">
                -Chris Hitchko, owner of Show Up Fitness
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:pt-[104px] pt-[64px] overflow-x-hidden relative">
        <div className="w-full ">
          <Marquee
            pauseOnHover={false}
            direction={'left'}
            speed={150}
            gradient={false}
            pauseOnClick={true}
            loop={100}
          >
            <div className="font-espiritu text-[128px] font-normal text-[#6B1626]">
              TRAINING COMMUNITY NUTRITION
            </div>
            {/* <img src={traningCommunityNutrition} /> */}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
