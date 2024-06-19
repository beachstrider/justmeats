import { CartCheckoutActions } from './CartCheckoutActions'
import { CartLines } from './CartLines'
import { CartSummary } from './CartSummary'
import { ProgressBar } from './ProgressBar'

export function Cart({ layout, onCheckout }) {
  return (
    <div className="cart">
      <div className="flex flex-col justify-between cart-details ">
        <CartLines />
        <div className="fixed bottom-0 sm:max-w-[480px] w-full">
          <div className="w-full h-[16px] [background:linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.03)_66%,rgba(0,0,0,0.08)_100%)]" />
          <div className="bg-white">
            <CartSummary layout={layout} />
            <ProgressBar />
            <CartCheckoutActions onCheckout={onCheckout} />
          </div>
        </div>
      </div>
    </div>
  )
}
