import { HundredPercent } from '~/icons/HundredPercent'
import { Natural } from '~/icons/Natural'
export const Natural100 = () => {
  return (
    <section>
      <div className="w-full md:w-[700px] mx-auto py-[40px] sm:py-[60px] px-[20px] text-center flex flex-col items-center">
        <HundredPercent />
        <Natural />
        <div className="sm:text-[18px] text-[16px] text-[#7D0E21] font-bold">
          Our beef is grass-fed and grass-finished. All our meats are clean
          raised.
        </div>
        <div className="sm:text-[18px] text-[16px] text-[#7D0E21] font-medium">
          NO Steroids - NO Additives - NO MSG - NO GMOs NO Added Sugars, Colors,
          or Flavors
        </div>
      </div>
    </section>
  )
}
