import Baileyalexander from '~/assets/images/bailey-alexander.png'
import BaileyalexanderMob from '~/assets/images/bailey-alexander-mob.png'
import States from '~/assets/images/States.png'

export const StartRanch = () => {
  return (
    <section>
      <div className="sm:w-[700px] sm:flex sm:p-[50px] px-[20px] py-[50px] sm:text-left text-center">
        <div className="sm:pr-[10px] pb-[20px]">
          <div className="w-[56px] h-[56px] bg-[#FF655D] rounded-[40px] font-hudson text-[#FFF] text-[36px] flex justify-center m-auto">
            1
          </div>
        </div>
        <div>
          <div className="font-hudson sm:text-[28px] text-[24px] text-[#7D0E21]">
            It starts on the ranch
          </div>
          <div className="sm:text-[18px] text-[16px] text-[#7D0E21] font-medium	">
            All of our meat is sourced from our friends here in the
            Intermountain West. We’ve partnered with these good folks to make
            sure everything is raised right.
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="w-full sm:block hidden" src={Baileyalexander} alt="" />
        <img className="w-full sm:hidden block" src={BaileyalexanderMob} alt="" />
        <img className="absolute sm:right-[10%] right-[0] sm:top-[-25%] top-[-10%] sm:w-auto w-[50%]" src={States} alt="" />
      </div>
    </section>
  )
}
