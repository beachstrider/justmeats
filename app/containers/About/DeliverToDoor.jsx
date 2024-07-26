import justmeatBbox from '~/assets/images/justmeat-box.png'

export const DeliverToDoor = () => {
  return (
    <section className="">
      <div className="relative max-w-[1210px] w-full mx-auto lg:pt-[74px] lg:pb-[74px] px-[20px] pt-[40px] pb-[60px] tracking-tight">
        <div className="lg:grid grid-cols-2 lg:mb-[28px] mb-[38px] w-full">
          <div className="relative text-center lg:flex lg:text-left max-w-[487px] w-full">
            <div className="lg:absolute lg:left-[-70px] lg:top-[-12px] relative lg:mb-0 mb-[22px]">
              <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">
                4
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="font-hudson lg:text-[28px] text-[24px] text-[#7D0E21] font-[420] leading-[120%] mb-[6px]">
                DELIVERED DIRECTLY TO <br className="block lg:hidden" />
                YOUR DOOR
              </div>
              <div className="lg:text-[18px] text-[16px] text-[#7D0E21]  font-medium lg:font-normal leading-[120%]">
                What to expect when you’re expecting{' '}
                <br className="block lg:hidden" />
                (your Just Meats order)
              </div>
              <div className="lg:hidden block pb-[210px] mt-[32px]">
                <div className="absolute left-[-20px] w-screen">
                  <img src={justmeatBbox} alt="" />
                </div>
              </div>

              <div className="lg:text-[18px] text-[16px] pt-[40px]  font-medium lg:font-normal leading-[120%]">
                Once your order has been placed, and you’ve received your
                confirmation email, it will take 5-7 days to process your order.
              </div>
              <div className="lg:text-[18px] text-[16px] font-bold lg:font-medium leading-[120%] mt-[16px]">
                *This is the point of no return. It’s super difficult to cancel
                or change your order once this happens*
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div className="w-[487px]">
              <img className="hidden lg:block" src={justmeatBbox} alt="" />
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-0 gap-[48px]">
          <div className="max-w-[487px] w-full">
            <div className="lg:text-[18px] text-[20px] pb-[20px] font-bold leading-[120%] lg:text-left text-center">
              Weekly Shipping
            </div>
            <ul className="lg:text-[18px] text-[16px] list-disc pl-[30px] text-[#000] font-medium lg:font-normal leading-[120%]">
              <li>
                We ship out orders Monday through Thursday to ensure freshness
                and frozen delivery.
              </li>
              <li>
                Any orders placed on a weekend will be shipped out the following
                week.
              </li>
              <li>
                If you need your order to be shipped at a later date, contact
                customer support at{' '}
                <span className="font-bold lg:font-normal">888-343-1242</span>.
              </li>
            </ul>
          </div>
          <div className="justify-end lg:flex">
            <div className="lg:max-w-[487px] w-full">
              <div className="lg:text-[18px] text-[20px] pb-[20px] font-bold leading-[120%] lg:text-left text-center">
                In-Transit
              </div>
              <ul className="lg:text-[18px] text-[16px] list-disc pl-[30px] text-[#000] font-medium lg:font-normal leading-[120%]">
                <li>
                  We ship our meat via UPS from our three distribution centers
                  (UT, TX, and KY).
                </li>
                <li>Your order should arrive within two days.</li>
                <li>
                  If your order is in transit longer than two days, call
                  customer support at 888-343-1242.
                </li>
                <li>
                  If your meat arrives warm, please send pictures and/or video
                  to{' '}
                  <span className="font-bold underline lg:font-normal lg:no-underline">
                    support@justmeats.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
