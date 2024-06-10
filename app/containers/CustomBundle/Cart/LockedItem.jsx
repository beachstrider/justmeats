import { useContext } from 'react'

import { useLoaderData } from '@remix-run/react'

import { CustomBundleContext } from '~/contexts'
import { cn } from '~/lib/utils'

export function LockedItem() {
  const { bonusProduct } = useLoaderData()
  const { bonusVariant, setBonusVariant, costForOneTime } =
    useContext(CustomBundleContext)

  const bonusVariants = bonusProduct.variants.nodes

  const onBonusChange = (e) => {
    const id = e.target.value
    const newBonus = bonusVariants.find((el) => el.id === id)
    setBonusVariant(newBonus)
  }

  const disabled = costForOneTime < 125

  const ArrowDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
      <path
        d="M9.3335 13.3333L16.0002 20L22.6668 13.3333"
        stroke={disabled ? '#AAA' : '#6B1626'}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <div className="relative flex-1">
      <select
        className={cn(
          'custom-select font-barlow font-bold text-[10px] sm:text-[14px] sm:py-[15px] py-[3px] sm:pl-[16px] pl-[8px] sm:pr-[40px] pr-[26px] w-full sm:rounded-[4px] outline-none focus:outline-none bg-auto shadow-none focus:shadow-none border sm:!border-[#1d1d1d49] !border-transparent',
          disabled ? 'bg-[#EFEEED] border-[#EFEEED]' : 'border-[#1d1d1d49]',
        )}
        onChange={onBonusChange}
        value={bonusVariant?.id}
        disabled={disabled}
      >
        {bonusVariants.map((el, index) => (
          <option key={index} value={el.id}>
            {el.title}
          </option>
        ))}
      </select>
      <div className="absolute top-0 right-[5px] flex items-center h-full">
        <div className="sm:w-[32px] w-[24px]">
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}
