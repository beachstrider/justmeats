import StayFresh from '~/assets/images/sage-valley-bannerlogo.png'

export const Banner = () => {
  return (
    <section>
      <div className="bg-[url('../assets/images/sage-valley-banner.png')] bg-no-repeat bg-cover py-[60px] px-[20px]">
        <div>
          <img src={StayFresh} alt="" className="m-auto" />
        </div>
      </div>
      <div className="bg-[#ad916b] text-white p-2 text-center">
        <p className="sm:block hidden font-semibold text-[18px] font-[baskerville-poster-pt] uppercase tracking-widest italic">
          U.S.D.A. Choice Steaks, Cut To Order—Shipping October 21-25
        </p>
        <div className="block text-center sm:hidden">
          <p className="text-[18px] font-semibold font-[baskerville-poster-pt] uppercase tracking-widest italic">
            U.S.D.A. Choice Steaks
          </p>
          <p className="text-[18px] font-semibold font-[baskerville-poster-pt] uppercase tracking-widest italic text-[#000000]">
            Cut To Order
          </p>
          <p className="text-[18px] font-semibold font-[baskerville-poster-pt] uppercase tracking-widest italic">
            Shipping October 21-25
          </p>
        </div>
      </div>
    </section>
  )
}
