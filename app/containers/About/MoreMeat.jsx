export const MoreMeat = () => {
  return (
    <section>
      {/* <img className="w-full" src={moremeat} alt="" /> */}
      <div className="bg-[url('../assets/images/moremeat.png')] bg-no-repeat bg-cover py-[60px] px-[20px]">
        <div className="sm:text-[28px] text-[16px] text-[#FFF] text-center font-hudson font-[420] leading-[120%]">
          THE RESULT?
        </div>
        <div className="sm:text-[62px] text-[36px] text-[#FFF] flex justify-center items-center font-normal lg:gap-[16px] gap-[8px]">
          <div className="font-espiritu">MEAT</div>
          <div className="font-espiritu-script lg:text-[98px] text-[58px] rotate-[-17deg] font-extralight">
            That&apos;s
          </div>
          <div className="font-espiritu">MORE:</div>
        </div>
        <div className="sm:text-[28px] text-[16px] text-[#FFF] text-center font-hudson font-[420] leading-[120%]">
          TENDER and FULL OF FLAVOR
        </div>
      </div>
      <div className="bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat px-[13px] py-[13px]"></div>
    </section>
  )
}
