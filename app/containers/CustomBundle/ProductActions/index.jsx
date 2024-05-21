import React, { useContext } from 'react'

import { CustomBundleContext } from '~/contexts'

import { Add } from './Add'
import { Quantity } from './Quantity'

export const ProductActions = ({ product, type = 'normal' }) => {
  const { selectedProducts } = useContext(CustomBundleContext)
  const line = selectedProducts.find(
    (selectedProduct) => selectedProduct.id === product.id,
  )

  return (
    <div className="font-dunbar">
      {line ? (
        <Quantity line={line} type={type} />
      ) : (
        <Add product={product} type={type} />
      )}
    </div>
  )
}
