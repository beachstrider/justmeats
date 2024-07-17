import { useContext } from 'react'

import { CustomBundleContext } from '~/providers/CustomBundleProvider'

export function CartSummary({ layout }) {
  const { cost, originalCost } = useContext(CustomBundleContext)

  const className =
    layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside'

  return (
    <div
      className={`${className} relative lg:px-[40px] px-[20px] lg:pt-[28px] pt-[16px]`}
    >
      <div className="flex items-end justify-between font-barlow">
        <div className="font-bold text-[14px]">Total:</div>
        <div className="flex items-end gap-[6px]">
          <div className="font-semibold text-[14px] text-[#666] line-through mb-[4px]">
            ${originalCost}
          </div>
          <div className="font-bold text-[20px]">${cost}</div>
        </div>
      </div>
    </div>
  )
}
