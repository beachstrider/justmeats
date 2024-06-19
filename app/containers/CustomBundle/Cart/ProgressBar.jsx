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
    <div className="lg:pl-[40px] pl-[20px] lg:pr-[58px] pr-[36px] lg:pt-[14px] lg:pb-[30px] pb-[24px] lg:border-none border-b border-[#efeeed]">
      <div className="py-[12px]">
        <div className="relative h-[22px] font-bold font-barlow lg:text-[14px] text-[12px]">
          <div className="absolute left-0">
            <div className="block lg:hidden">Add $75 to Unlock</div>
            <div className="hidden lg:block">$75 Minimum Order Required</div>
          </div>
          <div className="absolute translate-x-[-50%] left-[60%]">Min</div>
          <div className="absolute translate-x-[-50%] left-[100%]">Bonus</div>
        </div>
      </div>
      <div className="relative">
        <div className="flex lg:h-[16px] h-[14px]">
          <div className="border-l-2 border-y-2 border-[#6B1626] w-3/5 overflow-x-hidden">
            <div
              className={cn('bg-[#6B1626] w-[20%] h-full')}
              style={{ width: `${minPercentage}%` }}
            ></div>
          </div>
          <div className="border-r-2 border-y-2 border-[#BF4745] w-2/5 overflow-x-hidden">
            <div
              className={cn('bg-[#BF4745] w-[20%] h-full')}
              style={{ width: `${bonusPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <Milestone
            className={cn(
              'left-[60%] border-[#6B1626]',
              minPercentage >= 100 ? 'bg-[#6B1626] text-white' : 'bg-white',
            )}
          >
            <div>$75</div>
          </Milestone>
          <Milestone
            className={cn(
              'left-full border-[#BF4745]',
              bonusPercentage >= 100 ? 'bg-[#BF4745] text-white' : 'bg-white',
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
      'absolute rounded-full flex justify-center items-center lg:w-[36px] w-[32px] lg:h-[36px] h-[32px] translate-x-[-50%] translate-y-[-50%] top-[50%] border-2 font-barlow lg:text-[12px] text-[10px] font-extrabold lg:tracking-normal tracking-[-0.5px]',
      className,
    )}
  >
    {children}
  </div>
)
