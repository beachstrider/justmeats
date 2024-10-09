import bannerimagemobile from '~/assets/images/sage-valley-banner-image-mobile.png'
import bannerimage from '~/assets/images/sage-valley-banner-image.png'
import ShortDot from '~/assets/images/short-dot.png'

export const TasteQuality = () => {
  return (
    <section className="relative">
      <div>
        <img src={bannerimage} alt="" className="hidden w-full sm:block" />
        <img
          src={bannerimagemobile}
          alt=""
          className="block w-full sm:hidden"
        />
        <div className="absolute sm:left-1/4 -translate-x-1/2 left-1/2 sm:top-1/2 top-[75%] -translate-y-1/2  max-w-[350px] w-full mx-auto lg:pt-[60px] pt-[40px] lg:pb-[132px] pb-[40px] px-[20px] tracking-tight">
          <div className="font-[baskerville-display-pt] text-[25px] font-bold leading-[28.78px] text-left text-[#AD916B] uppercase">
            TASTE the quality
          </div>
          <div className="max-w-[250px]">
            <img src={ShortDot} alt="" className="my-[15px]" />
            <div className="font-barlow text-[18px] font-normal leading-[24px] text-left text-[#fff]">
              Just Meats’ prepared selections are known for their unbeatable
              taste and top-notch quality. Now, you can bring that same
              exceptional standard home in the form of raw USDA Choice Angus
              steaks — a rare opportunity to grab exceptional beef at an
              unbelievable price.
            </div>
          </div>
        </div>
        <div className="bg-[url('../assets/images/long-dot.png')] bg-repeat absolute top-[20px] left-0 right-0 p-[4px]"></div>
        <div className="bg-[url('../assets/images/long-dot.png')] bg-repeat absolute bottom-[20px] left-0 right-0 p-[4px]"></div>
      </div>
    </section>
  )
}
