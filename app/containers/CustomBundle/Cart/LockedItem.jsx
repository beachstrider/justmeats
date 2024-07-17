import { useContext } from 'react'

import { useLoaderData } from '@remix-run/react'

import { cn } from '~/lib/utils'
import { CustomBundleContext } from '~/providers/CustomBundleProvider'

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
          'custom-select font-barlow font-bold text-[10px] lg:text-[14px] lg:py-[3px] py-[3px] lg:pl-[16px] pl-[8px] lg:pr-[40px] pr-[26px] w-full lg:rounded-[4px] outline-none focus:outline-none bg-auto shadow-none focus:shadow-none border lg:!border-[#1d1d1d49] !border-transparent !rounded-none',
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
        <div className="lg:w-[32px] w-[24px]">
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}
