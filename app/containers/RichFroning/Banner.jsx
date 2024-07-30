import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import sliderImage1 from '~/assets/images/rich-froning-banner.png'

const swiper1_items = [
  'FAMILY',
  'FITNESS',
  'FAITH',
  'SERVICE',
  'CONVENIENCE',
  'TASTE',
  'VARIETY',
  'PRICE',
]

const sliderImages = [{ image: sliderImage1 }]

export const Banner = () => {
  return (
    <section className="relative font-barlow text-[#EFEEED]">
      <div className="sm:h-[calc(100vh-120px)] flex flex-col">
        <div className="relative flex-1">
          <Swiper
            loop
            autoplay
            pagination={{ clickable: true }}
            slidesPerView={1}
            modules={[Pagination]}
            className="h-full rich-froning-banner-slider"
          >
            {sliderImages.map((slider, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-full sm:bg-cover sm:bg-top [background-position-x:920px]"
                  style={{ backgroundImage: `url(${slider.image})` }}
                >
                  <div className="flex items-center h-full">
                    <div className="relative container-small sm:pt-[100px] pt-[170px] text-center text-white sm:pb-0 pb-[156px] uppercase">
                      <div className="font-bold sm:text-[36px] text-[18px] cursor-default sm:tracking-[1.8px] tracking-[0.9px] leading-normal">
                        ELITE FITNESS + ELITE NUTRITION
                      </div>
                      <div className="font-hudson font-[620] sm:text-[62px] text-[37px] sm:mb-[49px] mb-[45px] cursor-default  sm:tracking-[3.72px] tracking-[2.22px] leading-normal">
                        <span className="text-[#BF4745]">25% </span>
                        OFF FIRST ORDER
                        <span className="text-[#BF4745]"> +$15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bg-[#231b19] py-[10px] text-[15px] leading-[33px] tracking-[3.45px] font-bold overflow-x-hidden">
          <div className="sm:flex hidden container-small justify-between sm:gap-0 gap-[67px]">
            <div>FAMILY</div>
            <div>FITNESS</div>
            <div>FAITH</div>
            <div>SERVICE</div>
            <div>CONVENIENCE</div>
            <div>TASTE</div>
            <div>VARIETY</div>
            <div>PRICE</div>
          </div>
          <div className="sm:hidden container-small flex justify-between sm:gap-0 gap-[67px]">
            <Swiper
              loop
              autoplay
              slidesPerView={3}
              spaceBetween={5}
              modules={[Pagination]}
              className="how-it-works-slider"
            >
              {swiper1_items.map((text, index) => (
                <SwiperSlide key={index} className="text-center">
                  {text}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="sm:px-0 px-[20px] bg-[#F8F2E8]">
        <div className="relative z-[2] bg-pattern2 sm:pt-0 sm:pb-0 pt-[28px] pb-[22px] sm:mt-0 mt-[-50%]">
          <div className="sm:text-[16px] text-[14px] container-small sm:text-left text-center sm:py-[24px] flex md:flex-row flex-col sm:justify-evenly justify-start md:items-start items-center">
            <div className="relative flex flex-col items-center sm:flex-row">
              <div className="flex flex-col justify-center flex-1 sm:flex-row">
                <div className="text-[#EFEEED]">
                  <div className="font-bold leading-none mb-[20px]">
                    Meats delivered
                  </div>
                  <div className="font-espiritu-condensed sm:text-[75px] text-[65px] tracking-[2.25px] leading-none">
                    1,006,928
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 md:w-[3px] w-[110px] md:h-[110px] h-[3px] rounded-full bg-white md:mt-0 md:mb-0 mt-[10px] mb-[20px]" />
            <div className="relative flex flex-col items-center sm:flex-row">
              <div className="flex flex-col justify-center flex-1 sm:flex-row">
                <div className="text-[#EFEEED]">
                  <div className="font-bold leading-none mb-[20px]">
                    Pounds Cooked
                  </div>
                  <div className="font-espiritu-condensed sm:text-[75px] text-[65px] tracking-[2.25px] leading-none">
                    345,431 <span className="text-[48px]">LBS.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 md:w-[3px] w-[110px] md:h-[110px] h-[3px] rounded-full bg-white md:mt-0 md:mb-0 mt-[10px] mb-[20px]" />
            <div className="relative flex flex-col sm:flex-row">
              <div className="flex flex-col justify-center flex-1 sm:flex-row">
                <div className="text-[#EFEEED]">
                  <div className="font-bold leading-none mb-[20px]">
                    Happy Customers
                  </div>
                  <div className="font-espiritu-condensed sm:text-[75px] text-[65px] tracking-[2.25px] leading-none">
                    84,097
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:block hidden h-[25px] bg-multicolor" />
      </div>
    </section>
  )
}
