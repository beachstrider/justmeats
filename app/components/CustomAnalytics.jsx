/* eslint-disable no-undef */
import { useEffect } from 'react'

import { useAnalytics } from '@shopify/hydrogen'

export function CustomAnalytics() {
  const { subscribe, register } = useAnalytics()
  const { ready } = register('Third Party Analytics Integration')

  useEffect(() => {
    // Standard events
    subscribe('page_viewed', (data) => {
      fbq('track', 'PageView')
      window.dataLayer.push({ event: 'page_view' })
    })
    // subscribe('product_viewed', (data) => {
    //   console.log('CustomAnalytics - Product viewed:', data)
    // })
    // subscribe('collection_viewed', (data) => {
    //   console.log('CustomAnalytics - Collection viewed:', data)
    // })
    // subscribe('cart_viewed', (data) => {
    //   console.log('CustomAnalytics - Cart viewed:', data)
    // })
    // subscribe('cart_updated', (data) => {
    //   console.log('CustomAnalytics - Cart updated:', data)
    // })

    // // Custom events
    // subscribe('custom_sidecart_viewed', (data) => {
    //   console.log('CustomAnalytics - Custom sidecart opened:', data)
    // })

    ready()
  }, [])

  return null
}
/* eslint-enable no-undef */
