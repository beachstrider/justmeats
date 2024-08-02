import { useRef } from 'react'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { NavLink } from '@remix-run/react'

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
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
}

export const Slider = ({ recipes, removeFavoriteRecipe }) => {
  const ref = useRef()
  const { lg } = useResponsive()

  return (
    <div className="relative flex justify-center overflow-x-hidden container-small sm:pb-[40px] pb-[30px]">
      <Swiper
        loop
        autoplay
        ref={ref}
        initialSlide={1}
        slidesPerView="auto"
        modules={[Pagination]}
        breakpoints={swiperBreakpoints}
        pagination={{ clickable: true }}
        centeredSlides={lg ? false : true}
        className="w-full fav-favorite-slider"
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index} className="pb-[30px]">
            <NavLink
              end
              prefetch="intent"
              to={`/recipes/${recipe.id}`}
              className="block relative overflow-hidden mb-[50px] w-full"
              style={{ boxShadow: '0px 30px 30px -9px rgba(0, 0, 0, 0.14)' }}
            >
              <img className="w-full" src={recipe.imgs[0]} alt="" />
              <div className="relative bg-white sm:px-[26px] sm:py-[30px] px-[22px] py-[20px] min-h-[132px]">
                <div className="text-[#231B19] text-center tracking-[1px] leading-[20px] font-bold font-hudson sm:mb-[20px] mb-[18px]">
                  {recipe.title}
                </div>
                <div className="text-[#231B19] text-center font-barlow text-[14px]">
                  {recipe.description}
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute lg:left-0 left-[2px] z-10 top-[38%]"
        onClick={() => ref.current.swiper.slidePrev()}
      >
        <ChevronLeftIcon width={20} height={20} />
      </button>
      <button
        className="absolute lg:right-0 right-[2px] z-10 top-[38%]"
        onClick={() => ref.current.swiper.slideNext()}
      >
        <ChevronRightIcon width={20} height={20} />
      </button>
    </div>
  )
}
