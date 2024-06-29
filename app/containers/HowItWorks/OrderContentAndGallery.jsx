import galleryImage1 from '~/assets/images/bailey-alexander-QRIem5jdOPM-unsplash.png'
import galleryImage2 from '~/assets/images/stocksy4389965.png'
import galleryImage3 from '~/assets/images/bailey-alexander-UsIH5HIHvbE-unsplash.png'
import galleryImage4 from '~/assets/images/shutterstock_1415936528.png'
import galleryImage5 from '~/assets/images/shutterstock_2267026131.png'
import { ElectricLeft } from '~/icons/ElectricLeft'
import { ElectricRight } from '~/icons/ElectricRight'

export const OrderContentAndGallery = () => {
  return (
    <section className="relative">
        <div className="flex justify-evenly sm:p-[50px] px-[20px] py-[50px] sm:flex-row flex-col sm:gap-[0] gap-[15px] sm:text-left text-center">
          <div className="flex flex-col justify-center text-[#000] sm:text-[18px] text-[16px] sm:w-[20%] w-[100%]">
            There are two ways to place your order on <div className="font-hudson">JUSTMEATS.COM</div>
          </div>
          <div className="sm:w-[2px] w-[50%] bg-[#000] sm:h-[auto] h-[2px] sm:m-[0] m-auto"></div>
          <div className="flex flex-col justify-center sm:text-[18px] text-[16px] sm:w-[20%] w-[100%]">
            <div className="sm:mb-[0] mb-[10px]">1- Select <strong>1 -TIME</strong> order, or <strong>SUBSCRIPTION</strong> order. </div>
            <div className="sm:mb-[0] mb-[10px]">2-Choose from our <strong>15+</strong> meat options. </div>
            <div className="sm:mb-[0] mb-[10px]">3- Apply any promo codes or discounts .</div>
          </div>
          <div className="sm:w-[2px] w-[50%] bg-[#000] sm:h-[auto] h-[2px] sm:m-[0] m-auto"></div>
          <div className="flex flex-col justify-center sm:w-[20%] w-[100%] text-center">
            <div className="flex items-center	justify-center text-[#000] ">
              <ElectricLeft />
              SUCCESS!
              <ElectricRight />
            </div>
            <div> Your meat is on the way.</div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-[20%_45%_20%] gap-3 sm:pb-[50px] px-[20px] justify-center">
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full float-right	h-full" src={galleryImage1} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full float-right	h-full" src={galleryImage4} alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full w-full" src={galleryImage2} alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full	h-full" src={galleryImage3} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full	h-full" src={galleryImage5} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
