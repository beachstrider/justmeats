import onetime_order from '~/assets/images/onetime_order.png'
import subscribe_save from '~/assets/images/subscribbe_save.png'
import { OneTimeOrder } from '~/icons/OneTimeOrder'
import { SubscribeAndSaveSvg } from '~/icons/SubscribeAndSaveSvg'

export const SubscribeAndSave = () => {
  return (
    <section>
      <div className="bg-[url('../assets/images/computerWomen.png')] bg-no-repeat bg-cover [background-position-y:center] lg:[background-position-x:center] [background-position-x:-780px]">
        <div className="relative flex flex-col max-w-[1210px] w-full mx-auto pt-[66px] lg:pt-[100px] px-[20px] lg:pb-[70px] pb-[50px]">
          <div className="lg:order-1 order-2 lg:flex pb-[50px] pt-[0]">
            <div className="lg:max-w-[45%] lg:w-[100%] w-[50%] flex justify-center">
              <img src={onetime_order} alt="" />
            </div>
            <div className="lg:w-[10%] lg:rotate-0 rotate-[69deg] lg:m-[auto] mb-[-100px] mt-[-140px]">
              <div className="flex justify-center">
                <OneTimeOrder />
              </div>
              <div className="flex justify-center text-[#C58900] lg:text-[24px] text-[19px]">
                OR
              </div>
              <div className="flex justify-center">
                <SubscribeAndSaveSvg />
              </div>
            </div>
            <div className="lg:max-w-[45%] lg:w-[100%] w-[50%] flex justify-center float-right ">
              <img src={subscribe_save} alt=" " />
            </div>
          </div>
          <div className="flex justify-center order-3 w-full lg:order-2">
            <div className="text-[#FFF] lg:text-[20px] text-[14px] font-medium leading-[120%]">
              *Both options require a $75 order minimum
            </div>
          </div>
          <div className="relative lg:order-3 order-1 md:w-[700px] w-[100%] lg:flex max-w-[100%] lg:mt-[50px] lg:pb-0 pb-[40px] lg:text-left text-center">
            <div className="lg:absolute lg:left-[-70px] lg:top-[-12px] relative lg:mb-0 mb-[22px]">
              <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">
                3
              </div>
            </div>
            <div>
              <div className="font-hudson lg:text-[28px] text-[24px] text-[#FFF] font-[420] leading-[120%] mb-[6px]">
                PLACING YOUR ORDER
              </div>
              <div className="lg:text-[18px] text-[16px] text-[#FFF] font-medium lg:font-normal leading-[120%]">
                It’s all pretty easy to do. Go to JUSTMEATS.COM. Subscribe or
                place a one-time order. If you subscribe you can save big and
                even get free meats. But before anyone asks, we don’t do
                wholesale orders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
