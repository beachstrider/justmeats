import { Fragment, useContext } from 'react'

import selectproductimg from '~/assets/images/selectproductimg.png'
import { Button } from '~/components/Button'
import { Sheet, SheetContent, SheetTitle } from '~/components/Sheet'
import { OnetimeBundleContext } from '~/providers/OnetimeBundleProvider'

export const Products = () => {
  const {
    cartOpen,
    checkout,
    submitting,
    setCartOpen,
    cartProducts,
    setCartProducts,
  } = useContext(OnetimeBundleContext)

  const disabled =
    cartProducts.reduce((partialSum, a) => partialSum + a.quantity, 0) === 0
  const totalPrice = cartProducts.reduce(
    (partialSum, a) =>
      partialSum + Number(a.variants.nodes[0].price.amount) * a.quantity,
    0,
  )
  const totalCompareAtPrice = cartProducts.reduce(
    (partialSum, a) =>
      partialSum +
      Number(a.variants.nodes[0].compareAtPrice.amount) * a.quantity,
    0,
  )

  const updateQuantity = (index, v) => {
    const newProducts = [...cartProducts]
    const newQuantity = newProducts[index].quantity + v

    newProducts[index].quantity = newQuantity
    setCartProducts(newProducts)
  }

  const onMobileReamazeChatClick = () => {
    const button = document.querySelector('#reamaze-widget')
    button.click()
  }

  return (
    <section className="relative bg-[#EFEEED]">
      <div className="container-small quantiti-box pt-20 md:pb-[45px] pb-20 px-[15px]">
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
        <div
          id="bundles"
          className="flex flex-wrap justify-center w-full mt-20 lg:flex-nowrap lg:gap-16 sm:gap-10 gap-[69px]"
        >
          {cartProducts.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-6/12 md:w-4/12 sm:mx-0 drop-shadow-2xl"
            >
              <img
                className="w-full h-auto"
                src={product.featuredImage.url}
                alt=""
              />
              <div className="flex justify-center items-center h-[27px] bg-[#CF2A2A]">
                <div className="font-bold tracking-[0.8px] text-white">
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
              <div className="p-4 bg-white">
                <div className="text-center text-[#231B19] font-baskerville text-[32px] not-italic font-[600] leading-[100%]">
                  {product.product_information.value}
                </div>
                <div
                  className="sm:min-h-[100px] md:min-h-[70px] mt-5 text-center text-[#231B19] not-italic font-[400] leading-[18px]"
                  dangerouslySetInnerHTML={{
                    __html: product.cardDescription.value,
                  }}
                />
                <div className="flex justify-center mt-[10px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="line-through text-[#666666] text-[14px] not-italic font-[600] leading-[29px]">
                      ${product.variants.nodes[0].compareAtPrice.amount}
                    </div>
                    <div className="font-barlow  text-[#231B19] text-[24px] not-italic font-[700] uppercase leading-[29px]">
                      ${product.variants.nodes[0].price.amount}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center bg-white">
                <div className="w-[224px] h-[1px] bg-[#EFEEED]"></div>
              </div>
              <div className="flex items-center justify-center px-[23px] py-[15px] bg-white leading-[29px]">
                {product.quantity > 0 && (
                  <div className="flex items-center justify-center gap-[20px] my-[12px]">
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
                  </div>
                )}
                {product.quantity === 0 && (
                  <Button onClick={() => updateQuantity(index, 1)}>
                    <div className="flex justify-center items-center font-bold gap-[4px] py-[13px] border-2 border-[#AD916B] hover:bg-[#AD916B] text-black text-[18px] leading-none w-[183px] mb-[10px]">
                      ADD TO CART
                    </div>
                  </Button>
                )}
              </div>
              <img
                className="mx-auto mt-[87px] mb-2 lg:block hidden"
                src={selectproductimg}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="bg-[url('../assets/images/long-dot.png')] bg-repeat absolute bottom-[20px] left-0 right-0 p-[4px]"></div>
      </div>
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent className="flex flex-col bg-white">
          <SheetTitle className="lg:p-[30px] p-[20px] flex justify-between lg:font-bold font-medium text-[20px] tracking-[1px] border-b border-[#EFEEED]">
            <div className="flex items-center gap-[4px]">
              <button
                className="hidden lg:block"
                onClick={() => setCartOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M12.5 8.75L18.75 15L12.5 21.25"
                    stroke="#AD916B"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              SHOPPING CART
            </div>
            <div className="flex items-center">
              <button
                className="block lg:hidden"
                onClick={() => setCartOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00016 7.99992L1.3335 1.33325M8.00016 7.99992L14.6668 14.6666M8.00016 7.99992L14.6668 1.33325M8.00016 7.99992L1.3335 14.6666"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </SheetTitle>
          <div className="relative flex-1 overflow-y-auto">
            <div className="lg:px-[30px] px-[60px] py-[42px] flex flex-col lg:gap-[38px] gap-[36px]">
              {disabled && (
                <div className="text-center">Your cart is empty</div>
              )}
              {!disabled && (
                <>
                  {cartProducts.map((product, index) => {
                    if (product.quantity === 0) {
                      return <Fragment key={index}></Fragment>
                    }

                    return (
                      <div
                        key={index}
                        className="flex lg:flex-row flex-col lg:justify-between bg-white lg:shadow-none [box-shadow:0px_14px_50px_-15px_rgba(0,0,0,0.25)]"
                      >
                        <div className="flex lg:flex-row flex-col lg:gap-[12px]">
                          <img
                            src={product.featuredImage.url}
                            className="lg:h-[52px]"
                          />
                          <div className="flex flex-row justify-between lg:flex-col lg:justify-start lg:px-0 lg:py-0 px-[24px] py-[10px]">
                            <div className="lg:font-bold font-semibold lg:text-[16px] text-[20px]">
                              {product.product_information.value}
                            </div>
                            <div className="flex lg:flex-1 items-center gap-[20px] leading-[16px]">
                              <Button
                                onClick={() => updateQuantity(index, -1)}
                                className="flex justify-center items-center font-bold text-[32px] text-[#AD916B]"
                              >
                                −
                              </Button>
                              <div className="text-[#231B19] mt-[4px] font-barlow not-italic font-[500] leading-[16px] tracking-[1px] uppercase">
                                {product.quantity}
                              </div>
                              <Button
                                onClick={() => updateQuantity(index, 1)}
                                className="flex justify-center items-center font-bold text-[32px] text-[#AD916B]"
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex lg:justify-start justify-center lg:py-0 py-[8px] items-center gap-[8px] lg:border-none border-t border-[#EFEEED]">
                          <div className="font-[600] line-through text-[#666]">
                            ${product.variants.nodes[0].compareAtPrice.amount}
                          </div>
                          <div className="text-[20px] font-bold">
                            ${product.variants.nodes[0].price.amount}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          </div>
          <div className="lg:px-[30px] px-[20px] lg:py-[14px] py-[20px] [box-shadow:0px_0px_10px_0px_rgba(0,0,0,0.20)]">
            <div className="justify-between hidden lg:flex">
              <div className="font-bold">Total:</div>
              <div className="flex items-center gap-[8px] mb-[20px]">
                <div className="font-[600] line-through text-[#666]">
                  ${totalCompareAtPrice.toFixed(1)}
                </div>
                <div className="text-[20px] font-bold">
                  ${totalPrice.toFixed(1)}
                </div>
              </div>
            </div>
            <div className="flex lg:gap-0 gap-[10px]">
              <Button
                className="lg:hidden flex justify-center shrink-0 items-center w-[48px] h-[48px] border-2 border-black rounded-[8px]"
                onClick={onMobileReamazeChatClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={26}
                  viewBox="0 0 32 26"
                  fill="none"
                >
                  <g clipPath="url(#clip0_222_1438)">
                    <path
                      d="M10.4 0C16.145 0 20.8 4.00156 20.8 8.9375C20.8 13.8734 16.145 17.875 10.4 17.875C9.465 17.875 8.56 17.7582 7.695 17.5602C6.165 18.525 3.9565 19.5 1.2475 19.5C0.7485 19.5 0.2965 19.2004 0.1009 18.7332C-0.0948 18.266 -0.000370002 17.7277 0.33695 17.3621C0.363 17.3418 1.469 16.118 2.2865 14.5184C0.859 12.9898 0 11.05 0 8.9375C0 4.00156 4.6565 0 10.4 0ZM8.23 15.1379C8.96 15.3512 9.69 15.4375 10.4 15.4375C14.81 15.4375 18.4 12.5227 18.4 8.9375C18.4 5.35234 14.81 2.4375 10.4 2.4375C5.99 2.4375 2.4 5.35234 2.4 8.9375C2.4 10.725 3.2855 12.0453 4.0285 12.8426L5.205 14.107L4.4155 15.6457C4.237 15.9504 4.0365 16.3465 3.8275 16.6816C4.713 16.4227 5.585 16.0215 6.435 15.4426L7.27 14.9602L8.23 15.1379ZM22.08 6.51016C27.6 6.72344 32 10.6387 32 15.4375C32 17.55 31.14 19.4898 29.715 21.0184C30.53 22.618 31.635 23.8418 31.665 23.8621C32 24.2277 32.095 24.766 31.855 25.2332C31.705 25.7004 31.25 26 30.75 26C28.045 26 25.835 25.025 24.305 24.0602C23.44 24.2582 22.535 24.375 21.6 24.375C17.5 24.375 13.955 22.3336 12.26 19.373C13.125 19.2563 13.955 19.0582 14.745 18.784C16.145 20.673 18.695 21.9375 21.6 21.9375C22.31 21.9375 23.04 21.8512 23.77 21.6379L24.73 21.4602L25.565 21.9426C26.415 22.5215 27.285 22.9227 28.175 23.1816C27.965 22.8465 27.765 22.4504 27.585 22.1457L26.795 20.607L27.97 19.3426C28.715 18.5504 29.6 17.225 29.6 15.4375C29.6 12.0707 26.435 9.29805 22.355 8.96797L22.4 8.9375C22.4 8.09961 22.29 7.28711 22.08 6.51016Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_222_1438">
                      <rect width={32} height={26} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
              <Button
                loading={submitting}
                disabled={disabled}
                onClick={checkout}
                className="w-full lg:py-[18px] py-[10px] text-white bg-[#AD916B] hover:bg-[#7a6444] lg:text-[20px] text-[18px] font-bold disabled:bg-gray-400"
              >
                <div className="flex justify-center w-full">
                  Checkout
                  <div className="block lg:hidden"> - ${totalPrice}</div>
                </div>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}
