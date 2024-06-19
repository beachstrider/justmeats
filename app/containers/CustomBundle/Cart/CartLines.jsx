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
    <div className="lg:pl-[40px] lg:pt-[30px] lg:pb-[14px] pl-[20px] pt-[20px] pb-[20px] lg:pr-[24px] pr-[20px] md:mr-[16px] mr-0 overflow-x-hidden cart_lines_scrollbar lg:mb-0 mb-[374px] h-[calc(100vh-270px)]">
      <div className="grid grid-cols-3 lg:gap-[22px] gap-[8px] lg:grid-cols-1">
        <CartLineItem line={freeProduct} type={type} lineType="free" />
        <CartLineItem line={bonusLine} type={type} lineType="bonus" />
        {selectedProducts.map((product) => (
          <CartLineItem key={product.id} type={type} line={product} />
        ))}
      </div>
    </div>
  )
}
