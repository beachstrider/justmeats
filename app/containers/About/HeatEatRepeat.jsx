import StayFresh from '~/assets/images/StaysFresh.png'
import { DotsLine } from '~/icons/DotsLine'

export const HeatEatRepeat = () => {
  return (
    <section className="relative">
      <div className="absolute hidden w-1/2 h-full [background:linear-gradient(270deg,rgba(255,255,255,0.00)0%,rgba(255,255,255,0.79)75.17%)] lg:block"></div>
      <div className="lg:bg-[url('../assets/images/JustMeats_StyledProduct_Stills_Full.png')] bg-[url('../assets/images/JustMeats_StyledProduct_Stills_FullRes_Vertical.png')] bg-no-repeat bg-cover lg:pb-[0] pb-[280px] lg:bg-center bg-bottom">
        <div className="relative bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat  px-[13px] py-[13px]"></div>
        <div className="relative max-w-[1210px] w-full mx-auto lg:pt-[60px] pt-[40px] lg:pb-[132px] pb-[40px] px-[20px] tracking-tight">
          <div className="relative md:w-[700px] lg:flex lg:text-left text-center">
            <div className="lg:absolute lg:left-[-70px] lg:top-[-12px] relative lg:mb-0 mb-[22px]">
              <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">
                5
              </div>
            </div>
            <div>
              <div className="font-hudson lg:text-[28px] text-[24px] text-[#7D0E21] font-[420] leading-[120%] mb-[6px]">
                Heat. Eat. Repeat.
              </div>
              <div className="lg:text-[18px] text-[16px] text-[#7D0E21]  font-medium lg:font-normal leading-[120%] tracking-tight lg:mb-[30px] mb-[16px]">
                We want your meat to arrive as fresh as possible, so it’s flash
                frozen after we cook it.
              </div>
              <img
                src={StayFresh}
                alt=""
                className="m-auto lg:m-0 lg:ml-[-30px]"
              />
              <div className="lg:text-[62px] text-[54px] text-[#000] font-espiritu font-normal leading-[120%]">
                10 DAYS
              </div>
              <div className="lg:text-[24px] text-[21px] text-[#7D0F21] font-bold leading-[120%] lg:mt-[-16px] mt-[-10px] mb-[36px]">
                Stored in Fridge
              </div>
              <div className="lg:text-[62px] text-[54px] text-[#000] font-espiritu font-normal leading-[120%]">
                90-120 DAYS
              </div>
              <div className="lg:text-[24px] text-[21px] text-[#7D0F21] font-bold leading-[120%] lg:mt-[-16px] mt-[-10px]">
                Frozen
              </div>
              <div className="py-[20px]">
                <DotsLine />
              </div>
              <div className="tracking-tight">
                <div className="lg:text-[18px] text-[16px] text-[#000] font-medium lg:font-normal leading-[120%]">
                  To thaw your meat, place it in the fridge overnight, and then
                  reheat it using one of these three methods:{' '}
                </div>
                <ul className="lg:text-[18px] text-[16px] text-[#000] py-[20px] font-medium lg:font-normal leading-[120%]">
                  <li className="mb-[10px]">
                    1. Skillet or sauté pan on medium-high heat for two minutes.{' '}
                  </li>
                  <li className="mb-[10px]">
                    2. Air fryer at 350 degrees for six minutes.{' '}
                  </li>
                  <li className="mb-[10px]">
                    3. Oven at 300 degrees for 30-40 minutes (make sure to stir
                    after 20 minutes).{' '}
                  </li>
                </ul>
                <div className="lg:text-[18px] text-[16px] text-[#000] font-medium lg:font-normal leading-[120%]">
                  Serve with some sides or a salad and voilá!
                </div>
                <div className="lg:text-[18px] text-[16px] text-[#000] font-medium lg:font-normal leading-[120%]">
                  A delicious dinner is served.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
