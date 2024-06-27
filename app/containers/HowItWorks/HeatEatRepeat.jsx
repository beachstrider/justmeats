import StayFresh from '~/assets/images/StaysFresh.png'
export const HeatEatRepeat = () => {
  return (
    <section>        
        <div className="sm:bg-[url('../assets/images/JustMeats_StyledProduct_Stills_Full.png')] bg-[url('../assets/images/JustMeats_StyledProduct_Stills_FullRes_Vertical.png')] bg-no-repeat bg-cover sm:pb-[0] pb-[280px] sm:bg-center bg-bottom">
        <div className="bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat  px-[13px] py-[13px]"></div>
            <div className="md:w-[700px] sm:flex sm:p-[50px] px-[20px] py-[50px] pt-[80px] sm:text-left text-center">
                <div className="sm:pr-[10px] pb-[20px]">
                    <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">5</div>
                </div>
                <div>
                    <div className="font-hudson sm:text-[28px] text-[24px] text-[#7D0E21]">
                        Heat. Eat. Repeat.
                    </div>
                    <div className="sm:text-[18px] text-[16px] text-[#7D0E21] font-medium">
                        We want your meat to arrive as fresh as possible, so it’s flash frozen after we cook it.
                    </div>
                    <img src={StayFresh} alt=""  className="sm:m-0 m-auto"/>
                    {/* <div className="sm:text-[62px] text-[54px] text-[#F21E36] font-espiritu ">Stays Fresh</div> */}
                    <div className="sm:text-[62px] text-[54px] text-[#000] font-espiritu font-bold">10 DAYS</div>
                    <div className="sm:text-[24px] text-[21px] text-[#7D0F21] font-bold mt-[-20px] mb-[20px]">Stored in Fridge</div>
                    <div className="sm:text-[62px] text-[54px] text-[#000] font-espiritu font-bold">90-120 DAYS</div>
                    <div className="sm:text-[24px] text-[21px] text-[#7D0F21] font-bold	mt-[-20px] mb-[20px]">Frozen</div>
                    <div className="py-[20px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6" viewBox="0 0 609 6" fill="none">
                        <path d="M3 3H606" stroke="black" strokeWidth="5" strokeLinecap="round" strokeDasharray="0.5 12"/>
                    </svg>
                    </div>
                    <div className="sm:text-[18px] text-[16px] text-[#000] sm:font-normal font-medium">To thaw your meat, place it in the fridge overnight, and then reheat it using one of these three methods: </div>
                    <ul className="sm:text-[18px] text-[16px] text-[#000] py-[20px] sm:pl-[30px] sm:font-normal font-medium">
                        <li className="mb-[10px]">1. Skillet or sauté pan on medium-high heat for two minutes. </li>
                        <li className="mb-[10px]">2. Air fryer at 350 degrees for six minutes. </li>
                        <li className="mb-[10px]">3. Oven at 300 degrees for 30-40 minutes (make sure to stir after 20 minutes). </li>
                    </ul>
                    <div className="sm:text-[18px] text-[16px] text-[#000] sm:font-normal font-medium">
                        Serve with some sides or a salad and voilá! 
                    </div>
                    <div className="sm:text-[18px] text-[16px] text-[#000] sm:font-normal font-medium">
                        A delicious dinner is served.
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
