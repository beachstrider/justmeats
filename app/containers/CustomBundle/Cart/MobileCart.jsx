import { useContext, useState } from 'react'

import { Button } from '~/components/Button'
import { CustomBundleContext } from '~/contexts'
import { CanvasLogo } from '~/icons/CanvasLogo'
import { MobileChat } from '~/icons/MobileChat'
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

  const onMobileReamazeChatClick = () => {
    const button = document.querySelector('#reamaze-widget')
    button.click()
  }

  const CartContent = () => (
    <>
      <div className="px-[20px] py-[18px] flex justify-between bg-white font-bold border-b border-[#EFEEED]">
        <div className="flex items-center gap-[12px]">
          <CanvasLogo />
          <div className="font-barlow font-medium text-[20px] tracking-[1px]">
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
      <div className="fixed flex sm:gap-0 gap-[10px] w-full sm:hidden bottom-0 bg-white left-0 px-[20px] py-[16px] font-barlow font-bold text-[16px] [box-shadow:0px_0px_10px_0px_rgba(0,0,0,0.20)]">
        <Button
          className="flex justify-center shrink-0 items-center w-[48px] h-[48px] border-2 border-[#6B1626] rounded-[8px]"
          onClick={onMobileReamazeChatClick}
        >
          <MobileChat />
        </Button>
        <Button
          onClick={() => setCartOpen(true)}
          className={cn(
            'lg:hidden w-full py-[10px]',
            isCheckoutable
              ? 'bg-[#BF4745] text-white'
              : 'bg-[#EFEEED] text-[#6B1626]',
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
          <div className="flex sm:gap-0 gap-[10px] mt-[16px]">
            <Button
              className="flex justify-center shrink-0 items-center w-[48px] h-[48px] border-2 border-[#6B1626] rounded-[8px]"
              onClick={onMobileReamazeChatClick}
            >
              <MobileChat />
            </Button>
            <Button
              loading={submitting}
              disabled={!isCheckoutable}
              onClick={handleSubmit}
              className={cn(
                'flex-1 text-white font-bold font-barlow text-[18px] text-center py-[10px] z-50',
                isCartPage && isCheckoutable ? 'btn-checkout' : '',
                isCheckoutable ? 'bg-[#BF4745]' : 'bg-[#AAAAAA]',
              )}
            >
              {!isCheckoutable && `Spend $75 to `}
              {isCartPage ? `Checkout` : 'Update Changes'} - ${cost}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
