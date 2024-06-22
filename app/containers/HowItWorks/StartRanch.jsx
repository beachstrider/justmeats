import Baileyalexander from '~/assets/images/bailey-alexander.png'

export const StartRanch = () => {
  return (
    <section>
      <div className="sm:w-[35%] flex py-[40px] pl-[40px]">
        <div className="pr-[10px]">
          <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center">
            1
          </div>
        </div>
        <div>
          <div className="font-hudson sm:text-[28px] text-[24px] text-[#7D0E21]">
            It starts on the ranch
          </div>
          <div className="sm:text-[18px] text-[16px] text-[#7D0E21]">
            All of our meat is sourced from our friends here in the
            Intermountain West. We’ve partnered with these good folks to make
            sure everything is raised right.
          </div>
        </div>
      </div>
      <div>
        <img className="w-full" src={Baileyalexander} alt="" />
      </div>
    </section>
  )
}
