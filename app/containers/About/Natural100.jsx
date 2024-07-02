import { HundredPercent } from '~/icons/HundredPercent'
import { Natural } from '~/icons/Natural'

export const Natural100 = () => {
  return (
    <section>
      <div className="relative max-w-[1210px] w-full mx-auto py-[40px] sm:py-[60px] px-[20px] text-center flex flex-col items-center">
        <HundredPercent />
        <div className="mb-[25px]">
          <Natural />
        </div>
        <div className="sm:text-[18px] text-[16px] text-[#7D0E21] font-bold sm:leading-[160%] leading-[144%]">
          Our beef is grass-fed and grass-finished. All our meats are clean
          raised.
        </div>
        <div className="sm:text-[18px] text-[16px] text-[#7D0E21] font-medium sm:font-normal sm:leading-[160%] leading-[144%]">
          NO Hormones - NO Steroids - NO Additives - NO MSG - NO GMOs
          <br className="" />
          NO Added Sugars, Colors, or Flavors
        </div>
      </div>
    </section>
  )
}
