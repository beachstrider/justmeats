import { createContext, useEffect, useState } from 'react'

import { useSubmitPromise } from '~/hooks/useSubmitPromise'

export const OnetimeBundleContext = createContext()

export const OnetimeBundleProvider = ({ products: _products, children }) => {
  const submit = useSubmitPromise()

  const [submitting, setSubmitting] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartProducts, _setCartProducts] = useState(
    _products.map((product) => ({
      merchandiseId: product.variants.nodes[0].id,
      quantity: 0,
      ...product,
    })),
  )

  const cartCount = cartProducts.reduce((prev, item) => prev + item.quantity, 0)

  const checkout = async () => {
    setSubmitting(true)

    const res = await submit(
      {
        body: JSON.stringify(cartProducts),
      },
      {
        method: 'post',
        action: `/products/sv-special`,
      },
    )

    if (res.success) {
      location.href = res.checkoutUrl
    } else {
      console.error(res.message)
      setSubmitting(false)
    }
  }

  const loadCart = () => {
    const _cartProducts = window.localStorage.getItem('_onetimeCartProducts')

    if (_cartProducts) {
      _setCartProducts(JSON.parse(_cartProducts))
    }
  }

  const setCartProducts = (value) => {
    _setCartProducts(value)
    window.localStorage.setItem('_onetimeCartProducts', JSON.stringify(value))
  }

  useEffect(() => {
    loadCart()
  }, [])

  return (
    <OnetimeBundleContext.Provider
      value={{
        cartProducts,
        submitting,
        cartCount,
        cartOpen,
        checkout,
        setCartOpen,
        setCartProducts,
      }}
    >
      {children}
    </OnetimeBundleContext.Provider>
  )
}
