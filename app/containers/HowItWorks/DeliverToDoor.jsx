import justmeatBbox from '~/assets/images/justmeat-box.png'

export const DeliverToDoor = () => {
  return (
    <section>
     <div className="sm:flex justify-between sm:p-[50px] px-[20px] py-[50px]">
        <div className="sm:w-[700px] sm:flex sm:text-left text-center">
            <div className="sm:pr-[10px] pb-[20px]">
                 <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">4</div>
            </div>
            <div>
                <div className="font-hudson sm:text-[28px] text-[24px] text-[#7D0E21]">
                    DELIVERED DIRECTLY TO YOUR DOOR
                </div>
                <div className="sm:text-[18px] text-[16px] text-[#7D0E21]">
                    What to expect when you’re expecting (your Just Meats order)
                </div>
                <img className="sm:hidden block pt-[20px]" src={justmeatBbox} alt="" />
                <div className="sm:text-[18px] text-[16px] pt-[20px]">Once your order has been placed, and you’ve received your confirmation email, it will take 1-2 days to process your order.</div>
                <div className="sm:text-[18px] text-[16px] font-medium">*This is the point of no return. It’s super difficult to cancel or change your order once this happens*</div>
                <div className="sm:text-[18px] text-[16px] font-bold pt-[40px] pb-[20px]">Weekly Shipping</div>
                <ul className="sm:text-[18px] text-[16px] list-disc pl-[30px] text-[#000]">
                    <li>We ship out orders Monday through Thursday to ensure freshness and frozen delivery</li>
                    <li>Any orders placed on a weekend will be shipped out on the following Monday.</li>
                    <li>If your shipment arrives on a Saturday or Sunday, contact customer support asap at 888-343-1242</li>
                </ul>
            </div>
        </div>
        <div className="sm:w-[700px] sm:text-left text-center">
            <img className="sm:block hidden" src={justmeatBbox} alt="" />
            <div className="sm:text-[18px] text-[16px] font-bold pt-[40px] pb-[20px]">In-Transit</div>
            <ul className="sm:text-[18px] text-[16px] list-disc pl-[30px] text-[#000]">
                <li>We ship our meat via UPS from our three production facilities (UT, TX, and OH.)</li>
                <li>Your order should arrive within two days.</li>
                <li>If your order takes longer than two days, call customer support at 888-343-1242.</li>
                <li>If your meat arrives warm, please send pictures and/or video to support@justmeats.com</li>
            </ul>
        </div>
      </div>
    </section>
  )
}
