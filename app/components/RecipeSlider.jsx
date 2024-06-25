import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Recipeimg1 from '~/assets/images/Recipeimg1.png'
// import Recipeimg2 from '~/assets/images/Recipe2.png'

const Recipeimgs = [
    {
        image: Recipeimg1,
    },
    {
        image: Recipeimg1,
    },
    {
        image: Recipeimg1,
    },
    {
        image: Recipeimg1,
    },
]


export const RecipeSlider = () => {
    return (
        <div>
            <Swiper
                loop
                slidesPerView="auto"
                centeredSlides="true"
                initialSlide={1}
                className=""
            >
                {Recipeimgs.map((Recipeimg, index) => (
                    <SwiperSlide key={index} className='pb-[30px]'>
                        <img className="" src={Recipeimg.image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    )
}