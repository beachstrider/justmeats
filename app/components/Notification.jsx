import { Gift } from '~/icons/Gift'

export const Notification = () => {
  return (
    <div className="bg-[#6B1626] text-white min-h-[40px] flex justify-center items-center font-nunito font-bold sm:text-[18px] text-[16px] tracking-[0.9px] py-[12px]">
      <div className="flex items-center sm:mx-0 mx-[20px] sm:gap-[12px] gap-[8px]">
        <div className="sm:w-[24px] w-[16px] fill-white">
          <Gift />
        </div>
        <div className="leading-none pt-[1px] sm:text-[16px] text-[13px]">
          Limited Time: Get Free Raspberry BBQ Chicken
        </div>
      </div>
    </div>
  )
}
