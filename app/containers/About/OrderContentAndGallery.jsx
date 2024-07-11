import galleryImage1 from '~/assets/images/bailey-alexander-QRIem5jdOPM-unsplash.png'
import galleryImage3 from '~/assets/images/bailey-alexander-UsIH5HIHvbE-unsplash.png'
import galleryImage4 from '~/assets/images/shutterstock_1415936528.png'
import galleryImage5 from '~/assets/images/shutterstock_2267026131.png'
import galleryImage2 from '~/assets/images/stocksy4389965.png'
import { ElectricLeft } from '~/icons/ElectricLeft'
import { ElectricRight } from '~/icons/ElectricRight'

export const OrderContentAndGallery = () => {
  return (
    <section className="relative max-w-[1210px] w-full mx-auto lg:py-[66px] px-[20px] py-[40px]">
      <div className="relative flex lg:flex-row flex-col lg:gap-[0] gap-[15px] lg:text-left text-center tracking-tight lg:min-h-[112px]">
        <div className="flex flex-col shrink-0 justify-center text-[#000] lg:text-[18px] text-[16px] lg:w-[28%] w-full font-medium lg:font-normal lg:leading-[120%] leading-[157%] ">
          <div className="lg:max-w-[242px]">
            There are two ways to place your order on{' '}
            <div className="font-hudson">JUSTMEATS.COM</div>
          </div>
        </div>
        <div className="lg:w-[2px] w-[50%] shrink-0 rounded-full bg-[#000] lg:h-[auto] h-[2px] lg:m-[0] m-auto"></div>
        <div className="flex justify-center items-center lg:text-[18px] text-[16px] w-full font-normal leading-[139%]">
          <div className="lg:max-w-[378px]">
            <div className="lg:mb-[0] mb-[10px]">
              1- Select <strong>1 -TIME</strong> order, or{' '}
              <strong>SUBSCRIPTION</strong> order.{' '}
            </div>
            <div className="lg:mb-[0] mb-[10px]">
              2-Choose from our <strong>15+</strong> meat options.{' '}
            </div>
            <div className="lg:mb-[0] mb-[10px]">
              3- Apply any promo codes or discounts .
            </div>
          </div>
        </div>
        <div className="lg:w-[2px] w-[50%] shrink-0 rounded-full bg-[#000] lg:h-[auto] h-[2px] lg:m-[0] m-auto"></div>
        <div className="flex justify-center items-center lg:justify-end lg:w-[24%] w-full shrink-0">
          <div className="lg:max-w-[210px]">
            <div className="flex items-center	justify-center text-[#000]">
              <ElectricLeft />
              SUCCESS!
              <ElectricRight />
            </div>
            <div className="text-[#000] lg:text-[18px] text-[16px] font-medium lg:font-normal leading-[204%]">
              {' '}
              Your meat is on the way.
            </div>
          </div>
        </div>
      </div>
      <div className="relative justify-center hidden lg:flex">
        <div className="flex justify-between max-w-[1030px] w-full lg:pt-[74px] pt-[50px]">
          <div className="w-[26%]">
            <div className="mb-[10px]">
              <img className="h-[269px]" src={galleryImage1} alt="" />
            </div>
            <div className="flex justify-end">
              <img className="" src={galleryImage4} alt="" />
            </div>
          </div>
          <div className="w-[46.5%]">
            <div>
              <img className="w-full max-w-full" src={galleryImage2} alt="" />
            </div>
          </div>
          <div className="w-[26%]">
            <div className="mb-[10px]">
              <img className="" src={galleryImage3} alt="" />
            </div>
            <div className="">
              <img className="" src={galleryImage5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
