import { useContext, useState } from 'react'

import { Button } from '~/components/Button'
import { CustomBundleContext } from '~/contexts'
import { cn } from '~/lib/utils'

const UPDATE_CHANGES = 'Update Changes'
const CHANGES_SAVED = 'Changes saved!'
const SAVING_FAILD = 'Saving failed!'

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
    <>
      {costForOneTime >= 75 ? (
        <div className="flex justify-center items-center w-1/2 bg-[#425b34]">
          <Button
            loading={submitting}
            onClick={onSubmit}
            className={cn(
              isCartPage ? 'btn-checkout' : '',
              'bg-[#425b34] text-[15px] py-[15px] font-semibold text-white px-1',
            )}
          >
            {isCartPage ? 'Continue To Checkout' : btnUpdateText}
          </Button>
        </div>
      ) : (
        <div className="flex justify-center items-center w-6/12 pointer-events-none select-none  bg-[#6e6e6e]">
          <Button
            disabled
            className=" text-[15px] text-center py-[15px] font-semibold text-white"
          >
            Spend $75 To Continue
          </Button>
        </div>
      )}
    </>
  )
}
