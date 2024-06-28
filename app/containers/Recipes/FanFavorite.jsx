import { FanFavoriteSlider } from '~/components/FanFavoriteSlider'
import Pig from '~/assets/images/Pig.png'
export const FanFavorite = () => {
    return (
        <section className="relative">
            <img className="absolute top-[-15px] left-[10px]" src={Pig} alt="" />
            <div className="bg-[url('../assets/images/black-horizontal-lines-wallpaper.png')] [background-size:100%] ">
                <div className="container-small flex flex-col items-center pt-[30%] sm:pt-[20%] md:pt-[10%] xl:pt-[70px] relative">
                    <div className="text-center sm:text-[36px] text-[24px] font-hudson font-bold leading-tight sm:tracking-[1.8px] tracking-[1.2px] sm:mb-[20px] mb-[17px] font-mobile">
                        FAN FAVORITES
                    </div>
                    <div className="max-w-[935px] text-[#231b19] font-barlow sm:text-center text-justify [word-spacing:-1px] sm:[word-spacing:0] sm:text-[18px] text-[16px] font-normal sm:leading-[26px] leading-[25px] tracking-[0.16px] font-nunito sm:mb-[51px] mb-[63px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus sapien non lobortis tincidunt. Aliquam nisl
                        erat, laoreet ut enim vitae, egestas fermentum dui. Integer cursus venenatis risus vel imperdiet.
                    </div>
                </div>
                <FanFavoriteSlider />
                <div className="bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat  px-[13px] py-[13px]"></div>
            </div>
        </section>

    )
}