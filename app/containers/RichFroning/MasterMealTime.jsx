import mastermealtime1 from '~/assets/images/master-mealtime1.png'
import mastermealtime2 from '~/assets/images/master-mealtime2.png'
import mastermealtime3 from '~/assets/images/master-mealtime3.png'
import mastermealtime4 from '~/assets/images/master-mealtime4.png'

export const MasterMealTime = () => {
  return (
    <section className="bg-[#FFF] text-[#231B19] pt-[62px] sm:pt-[103px] relative overflow-x-hidden">
      <div className="container-small flex flex-col items-center sm:mb-[56px] mb-0 relative">
        <div className="font-hudson sm:text-[36px] font-[620] leading-normal sm:tracking-[1.8px] text-[24px] tracking-[1.2px] text-center sm:mb-[20px] mb-[17px] uppercase">
          the masters of mealtime
        </div>

        <div className="max-w-[780px] font-barlow sm:text-[18px] text-[16px] font-normal leading-normal sm:tracking-[1.8px]  tracking-[1.6px] text-center text-[#231B19] m-auto sm:mb-[50px] mb-[20px]">
          Every great training program needs high quality, clean protein.
          That&apos;s where Just Meats comes in. We make the meat, so you can
          make the meal — by delivering the meat for all your nutritional needs.
        </div>
        <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-[20px] md:p-0 p-[30px]">
          <div
            className="relative overflow-hidden md:mb-0 mb-[30px] w-full"
            style={{ boxShadow: '0px 30px 30px -9px rgba(0, 0, 0, 0.14)' }}
          >
            <div className="bg-pattern2 flex items-center justify-center relative bg-white px-[22px] tracking-[2px] min-h-[125px]">
              <div className="font-barlow sm:text-[20px] text-[18px] font-bold leading-[23px] sm:tracking-[2px] tracking-[1.8px] text-[#EFEEED] text-center">
                Ready in minutes
              </div>
            </div>
            <img className="w-full" src={mastermealtime1} alt="" />
          </div>
          <div
            className="relative overflow-hidden md:mb-0 mb-[30px] w-full"
            style={{ boxShadow: '0px 30px 30px -9px rgba(0, 0, 0, 0.14)' }}
          >
            <div className="bg-pattern2 flex items-center justify-center relative bg-white px-[22px] tracking-[2px] min-h-[125px]">
              <div className="font-barlow sm:text-[20px] text-[18px] font-bold leading-[23px] sm:tracking-[2px] tracking-[1.8px] text-[#EFEEED] text-center">
                Prepared by award-winning chefs
              </div>
            </div>
            <img className="w-full" src={mastermealtime2} alt="" />
          </div>
          <div
            className="relative overflow-hidden md:mb-0 mb-[30px] w-full"
            style={{ boxShadow: '0px 30px 30px -9px rgba(0, 0, 0, 0.14)' }}
          >
            <div className="bg-pattern2 flex items-center justify-center relative bg-white px-[22px] tracking-[2px] min-h-[125px]">
              <div className="font-barlow sm:text-[20px] text-[18px] font-bold leading-[23px] sm:tracking-[2px] tracking-[1.8px] text-[#EFEEED] text-center">
                12+ flavors
              </div>
            </div>
            <img className="w-full" src={mastermealtime3} alt="" />
          </div>
          <div
            className="relative w-full mb-0 overflow-hidden"
            style={{ boxShadow: '0px 30px 30px -9px rgba(0, 0, 0, 0.14)' }}
          >
            <div className="bg-pattern2 flex items-center justify-center relative bg-white px-[22px] tracking-[2px] min-h-[125px]">
              <div className="font-barlow sm:text-[20px] text-[18px] font-bold leading-[23px] sm:tracking-[2px] tracking-[1.8px] text-[#EFEEED] text-center">
                Restaurant-quality meat at a fraction of the price
              </div>
            </div>
            <img className="w-full" src={mastermealtime4} alt="" />
          </div>
        </div>
      </div>
      <div className="container-small text-[#EFEEED] sm:mb-[82px] mb-[62px] relative text-[18px]">
        <div className="max-w-[780px] font-barlow font-normal leading-normal tracking-[1.8px] text-center text-[#231b19] m-auto mb-[50px]">
          We solve tedious mealtime challenges by delivering grass-fed,
          chef-prepared, healthy meats straight to your door that are ready to
          be the centerpiece of your training diet in a few short minutes.
        </div>
        <div className="flex justify-center sm:gap-[20px] gap-[8px]">
          <button className="px-[32px] py-[12px] bg-[#BF4745] hover:bg-[#6B1626] tracking-[.9px] uppercase font-bold">
            learn more
          </button>
        </div>
      </div>
    </section>
  )
}
