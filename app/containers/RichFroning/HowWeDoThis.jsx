import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { NavLink, useLoaderData } from '@remix-run/react'

import RichPhoto from '~/assets/images/RichPhoto.png'
import JustMeatsBoxPart from '~/assets/images/justmeats-box-part2.png'
import { Boutique } from '~/icons/Boutique'
import { Cooking } from '~/icons/Cooking'
import { Pig } from '~/icons/Pig'
import { RunningTruck } from '~/icons/RunningTruck'

const swiperBreakpoints = {
  200: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  540: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  789: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
}

const sliderItemColors = ['#572d2d', '#7b4931', '#323e47', '#9d6938']

export const HowWeDoThis = () => {
  const { collections } = useLoaderData()

  const slides = {}

  for (const el of collections) {
    slides[el.id] = el.products.nodes.map((product, index) => (
      <SwiperSlide key={index}>
        <div className="relative flex flex-col aspect-square mt-[24%] mb-[20%]">
          <div
            className="relative px-[25px] pt-[12%] pb-[8%] rounded-t-[8px] h-[69%] flex text-white"
            style={{ backgroundColor: sliderItemColors[index % 4] }}
          >
            <div className="relative flex items-end justify-center flex-1">
              <div className="absolute w-[80%] top-0 -translate-y-1/2">
                <img src={product.images.nodes[1].url} className="rotate-90" />
              </div>
              <div className="xl:mb-[2%]">Everyday Meats</div>
            </div>
          </div>
          <div className="flex-1 bg-white py-[22px] px-[10px] flex justify-center items-center text-[20px] rounded-b-[8px] font-bold tracking-normal">
            <div className="truncate">{product.title}</div>
          </div>
        </div>
      </SwiperSlide>
    ))
  }

  return (
    <section className="relative z-[1] bg-[#F8F2E8] text-[#231B19] pt-[62px] sm:pt-[103px] sm:pb-[40px] pb-[44px]">
      <img
        src={JustMeatsBoxPart}
        className="absolute md:block hidden left-0 xl:top-[120px] top-[14%]"
      />
      <div className="container-small flex flex-col items-center  sm:mb-[56px] mb-[41px] relative">
        <div className="sm:text-[14px] font-bold leading-[23px] sm:tracking-[2.8px] text-[12px] tracking-[2.8px] text-[#6B1626] text-center sm:mb-[6px] mb-[4px]">
          STAY LEAN, EAT CLEAN, SAVE GREEN
        </div>
        <div className="text-center sm:text-[36px] text-[24px] font-bold font-hudson leading-tight sm:tracking-[1.8px] tracking-[1.2px] sm:mb-[20px] mb-[17px] font-mobile">
          TRADE PROTEIN PROBLEMS
          <br />
          FOR PROTEIN PERFECTION
        </div>
        <div className="max-w-[730px] text-[#231b19] sm:text-center text-justify [word-spacing:-1px] sm:[word-spacing:0] sm:text-[18px] text-[16px] font-normal sm:leading-[26px] leading-[25px] tracking-[0.16px] sm:mb-[51px] mb-[63px]">
          Prepping protein every week can be challenging, expensive, and
          time-consuming - even if you know what you&rsquo;re doing. So, we
          tackled the protein problem head on. We deliver delicious beef, pork,
          and chicken professionally flavored and pre-cooked to perfection.
        </div>

        <div className="w-full grid md:grid-cols-4 grid-cols-2 sm:gap-[20px] gap-[12px]">
          <div
            className="md:aspect-[23/25] aspect-[172/208] bg-white flex flex-col justify-end items-center sm:pt-[30px] pt-[16px] sm:pb-[50px] pb-[28px]"
            style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="flex items-center flex-1">
              <div className="sm:w-[112px] sm:h-[112px] w-[95px] h-[95px] flex justify-center items-center">
                <div className="sm:w-[74px] w-[74px]">
                  <RunningTruck />
                </div>
              </div>
            </div>
            <div className="font-hudson sm:text-[24px] text-[16px] font-semibold sm:tracking-[1px] tracking-[0.8px] sm:mb-[22px] mb-[12px]">
              CONVENIENCE
            </div>
            <div className="sm:text-[14px] text-[14px] leading-[15px] sm:px-[35px] px-[20px] text-center">
              Delivered to your home and ready to serve in minutes
            </div>
          </div>
          <div
            className="xl:aspect-[23/25] aspect-[172/208] bg-white flex flex-col justify-end items-center sm:pt-[30px] pt-[16px] sm:pb-[50px] pb-[28px]"
            style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="flex items-center flex-1">
              <div className="sm:w-[112px] sm:h-[112px] w-[95px] h-[95px] flex justify-center items-center">
                <div className="sm:w-[75px] w-[75px]">
                  <Cooking />
                </div>
              </div>
            </div>
            <div className="font-hudson sm:text-[24px] text-[16px] font-semibold sm:tracking-[1px] tracking-[0.8px] sm:mb-[22px] mb-[12px]">
              TASTE
            </div>
            <div className="sm:text-[14px] text-[14px] leading-[15px] sm:px-[35px] px-[20px] text-center">
              Delicately prepared and cooked by our master chefs
            </div>
          </div>
          <div
            className="xl:aspect-[23/25] aspect-[172/208] bg-white flex flex-col justify-end items-center sm:pt-[30px] pt-[16px] sm:pb-[50px] pb-[28px]"
            style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="flex items-center flex-1">
              <div className="sm:w-[112px] sm:h-[112px] w-[95px] h-[95px] flex justify-center items-center">
                <div className="sm:w-[126px] w-[92px]">
                  <Boutique />
                </div>
              </div>
            </div>
            <div className="font-hudson sm:text-[24px] text-[16px] font-semibold sm:tracking-[1px] tracking-[0.8px] sm:mb-[22px] mb-[12px]">
              VARIETY
            </div>
            <div className="sm:text-[14px] text-[14px] leading-[15px] sm:px-[18px] px-[12px] text-center">
              Choose from 12 delicious flavors with new ones added regularly
            </div>
          </div>
          <div
            className="xl:aspect-[23/25] aspect-[172/208] bg-white flex flex-col justify-end items-center sm:pt-[30px] pt-[16px] sm:pb-[50px] pb-[28px]"
            style={{ boxShadow: '0px 40px 45px -14px rgba(0, 0, 0, 0.15)' }}
          >
            <div className="flex items-center flex-1">
              <div className="sm:w-[112px] sm:h-[112px] w-[92px] h-[92px] flex justify-center items-center">
                <div className="sm:w-[60px] w-[60px]">
                  <Pig />
                </div>
              </div>
            </div>
            <div className="font-hudson sm:text-[24px] text-[16px] font-semibold sm:tracking-[1px] tracking-[0.8px] sm:mb-[22px] mb-[12px]">
              PRICE
            </div>
            <div className="sm:text-[14px] text-[14px] leading-[15px] sm:px-[35px] px-[20px] text-center">
              Restaurant quality taste at a fraction of the price{' '}
            </div>
          </div>
        </div>
      </div>
      <div className="container-small text-[#EFEEED] relative">
        <div className="flex justify-center sm:gap-[20px] gap-[8px]">
          <NavLink
            end
            to="/about"
            prefetch="intent"
            className="font-bold px-[24px] py-[12px] bg-[#BF4745] hover:bg-[#6B1626] tracking-[1px]"
          >
            HOW WE DO IT
          </NavLink>
        </div>
      </div>
      <div className=""></div>
    </section>
  )
}
