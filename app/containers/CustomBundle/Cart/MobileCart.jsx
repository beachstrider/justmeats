import { useContext, useState } from 'react'

import { Button } from '~/components/Button'
import { CustomBundleContext } from '~/contexts'
import { CanvasLogo } from '~/icons/CanvasLogo'
import { NewClose } from '~/icons/NewClose'
import { cn } from '~/lib/utils'

import { PlanPicker } from '../PlanPickerBlock/PlanPicker'
import { CartLines } from './CartLines'
import { ProgressBar } from './ProgressBar'

export const MobileCart = () => {
  const { cost, costForOneTime, submitting, handleSubmit, isCartPage } =
    useContext(CustomBundleContext)

  const [cartOpen, setCartOpen] = useState(false)

  const isCheckoutable = costForOneTime >= 75

  const CartContent = () => (
    <>
      <div className="px-[20px] py-[18px] flex justify-between bg-white font-bold border-b border-[#EFEEED]">
        <div className="flex gap-[12px]">
          <CanvasLogo />
          <div className="font-dunbar font-medium text-[20px] tracking-[1px]">
            SHOPPING CART
          </div>
        </div>
        <Button onClick={() => setCartOpen(false)}>
          <NewClose />
        </Button>
      </div>
      <ProgressBar />
      <CartLines type="mobileCart" />
    </>
  )

  return (
    <div className="relative z-20 mobile-cart">
      <div className="fixed w-full sm:hidden block bottom-0 bg-white left-0 px-[20px] py-[16px] font-nunito font-bold text-[16px] [box-shadow:0px_0px_10px_0px_rgba(0,0,0,0.20)]">
        <Button
          onClick={() => setCartOpen(true)}
          className={cn(
            'lg:hidden w-full rounded-[8px] py-[12px]',
            isCheckoutable
              ? 'bg-[#637160] text-white'
              : 'bg-[#EFEEED] text-[#637160]',
          )}
        >
          {isCartPage && (
            <>
              {isCheckoutable
                ? `View Cart - ($${cost})`
                : `Add $${(75 - costForOneTime).toFixed(
                    2,
                  )} to Unlock Cart ($${cost})`}
            </>
          )}
          {!isCartPage && (
            <>{isCheckoutable ? `Update Changes` : `Spend $75 to Continue`}</>
          )}
        </Button>
      </div>

      <div
        className={cn(
          'fixed flex flex-col justify-between w-full h-screen lg:hidden transition-transform duration-300 left-0 top-0 bg-white z-50',
          cartOpen ? 'translate-y-0' : 'translate-y-full',
        )}
      >
        {isCartPage && <CartContent />}
        {!isCartPage && (
          <div>
            <CartContent />
          </div>
        )}
        <div className="sm:pt-0 pt-[10px] sm:px-0 px-[20px] sm:pb-0 pb-[16px] flex flex-col shrink-0 [box-shadow:0_-3px_15px_-5px_#333]">
          {isCartPage && <PlanPicker type="mobileCart" />}
          <Button
            loading={submitting}
            disabled={!isCheckoutable}
            onClick={handleSubmit}
            className={cn(
              isCartPage && isCheckoutable ? 'btn-checkout' : '',
              'rounded-[8px] text-white font-bold font-nunito text-[18px] text-center py-[12px] z-50 mt-[16px]',
              isCheckoutable ? 'bg-[#637160]' : 'bg-[#AAAAAA]',
            )}
          >
            {isCartPage ? `Checkout` : 'Update Changes'}- ${cost}
            {!isCheckoutable && ` (Add $75 to Unlock)`}
          </Button>
        </div>
      </div>
    </div>
  )
}
