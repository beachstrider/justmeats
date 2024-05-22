import { useContext } from 'react'

import { CustomBundleContext } from '~/contexts'

import { CartCheckoutActions } from './CartCheckoutActions'
import { CartLines } from './CartLines'
import { CartSummary } from './CartSummary'
import { LockedItem } from './LockedItem'

export function CartDetails({ layout, onCheckout }) {
  const { selectedProducts } = useContext(CustomBundleContext)

  const cartHasItems = selectedProducts.length > 0

  return (
    <div className="flex flex-col justify-between cart-details">
      <CartLines />
      {cartHasItems && (
        <>
          <CartSummary layout={layout} />
          <CartCheckoutActions onCheckout={onCheckout} />
          {/* <LockedItem /> */}
        </>
      )}
    </div>
  )
}
