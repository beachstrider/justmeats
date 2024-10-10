import selectproductimg from '~/assets/images/selectproductimg.png'
import { Button } from '~/components/Button'

export const Products = ({ submitting, checkout, products, setProducts }) => {
  const disabled =
    products.reduce((partialSum, a) => partialSum + a.quantity, 0) === 0

  const updateQuantity = (index, v) => {
    const newProducts = [...products]
    const newQuantity = newProducts[index].quantity + v

    newProducts[index].quantity = newQuantity
    setProducts(newProducts)
  }

  return (
    <section className="relative  bg-[#EFEEED]">
      <div className="max-w-[961px] mx-auto quantiti-box pt-20 md:pb-36 pb-20 px-[15px]">
        <div className="main-heading uppercase text-[#AD916B] text-center leading-[normal] text-[39px] font-baskerville font-[700]">
          LIMITED QUANTITIES ONLY
        </div>
        <div className="main-heading uppercase text-[#AD916B] text-center leading-[normal] text-[39px] font-baskerville font-[700]">
          ..........
        </div>
        <div className="my-5 mx-auto text-center font-['Barlow'] text-[18px] font-[400] leading-[24px] text-[#231B19] max-w-[730px] not-italic	">
          Hurry, quantities are limited. Once these bundles are gone, they’re
          gone for good. Don’t miss out on this exclusive opportunity to enjoy
          USDA Choice Angus steaks at a significant discount. Get yours now and
          experience restaurant-quality meats at grocery store prices.
        </div>
        <div className="flex flex-wrap justify-center w-full mt-20 lg:flex-nowrap lg:gap-16 sm:gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full mx-10 sm:w-6/12 md:w-4/12 sm:mx-0 drop-shadow-2xl"
            >
              <img
                className="w-full h-auto"
                src={product.featuredImage.url}
                alt=""
              />
              <div className="p-4 bg-white border-b ">
                <div className="text-center text-[#231B19] font-baskerville text-[24px] not-italic font-[600] leading-[100%]">
                  {product.product_information.value}
                </div>
                <div className="flex items-end justify-between mt-6 ">
                  <div>
                    <div className="line-through	 font-barlow  text-[#666666] text-[14px] not-italic font-[600] leading-[29px]">
                      ${product.variants.nodes[0].compareAtPrice.amount}
                    </div>
                    <div className="font-barlow  text-[#231B19] text-[18px] not-italic font-[700] uppercase leading-[29px]">
                      ${product.variants.nodes[0].price.amount}
                    </div>
                  </div>
                  <div>
                    <div className="font-barlow  text-[#CF2A2A] text-[16px] text-right not-italic font-[700] uppercase leading-[29px] tracking-[.8px]">
                      {Math.round(
                        (1 -
                          Number(product.variants.nodes[0].price.amount) /
                            Number(
                              product.variants.nodes[0].compareAtPrice.amount,
                            )) *
                          100,
                      )}
                      % OFF
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[20px] p-4 bg-white leading-[29px]">
                {product.quantity > 0 && (
                  <>
                    <Button
                      onClick={() => updateQuantity(index, -1)}
                      className="flex justify-center items-center font-bold text-[32px] text-[#AD916B]"
                    >
                      −
                    </Button>
                    <div className="text-[#231B19] font-barlow  text-[20px]  not-italic font-[500] leading-[29px]  tracking-[1px] uppercase mt-[4px]">
                      {product.quantity}
                    </div>
                    <Button
                      onClick={() => updateQuantity(index, 1)}
                      className="flex justify-center items-center font-bold text-[32px] text-[#AD916B]"
                    >
                      +
                    </Button>
                  </>
                )}
                {product.quantity === 0 && (
                  <Button onClick={() => updateQuantity(index, 1)}>
                    <div className="flex justify-center items-center font-bold gap-[4px]">
                      <span className="text-black text-[18px] mt-[4px]">
                        ADD TO CART
                      </span>
                    </div>
                  </Button>
                )}
              </div>
              <div className="mt-[44px]">
                <Button
                  disabled={disabled}
                  loading={submitting}
                  onClick={checkout}
                  className="hover:bg-[#AD916B] hover:text-[#000000] font-hudson text-[#000] sm:text-[14px] text-[12px] border-2 border-[#AD916B] font-normal leading-[14.566px] sm:tracking-[2.8px] tracking-[2.4px] cursor-pointer transition py-3 px-12 uppercase w-full"
                >
                  CHECKOUT
                </Button>
              </div>
              <div
                className="h-auto  sm:min-h-[150px] md:min-h-[120px] mt-10 text-center text-[#231B19] font-barlow  text-[18px] not-italic font-[400] leading-[24px]"
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              ></div>
              <div className="text-center text-[#AD916B] font-baskerville uppercase text-[39px] not-italic leading-[normal]">
                ...
              </div>
              <div
                className="sm:min-h-[100px] md:min-h-[70px] mt-5 text-center text-[#231B19] font-barlow text-[18px] not-italic font-[400] leading-[24px]"
                dangerouslySetInnerHTML={{
                  __html: product.cardDescription.value,
                }}
              />
              <img
                className="mx-auto mt-10 mb-2"
                src={selectproductimg}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="bg-[url('../assets/images/long-dot.png')] bg-repeat absolute bottom-[20px] left-0 right-0 p-[4px]"></div>
      </div>
    </section>
  )
}
