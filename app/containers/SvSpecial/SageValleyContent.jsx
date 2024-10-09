import ShortDot from '~/assets/images/short-dot.png'
import { Button } from '~/components/Button'

export const SageValleyContent = ({ checkout, submitting }) => {
  return (
    <section>
      <div className="relative max-w-[1000px] w-full mx-auto py-[40px] sm:py-[60px] px-[20px] text-center flex flex-col items-center">
        <div className="font-baskerville sm:text-[39px] text-[29px] font-bold sm:leading-[44.9px] leading-[33.39px] text-center text-[#AD916B]">
          U.S.D.A. CHOICE GRADE BEEF
        </div>
        <img src={ShortDot} alt="" className="m-auto mt-[15px]" />
        <div className="font-barlow text-[18px] font-normal leading-[24px] text-center text-[#231B19] my-[15px] ">
          We’ve partnered with one of our top suppliers, Sage Valley Ranch, to
          bring you an incredible, limited-time offer on premium USDA Choice
          Angus steaks — cuts typically reserved for top-tier restaurants. Sage
          Valley has a surplus of high-quality steaks, and we’re passing this
          deal on directly to you.
        </div>
        <div className="flex justify-center my-[20px]">
          <Button
            loading={submitting}
            onClick={checkout}
            className="hover:bg-[#AD916B] hover:text-[#000000] font-hudson text-[#000] sm:text-[14px] text-[12px] border-2 border-[#AD916B] font-normal leading-[14.566px] sm:tracking-[2.8px] tracking-[2.4px] cursor-pointer transition py-3 px-12 uppercase"
          >
            Buy now
          </Button>
        </div>
        <div className="font-baskerville text-[25px] font-bold leading-[28.78px] text-center text-[#AD916B] mt-[30px] mb-[15px]">
          A HISTORY OF PREMIUM QUALITY
        </div>
        <div className="font-barlow text-[18px] font-normal leading-[24px] text-center text-[#231B19] mb-[15px]">
          The Sage Valley Ranch has been raising cattle for over 175 years. They
          have always been, a family owned and run business, with a focus on
          doing things right and and helping others. Beginning with their great
          grandparents farming and ranching through the great depression, they
          continue the tradition of being innovative and making sure that the
          way they ranch and raise cattle helps people get the healthiest and
          highest quality meat on the market.
        </div>
      </div>
    </section>
  )
}
