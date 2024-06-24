import MeatFork from '~/assets/images/Meat-Fork.png'

export const ChefPrepared = () => {
  return (
    <section>
      <div className="flex justify-between p-[50px]">
        <div className="sm:w-[700px] w-[100%] flex max-w-[50%]">
          <div className="pr-[10px]">
            <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center">
              2
            </div>
          </div>
          <div>
            <div className="font-hudson sm:text-[28px] text-[24px] text-[#7D0E21]">
              CHEF PREPARED, PITMASTER SMOKED
            </div>
            <div className="sm:text-[18px] text-[16px] text-[#7D0E21]">
              This is one of the times you want to know “how the sausage gets
              made”. Our meat is prepared with plenty of high-quality TLC
              everyday. It’s your food, but it’s our passion.
            </div>
            <div className="sm:text-[18px] text-[16px]  mt-[50px] mb-[30px] text-[#000]">
              Once the meat has entered our kitchen, it’s:
            </div>
            <ul className="px-4">
              <li className="flex items-center justify-start gap-2 mb-1 text-black text-[24px] font-bold uppercase">
                <span className=" w-[15px] sm:w-[18px] h-[15px] sm:h-[18px] rounded-[100%] bg-black"></span>
                Hand-trimmed.
              </li>
              <li className="flex items-center justify-start gap-2 mb-1 text-black text-[24px] font-bold uppercase">
                <span className=" w-[15px] sm:w-[18px] h-[15px] sm:h-[18px] rounded-[100%] bg-black"></span>
                Hand-seasoned.
              </li>
              <li className="flex items-center justify-start gap-2 mb-1 text-black text-[24px] font-bold uppercase">
                <span className=" w-[15px] sm:w-[18px] h-[15px] sm:h-[18px] rounded-[100%] bg-black"></span>
                Cooked to perfection.
              </li>
              <li className="flex items-center justify-start gap-2 mb-1 text-black text-[24px] font-bold uppercase">
                <span className=" w-[15px] sm:w-[18px] h-[15px] sm:h-[18px] rounded-[100%] bg-black"></span>
                Frozen and packaged.
              </li>
            </ul>
            <div className="mt-[30px] sm:text-[18px] text-[16px] text-[#000]">
              You get a world of flavor from recipes created and prepared by
              classically-trained chefs and award winning pitmasters.
            </div>
          </div>
        </div>
        <div className="max-w-[50%] w-[100%] flex justify-center">
          <img src={MeatFork} alt="" />
        </div>
      </div>
    </section>
  )
}
