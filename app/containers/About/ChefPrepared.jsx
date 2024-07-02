import MeatFork from '~/assets/images/Meat-Fork.png'

export const ChefPrepared = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative max-w-[1210px] w-full mx-auto lg:pt-[70px] px-[20px] pt-[50px] lg:pb-[117px] pb-[50px] tracking-tight">
        <div className="flex justify-between gap-[20px]">
          <div className="md:w-[700px] w-[100%] sm:flex max-w-[100%] sm:max-w-[50%]">
            <div className="lg:absolute lg:left-[-50px] relative lg:mb-0 mb-[22px]">
              <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">
                2
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-hudson sm:text-[28px] text-[24px] text-[#7D0E21] font-[420] leading-[120%] mb-[6px]">
                CHEF PREPARED, <br className="block lg:hidden" />
                PITMASTER SMOKED
              </div>
              <div className="sm:text-[18px] text-[16px] text-[#7D0E21] font-medium sm:font-normal leading-[120%]">
                This is one of the times you want to know “how the sausage gets
                made”. Our meat is prepared with plenty of high-quality TLC
                everyday. It’s your food, but it’s our passion.
              </div>
              <div className="sm:text-[18px] text-[16px] lg:mt-[60px] lg:mb-[40px] mt-[50px] mb-[30px] text-[#000] font-medium sm:font-normal leading-[120%]">
                Once the meat has entered our kitchen, it’s:
              </div>
              <ul className="sm:px-4 font-hudson">
                <li className="flex items-center justify-start gap-[15px] mb-[16px] text-black text-[24px] font-normal leading-[120%] uppercase">
                  <span className="w-[22px] h-[22px] shrink-0 rounded-[100%] bg-black"></span>
                  Hand-trimmed.
                </li>
                <li className="flex items-center justify-start gap-[15px] mb-[16px] text-black text-[24px] font-normal leading-[120%] uppercase">
                  <span className="w-[22px] h-[22px] shrink-0 rounded-[100%] bg-black"></span>
                  Hand-seasoned.
                </li>
                <li className="flex items-center justify-start gap-[15px] mb-[16px] text-black text-[24px] font-normal leading-[120%] uppercase">
                  <span className="w-[22px] h-[22px] shrink-0 rounded-[100%] bg-black"></span>
                  Cooked to perfection.
                </li>
                <li className="flex items-center justify-start gap-[15px] mb-[16px] text-black text-[24px] font-normal leading-[120%] uppercase">
                  <span className="w-[22px] h-[22px] shrink-0 rounded-[100%] bg-black"></span>
                  Frozen and packaged.
                </li>
              </ul>
              <div className="mt-[30px] sm:text-[18px] text-[16px] text-[#000] font-medium sm:font-normal leading-[120%]">
                You get a world of flavor from recipes created and prepared by
                classically-trained chefs and award winning pitmasters.
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 max-w-[50%] w-[100%] justify-center bg-[url('../assets/images/Mask-group-BG.png')] bg-no-repeat bg-opacity-50 sm:block hidden ">
            <img src={MeatFork} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
