import { useContext } from 'react'

import { useLoaderData } from '@remix-run/react'

import { CustomBundleContext } from '~/contexts'

import { CartLineItem } from './CartLineItem'

export function CartLines({ type }) {
  const { bonusProduct, freeProduct } = useLoaderData()
  const { bonusVariant, selectedProducts } = useContext(CustomBundleContext)

  const bonusLine = {
    ...bonusProduct,
    variants: { nodes: [bonusVariant || bonusProduct.variants.nodes[0]] },
  }

  return (
    <div className="sm:pl-[40px] sm:pt-[40px] sm:pb-[24px] pl-[20px] pt-[20px] pb-[20px] overflow-x-hidden sm:overflow-y-scroll cart_lines_scrollbar sm:h-[590px]">
      <div className="sm:pr-[40px] pr-[20px]">
        <div className="grid grid-cols-3 sm:gap-[22px] gap-[8px] sm:grid-cols-1">
          <CartLineItem line={freeProduct} type={type} lineType="free" />
          <CartLineItem line={bonusLine} type={type} lineType="bonus" />
          {selectedProducts.map((product) => (
            <CartLineItem key={product.id} type={type} line={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
