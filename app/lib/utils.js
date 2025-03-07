import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { countries } from '~/data/countries'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price) {
  if (Number.isInteger(price)) {
    return price.toString()
  } else {
    return price.toFixed(2).replace(/(\.0+|0+)$/, '')
  }
}

export function formatPriceWithRoundOf(price) {
  if (Number.isInteger(price)) {
    return price.toString()
  } else {
    const roundedPrice = Math.ceil(price * 100) / 100
    const roundedInteger = Math.round(roundedPrice)
    return roundedInteger.toString()
  }
}

export function addScriptToHead(src, callback = () => false) {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  script.onload = callback
  document.head.appendChild(script)
}

export function getPureId(fullId, type) {
  const keyword = `gid://shopify/${type}/`
  return fullId.split(keyword)[1]
}

export function getFullId(id, type) {
  return `gid://shopify/${type}/${id}`
}

export const DEFAULT_LOCALE = Object.freeze({
  ...countries.default,
  pathPrefix: '',
})

export const getSeparatedNumberString = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
