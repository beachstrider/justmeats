import { DialogClose } from '~/icons/DialogClose'

import { ProductActions } from '../ProductActions'
import { ProductGallary } from './ProductGallery'

export const DialogContent = ({ product, onClose }) => {
  const images = product.images
  const media = images.nodes
  const servings = product.servings?.value ?? ''

  return (
    <>
      <div className="relative sm:px-[46px] px-[18px] sm:pt-[30px] pt-[19px] sm:pb-[26px] pb-[10px] border-b border-solid border-[#EFEEED]">
        <button
          onClick={() => onClose()}
          className="absolute sm:right-[17px] sm:top-[17px] right-[19px] top-[16px]"
        >
          <div className="w-[32px]">
            <DialogClose />
          </div>
        </button>
        <div>
          <h1 className="title font-dunbar font-medium uppercase tracking-[0.8px] leading-[100%] text-[16px] sm:text-[32px]">
            {product.title}
          </h1>
          <p className="sm:mt-[4px] mt-[11px] product-details sm:text-[20px] text-[16px] text-[#1d1d1d] leading-tight font-nunito font-medium">
            {product.description}
          </p>
        </div>
      </div>

      <div className="relative flex sm:flex-row flex-col sm:justify-between sm:pt-[38px] pt-[32px] sm:px-[46px]">
        <div className="flex flex-col sm:w-[52%] sm:gap-[32px] gap-[24px] overflow-hidden product-gallary sm:px-0 px-[20px] sm:pb-[40px] pb-[30px]">
          <ProductGallary media={media} />
          <div className="rounded-[6px] border border-[#EFEEED] sm:px-[35px] px-[18px] font-nunito">
            <div className="sm:py-[18px] py-[11px] grid grid-cols-3">
              <div className="text-center">
                <div className="sm:text-[20px] text-[18px] font-bold">
                  {servings}
                </div>
                <div className="text-[14px]">Servings</div>
              </div>
              <div className="text-center">
                <div className="sm:text-[20px] text-[18px] font-bold">1lb</div>
                <div className="text-[14px]">Weight</div>
              </div>
              <div className="text-center">
                <div className="sm:text-[20px] text-[18px] font-bold">1000</div>
                <div className="text-[14px]">Calories</div>
              </div>
            </div>
            <hr className="bg-[#EFEEED]" />
            <div className="sm:py-[18px] py-[11px] grid grid-cols-3">
              <div className="text-center">
                <div className="sm:text-[20px] text-[18px] font-bold">
                  {product.protein.value}
                </div>
                <div className="text-[14px]">Protein</div>
              </div>
              <div className="text-center">
                <div className="sm:text-[20px] text-[18px] font-bold">
                  {product.fat.value}
                </div>
                <div className="text-[14px]">Fat</div>
              </div>
              <div className="text-center">
                <div className="sm:text-[20px] text-[18px] font-bold">
                  {product.carbs.value}
                </div>
                <div className="text-[14px]">Carbs</div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-[38%] flex flex-col justify-between sm:pb-[40px] pb-[16px]">
          <div className="flex flex-col sm:gap-[47px] gap-[13px] font-nunito sm:px-0 px-[20px] sm:mb-0 mb-[16px]">
            <div className="description-box">
              <h2 className="sm:text-[20px] text-[16px] font-bold desc-title description sm:mb-[12px] mb-[8px]">
                Product Information:
              </h2>
              <p className="">{product.product_information.value}</p>
            </div>
            <div className="">
              <h2 className="sm:text-[20px] text-[16px] font-bold sm:mb-[12px] mb-[8px]">
                Ingredients:
              </h2>
              <p className="">{product.ingredients.value}</p>
            </div>
          </div>
          <hr className="sm:hidden block bg-[#EFEEED]" />
          <div className="flex sm:px-0 px-[20px] sm:pt-0 pt-[16px]">
            <div className="flex justify-between flex-1 sm:items-center price-bottom">
              <div className="price-text sm:text-[28px] text-[18px] font-nunito font-bold sm:flex-auto flex-1 sm:rounded-l-none rounded-l-[8px] sm:bg-inherit bg-[#efeeed] flex sm:justify-start justify-center items-center">
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
