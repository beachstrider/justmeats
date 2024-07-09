import { NavLink } from '@remix-run/react'

import bi_check from '~/assets/images/bi_check.png'
import whoyouare from '~/assets/images/who-you-are.png'

export const WhoYouAre = () => {
  return (
    <section className="relative lg:h-[678px] flex flex-col-reverse lg:flex-row">
      <div className="lg:w-[50%]">
        <div className="bg-[url('../assets/images/who-you-are.png')] bg-cover bg-center lg:w-[100%] lg:h-full h-[280px]"></div>
      </div>
      <div className="flex items-center justify-center flex-1 bg-pattern2">
        <div className="lg:w-[540px] lg:pt-[100px] lg:pb-0 pt-[46px] pb-[45px] lg:px-0 px-[20px] xl:pr-0 lg:pr-[20px] md:pr-[20px]">
          <div className="flex justify-center">
            <div className="relative font-hudson font-bold lg:text-[36px] text-[24px] lg:mb-[40px] mb-[52px] lg:tracking-[1.8px] tracking-[1.2px]">
              <div className="relative z-[2] text-[#EFEEED]">Who you are</div>
            </div>
          </div>
          <ul className="lg:text-left text-center lg:text-[18px] text-[14px] font-medium lg:mb-[70px] mb-[22px] text-[#EFEEED]">
            <li className="flex items-start">
              <img src={bi_check} />
              You recognize that protein is the cornerstone of every meal and
              Just Meats is perfect solution for dinner time or meal prep.
            </li>
            <br />
            <br />
            <li className="flex items-start">
              <img src={bi_check} />
              You have a social media presence or a business where Just Meats
              can be highlighted and shared with your community.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
