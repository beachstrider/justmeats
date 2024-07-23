import pattern1 from '~/assets/images/16dr5416f4j6fty54h6aw5e1f6se51g6s5er1g.png'
import pattern2 from '~/assets/images/s56er4g6ser5g146ef213a2we1fda.png'
import { Spot } from '~/icons/Spot'

export default function BbqCookout() {
  return (
    <main className="bg-[#F8F2E8] lg:pt-[72px] lg:pb-[90px] pt-[36px] pb-[50px]">
      <div className="container-small">
        <div className="flex lg:flex-row flex-col lg:gap-[20px]">
          <div className="hidden w-full lg:block bg-img-2"></div>
          <div className="lg:max-w-[456px] w-full">
            <div className="lg:pt-[27px] pt-[27px] lg:pb-[37px] pb-[30px] bg-white lg:px-[36px] px-[32px] text-center">
              <div className="font-hudson font-bold leading-none lg:text-[32px] text-[24px] lg:tracking-[1.6px] tracking-[1.2px]">
                BBQ ENTRY ONLY
              </div>
              <div className="font-bold leading-[150%] lg:text-[18px] text-[16px] lg:mb-[16px] mb-[8px]">
                Texas BBQ - Fun - Good Company
              </div>
              <div className="text-[16px] leading-[1.3] lg:mb-[22px] mb-[18px]">
                We’re hosting a BBQ cookout and you’re invited! Just Meats & Pit
                Boss have partnered up to bring you the Ulti-Meat Texas BBQ
                experience.
              </div>
              <div className="font-bold leading-[20px] lg:text-[18px] text-[16px] text-[#BF4745] lg:mb-[22px] mb-[18px] max-w-[280px] mx-auto">
                Join Just Meats, Pit Boss, The Buttery Bros, and More!
              </div>
              <div className="text-[16px] leading-[1.3]">
                Come hang with the Just Meats and Pit Boss crews while enjoying
                a meal chock-full of delicious food prepared by our
                award-winning pitmasters. You can also delight in the fun and
                atmosphere the Buttery Bros and Podium Nutrition will provide.
              </div>
            </div>
            <div className="relative">
              <img src={pattern1} className="w-full" />
              <div className="bg-[#6b1626] pt-[20px] lg:pb-[22px] pb-[20px] text-white lg:px-[30px] px-[42px] lg:mt-0 mt-[-1px]">
                <div className="flex justify-center">
                  <div className="flex items-center gap-1">
                    <Spot />
                    <div className="font-bold underline leading-normal text-[18px]">
                      FORGED FITNESS
                    </div>
                  </div>
                </div>
                <div className="text-center text-[16px] mb-[20px]">
                  3000 Shotts St. Fort Worth TX 76107
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-[10px] lg:gap-[24px]">
                  <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                    <div className="text-[#BF4745] text-[16px] line-through">
                      $40 Per Person
                    </div>
                    <div className="font-bold leading-none text-[26px]">
                      ONLY $19
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex gap-[14px] items-center justify-between bg-white px-[24px] py-[9px]">
                      <button className="flex justify-center items-center font-bold text-[26px] text-[#BF4745]">
                        <span className="leading-[12px]">− </span>
                      </button>
                      <small className="font-medium lg:text-[20px] text-[18px] text-center flex justify-center items-center text-black">
                        1
                      </small>
                      <button className="flex justify-center items-center font-bold text-[26px] text-[#BF4745]">
                        <span className="leading-[12px]">+</span>
                      </button>
                    </div>
                    <button className="flex justify-center px-[30px] items-center bg-[#BF4745] border-2 border-transparent hover:border-white text-white font-bold text-[18px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
              <img src={pattern2} className="w-full lg:mt-0 mt-[-1px]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
