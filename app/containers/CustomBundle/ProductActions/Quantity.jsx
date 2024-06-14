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
          ? 'sm:w-[139px] sm:h-[50px] w-[166px] h-[51px] bg-[#BF4745]'
          : '',
        type === 'mobileCart' ? 'px-[6px]' : '',
      )}
    >
      <div className={`flex gap-[5px] items-center justify-between`}>
        <button
          onClick={() => updateQuantity(quantity - 1)}
          className={cn(
            `w-[25px] flex justify-center items-center h-[25px] rounded-[5px] p-[3px] font-bold text-[26px]`,
            type === 'modal' ? 'text-white' : 'text-[#862e1b]',
          )}
        >
          <span className="sm:pb-[2px] pb-[3px]">&#8722; </span>
        </button>
        <small
          className={cn(
            `flex-1 font-medium font-barlow sm:text-[20px] text-[18px] text-center flex justify-center items-center w-[32px] p-[3px]`,
            type === 'modal' ? 'text-white' : '',
            type === 'mobileCart' ? '!text-[14px]' : '',
            type === 'side-cart' ? '!text-[16px]' : '',
          )}
        >
          {quantity}
        </small>
        <button
          onClick={() => updateQuantity(quantity + 1)}
          className={cn(
            `flex justify-center items-center rounded-[5px] p-[3px] w-[25px] h-[25px] font-bold text-[26px]`,
            type === 'modal' ? 'text-white' : 'text-[#862e1b]',
          )}
          // PATCH: temporily
          disabled={isUnavailable}
        >
          <span className="sm:pb-[2px] pb-[3px]">&#43;</span>
        </button>
      </div>
    </div>
  )
}
