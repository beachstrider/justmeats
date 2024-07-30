import { useState } from 'react'

import customBundleImage from '~/assets/images/3g2yuk1drt1h63se54r6gs5erg61ser2g.png'
import brandImageDesktop from '~/assets/images/3yg12j3dr2tyh13d2rty13dh.png'
import brandImageMobile from '~/assets/images/gui1k3d2t1hy36dr2t1gh3dr2th.png'
import { useResponsive } from '~/hooks/useResponsive'

export default function AccountDashboard() {
  const { lg } = useResponsive()

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <main className="bg-[#EFEEED]">
      <div className="container-small">
        <div className="flex lg:flex-row flex-col gap-[20px] lg:pt-[64px] lg:pb-[81px] pt-[31px] pb-[78px]">
          <div className="grow flex flex-col-reverse lg:grid lg:grid-cols-2 bg-white [box-shadow:0px_18px_25px_-15px_rgba(0,0,0,0.15)]">
            <div className="lg:text-start text-center flex flex-col justify-between lg:px-[47px] lg:py-[36px] px-[17px] pt-[21px] pb-[31px] lg:gap-0 gap-[25px]">
              <div className="grow flex flex-col justify-center lg:gap-[6px] gap-[10px]">
                <div className="font-bold lg:text-[20px] text-[18px] leading-[26px] text-[#6B1626]">
                  Coming Soon
                </div>
                <div className="font-hudson font-bold lg:text-[40px] text-[24px] lg:leading-[118%] leading-[123%] lg:tracking-[2px] tracking-[1.2px] text-[#231B19] lg:max-w-[270px] w-full">
                  JUST MEATS REFERRAL PROGRAM
                </div>
                <div className="lg:text-[18px] text-[16px] lg:leading-[26px] leading-[23px]">
                  When your friends buy meat, you eat for free
                </div>
              </div>
              <div className="flex justify-center lg:justify-start shrink-0">
                <button className="w-[226px] text-center px-[24px] py-[12px] bg-[#BF4745] text-white font-bold text-[14px] tracking-[0.7px]">
                  MANAGE SUBSCRIPTION
                </button>
              </div>
            </div>
            <div className="">
              <img src={brandImageDesktop} className="hidden w-full lg:block" />
              <img src={brandImageMobile} className="block w-full lg:hidden" />
            </div>
          </div>
          <div className="shrink-0 bg-white [box-shadow:0px_18px_25px_-15px_rgba(0,0,0,0.15)] lg:w-[360px] w-full lg:px-[25px] px-[17px] lg:pt-[26px] pt-[15px] lg:pb-[36px] pb-[24px]">
            <div className="lg:mb-[31px] mb-[17px]">
              <div className="font-hudson text-center font-bold text-[24px] tracking-[1.2px] lg:mb-[9px] mb-0">
                UPCOMING ORDER
              </div>
              <div className="text-center text-[#6B1626] lg:text-[18px] text-[16px]">
                Processing on{' '}
                <span className="font-bold">January 31, 2025</span>
              </div>
            </div>
            <div className="flex justify-between lg:mb-[23px] mb-[20px]">
              <div className="flex lg:gap-[20px] gap-[8px]">
                <img src={customBundleImage} className="lg:w-[96px] w-[48px]" />
                <div className="flex items-center">
                  <div className="flex flex-col lg:gap-[14px] gap-[4px]">
                    <div className="font-bold lg:text-[24px] text-[20px] leading-none">
                      Custom Bundle
                    </div>
                    <div className="flex items-center lg:gap-[10px]">
                      <span className="hidden lg:block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                        >
                          <path
                            d="M16 18H2V7H16M13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H15V0M14 11H9V16H14V11Z"
                            fill="#7A392D"
                          />
                        </svg>
                      </span>
                      <div className="lg:text-[18px] text-[16px] leading-none">
                        Ships every 6 weeks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:hidden flex font-bold text-[12px] underline items-center">
                <button onClick={() => setIsExpanded(!isExpanded)}>
                  SEE MORE
                </button>
              </div>
            </div>
            {(lg || isExpanded) && (
              <>
                <div className="lg:mb-[33px] mb-[30px]">
                  <div className="mb-[12px] lg:text-[16px] text-[15px]">
                    <div className="font-bold">Recipient</div>
                    <div>
                      Jane Smith
                      <br />
                      212-456-7890
                      <br />
                      janesmith@mail.com
                    </div>
                  </div>
                  <div className="lg:text-[16px] text-[15px]">
                    <div className="font-bold">Delivery address</div>
                    <div>
                      1225 w 1000 s e410,
                      <br />
                      OREM, UTAH 8458
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="w-[143px] px-[24px] py-[12px] bg-[#BF4745] text-center text-white font-bold text-[14px] tracking-[0.7px]">
                    EDIT ORDER
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
