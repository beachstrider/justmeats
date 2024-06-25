import React, { useContext } from 'react'

import { CustomBundleContext } from '~/contexts'

import { Add } from './Add'
import { Quantity } from './Quantity'

export const ProductActions = ({ product, type = 'normal', isLandingPage }) => {
  const { selectedProducts } = useContext(CustomBundleContext)
  const line = selectedProducts.find(
    (selectedProduct) => selectedProduct.id === product.id,
  )

  return (
    <div className="font-barlow">
      {!isLandingPage && line ? (
        <Quantity line={line} type={type} />
      ) : (
        <Add
          product={product}
          line={line}
          type={type}
          isLandingPage={isLandingPage}
        />
      )}
    </div>
  )
}
