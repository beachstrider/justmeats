import { useContext } from 'react'

import { useNavigate } from '@remix-run/react'

import { cn } from '~/lib/utils'
import { CustomBundleContext } from '~/providers/CustomBundleProvider'

export const Add = ({ product, line, type, isLandingPage = false }) => {
  const navigate = useNavigate()

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

  function goAddToCart() {
    if (line) {
      const { id, quantity } = line
      const updatedProducts = selectedProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: quantity + 1,
            totalAmount: ((quantity + 1) * productPrice).toFixed(2),
          }
        }
        return product
      })
      setSelectedProducts(updatedProducts)
    } else {
      addToSelectedProducts()
    }

    return navigate('/products/custom-bundle', { replace: true })
  }

  return (
    <button
      onClick={isLandingPage ? goAddToCart : addToSelectedProducts}
      className={cn(
        'btn-add-to-cart mx-auto flex justify-center items-center py-[8px] gap-[5px] px-[20px] leading-none font-medium lg:text-[20px] text-[18px]',
        type === 'normal' ? '' : '',
        type === 'modal'
          ? 'bg-[#BF4745] hover:bg-[#6B1626] text-white lg:px-[38px] px-[26px] lg:py-[10px] py-[12px]'
          : '',
      )}
    >
      <div className="font-barlow">ADD</div>
      {type === 'normal' && (
        <span
          className={cn(
            'font-bold text-[26px] lg:pb-[2px] pb-[3px]',
            type === 'normal' ? 'text-[#6B1626]' : '',
          )}
        >
          &nbsp;+
        </span>
      )}
      {type === 'modal' && (
        <>
          <span className="font-bold text-[26px] hidden lg:inline-block leading-none lg:pb-[2px] pb-[3px]">
            &nbsp;+
          </span>
          <span className="inline-block lg:hidden">&nbsp;TO CART</span>
        </>
      )}
    </button>
  )
}
