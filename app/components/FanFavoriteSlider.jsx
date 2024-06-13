import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import stepImage1 from '~/assets/images/Recipe1.png'
import stepImage2 from '~/assets/images/Recipe2.png'
import stepImage3 from '~/assets/images/Recipe1.png'
import stepImage4 from '~/assets/images/Recipe2.png'
import stepImage5 from '~/assets/images/Recipe1.png'
import stepImage6 from '~/assets/images/Recipe2.png'

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
        slidesPerView: 4.5,
        spaceBetween: 40,
    },
}

const steps = [
    {
        image: stepImage1,
        text: 'Select whatever flavor that you feel in the mood for',
        subtext: 'Select whatever flavor that you feel in the mood for',
    },
    {
        image: stepImage2,
        text: 'Reheat the meat with its included Cooking Sauce in a hot skillet',
        subtext: 'Reheat the meat with its included Cooking Sauce in a hot skillet',
    },
    {
        image: stepImage3,
        text: 'Pair with your favorite sides and enjoy amazing flavor',
        subtext: 'Pair with your favorite sides and enjoy amazing flavor',
    },
    {
        image: stepImage4,
        text: 'Pair with your favorite sides and enjoy amazing flavor',
        subtext: 'Pair with your favorite sides and enjoy amazing flavor',
    },
    {
        image: stepImage5,
        text: 'Pair with your favorite sides and enjoy amazing flavor',
        subtext: 'Pair with your favorite sides and enjoy amazing flavor',
    },
    {
        image: stepImage6,
        text: 'Pair with your favorite sides and enjoy amazing flavor',
        subtext: 'Pair with your favorite sides and enjoy amazing flavor',
    },
]


export const FanFavoriteSlider = () => {
    return (
        <div className="relative flex justify-center overflow-x-hidden sm:max-w-full max-w-[425px] sm:pb-[40px] pb-[30px]">
            <div className="w-[90%] mx-auto">
                <Swiper
                    loop
                    autoplay
                    pagination={{ clickable: true }}
                    slidesPerView="auto"
                    modules={[Pagination]}
                    breakpoints={swiperBreakpoints}
                    centeredSlides="true"
                    initialSlide={1}
                    className="fav-favorite-slider"
                >
                    {steps.map((step, index) => (
                        <SwiperSlide key={index} className='pb-[30px]'>
                            <div className="relative rounded-[8px] overflow-hidden mb-[50px] w-full"
                                style={{ boxShadow: '0px 30px 30px -9px rgba(0, 0, 0, 0.14)' }}>
                                <img className="w-full" src={step.image} alt="" />
                                <div className="relative bg-white sm:px-[26px] sm:py-[30px] px-[22px] py-[20px] min-h-[132px]">
                                    <div className="text-[#231B19] text-center tracking-[1px] leading-[20px] font-bold font-hudson sm:mb-[20px] mb-[18px]">LOREM IPSUM DOLOR SIT AMET</div>
                                    <div className="text-[#231B19] text-center font-barlow text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus sapien non lobortis tincidunt. </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    )
}