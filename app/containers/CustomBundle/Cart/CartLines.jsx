import { useContext } from 'react'

import { useLoaderData } from '@remix-run/react'

import { CustomBundleContext } from '~/contexts'

import { CartLineItem } from './CartLineItem'

export function CartLines() {
  const { bonusProduct, freeProduct } = useLoaderData()
  const { bonusVariant, selectedProducts } = useContext(CustomBundleContext)

  const bonusLine = {
    ...bonusProduct,
    variants: { nodes: [bonusVariant || bonusProduct.variants.nodes[0]] },
  }

  return (
    <div className="sm:pl-[40px] sm:pt-[40px] sm:pb-[24px] pl-[20px] pt-[20px] pb-[20px] overflow-x-hidden">
      <div className="sm:pr-[40px] pr-[20px] sm:h-[450px] sm:overflow-y-scroll cart_lines_scrollbar">
        <div className="grid grid-cols-3 sm:gap-[32px] gap-[8px] sm:grid-cols-1">
          <CartLineItem line={freeProduct} lineType="free" />
          <CartLineItem line={bonusLine} lineType="bonus" />
          {selectedProducts.map((product) => (
            <CartLineItem key={product.id} line={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
