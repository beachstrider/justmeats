import { useContext } from 'react'

import { CustomBundleContext } from '~/contexts'
import { cn, getPureId } from '~/lib/utils'

export const Quantity = ({ line, type }) => {
  const { selectedProducts, setSelectedProducts } =
    useContext(CustomBundleContext)
  const { id, quantity, priceRange } = line

  const price = priceRange?.maxVariantPrice?.amount

  // PATCH: temporily
  const isUnavailable =
    getPureId(line.id, 'Product') === '8717535838489' ||
    getPureId(line.id, 'Product') === '9078366634265'

  const updateQuantity = (value) => {
    if (value === 0) {
      const newSelectedProducts = selectedProducts.filter(
        (product) => product.id !== id,
      )
      setSelectedProducts(newSelectedProducts)
    } else {
      const updatedProducts = selectedProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: value,
            totalAmount: (value * price).toFixed(2),
          }
        }
        return product
      })
      setSelectedProducts(updatedProducts)
    }
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-full cart-line-quantity',
        type === 'modal'
          ? 'sm:w-[134px] sm:h-[50px] w-[166px] h-[51px] rounded-r-[8px] border border-[#efeeed]'
          : '',
      )}
    >
      <div className={`flex gap-[5px] items-center justify-between`}>
        <button
          onClick={() => updateQuantity(quantity - 1)}
          className={`w-[25px] flex justify-center items-center h-[25px] rounded-[5px] p-[3px] text-[#862e1b] font-bold text-[26px]`}
        >
          <span>&#8722; </span>
        </button>
        <small
          className={`flex-1 font-medium sm:text-[20px] text-[18px] text-center flex justify-center items-center w-[32px] p-[3px]`}
        >
          {quantity}
        </small>
        <button
          onClick={() => updateQuantity(quantity + 1)}
          className={`flex justify-center items-center rounded-[5px] p-[3px] w-[25px] h-[25px] text-[#862e1b] font-bold text-[26px]`}
          // PATCH: temporily
          disabled={isUnavailable}
        >
          <span>&#43;</span>
        </button>
      </div>
    </div>
  )
}
