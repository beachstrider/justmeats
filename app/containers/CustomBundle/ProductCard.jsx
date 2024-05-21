import { getPureId } from '~/lib/utils'

import { ProductActions } from './ProductActions'

export const ProductCard = ({ product, onClick }) => {
  const image = product.featuredImage.url

  // PATCH: temporily
  const pureId = getPureId(product.id, 'Product')
  if (pureId === '8717535838489') {
    return <></>
  }

  return (
    <div className="product-grid" data-product-id={product.id}>
      <div className="img-wrapper">
        <img
          onClick={onClick}
          className="object-contain w-full"
          width="100%"
          alt={product.title}
          src={image}
          loading="lazy"
        />
      </div>
      <div className="pt-6 text-center price">
        <span className="p-6 text-2xl font-bold font-roboto_bold">
          ${product.priceRange.minVariantPrice.amount}
        </span>
      </div>
      <div className="mx-auto my-5 text-center">
        <ProductActions product={product} />
      </div>
    </div>
  )
}
