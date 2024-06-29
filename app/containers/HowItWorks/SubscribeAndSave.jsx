import onetime_order from '~/assets/images/onetime_order.png'
import subscribe_save from '~/assets/images/subscribbe_save.png'
import { OneTimeOrder } from '~/icons/OneTimeOrder'
import { SubscribeAndSaveSvg } from '~/icons/SubscribeAndSaveSvg'
export const SubscribeAndSave = () => {
  return (
    <section>
      <div className="bg-[url('../assets/images/computerWomen.png')] bg-no-repeat bg-cover sm:bg-center bg-right pt-[40px] sm:pt-[50px]">
        <div className="container sm:p-[50px] px-[20px] py-[50px] flex flex-col">
          <div className="sm:flex pb-[50px] pt-[0]">
            <div className="sm:max-w-[45%] sm:w-[100%] w-[50%] flex justify-center">
              <img src={onetime_order} alt="" />
            </div>
            <div className="sm:w-[10%] sm:rotate-0 rotate-[69deg] sm:m-[auto] mb-[-100px] mt-[-140px]">
              <div className="flex justify-center">
                <OneTimeOrder />
              </div>
              <div className="flex justify-center text-[#C58900] sm:text-[24px] text-[19px]">
                OR
              </div>
              <div className="flex justify-center">
                <SubscribeAndSaveSvg />
              </div>
            </div>
            <div className="sm:max-w-[45%] sm:w-[100%] w-[50%] flex justify-center float-right ">
              <img src={subscribe_save} alt=" " />
            </div>
          </div>
          <div className="text-[#FFF] text-center sm:text-[20px] text-[14px] font-medium leading-[120%]">
            *Both options require a $75 order minimum
          </div>
          <div className="sm:order-last order-first md:w-[700px] w-[100%] sm:flex max-w-[100%] sm:p-[50px] pb-[50px] sm:text-left text-center">
            <div className="sm:pr-[10px] pb-[20px]">
              <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">
                3
              </div>
            </div>
            <div>
              <div className="font-hudson sm:text-[28px] text-[24px] text-[#FFF] font-[420] leading-[120%]">
                PLACING YOUR ORDER
              </div>
              <div className="sm:text-[18px] text-[16px] text-[#FFF] font-medium sm:font-normal leading-[120%]">
                It’s all pretty easy to do. Go to JUSTMEATS.COM. Subscribe or
                place a one-time order. If you subscribe you can save big and even
                get free meats. But before anyone asks, we don’t do wholesale
                orders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
