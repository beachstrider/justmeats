import { Button } from '~/components/Button'

export const PartySize = ({ product, submitting, checkout }) => {
  return (
    <div className="lg:pt-[150px] lg:pb-[132px] pt-[290px] pb-[82px] bg-[#F8F2E8] bg-party-size">
      <div className="text-center container-small lg:text-left">
        <div className="flex justify-center lg:justify-start lg:mb-[34px] mb-[20px]">
          <div className="font-hudson lg:text-[55px] text-[48px] lg:leading-[62px] leading-[49px] font-medium text-[#6B1626] max-w-[320px]">
            THE NEW PARTY SIZE IS HERE
          </div>
        </div>
        <div className="font-hudson font-medium lg:text-[24px] text-[18px] text-[#BF4745] max-w-[378px] lg:mb-[30px] mb-[14px]">
          3 POUND PARTY SIZED TRAYS TO FEED YOUR SUMMER GUESTS
        </div>
        <div className="lg:text-[18px] text-[16px] lg:leading-[24px] leading-[22px] max-w-[504px] lg:mb-[30px] mb-[20px] text-[#6B1626]">
          Our new summer BBQ line comes in 3 pound trays that make serving your
          guests easier than ever, Don’t get stuck behind the grill or smoker
          while everyone else has fun, let us provide the centerpiece to their
          plates while you get out and mingle.
        </div>
        <div className="flex justify-center lg:justify-start">
          <Button
            loading={submitting}
            onClick={() => checkout(product.variants.nodes[0])}
            className="px-[28px] py-[14px] leading-none hover:bg-[#BF4745] bg-[#6B1626] text-white font-bold tracking-[0.9px] text-[18px]"
          >
            ORDER YOURS
          </Button>
        </div>
      </div>
    </div>
  )
}
