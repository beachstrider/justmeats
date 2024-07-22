import { FaqAccordion } from '~/components/FaqAccordion'

export const FaqSection = () => {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="relative z-50 pt-12">
        <div className="font-hudson uppercase sm:mt-8 mt-2 pb-8 text-[24px] sm:text-[36px] text-center  font-bold sm:mb-[4px] mb-[3px] leading-normal tracking-[1.8px]">
          YOU ASK. WE ANSWER.
        </div>
        <div className="relative z-50 w-[90%] xl:w-[50%] md:w-[70%] mx-auto sm:pb-20 pb-[40px]">
          <FaqAccordion />
        </div>
      </div>
    </section>
  )
}
