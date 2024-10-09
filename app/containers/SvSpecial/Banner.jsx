import StayFresh from '~/assets/images/sage-valley-bannerlogo.png'

export const Banner = () => {
  return (
    <section>
      <div className="bg-[url('../assets/images/sage-valley-banner.png')] bg-no-repeat bg-cover py-[60px] px-[20px]">
        <div>
          <img src={StayFresh} alt="" className="m-auto" />
        </div>
      </div>
    </section>
  )
}
