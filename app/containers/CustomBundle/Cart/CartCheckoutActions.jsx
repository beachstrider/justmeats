import { useContext, useState } from 'react'

import { Button } from '~/components/Button'
import { CustomBundleContext } from '~/contexts'
import { cn } from '~/lib/utils'

const UPDATE_CHANGES = 'Update Changes'
const CHANGES_SAVED = 'Changes Saved!'
const SAVING_FAILD = 'Saving Failed'

export function CartCheckoutActions() {
  const { isCartPage, costForOneTime, submitting, handleSubmit } =
    useContext(CustomBundleContext)

  const [btnUpdateText, setBtnUpdateText] = useState(UPDATE_CHANGES)

  const onSubmit = async () => {
    const res = await handleSubmit()

    if (res.success) {
      setBtnUpdateText(CHANGES_SAVED)
    } else {
      setBtnUpdateText(SAVING_FAILD)
    }

    setTimeout(() => setBtnUpdateText(UPDATE_CHANGES), 2000)
  }

  return (
    <div className="lg:px-[40px] px-[20px] lg:pb-[26px] pb-[20px] text-center font-barlow lg:text-[20px] text-[18px] font-bold">
      <Button
        loading={submitting}
        onClick={onSubmit}
        disabled={costForOneTime < 75}
        className={cn(
          'w-full text-center py-[15px] font-bold',
          isCartPage ? 'btn-checkout' : '',
          costForOneTime >= 75
            ? 'text-white bg-[#BF4745] hover:bg-[#6B1626]'
            : 'text-[#BF4745] bg-[#EFEEED]',
        )}
      >
        {costForOneTime >= 75
          ? isCartPage
            ? 'Continue To Checkout'
            : btnUpdateText
          : 'Spend $75 to Continue'}
      </Button>
    </div>
  )
}
