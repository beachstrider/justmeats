import { ContactForm } from './ContactForm'

export const SuccessHere = () => {
  return (
    <section className="relative bg-[#EFEEED] sm:py-[80px] pt-[60px] bg-pattern2">
      <div className="relative container-small">
        <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-[55px] gap-[52px] items-center">
          <div className="text-white sm:text-left text-center">
            <div className="font-hudson sm:text-[40px] text-[29px] font-[620] tracking-[0.87px] leading-[40px] uppercase">
              increase results. increase retention. increase referrals.
            </div>
            <div className="sm:text-[24px] text-[18px] font-bold sm:tracking-[2.4px] tracking-[1.8px] leading-normal uppercase md:my-[10px] my-[20px]">
              benefits for you, your members, and your business
            </div>
            <div className="sm:text-[18px] text-[16px] font-normal sm:tracking-[1.8px] tracking-[1.6px] leading-normal flex flex-col gap-[10px]">
              <div>
                As a gym owner, you know the most important things are results
                and success. Because with results and success come loyalty,
                referrals, and money.
              </div>
              <div>
                So much of this success is tied to nutrition, especially proper
                protein intake. The{' '}
                <span className="font-bold">
                  {' '}
                  Just Meats Gym Partnership Program{' '}
                </span>
                offers nutrition that can be used by every single person in your
                gym, without needing a certified nutritionist or registered
                dietician. And the cherry on top? No overhead fees.
              </div>
              <div>
                It’s simply 15 everyday meats, all of which are 100% natural and
                contain at least 28 grams of protein per serving.{' '}
              </div>
              <div>
                The partnership is the perfect tool to save you time, money, and
                headaches, so you can build and sustain a successful business.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between aspect-square bg-[#F8F2E8] md:mx-0 mx-[-20px]">
            <div className="xl:px-[50px] px-[33px] md:w-[80%] m-auto mt-[40px]">
              <div className="font-hudson text-[24px] font-[620] text-center tracking-[1.2px] leading-[29px] uppercase">
                your journey to success starts here
              </div>
              <div className="text-[16px] text-[#BF4745] font-bold text-center my-[10px] tracking-[0.8px] leading-normal uppercase">
                Take the first step towards a Just Meats Gym Partnership today
              </div>
            </div>
            <ContactForm formName="first" />
          </div>
        </div>
      </div>
    </section>
  )
}
