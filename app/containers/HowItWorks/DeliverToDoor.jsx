import justmeatBbox from '~/assets/images/justmeat-box.png'

export const DeliverToDoor = () => {
  return (
    <section>
      <div className="relative max-w-[1210px] w-full mx-auto lg:py-[66px] px-[20px] py-[40px]">
        <div className="sm:flex justify-between gap-[20px]">
          <div className="md:w-[700px] sm:flex sm:text-left text-center">
            <div className="sm:pr-[10px] pb-[20px]">
              <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">
                4
              </div>
            </div>
            <div>
              <div className="font-hudson sm:text-[28px] text-[24px] text-[#7D0E21] font-[420] leading-[120%]">
                DELIVERED DIRECTLY TO YOUR DOOR
              </div>
              <div className="sm:text-[18px] text-[16px] text-[#7D0E21]  font-medium sm:font-normal leading-[120%]">
                What to expect when you’re expecting (your Just Meats order)
              </div>
              <img
                className="sm:hidden block pt-[20px]"
                src={justmeatBbox}
                alt=""
              />
              <div className="sm:text-[18px] text-[16px] pt-[20px]  font-medium sm:font-normal leading-[120%]">
                Once your order has been placed, and you’ve received your
                confirmation email, it will take 1-2 days to process your order.
              </div>
              <div className="sm:text-[18px] text-[16px] font-bold sm:font-medium leading-[120%]">
                *This is the point of no return. It’s super difficult to cancel
                or change your order once this happens*
              </div>
              <div className="sm:text-[18px] text-[16px] font-bold pt-[40px] pb-[20px] font-bold leading-[120%]">
                Weekly Shipping
              </div>
              <ul className="sm:text-[18px] text-[16px] list-disc pl-[30px] text-[#000] font-medium sm:font-normal leading-[120%]">
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
                  <span className="font-bold sm:font-normal">888-343-1242</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-[700px] sm:text-left text-center">
            <img className="hidden sm:block" src={justmeatBbox} alt="" />
            <div className="sm:text-[18px] text-[16px] font-bold pt-[40px] pb-[20px] font-bold leading-[120%]">
              In-Transit
            </div>
            <ul className="sm:text-[18px] text-[16px] list-disc pl-[30px] text-[#000] font-medium sm:font-normal leading-[120%]">
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
                <span className="font-bold underline sm:font-normal sm:no-underline">
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
