import { FanFavoriteSlider } from '~/components/FanFavoriteSlider'

export const YoumayalsoLike = () => {
  return (
    <section className="relative">
      <div className="bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat  px-[13px] py-[13px]"></div>
      <div className="bg-[url('../assets/images/black-horizontal-lines-wallpaper.png')] [background-size:100%] ">
        <div className="container flex flex-col items-center pt-[30%] sm:pt-[20%] md:pt-[10%] xl:pt-[70px] relative">
          <div className="text-center sm:text-[36px] text-[24px] font-hudson font-bold leading-tight sm:tracking-[1.8px] tracking-[1.2px] sm:mb-[20px] mb-[17px] font-mobile">
            YOU MAY ALSO LOVE
          </div>
        </div>
        <FanFavoriteSlider />
      </div>
    </section>
  )
}
