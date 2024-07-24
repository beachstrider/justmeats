import Marquee from 'react-fast-marquee'

import marqueeimagetext from '~/assets/images/marqueeimagetext.png'
import traningCommunityNutrition from '~/assets/images/traning-community-nutrition.png'
import { EndQuate } from '~/icons/EndQuate'
import { StartQuate } from '~/icons/StartQuate'

export const MarqueeImage = () => {
  return (
    <section>
      <div className="bg-rec-96 relative">
        <div className="container-small">
          <div className="flex items-center gap-[30px]">
            <div className="md:w-[320px] absolute top-[-8%] md:left-0 left-[25%] md:right-0 right-[25%]">
              <img src={marqueeimagetext} />
            </div>
            <div class="text-[#231B19] sm:text-[18px] text-[16px] font-medium tracking-[1.8px] leading-[24px] py-[30px] md:ml-[320px] sm:pt-[30px] pt-[50%] text-center">
              <StartQuate />
              <span>
                I’ve trained hundreds of clients and they always want the best
                meal delivery service. I’ve suggested so many but I never found
                one that I truly loved. Until{' '}
                <span className="font-bold">Just Meats</span>! The best, hands
                down!{' '}
              </span>
              <EndQuate />
              <span className="font-bold">
                -Chris Hitchko, owner of Show Up Fitness
              </span>
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
