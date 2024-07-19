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
                  className="sm:bg-[url('../assets/images/richfroning-banner.png')] bg-[url('../assets/images/richfroning-bannermob.png')] h-full bg-cover sm:bg-top"
                >
                  <div className="flex h-full items-center">
                    <div className="relative container-small sm:text-center text-white tracking-[2px] sm:pb-0 pb-[250px] leading-normal sm:pt-0 pt-[50px]">
                        <img src={richfroningbannerimglogo} className="xl:w[530px] lg:w-[450px] md:w-[380px] w-[264px] sm:m-0  m-auto"/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="relative mt-[-7%] z-[99]">
          <div className="px-[10px] container-small w-full grid md:grid-cols-3 grid-cols-1 gap-[30px] font-barlow text-[#231B19] pb-[50px]">
              <div className="border-4 border-[#FFF] hover:border-[#BF4745] hover:cursor-pointer flex flex-col justify-between text-[#231B19] bg-[#FFF] p-[30px] md:my-[50px] md:mx-0 mx-[10px]" style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}>
                  <div className="text-center font-hudson text-[#BF4745] sm:text-[24px] text-[20px] font-[620] sm:tracking-[1.2px] tracking-[1px] uppercase">enter giveaway</div>
                  <div className="text-center text-[15px] font-bold leading-[21px] tracking-[1.5px]">(const Us only)</div>
                  <ul className="list-disc pl-[20px] sm:text-[18px] text-[16px] font-medium sm:leading-[20px] leading-[23px] sm:tracking-[1.8px] tracking-[1.6px] my-[20px]">
                      <li className="md:pb-[12px]">1 Month Supply of Just Meats</li>
                      <li className="md:pb-[12px]">Pit Boss Sportsman 820 Smoker</li>
                      <li className="md:pb-[12px]">Grizzly Cooler</li>
                      <li className="md:pb-[12px]">Others Coming</li>
                  </ul>
                  <div className="flex justify-center">
                      <button className="px-[40px] py-[12px] bg-[#BF4745] hover:bg-[#6B1626] text-[#EFEEED] tracking-[.9px] uppercase font-bold">
                      enter
                      </button>
                  </div>
              </div>
              <div className="border-4 border-[#FFF] hover:border-[#BF4745] hover:cursor-pointer flex flex-col justify-between text-[#231B19] bg-[#FFF] md:p-[40px] p-[30px]" style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}>
                  <div className="text-center font-hudson text-[#BF4745] sm:text-[24px] text-[20px]  font-[620] sm:tracking-[1.2px] tracking-[1px] uppercase">the ulti-meat win</div>
                  <div className="text-center text-[15px] font-bold leading-[21px] tracking-[1.5px]">(const Us only)</div>
                  <ul className="list-disc pl-[20px] sm:text-[18px] text-[16px] font-medium sm:leading-[20px] leading-[23px] sm:tracking-[1.8px] tracking-[1.6px] my-[20px]">
                      <li className="md:pb-[12px]">Automatic Giveaway Entry</li>
                      <li className="md:pb-[12px]"> <span className="font-bold">FREE</span> Cookout Entry/Meal</li>
                      <li className="md:pb-[12px]">Choose from a premade or build your own box </li>
                      <li className="md:pb-[12px]">Save <span className="font-bold">25%</span> off any subscription </li>
                      <li className="md:pb-[12px]">Save an additional  <span className="font-bold">$15</span> with code <span className="font-bold">FRONING</span></li>
                  </ul>
                  <div className="flex justify-center">
                      <button className="px-[40px] py-[12px] bg-[#BF4745] hover:bg-[#6B1626] text-[#EFEEED] tracking-[.9px] uppercase font-bold">
                      shop just meats
                      </button>
                  </div>
              </div>
              <div className="border-4 border-[#FFF] hover:border-[#BF4745] hover:cursor-pointer flex flex-col justify-between text-[#231B19] bg-[#FFF] p-[30px] md:my-[50px] md:mx-0 mx-[10px]" style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}>
                  <div className="text-center font-hudson text-[#BF4745] sm:text-[24px] text-[20px] font-[620] sm:tracking-[1.2px] tracking-[1px] uppercase">BBQ Entry only</div>
                  <ul className="list-disc pl-[20px] sm:text-[18px] text-[16px] font-medium sm:leading-[20px] leading-[23px] sm:tracking-[1.8px] tracking-[1.6px] my-[20px]">
                      <li className="md:pb-[12px]">$40 value for  <span className="font-bold">ONLY $19</span></li>
                      <li className="md:pb-[12px]">Food, games, giveaways, and FUN</li>
                      <li className="md:pb-[12px]">Just Meats and Pit Boss delivering a world class BBQ Experience.</li>
                  </ul>
                  <div className="flex justify-center">
                      <button className="px-[40px] py-[12px] bg-[#BF4745] hover:bg-[#6B1626] text-[#EFEEED] tracking-[.9px] uppercase font-bold">
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
