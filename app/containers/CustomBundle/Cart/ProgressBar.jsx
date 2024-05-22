import { useContext } from 'react'

import { CustomBundleContext } from '~/contexts'
import { cn } from '~/lib/utils'

export const ProgressBar = () => {
  const { costForOneTime } = useContext(CustomBundleContext)

  const minP = (costForOneTime / 75) * 100
  const bonusP = ((costForOneTime - 75) / 50) * 100

  const minPercentage = minP > 0 ? minP : 0
  const bonusPercentage = bonusP > 0 ? bonusP : 0

  return (
    <div className="sm:pl-[40px] pl-[20px] sm:pr-[40px] pr-[36px] sm:pt-[20px] sm:pb-[36px] pb-[24px] border-b border-[#efeeed]">
      <div className="py-[12px]">
        <div className="relative h-[22px]">
          <div className="absolute font-bold font-nunito text-[16px] left-0">
            Add $75 to Unlock
          </div>
          <div className="absolute font-bold font-nunito sm:text-[14px] text-[12px] translate-x-[-50%] left-[60%]">
            Min
          </div>
          <div className="absolute font-bold font-nunito sm:text-[14px] text-[12px] translate-x-[-50%] left-[100%]">
            Bonus
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex sm:h-[16px] h-[14px]">
          <div className="border-l-2 border-y-2 border-[#7A392D] rounded-l-[20px] w-3/5 overflow-x-hidden">
            <div
              className={cn('bg-[#7A392D] w-[20%] h-full')}
              style={{ width: `${minPercentage}%` }}
            ></div>
          </div>
          <div className="border-r-2 border-y-2 border-[#637160] rounded-r-[20px] w-2/5 overflow-x-hidden">
            <div
              className={cn('bg-[#637160] w-[20%] h-full')}
              style={{ width: `${bonusPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <Milestone
            className={cn(
              'left-[60%] border-[#7A392D]',
              minPercentage >= 100 ? 'bg-[#7A392D] text-white' : 'bg-white',
            )}
          >
            <div>$75</div>
          </Milestone>
          <Milestone
            className={cn(
              'left-full border-[#637160]',
              bonusPercentage >= 100 ? 'bg-[#637160] text-white' : 'bg-white',
            )}
          >
            <div>$125</div>
          </Milestone>
        </div>
      </div>
    </div>
  )
}

const Milestone = ({ className, children }) => (
  <div
    className={cn(
      'absolute rounded-full flex justify-center items-center sm:w-[36px] w-[32px] sm:h-[36px] h-[32px] translate-x-[-50%] translate-y-[-50%] top-[50%] border-2 font-nunito sm:text-[12px] text-[10px] font-extrabold sm:tracking-normal tracking-[-0.5px]',
      className,
    )}
  >
    {children}
  </div>
)
