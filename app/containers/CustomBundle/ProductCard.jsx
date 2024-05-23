import { getPureId } from '~/lib/utils'

import { ProductActions } from './ProductActions'

export const ProductCard = ({ product, onClick }) => {
  const image = product.product_icon_1.reference.image.url

  // PATCH: temporily
  const pureId = getPureId(product.id, 'Product')
  if (pureId === '8717535838489') {
    return <></>
  }

  return (
    <div className="flex flex-col product-grid" data-product-id={product.id}>
      <div className="relative px-[25px] pt-[12%] pb-[5%] mt-[40%] rounded-t-[8px] 2xl:aspect-[270/280] aspect-[270/272] flex bg-[#572D2D] text-white">
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
          <div className="xl:mb-[2%] font-nunito sm:text-[16px] text-[12px] text-center">
            <div>Everyday Meats</div>
            <div>
              <strong>10</strong> Servings, <strong>1</strong> lb
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between bg-white rounded-b-[8px] [box-shadow:0px_8px_14px_-5px_rgba(0,0,0,0.15)]">
        <div className="flex-1 flex flex-col justify-between px-[20px] pt-[30px] sm:pb-[10px] pb-[4px] font-nunito text-center">
          <div className="font-extrabold leading-none 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[19px] sm:text-[18px] text-[15px] sm:mb-[20px] mb-[18px]">
            {product.title}
          </div>
          <div className="font-bold sm:text-[18px] text-[14px]">
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
