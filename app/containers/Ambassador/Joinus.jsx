import { JoinusForm } from './JoinusForm'

export const Joinus = () => {
  return (
    <section className="relative py-[62px] sm:py-[103px] bg-[#EFEEED]">
      <div className="text-center sm:text-[36px] text-[24px] font-[620] font-hudson leading-normal sm:tracking-[1.8px] tracking-[1.2px] mb-[15x]">
        Join Us!
      </div>
      <div className="text-center font-barlow sm:text-[20px] text-[18px] font-normal leading-[26px] sm:mb-[20px] mb-[17px]">
        Apply Now!
      </div>
      <JoinusForm />
    </section>
  )
}
