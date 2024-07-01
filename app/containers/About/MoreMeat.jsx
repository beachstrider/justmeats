import moremeat from '~/assets/images/moremeat.png'
import Thats from '~/assets/images/Thats.png'

export const MoreMeat = () => {
  return (
    <section>
      {/* <img className="w-full" src={moremeat} alt="" /> */}
      <div className="bg-[url('../assets/images/moremeat.png')] bg-no-repeat bg-cover py-[60px] px-[20px]">
        <div className="sm:text-[28px] text-[16px] text-[#FFF] text-center font-hudson font-[420] leading-[120%]">
          THE RESULT?
        </div>
        <div className="sm:text-[62px] text-[36px] text-[#FFF] font-espiritu font-bold flex justify-center items-center font-normal leading-[120%]">
          MEAT <img src={Thats} /> MORE:
        </div>
        <div className="sm:text-[28px] text-[16px] text-[#FFF] text-center font-hudson font-[420] leading-[120%]">
          TENDER and FULL OF FLAVOR
        </div>
      </div>
      <div className="bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat px-[13px] py-[13px]"></div>
    </section>
  )
}
