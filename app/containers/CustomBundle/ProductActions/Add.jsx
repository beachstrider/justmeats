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
          ? 'bg-[#BF4745] hover:bg-[#6B1626] text-white sm:px-[38px] px-[26px] sm:py-[10px] py-[12px]'
          : '',
      )}
    >
      <div className="font-barlow">ADD</div>
      {type === 'normal' && (
        <span
          className={cn(
            'font-bold text-[26px] sm:pb-[2px] pb-[3px]',
            type === 'normal' ? 'text-[#6B1626]' : '',
          )}
        >
          &nbsp;+
        </span>
      )}
      {type === 'modal' && (
        <>
          <span className="font-bold text-[26px] hidden sm:inline-block leading-none sm:pb-[2px] pb-[3px]">
            &nbsp;+
          </span>
          <span className="inline-block sm:hidden">&nbsp;TO CART</span>
        </>
      )}
    </button>
  )
}
