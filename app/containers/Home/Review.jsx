export const Review = () => {
  return (
    <section className="relative sm:mt-[154px] mt-[40px] sm:mb-0 mb-[60px] z-[1]">
      <div className="container-small sm:mb-[40px] mb-[35px]">
        <div className="text-center font-hudson font-bold sm:text-[36px] text-[24px] sm:tracking-[1.8px] tracking-[1.2px]">
          WHAT JUST MEATS CUSTOMERS ARE <br className="block sm:hidden" />
          COOKING UP
        </div>
      </div>
      <div
        id="looxReviews"
        data-loox-aggregate
        className="xl:w-[99%] lg:w-[98%] sm:w-[98%] w-full"
      />
    </section>
  )
}
