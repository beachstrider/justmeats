import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import stepImage1 from '~/assets/images/free-preview-step-1.png'
import stepImage2 from '~/assets/images/free-preview-step-2.png'
import stepImage3 from '~/assets/images/free-preview-step-3.png'
import stepImage4 from '~/assets/images/free-preview-step-4.png'
import { useResponsive } from '~/hooks/useResponsive'

const swiperBreakpoints = {
  270: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  360: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 1.5,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 48,
  },
}

const steps = [
  {
    image: stepImage1,
    caption: 'WHOLE',
    text: 'These portions come in whole form for you to cut and serve.',
  },
  {
    image: stepImage2,
    caption: 'SMOKER',
    text: 'Finish in your smoker for extra smoke and best results.',
  },
  {
    image: stepImage3,
    caption: 'GRILL',
    text: 'Finish your tray on a grill and join the party.',
  },
  {
    image: stepImage4,
    caption: 'OVEN',
    text: 'Finish in the oven and enjoy high quality smoked meat, indoors.',
  },
]

export const StepSlider = () => {
  const { lg } = useResponsive()

  return (
    <div className="relative flex justify-center sm:overflow-x-auto overflow-x-hidden sm:mb-[56px] mb-[10px] sm:max-w-full max-w-[425px]">
      <div className="w-full lg:max-w-[1406px] mx-auto px-[20px]">
        <Swiper
          loop
          autoplay
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={swiperBreakpoints}
          centeredSlides={lg ? false : true}
          initialSlide={1}
          className="how-it-works-slider"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index} className="pb-[30px]">
              <div
                className="relative overflow-hidden sm:mb-0 mb-[50px] w-full"
                style={{ boxShadow: '0px 30px 30px -9px rgba(0, 0, 0, 0.14)' }}
              >
                <img className="w-full" src={step.image} alt="" />
                <div className="relative bg-white sm:px-[16px] sm:py-[30px] px-[16px] py-[20px] tracking-[2px] min-h-[104px]">
                  <span className="absolute -translate-x-1/2 left-1/2 bg-[#231B19] px-[13px] py-[3px] text-[14px] tracking-[0.7px] font-bold top-[-15px]">
                    {step.caption}
                  </span>
                  <div className="sm:mt-0 mt-[20px] font-medium text-[#231B19] text-center tracking-[1px] leading-[20px]">
                    {step.text}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {steps.map((step, index) => (
            <SwiperSlide key={index} className="pb-[30px]">
              <div
                className="relative overflow-hidden sm:mb-0 mb-[50px] w-full"
                style={{ boxShadow: '0px 30px 30px -9px rgba(0, 0, 0, 0.14)' }}
              >
                <img className="w-full" src={step.image} alt="" />
                <div className="relative bg-white sm:px-[16px] sm:py-[30px] px-[16px] py-[20px] tracking-[2px] min-h-[104px]">
                  <span className="absolute -translate-x-1/2 left-1/2 bg-[#231B19] px-[13px] py-[3px] text-[14px] tracking-[0.7px] font-bold top-[-15px]">
                    {step.caption}
                  </span>
                  <div className="sm:mt-0 mt-[20px] font-medium text-[#231B19] text-center tracking-[1px] leading-[20px]">
                    {step.text}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
