import { useContext } from 'react'

import { CustomBundleContext } from '~/contexts'
import { cn } from '~/lib/utils'

export const Add = ({ product, type }) => {
  const { selectedProducts, setSelectedProducts } =
    useContext(CustomBundleContext)

  const productPrice = product?.priceRange?.maxVariantPrice?.amount

  function addToSelectedProducts() {
    const newSelectedProducts = [
      ...selectedProducts,
      {
        ...product,
        quantity: 1,
        amount: productPrice,
        totalAmount: productPrice,
      },
    ]
    setSelectedProducts(newSelectedProducts)
  }

  return (
    <button
      onClick={addToSelectedProducts}
      className={cn(
        'btn-add-to-cart mx-auto flex justify-center items-center py-[8px] gap-[5px] px-[20px] leading-none font-medium sm:text-[20px] text-[18px]',
        type === 'normal' ? '' : '',
        type === 'modal'
          ? 'bg-[#637160] hover:bg-[#848E81] text-white sm:px-[38px] px-[26px] sm:py-[10px] py-[12px] sm:rounded-l-[4px] rounded-l-0 sm:rounded-r-[4px] rounded-r-[8px]'
          : '',
      )}
    >
      ADD
      {type === 'normal' && (
        <span className={cn(type === 'normal' ? 'text-[#7a392d]' : '')}>
          &nbsp;+
        </span>
      )}
      {type === 'modal' && (
        <>
          <span className="hidden sm:inline-block">&nbsp;+</span>
          <span className="inline-block sm:hidden">&nbsp;TO CART</span>
        </>
      )}
    </button>
  )
}
