import { useContext } from 'react'

import { Button } from '~/components/Button'
import { CustomBundleContext } from '~/contexts'
import { cn } from '~/lib/utils'

export function CartCheckoutActions() {
  const { isCartPage, costForOneTime, submitting, handleSubmit } =
    useContext(CustomBundleContext)

  return (
    <div className="sm:px-[40px] px-[20px] sm:pb-[26px] pb-[20px] text-center font-nunito sm:text-[20px] text-[18px] font-bold">
      <Button
        loading={submitting}
        onClick={handleSubmit}
        disabled={costForOneTime < 75}
        className={cn(
          'w-full text-[15px] text-center py-[15px] font-bold sm:rounded-[4px] rounded-[8px]',
          isCartPage ? 'btn-checkout' : '',
          costForOneTime >= 75
            ? 'text-white bg-[#637160] hover:bg-[#848E81]'
            : 'text-[#637160] bg-[#EFEEED]',
        )}
      >
        {costForOneTime >= 75
          ? isCartPage
            ? 'Continue To Checkout'
            : 'Update Changes'
          : 'Spend $75 to Continue'}
      </Button>
    </div>
  )
}
