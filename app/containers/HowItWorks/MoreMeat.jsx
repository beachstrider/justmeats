import moremeat from '~/assets/images/moremeat.png'

export const MoreMeat = () => {
  return (
    <section>
      {/* <img className="w-full" src={moremeat} alt="" /> */}
      <div className="bg-[url('../assets/images/moremeat.png')] bg-no-repeat bg-cover py-[60px]">
        <div className="sm:text-[28px] text-[16px] text-[#FFF] text-center">
          THE RESULT?
        </div>
        <div className="sm:text-[62px] text-[36px] text-[#FFF] text-center">
          MEAT <span>Thats</span> MORE:
        </div>
        <div className="sm:text-[28px] text-[16px] text-[#FFF] text-center">
          TENDER and FULL OF FLAVOR
        </div>
      </div>
      <div className="bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat  px-[13px] py-[13px]"></div>
    </section>
  )
}
