import { createContext, useEffect, useState } from 'react'

import { DELIVERY_EVERY_15_DAYS } from '~/consts'

export const RootContext = createContext()

export const RootProvider = ({ children }) => {
  const [cartSellingPlan, _setCartSellingPlan] = useState(
    DELIVERY_EVERY_15_DAYS,
  )
  const [cartProducts, _setCartProducts] = useState([])
  const [cartBonusVariant, _setCartBonusVariant] = useState(null)
  const [cartSellingPlanFrequency, _setCartSellingPlanFrequency] = useState(
    DELIVERY_EVERY_15_DAYS,
  )

  const [subscriptionSellingPlan, setSubscriptionSellingPlan] = useState(
    DELIVERY_EVERY_15_DAYS,
  )
  const [subscriptionProducts, setSubscriptionProducts] = useState([])
  const [subscriptionBonusVariant, setSubscriptionBonusVariant] = useState(null)
  const [
    subscriptionSellingPlanFrequency,
    setSubscriptionSellingPlanFrequency,
  ] = useState('')

  const cartCount = cartProducts.reduce((prev, item) => prev + item.quantity, 0)
  const cartCost = cartProducts.reduce(
    (acc, curr) => acc + parseFloat(curr.totalAmount),
    0,
  )
  const subscriptionCost = subscriptionProducts.reduce(
    (acc, curr) => acc + parseFloat(curr.totalAmount),
    0,
  )

  useEffect(() => {
    loadCart()
  }, [])

  const loadCart = () => {
    // HACK: in order to avoid using old local storage data and errors
    const _new_local_storage_enabled = window.localStorage.getItem(
      '_new_local_storage_enabled',
    )
    if (!_new_local_storage_enabled) {
      document.cookie = 'cart=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      window.localStorage.clear()
      window.localStorage.setItem(
        '_new_local_storage_enabled',
        JSON.stringify(true),
      )
    }

    const _cartSellingPlan = window.localStorage.getItem('_cartSellingPlan')
    const _cartProducts = window.localStorage.getItem('_cartProducts')
    const _cartBonusVariant = window.localStorage.getItem('_cartBonusVariant')
    const _cartSellingPlanFrequency = window.localStorage.getItem(
      '_cartSellingPlanFrequency',
    )

    if (_cartSellingPlan) {
      _setCartSellingPlan(JSON.parse(_cartSellingPlan))
    }
    if (_cartSellingPlanFrequency) {
      _setCartSellingPlanFrequency(JSON.parse(_cartSellingPlanFrequency))
    }
    if (_cartProducts) {
      _setCartProducts(JSON.parse(_cartProducts))
    }
    if (_cartBonusVariant) {
      setCartBonusVariant(JSON.parse(_cartBonusVariant))
    }
  }

  const setCartSellingPlan = (value) => {
    _setCartSellingPlan(value)
    window.localStorage.setItem('_cartSellingPlan', JSON.stringify(value))

    // Adjust cart products according to sellingPlan
    const newCartProducts = value
      ? cartProducts
      : cartProducts.filter((product) => !product.requiresSellingPlan)

    setCartProducts(newCartProducts)
  }

  const setCartSellingPlanFrequency = (value) => {
    _setCartSellingPlanFrequency(value)
    window.localStorage.setItem(
      '_cartSellingPlanFrequency',
      JSON.stringify(value),
    )

    setCartSellingPlan(value)
  }

  const setCartProducts = (value) => {
    _setCartProducts(value)
    window.localStorage.setItem('_cartProducts', JSON.stringify(value))

    triggerKlaviyo({ products: value })
  }

  const setCartBonusVariant = (value) => {
    _setCartBonusVariant(value)
    window.localStorage.setItem('_cartBonusVariant', JSON.stringify(value))
  }

  const triggerKlaviyo = ({ products }) => {
    const _learnq = window._learnq || []

    const cartItems = products.map((product) => ({
      quantity: product.quantity,
      merchandiseId: product.variants.nodes[0].id,
    }))

    const cart = {
      total_price: cartCost,
      value: cartCount,
      original_total_price: cartCost,
      items: cartItems,
    }

    if (products.length) {
      _learnq.push(['track', 'Cart items changed', cart])
    }
  }

  return (
    <RootContext.Provider
      value={{
        cartCost,
        cartCount,
        cartProducts,
        cartSellingPlan,
        cartSellingPlanFrequency,
        cartBonusVariant,
        subscriptionCost,
        subscriptionSellingPlan,
        subscriptionProducts,
        subscriptionSellingPlanFrequency,
        subscriptionBonusVariant,
        setCartProducts,
        setCartSellingPlan,
        setCartSellingPlanFrequency,
        setCartBonusVariant,
        setSubscriptionSellingPlan,
        setSubscriptionProducts,
        setSubscriptionSellingPlanFrequency,
        setSubscriptionBonusVariant,
      }}
    >
      {children}
    </RootContext.Provider>
  )
}
