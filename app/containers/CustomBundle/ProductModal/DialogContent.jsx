import { UNSTABLE_Analytics as Analytics } from '@shopify/hydrogen'

import { DialogClose } from '~/icons/DialogClose'

import { ProductActions } from '../ProductActions'
import { ProductGallary } from './ProductGallery'

export const DialogContent = ({ product, onClose }) => {
  const images = product.images
  const media = images.nodes

  const servings = product.servings?.value ?? ''
  const weight = product.weight?.value ?? ''
  const calories = product.calories?.value ?? ''
  const protein = product.protein?.value ?? ''
  const fat = product.fat?.value ?? ''
  const carbs = product.carbs?.value ?? ''

  return (
    <>
      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: product.priceRange?.maxVariantPrice?.amount || '0',
              vendor: product.vendor,
              variantId: product.variants.nodes[0]?.id || '',
              variantTitle: product.variants.nodes[0]?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
      <div className="relative lg:px-[46px] px-[18px] lg:pt-[30px] pt-[19px] lg:pb-[26px] pb-[10px] border-b border-solid border-[#EFEEED]">
        <button
          onClick={() => onClose()}
          className="absolute lg:right-[17px] lg:top-[17px] right-[19px] top-[16px]"
        >
          <div className="w-[32px]">
            <DialogClose />
          </div>
        </button>
        <div>
          <h1 className="title font-hudson font-bold uppercase tracking-[0.8px] leading-[100%] text-[16px] lg:text-[32px]">
            {product.title}
          </h1>
          <p className="lg:mt-[4px] mt-[11px] product-details lg:text-[20px] text-[16px] text-[#1d1d1d] leading-tight font-barlow">
            {product.description}
          </p>
        </div>
      </div>

      <div className="relative flex lg:flex-row flex-col lg:justify-between lg:pt-[38px] pt-[32px] lg:px-[46px]">
        <div className="flex flex-col lg:w-[52%] lg:gap-[32px] gap-[24px] overflow-hidden product-gallary lg:px-0 px-[20px] lg:pb-[40px] pb-[30px]">
          <ProductGallary media={media} />
          <div className="rounded-[6px] border border-[#EFEEED] lg:px-[35px] px-[18px] font-barlow">
            <div className="lg:py-[18px] py-[11px] grid grid-cols-3">
              <div className="text-center">
                <div className="lg:text-[20px] text-[18px] font-bold">
                  {servings}
                </div>
                <div className="text-[14px]">Servings</div>
              </div>
              <div className="text-center">
                <div className="lg:text-[20px] text-[18px] font-bold">
                  {weight}
                </div>
                <div className="text-[14px]">Weight</div>
              </div>
              <div className="text-center">
                <div className="lg:text-[20px] text-[18px] font-bold">
                  {calories}
                </div>
                <div className="text-[14px]">Calories</div>
              </div>
            </div>
            <hr className="bg-[#EFEEED]" />
            <div className="lg:py-[18px] py-[11px] grid grid-cols-3">
              <div className="text-center">
                <div className="lg:text-[20px] text-[18px] font-bold">
                  {protein}
                </div>
                <div className="text-[14px]">Protein</div>
              </div>
              <div className="text-center">
                <div className="lg:text-[20px] text-[18px] font-bold">
                  {fat}
                </div>
                <div className="text-[14px]">Fat</div>
              </div>
              <div className="text-center">
                <div className="lg:text-[20px] text-[18px] font-bold">
                  {carbs}
                </div>
                <div className="text-[14px]">Carbs</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[38%] flex flex-col justify-between lg:pb-[40px] pb-[16px]">
          <div className="flex flex-col lg:gap-[47px] gap-[13px] font-barlow lg:px-0 px-[20px] lg:mb-0 mb-[16px]">
            <div className="description-box">
              <h2 className="lg:text-[20px] text-[16px] font-bold desc-title description lg:mb-[12px] mb-[8px]">
                Product Information:
              </h2>
              <p className="">{product.product_information.value}</p>
            </div>
            <div className="">
              <h2 className="lg:text-[20px] text-[16px] font-bold lg:mb-[12px] mb-[8px]">
                Ingredients:
              </h2>
              <p className="">{product.ingredients.value}</p>
            </div>
          </div>
          <hr className="lg:hidden block bg-[#EFEEED]" />
          <div className="flex lg:px-0 px-[20px] lg:pt-0 pt-[16px]">
            <div className="flex justify-between flex-1 lg:items-center price-bottom">
              <div className="price-text lg:text-[28px] text-[18px] font-barlow font-bold lg:flex-auto flex-1 lg:bg-inherit bg-[#efeeed] flex lg:justify-start justify-center items-center">
                ${product.priceRange.minVariantPrice.amount}
              </div>
              <ProductActions product={product} type="modal" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
