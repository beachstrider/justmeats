import { Button } from '~/components/Button'

export const WholeCuts = ({ sample, product, checkout, submitting }) => {
  return (
    <section className="relative">
      <div className="lg:h-[714px] flex flex-col lg:pt-0">
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
          <div className="bg-free-preview-banner-left lg:h-auto h-[306px]"></div>
          <div className="flex-1 lg:pt-[67px] bg-[#F8F2E8]">
            <div className="text-center container-small lg:text-left">
              <div className="lg:px-[70px] lg:pt-0 lg:pb-0 pt-[28px] pb-[33px]">
                <div className="flex justify-center lg:justify-start lg:mb-[34px] mb-[20px]">
                  <div className="font-hudson lg:text-[55px] text-[48px] lg:leading-[62px] leading-[49px] font-medium text-[#6B1626] max-w-[390px]">
                    WHOLE CUTS FOR EXTRA JUICY FLAVOR
                  </div>
                </div>
                <div className="font-hudson font-medium lg:text-[24px] text-[18px] text-[#BF4745] lg:max-w-[456px] lg:mb-[30px] mb-[14px]">
                  THE PREMIUM BBQ MEAT EXPERIENCE FROM OUR WORLD CLASS
                  PITMASTERS
                </div>
                <div className="lg:text-[18px] text-[16px] lg:leading-[24px] leading-[22px] max-w-[537px] lg:mb-[30px] mb-[20px] text-[#6B1626]">
                  Our premium offering that allows you to show up every other
                  gathering this summer with meat that delivers a taste
                  experience like no other. These meats are delivered in a whole
                  form, that allows extra juicy flavor that can’t be beat
                  anywhere. From 3lb slabs of brisket, to naked smoked wings,
                  you will secure a spot in the backyard BBQ hall-of-fame with
                  every guest asking for “a little more”.
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Button
                    loading={submitting}
                    onClick={() => checkout(product.variants.nodes[0])}
                    className="px-[28px] py-[14px] leading-none hover:bg-[#BF4745] bg-[#6B1626] text-white font-bold tracking-[0.9px] text-[18px]"
                  >
                    SERVE IT UP
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
