import { CartDetails } from './CartDetails'
import { ProgressBar } from './ProgressBar'

export function Cart({ layout, onCheckout }) {
  return (
    <div className="cart">
      <ProgressBar />
      <CartDetails layout={layout} onCheckout={onCheckout} />
    </div>
  )
}
