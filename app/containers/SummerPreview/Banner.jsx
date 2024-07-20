import image2 from '~/assets/images/1f6a5e4w64dt5h415fjd23g.png'
import image1 from '~/assets/images/2ser65g416se54g6drth54dt.png'
import { Button } from '~/components/Button'
import { Plus } from '~/icons/Plus'

export const Banner = ({ sample, product, checkout, submitting }) => {
  return (
    <section className="relative">
      <div className="lg:h-[calc(100vh-120px)] flex flex-col lg:pt-0">
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
          <div className="bg-preview-banner-left flex items-center justify-center flex-1 lg:px-0 px-[22px] lg:pb-0 pt-[40px] pb-[30px]">
            <div>
              <div className="font-hudson lg:text-[24px] text-[10px] text-center font-bold text-white mb-[16px]">
                GET A PREVIEW OF HOW WE
              </div>
              <div className="relative flex justify-center z-[2]">
                <img src={image1} className="lg:w-auto w-[152px]" />
              </div>
              <div className="lg:mb-[20px]">
                <img
                  src={image2}
                  className="lg:mt-[-30px] lg:ml-[-30px] lg:w-auto w-[256px]"
                />
              </div>
              <div className="flex justify-center">
                <div className="text-[18px] leading-[24px] text-white max-w-[504px] lg:ml-[54px] lg:block hidden">
                  Our Summer BBQ Line is an all-star lineup of meats smoked to
                  perfection and ready to feed your party. Get a sneak peek into
                  all this goodness. Order today and get three trays of bbq meat
                  at super summer prices and up to a $100 credit towards your
                  account.{' '}
                  <span className="font-bold">
                    This deal’s hotter than asphalt in August.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 bg-preview-banner-right lg:h-auto h-[430px] lg:pt-[70px]"
            style={{
              backgroundImage: `url("${sample.preview_image}")`,
            }}
          >
            <div className="lg:pt-0 pt-[20px]">
              <div className="font-hudson lg:text-[32px] lg:leading-[36px] lg:tracking-[4.48px] leading-[20px] tracking-[2.8px] font-bold text-center mb-[10px]">
                {sample.headline}
              </div>
              <div className="flex justify-center">{sample.itemList}</div>
              <div className="flex justify-center py-[4px]">
                <div className="lg:w-[20px] w-[11px]">
                  <Plus />
                </div>
              </div>
              <div className="font-hudson font-bold lg:text-[36px] text-[20px] lg:leading-[36px] leading-[20px] lg:tracking-[5.04px] tracking-[2.8px] text-center lg:mb-[20px] mb-[16px]">
                ${sample.cost} IN STORE CREDIT
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={() => checkout(product.variants.nodes[0])}
                  loading={submitting}
                  className="px-[28px] py-[14px] leading-none hover:bg-[#BF4745] bg-[#6B1626] text-white font-bold tracking-[0.9px] text-[18px]"
                >
                  BUY YOURS NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:px-0 px-[20px]">
          <div className="flex justify-center lg:hidden py-[36px]">
            <div className="text-[16px] leading-[22px] max-w-[316px]">
              Our Summer BBQ Line is an all-star lineup of meats smoked to
              perfection and ready to feed your party. Get a sneak peek into all
              this goodness. Order today and get three trays of bbq meat at
              super summer prices and up to a $100 credit towards your account.{' '}
              <span className="font-bold">
                This deal’s hotter than asphalt in August.
              </span>
            </div>
          </div>
          <div className="relative z-[2] bg-pattern2 lg:pt-0 lg:pb-0 pt-[28px] pb-[22px] lg:mt-0 mt-0">
            <div className="container-small lg:text-left text-center lg:pt-[34px] lg:pb-[10px] flex lg:flex-row flex-col lg:justify-evenly justify-start lg:items-start items-center">
              <div className="relative flex flex-col items-center lg:flex-row">
                <div className="flex flex-col justify-center flex-1 lg:flex-row">
                  <div className="text-[#EFEEED]">
                    <div className="font-espiritu-condensed text-[75px] tracking-[2.25px] leading-none">
                      SERVES {sample.serves}
                    </div>
                    <div className="font-bold leading-none text-center">
                      READY TO PARTY
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 lg:w-[3px] w-[110px] lg:h-[110px] h-[3px] rounded-full bg-white lg:mt-0 lg:mb-0 mt-[20px] mb-[20px]" />
              <div className="relative flex flex-col items-center lg:flex-row">
                <div className="flex flex-col justify-center flex-1 lg:flex-row">
                  <div className="text-[#EFEEED]">
                    <div className="font-espiritu-condensed text-[75px] tracking-[2.25px] leading-none">
                      ${sample.per_serving}
                    </div>
                    <div className="font-bold leading-none text-center">
                      PER SERVING
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 lg:w-[3px] w-[110px] lg:h-[110px] h-[3px] rounded-full bg-white lg:mt-0 lg:mb-0 mt-[20px] mb-[20px]" />
              <div className="relative flex flex-col lg:flex-row">
                <div className="flex flex-col justify-center flex-1 lg:flex-row">
                  <div className="text-[#EFEEED]">
                    <div className="font-espiritu-condensed text-[75px] tracking-[2.25px] leading-none">
                      +${sample.cost} credit
                    </div>
                    <div className="font-bold leading-none text-center">
                      BONUS LAUNCH CREDIT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden h-[21px] bg-pattern1" />
          <div className="lg:hidden block h-[230px] bg-[#F8F2E8] absolute left-0 bottom-0 w-full"></div>
        </div>
      </div>
    </section>
  )
}
