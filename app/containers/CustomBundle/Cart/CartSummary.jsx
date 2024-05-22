import { useContext } from 'react'

import { CustomBundleContext } from '~/contexts'

export function CartSummary({ layout }) {
  const { cost, originalCost } = useContext(CustomBundleContext)

  const className =
    layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside'

  return (
    <div
      className={`${className} sm:px-[40px] px-[20px] sm:pt-[32px] pt-[16px] pb-[8px]`}
    >
      <div className="flex items-end justify-between font-nunito">
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
