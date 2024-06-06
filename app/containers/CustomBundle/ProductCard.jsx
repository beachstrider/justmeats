import { cn, getPureId } from '~/lib/utils'

import { ProductActions } from './ProductActions'

export const ProductCard = ({ product, onClick }) => {
  const image = product.product_icon_1.reference.image.url
  const backgroundColor = product.background_color?.value ?? '#FFF'
  const servings = product.servings?.value ?? ''
  const servingType = product.serving_type?.value ?? ''

  // PATCH: temporily
  const pureId = getPureId(product.id, 'Product')
  if (pureId === '8717535838489' || pureId === '9078366634265') {
    return <></>
  }

  return (
    <div className="flex flex-col product-grid" data-product-id={product.id}>
      <div
        className={cn(
          'relative px-[25px] pt-[12%] pb-[5%] mt-[40%] 2xl:aspect-[270/280] xl:aspect-[270/282] aspect-[270/272] flex text-white bg-[#234234]',
        )}
        style={{ backgroundColor }}
      >
        <div className="flex items-end justify-center flex-1">
          <div className="absolute w-[84%] top-[18%] -translate-y-1/2">
            <img
              src={image}
              onClick={onClick}
              alt={product.title}
              loading="lazy"
              className="cursor-pointer"
            />
          </div>
          <div className="xl:mb-[2%] font-barlow sm:text-[16px] text-[12px] text-center">
            <div>{servingType}</div>
            <div>
              <strong>{servings}</strong> Servings, <strong>1</strong> lb
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between bg-white [box-shadow:0px_8px_14px_-5px_rgba(0,0,0,0.15)]">
        <div className="flex-1 flex flex-col justify-between px-[20px] pt-[30px] sm:pb-[10px] pb-[4px] font-barlow text-center">
          <div className="font-hudson font-bold leading-none 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[19px] sm:text-[18px] text-[15px] sm:mb-[20px] mb-[18px]">
            {product.title}
          </div>
          <div className="font-medium font-barlow sm:text-[18px] text-[14px]">
            ${product.priceRange.minVariantPrice.amount}
          </div>
        </div>
        <div className="h-[56px] flex justify-center items-center border-t border-[#efeeed]">
          <ProductActions product={product} />
        </div>
      </div>
    </div>
  )
}
