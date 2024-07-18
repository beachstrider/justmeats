import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { NavLink } from '@remix-run/react'

import sliderImage1 from '~/assets/images/rich-froning-banner.png'
import richfroningbannerimglogo from '~/assets/images/richfroning-bannerimglogo.png'

const sliderImages = [
  { image: sliderImage1 },
]

export const NewBanner = () => {
  return (
    <section className="relative text-[#EFEEED] bg-[#F8F2E8] z-10">
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
                  className="h-full bg-cover sm:bg-top [background-position-x:920px]"
                  style={{ backgroundImage: `url(${slider.image})` }}
                >
                  <div className="flex h-full items-center">
                    <div className="relative container sm:text-center text-white tracking-[2px] sm:pb-0 pb-[156px] leading-normal sm:pt-0 pt-[100px]">
                        <img src={richfroningbannerimglogo} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="relative mt-[-7%] z-[99]">
          <div className="container w-full grid md:grid-cols-3 grid-cols-1 gap-[30px] font-barlow text-[#231B19] pb-[50px]">
              <div className="border-4 border-[#FFF] hover:border-[#BF4745] hover:cursor-pointer flex flex-col justify-between text-[#231B19] bg-[#FFF] p-[30px] md:my-[50px] md:mx-0 mx-[20px]" style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}>
                  <div className="text-center font-hudson text-[#BF4745] sm:text-[24px] text-[20px] font-[620] sm:tracking-[1.2px] tracking-[1px] uppercase">enter giveaway</div>
                  <div className="text-center text-[15px] font-bold leading-[21px] tracking-[1.5px]">(const Us only)</div>
                  <ul className="list-disc pl-[20px] sm:text-[18px] text-[16px] font-medium sm:leading-[20px] leading-[23px] sm:tracking-[1.8px] tracking-[1.6px] my-[20px]">
                      <li>1 Month Supply of Just Meats</li>
                      <br/>
                      <li>Pit Boss Sportsman 820 Smoker</li>
                      <br/>
                      <li>Grizzly Cooler</li>
                      <br/>
                      <li>Others Coming</li>
                  </ul>
                  <div className="flex justify-center">
                      <button className="px-[40px] py-[12px] bg-[#BF4745] text-[#EFEEED] tracking-[.9px] uppercase font-bold">
                      enter
                      </button>
                  </div>
              </div>
              <div className="border-4 border-[#FFF] hover:border-[#BF4745] hover:cursor-pointer flex flex-col justify-between text-[#231B19] bg-[#FFF] md:p-[40px] p-[30px]" style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}>
                  <div className="text-center font-hudson text-[#BF4745] sm:text-[24px] text-[20px]  font-[620] sm:tracking-[1.2px] tracking-[1px] uppercase">the ulti-meat win</div>
                  <div className="text-center text-[15px] font-bold leading-[21px] tracking-[1.5px]">(const Us only)</div>
                  <ul className="list-disc pl-[20px] sm:text-[18px] text-[16px] font-medium sm:leading-[20px] leading-[23px] sm:tracking-[1.8px] tracking-[1.6px] my-[20px]">
                      <li>Automatic Giveaway Entry</li>
                      <br/>
                      <li> <span className="font-bold">FREE</span> Cookout Entry/Meal</li>
                      <br/>
                      <li>Choose from a premade or build your own box </li>
                      <br/>
                      <li>Save <span className="font-bold">25%</span> off any subscription </li>
                      <br/>
                      <li>Save an additional  <span className="font-bold">$15</span> with code <span className="font-bold">FRONING</span></li>
                  </ul>
                  <div className="flex justify-center">
                      <button className="px-[40px] py-[12px] bg-[#BF4745] text-[#EFEEED] tracking-[.9px] uppercase font-bold">
                      shop just meats
                      </button>
                  </div>
              </div>
              <div className="border-4 border-[#FFF] hover:border-[#BF4745] hover:cursor-pointer flex flex-col justify-between text-[#231B19] bg-[#FFF] p-[30px] md:my-[50px] md:mx-0 mx-[20px]" style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}>
                  <div className="text-center font-hudson text-[#BF4745] sm:text-[24px] text-[20px] font-[620] sm:tracking-[1.2px] tracking-[1px] uppercase">BBQ Entry only</div>
                  <ul className="list-disc pl-[20px] sm:text-[18px] text-[16px] font-medium sm:leading-[20px] leading-[23px] sm:tracking-[1.8px] tracking-[1.6px] my-[20px]">
                      <li>$40 value for  <span className="font-bold">ONLY $19</span></li>
                      <br/>
                      <li>Food, games, giveaways, and FUN</li>
                      <br/>
                      <li>Just Meats and Pit Boss delivering a world class BBQ Experience.</li>
                  </ul>
                  <div className="flex justify-center">
                      <button className="px-[40px] py-[12px] bg-[#BF4745] text-[#EFEEED] tracking-[.9px] uppercase font-bold">
                      Purchase
                      </button>
                  </div>
              </div>
          </div>
      </div>
      <div className="h-[25px] bg-pattern3 w-full"></div>
    </section>
  )
}
