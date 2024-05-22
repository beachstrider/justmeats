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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M9.3335 13.3333L16.0002 20L22.6668 13.3333"
        stroke={disabled ? '#AAA' : '#7A392D'}
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
          'custom-select font-nunito font-bold text-[12px] sm:text-[14px] py-[12px] pl-[16px] pr-[40px] w-full rounded-[4px] outline-none focus:outline-none bg-auto shadow-none focus:shadow-none border border-[#1d1d1d49]',
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
        <ArrowDown />
      </div>
    </div>
  )
}
