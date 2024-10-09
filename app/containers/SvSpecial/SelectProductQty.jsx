import selectproductimg from '~/assets/images/selectproductimg.png'
import steaks8 from '~/assets/images/steaks8.png'
import steaks10 from '~/assets/images/steaks10.png'
import steaks16 from '~/assets/images/steaks16.png'

export const SelectProductQty = () => {
  return (
    <section className="relative  bg-[#EFEEED]">
      <div className="max-w-[1000px] mx-auto quantiti-box pt-20 md:pb-36 pb-20 px-[15px]">
        <div className="main-heading uppercase text-[#AD916B] text-center leading-[normal] text-[39px] font-['Baskerville'] font-[700]">
          LIMITED QUANTITIES ONLY
        </div>
        <div className="main-heading uppercase text-[#AD916B] text-center leading-[normal] text-[39px] font-['Baskerville'] font-[700]">
          ..........
        </div>
        <div className="my-5 mx-auto text-center font-['Barlow'] text-[18px] font-[400] leading-[24px] text-[#231B19] max-w-[730px] not-italic	">
          Hurry, quantities are limited. Once these bundles are gone, they’re
          gone for good. Don’t miss out on this exclusive opportunity to enjoy
          USDA Choice Angus steaks at a significant discount. Get yours now and
          experience restaurant-quality meats at grocery store prices.
        </div>
        <div className="flex flex-wrap justify-center w-full mt-20 lg:flex-nowrap lg:gap-16 sm:gap-10">
          <div className="w-full mx-10 sm:w-6/12 md:w-4/12 sm:mx-0 drop-shadow-2xl">
            <img className="w-full h-auto" src={steaks8} alt="" />
            <div className="p-4 bg-white border-b ">
              <div className="text-center text-[#231B19] font-['Baskerville'] text-[24px] not-italic font-[600] leading-[100%]">
                Savings Sampler
              </div>
              <div className="flex items-end justify-between mt-6 ">
                <div>
                  <div className="line-through	 font-barlow  text-[#666666] text-[14px] not-italic font-[600] leading-[29px]">
                    $141.00
                  </div>
                  <div className="font-barlow  text-[#231B19] text-[18px] not-italic font-[700] uppercase leading-[29px]">
                    $75.00
                  </div>
                </div>
                <div>
                  <div className="font-barlow  text-[#CF2A2A] text-[16px] text-right not-italic font-[700] uppercase leading-[29px] tracking-[.8px]">
                    53% OFF
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                className="mr-8"
              >
                <path
                  d="M14 4.87512V6.82512C14 7.09595 13.9072 7.32616 13.7216 7.51574C13.536 7.70532 13.3106 7.80012 13.0455 7.80012H0.954545C0.689394 7.80012 0.464015 7.70532 0.278409 7.51574C0.092803 7.32616 0 7.09595 0 6.82512V4.87512C0 4.60428 0.092803 4.37407 0.278409 4.18449C0.464015 3.99491 0.689394 3.90012 0.954545 3.90012H13.0455C13.3106 3.90012 13.536 3.99491 13.7216 4.18449C13.9072 4.37407 14 4.60428 14 4.87512Z"
                  fill="#AD916B"
                />
              </svg>
              <div className=" text-[#231B19] font-barlow  text-[20px]  not-italic font-[500] leading-[29px]  tracking-[1px] uppercase">
                1
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="ml-8"
              >
                <g clipPath="url(#clip0_4_20114)">
                  <path
                    d="M14 6.04558V7.95467C14 8.21982 13.9072 8.4452 13.7216 8.6308C13.536 8.81641 13.3106 8.90921 13.0455 8.90921H8.90909V13.0456C8.90909 13.3107 8.81629 13.5361 8.63068 13.7217C8.44508 13.9073 8.2197 14.0001 7.95455 14.0001H6.04545C5.7803 14.0001 5.55492 13.9073 5.36932 13.7217C5.18371 13.5361 5.09091 13.3107 5.09091 13.0456V8.90921H0.954545C0.689394 8.90921 0.464015 8.81641 0.278409 8.6308C0.092803 8.4452 0 8.21982 0 7.95467V6.04558C0 5.78043 0.092803 5.55505 0.278409 5.36944C0.464015 5.18383 0.689394 5.09103 0.954545 5.09103H5.09091V0.954668C5.09091 0.689516 5.18371 0.464137 5.36932 0.278531C5.55492 0.0929251 5.7803 0.00012207 6.04545 0.00012207H7.95455C8.2197 0.00012207 8.44508 0.0929251 8.63068 0.278531C8.81629 0.464137 8.90909 0.689516 8.90909 0.954668V5.09103H13.0455C13.3106 5.09103 13.536 5.18383 13.7216 5.36944C13.9072 5.55505 14 5.78043 14 6.04558Z"
                    fill="#AD916B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_20114">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="h-auto  sm:min-h-[150px] md:min-h-[120px] mt-10 text-center text-[#231B19] font-barlow  text-[18px] not-italic font-[400] leading-[24px] ">
              Perfect for backyard BBQs and serious steak lovers. Includes a
              variety of premium cuts, from ribeye to sirloin, hand-selected for
              the ultimate grilling experience.
            </div>
            <div className="text-center text-[#AD916B] font-['Baskerville'] uppercase text-[39px] not-italic leading-[normal]">
              ...
            </div>
            <div className=" sm:min-h-[100px] md:min-h-[70px] mt-5 text-center text-[#231B19] font-barlow text-[18px] not-italic font-[400] leading-[24px]">
              U.S.D.A. Choice Angus: 4x New York Strip Steak 4x Top Sirloin
              Steak
            </div>
            <img className="mx-auto mt-10 mb-2" src={selectproductimg} alt="" />
          </div>
          <div className="w-full mx-10 sm:w-6/12 md:w-4/12 sm:mx-0 drop-shadow-2xl">
            <img className="w-full h-auto" src={steaks10} alt="" />
            <div className="p-4 bg-white border-b ">
              <div className="text-center text-[#231B19] font-['Baskerville'] text-[24px] not-italic font-[600] leading-[100%]">
                Big Bundle
              </div>
              <div className="flex items-end justify-between mt-6 ">
                <div className="">
                  <div className="line-through	 font-barlow  text-[#666666] text-[14px] not-italic font-[600] leading-[29px]">
                    $196.00
                  </div>
                  <div className="font-barlow  text-[#231B19] text-[18px] not-italic font-[700] uppercase leading-[29px]">
                    $105.00
                  </div>
                </div>
                <div className="">
                  <div className="font-barlow  text-[#CF2A2A] text-[16px] text-right not-italic font-[700] uppercase leading-[29px] tracking-[.8px]">
                    53% OFF
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                className="mr-8"
              >
                <path
                  d="M14 4.87512V6.82512C14 7.09595 13.9072 7.32616 13.7216 7.51574C13.536 7.70532 13.3106 7.80012 13.0455 7.80012H0.954545C0.689394 7.80012 0.464015 7.70532 0.278409 7.51574C0.092803 7.32616 0 7.09595 0 6.82512V4.87512C0 4.60428 0.092803 4.37407 0.278409 4.18449C0.464015 3.99491 0.689394 3.90012 0.954545 3.90012H13.0455C13.3106 3.90012 13.536 3.99491 13.7216 4.18449C13.9072 4.37407 14 4.60428 14 4.87512Z"
                  fill="#AD916B"
                />
              </svg>
              <div className=" text-[#231B19] font-barlow  text-[20px]  not-italic font-[500] leading-[29px]  tracking-[1px] uppercase">
                1
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="ml-8"
              >
                <g clipPath="url(#clip0_4_20114)">
                  <path
                    d="M14 6.04558V7.95467C14 8.21982 13.9072 8.4452 13.7216 8.6308C13.536 8.81641 13.3106 8.90921 13.0455 8.90921H8.90909V13.0456C8.90909 13.3107 8.81629 13.5361 8.63068 13.7217C8.44508 13.9073 8.2197 14.0001 7.95455 14.0001H6.04545C5.7803 14.0001 5.55492 13.9073 5.36932 13.7217C5.18371 13.5361 5.09091 13.3107 5.09091 13.0456V8.90921H0.954545C0.689394 8.90921 0.464015 8.81641 0.278409 8.6308C0.092803 8.4452 0 8.21982 0 7.95467V6.04558C0 5.78043 0.092803 5.55505 0.278409 5.36944C0.464015 5.18383 0.689394 5.09103 0.954545 5.09103H5.09091V0.954668C5.09091 0.689516 5.18371 0.464137 5.36932 0.278531C5.55492 0.0929251 5.7803 0.00012207 6.04545 0.00012207H7.95455C8.2197 0.00012207 8.44508 0.0929251 8.63068 0.278531C8.81629 0.464137 8.90909 0.689516 8.90909 0.954668V5.09103H13.0455C13.3106 5.09103 13.536 5.18383 13.7216 5.36944C13.9072 5.55505 14 5.78043 14 6.04558Z"
                    fill="#AD916B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_20114">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="sm:min-h-[150px] md:min-h-[120px] mt-10 text-center text-[#231B19] font-barlow  text-[18px] not-italic font-[400] leading-[24px]">
              A generous assortment of steaks ideal for family dinners or
              special occasions. Bring the the best value to your table enjoying
              rich, tender Angus beef in every bite.
            </div>
            <div className="text-center text-[#AD916B] font-['Baskerville'] uppercase text-[39px] not-italic leading-[normal]">
              ...
            </div>
            <div className=" sm:min-h-[100px] md:min-h-[70px] mt-5 text-center text-[#231B19] font-barlow text-[18px] not-italic font-[400] leading-[24px]">
              U.S.D.A. Choice Angus:2x Ribeye Steak4x New York Strip Steak 2x
              Top Sirloin Steak2x Filet Mignon
            </div>
            <img className="mx-auto mt-10 mb-2" src={selectproductimg} alt="" />
          </div>
          <div className="w-full mx-10 sm:w-6/12 md:w-4/12 sm:mx-0 drop-shadow-2xl">
            <img className="w-full h-auto" src={steaks16} alt="" />
            <div className="p-4 bg-white border-b ">
              <div className="text-center text-[#231B19] font-['Baskerville'] text-[24px] not-italic font-[600] leading-[100%]">
                Premium Pack
              </div>
              <div className="flex items-end justify-between mt-6 ">
                <div>
                  <div className="line-through	 font-barlow text-[#666666] text-[14px] not-italic font-[600] leading-[29px]">
                    $283.00
                  </div>
                  <div className="font-barlow  text-[#231B19] text-[18px] not-italic font-[700] uppercase leading-[29px]">
                    $150.00
                  </div>
                </div>
                <div>
                  <div className="font-barlow  text-[#CF2A2A] text-[16px] text-right not-italic font-[700] uppercase leading-[29px] tracking-[.8px]">
                    53% OFF
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                className="mr-8"
              >
                <path
                  d="M14 4.87512V6.82512C14 7.09595 13.9072 7.32616 13.7216 7.51574C13.536 7.70532 13.3106 7.80012 13.0455 7.80012H0.954545C0.689394 7.80012 0.464015 7.70532 0.278409 7.51574C0.092803 7.32616 0 7.09595 0 6.82512V4.87512C0 4.60428 0.092803 4.37407 0.278409 4.18449C0.464015 3.99491 0.689394 3.90012 0.954545 3.90012H13.0455C13.3106 3.90012 13.536 3.99491 13.7216 4.18449C13.9072 4.37407 14 4.60428 14 4.87512Z"
                  fill="#AD916B"
                />
              </svg>
              <div className=" text-[#231B19] font-barlow  text-[20px]  not-italic font-[500] leading-[29px]  tracking-[1px] uppercase">
                1
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="ml-8"
              >
                <g clipPath="url(#clip0_4_20114)">
                  <path
                    d="M14 6.04558V7.95467C14 8.21982 13.9072 8.4452 13.7216 8.6308C13.536 8.81641 13.3106 8.90921 13.0455 8.90921H8.90909V13.0456C8.90909 13.3107 8.81629 13.5361 8.63068 13.7217C8.44508 13.9073 8.2197 14.0001 7.95455 14.0001H6.04545C5.7803 14.0001 5.55492 13.9073 5.36932 13.7217C5.18371 13.5361 5.09091 13.3107 5.09091 13.0456V8.90921H0.954545C0.689394 8.90921 0.464015 8.81641 0.278409 8.6308C0.092803 8.4452 0 8.21982 0 7.95467V6.04558C0 5.78043 0.092803 5.55505 0.278409 5.36944C0.464015 5.18383 0.689394 5.09103 0.954545 5.09103H5.09091V0.954668C5.09091 0.689516 5.18371 0.464137 5.36932 0.278531C5.55492 0.0929251 5.7803 0.00012207 6.04545 0.00012207H7.95455C8.2197 0.00012207 8.44508 0.0929251 8.63068 0.278531C8.81629 0.464137 8.90909 0.689516 8.90909 0.954668V5.09103H13.0455C13.3106 5.09103 13.536 5.18383 13.7216 5.36944C13.9072 5.55505 14 5.78043 14 6.04558Z"
                    fill="#AD916B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_20114">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="sm:min-h-[150px] md:min-h-[120px] mt-10 text-center text-[#231B19] font-barlow  text-[18px] not-italic font-[400] leading-[24px]">
              Savor the flavors of a high-end steakhouse at home. This bundle
              features thick, juicy cuts that will make your dinner table into a
              five-star restaurant.
            </div>
            <div className="text-center text-[#AD916B] font-['Baskerville'] uppercase text-[39px] not-italic leading-[normal]">
              ...
            </div>
            <div className=" sm:min-h-[100px] md:min-h-[70px] mt-5 text-center text-[#231B19] font-barlow  text-[18px] not-italic font-[400] leading-[24px]">
              U.S.D.A. Choice Angus:4x Ribeye Steak4x New York Strip Steak 4x
              Top Sirloin Steak4x Filet Mignon
            </div>
            <img
              className="mx-auto mt-10 mb-10"
              src={selectproductimg}
              alt=""
            />
          </div>
        </div>
        <div className="bg-[url('../assets/images/long-dot.png')] bg-repeat absolute bottom-[20px] left-0 right-0 p-[4px]"></div>
      </div>
    </section>
  )
}
