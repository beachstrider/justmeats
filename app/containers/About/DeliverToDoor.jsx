import justmeatBbox from '~/assets/images/justmeat-box.png'

export const DeliverToDoor = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative max-w-[1210px] w-full mx-auto lg:py-[66px] px-[20px] py-[40px]">
        <div className="lg:flex justify-between gap-[20px] tracking-tight">
          <div className="md:w-[700px] lg:flex lg:text-left text-center">
            <div className="lg:absolute lg:left-[-50px] relative lg:mb-0 mb-[22px]">
              <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">
                4
              </div>
            </div>
            <div>
              <div className="font-hudson lg:text-[28px] text-[24px] text-[#7D0E21] font-[420] leading-[120%] mb-[6px]">
                DELIVERED DIRECTLY TO YOUR DOOR
              </div>
              <div className="lg:text-[18px] text-[16px] text-[#7D0E21]  font-medium lg:font-normal leading-[120%] tracking-tight">
                What to expect when you’re expecting{' '}
                <br className="block lg:hidden" />
                (your Just Meats order)
              </div>

              <img
                className="lg:hidden block pt-[40px] max-w-fit ml-[-20px]"
                src={justmeatBbox}
                alt=""
              />

              <div className="lg:text-[18px] text-[16px] pt-[20px]  font-medium lg:font-normal leading-[120%]">
                Once your order has been placed, and you’ve received your
                confirmation email, it will take 1-2 days to process your order.
              </div>
              <div className="lg:text-[18px] text-[16px] font-bold lg:font-medium leading-[120%] mt-[16px]">
                *This is the point of no return. It’s super difficult to cancel
                or change your order once this happens*
              </div>
              <div className="lg:text-[18px] text-[16px] font-bold pt-[40px] pb-[20px] font-bold leading-[120%]">
                Weekly Shipping
              </div>
              <ul className="lg:text-[18px] text-[16px] list-disc pl-[30px] text-[#000] font-medium lg:font-normal leading-[120%]">
                <li>
                  We ship out orders Monday through Thursday to ensure freshness
                  and frozen delivery
                </li>
                <li>
                  Any orders placed on a weekend will be shipped out on the
                  following Monday.
                </li>
                <li>
                  If your shipment arrives on a Saturday or Sunday, contact
                  customer support asap at{' '}
                  <span className="font-bold lg:font-normal">888-343-1242</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-[700px] lg:text-left text-center">
            <img className="hidden lg:block" src={justmeatBbox} alt="" />
            <div className="lg:text-[18px] text-[16px] font-bold pt-[40px] pb-[20px] font-bold leading-[120%]">
              In-Transit
            </div>
            <ul className="lg:text-[18px] text-[16px] list-disc pl-[30px] text-[#000] font-medium lg:font-normal leading-[120%]">
              <li>
                We ship our meat via UPS from our three production facilities
                (UT, TX, and OH.)
              </li>
              <li>Your order should arrive within two days.</li>
              <li>
                If your order takes longer than two days, call customer support
                at 888-343-1242.
              </li>
              <li>
                If your meat arrives warm, please send pictures and/or video to{' '}
                <span className="font-bold underline lg:font-normal lg:no-underline">
                  support@justmeats.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
