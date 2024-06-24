import galleryImage1 from '~/assets/images/bailey-alexander-QRIem5jdOPM-unsplash.png'
import galleryImage2 from '~/assets/images/stocksy4389965.png'
import galleryImage3 from '~/assets/images/bailey-alexander-UsIH5HIHvbE-unsplash.png'
import galleryImage4 from '~/assets/images/shutterstock_1415936528.png'
import galleryImage5 from '~/assets/images/shutterstock_2267026131.png'


export const OrderContentAndGallery = () => {
  return (
    <section className="relative">
        <div className="flex justify-evenly p-[50px]">
          <div className="flex flex-col justify-center text-[#000] sm:text-[18px] text-[16px] w-[20%]">
            There are two ways to place your order on <div className="font-hudson">JUSTMEATS.COM</div>
          </div>
          <div className="w-[2px] bg-[#000]"></div>
          <div className="flex flex-col justify-center sm:text-[18px] text-[16px]  w-[20%]">
            <div>1- Select <strong>1 -TIME</strong> order, or <strong>SUBSCRIPTION</strong> order. </div>
            <div>2-Choose from our <strong>15+</strong> meat options. </div>
            <div>3- Apply any promo codes or discounts .</div>
          </div>
          <div className="w-[2px] bg-[#000]"></div>
          <div className="flex flex-col justify-center w-[20%] text-center">
            <div className="flex items-center	justify-center text-[#000] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="42"
                viewBox="0 0 32 42"
                fill="none"
              >
                <g clipPath="url(#clip0_32_14114)">
                  <path
                    d="M20.0442 26.3571C19.844 26.2915 19.5751 26.1001 19.2376 26.0344C19.106 25.9688 18.9001 25.9688 18.7685 25.9086C18.2995 25.7172 17.7617 25.5258 17.2927 25.3945C16.8236 25.2632 16.2172 25.0116 15.8168 24.8804C15.2791 24.7546 14.81 24.5577 14.3409 24.4319C13.4028 24.1748 12.5276 23.9834 11.5894 23.6607C10.7828 23.4036 10.1136 23.1466 9.44427 22.9551C9.04384 22.7637 8.57476 22.6981 8.10569 22.441L7.56797 22.2496C7.36776 22.1238 7.03025 22.1238 6.83004 22.0581C6.62982 21.9323 6.36096 21.8667 6.0921 21.8011C5.89189 21.6753 5.55438 21.4784 5.35417 21.4182C5.08531 21.2924 4.8851 21.1611 4.61624 21.0955C4.41602 20.9697 4.14716 20.8384 3.94695 20.7728C1.80179 20.0672 1.67022 20.0672 0.39457 19.4273L-0.00585938 18.9132C-0.00585938 18.8476 0.12571 18.7874 0.194355 18.7218L0.594784 18.3991C0.726354 18.3334 0.863644 18.3334 0.932289 18.3334H1.73887C2.07637 18.4647 2.4768 18.4647 2.81431 18.4647C3.68381 18.4647 4.49039 18.5303 5.22832 18.5303C5.69739 18.5303 6.09782 18.596 6.50397 18.6561C6.57262 18.7218 6.70419 18.7218 6.84148 18.7218C7.3792 18.7874 7.91692 18.7874 8.38599 18.7874C8.72349 18.7874 8.98663 18.7874 9.19257 18.853C9.79321 18.9788 10.3309 19.0445 10.8686 19.0445C11.4064 19.1101 11.8754 19.0445 12.2759 19.2359C12.8136 19.2359 13.2827 19.3015 13.7517 19.2359C13.8204 19.2359 14.0206 19.0445 13.8833 18.9788C13.6831 18.596 13.4829 18.3389 13.214 18.0162C13.0138 17.6935 12.8136 17.3763 12.6134 16.9278C12.3445 16.6051 12.2129 16.2222 12.0127 15.8394C11.9441 15.7136 11.9441 15.5823 12.0127 15.5167L12.2129 15.194C12.4818 15.0025 12.7507 14.8713 13.0825 14.9369C13.3513 15.0025 13.5515 15.0627 13.8204 15.0627C14.1579 15.1283 14.4267 15.1283 14.6899 15.1283C14.8215 15.1283 14.9587 15.194 15.0903 15.194L15.691 15.3854C15.9598 15.451 16.16 15.5768 16.4289 15.6425C16.6978 15.6425 16.9666 15.7081 17.1668 15.7683C17.5043 15.8339 17.8361 15.9597 18.1736 16.091C18.574 16.1566 18.9802 16.2167 19.312 16.348C19.7811 16.4136 20.1815 16.6707 20.6506 16.6707C21.1196 16.7965 21.5887 16.9278 21.9891 16.9934C22.3896 17.059 22.6584 17.1848 22.9273 17.3161C23.2648 17.3817 23.5279 17.5075 23.7968 17.5732C24.4661 17.8302 25.204 18.0217 25.8733 18.0873C26.0735 18.0873 26.2108 18.1529 26.2737 18.2787C26.4739 18.4045 26.7428 18.5358 27.0117 18.6014C27.2805 18.7272 27.5494 18.7929 27.8182 18.9241C28.2187 19.0499 28.5562 19.1812 28.825 19.307L29.2255 19.4984C29.6945 19.6242 30.1636 19.9469 30.7013 20.0727C31.1018 20.1985 31.4393 20.3298 31.7081 20.5212C31.8397 20.5868 31.9083 20.7126 31.977 20.8439C32.0456 21.0353 31.9083 21.358 31.7081 21.4838C31.3706 21.7409 30.9702 21.8667 30.4325 21.8667C30.2323 21.9323 30.032 21.9323 29.8318 21.9323C29.6316 21.9323 29.4314 21.9323 29.2941 21.998C28.8937 22.1238 28.4246 22.1238 28.0185 21.998L27.6809 22.0636C27.4807 22.1292 27.3434 22.1292 27.1432 22.0636C27.0117 21.998 26.8057 21.9378 26.6742 21.9378C26.0735 21.8722 25.3985 21.8722 24.7292 21.8722C23.9913 21.8722 23.2533 21.9378 22.5154 21.8722H21.9148C21.5143 21.9378 20.9766 21.9378 20.6391 21.9378L19.8325 22.1292C19.7639 22.1949 19.701 22.3863 19.701 22.4519C19.7696 22.709 19.8325 22.9004 19.9698 23.0919C19.9698 23.2177 19.9698 23.2833 20.0385 23.3489C20.376 23.7974 20.5762 24.3116 20.908 24.6944C21.2398 25.0773 21.5773 25.4656 21.7775 25.7828C21.8461 25.9086 21.909 26.0399 21.909 26.2313C21.909 26.297 21.7775 26.4884 21.7088 26.4884C21.1082 26.6142 20.5018 26.6798 20.0328 26.3626L20.0442 26.3571ZM21.6574 11.5513L21.4571 11.4255C21.2569 11.2341 20.9881 11.1028 20.8565 10.9114C20.3188 10.4629 19.9183 10.08 19.3806 9.69168C19.2491 9.50025 19.0431 9.30882 18.8429 9.11739C18.3052 8.79469 17.8361 8.34619 17.367 7.83753C17.1668 7.6461 16.9666 7.45467 16.6978 7.3234C16.4975 7.25777 16.4289 7.13197 16.2973 7.06634C16.2287 6.94054 16.0971 6.80927 15.9598 6.68348C15.8282 6.49204 15.691 6.36078 15.4907 6.23498C15.0903 5.85212 14.6842 5.40362 14.2151 5.08092C14.1464 5.08092 14.0778 5.01529 14.0778 4.95513L13.1397 4.18393C12.8708 3.9925 12.6019 3.60964 12.2702 3.41274C12.0013 3.09004 11.6695 2.83844 11.2634 2.64154C10.8629 2.31884 10.5254 2.06725 10.1879 1.74455C10.1879 1.74455 10.1193 1.74455 10.1193 1.67892C9.98771 1.42185 9.78177 1.29606 9.58156 1.03899L9.38134 0.847559C9.3127 0.781926 9.24977 0.656128 9.24977 0.590494V0.267796C9.24977 0.141999 9.44999 -0.0549021 9.58728 0.0107314L10.1936 0.202163C10.7943 0.393594 11.4006 0.585025 12.0013 0.84209C12.4704 1.09915 12.8708 1.35622 13.3399 1.48202C13.4714 1.48202 13.5401 1.54765 13.6087 1.60781C13.8776 1.73361 14.2151 1.86488 14.4782 1.93051C14.6784 1.99615 14.8787 2.12194 15.0789 2.25321C15.3477 2.37901 15.6166 2.51028 15.8168 2.57591C16.3545 2.83297 17.0238 3.1502 17.5615 3.28147C17.6931 3.3471 17.7617 3.40727 17.8304 3.40727C18.2308 3.5987 18.5683 3.72997 18.9058 3.98156C18.9745 3.98156 19.106 3.85576 19.1747 3.79013C19.2433 3.66433 19.3063 3.40727 19.3063 3.276L19.1747 2.76187C19.106 2.12194 19.106 1.48202 19.1747 0.710823L19.3063 0.585025C19.6438 0.519391 19.7753 0.519391 19.9755 0.585025C20.0442 0.585025 20.1071 0.650659 20.1758 0.650659C20.2444 0.776456 20.376 0.84209 20.5133 0.907723C20.7135 1.09915 20.9137 1.42185 21.2512 1.54765L22.3896 2.44464C22.7271 2.76734 23.0589 3.08457 23.465 3.40727C23.5966 3.66433 23.8654 3.79013 24.0656 4.04719C24.1972 4.11283 24.3345 4.23863 24.4661 4.36989C24.7349 4.56132 25.1354 4.75276 25.4042 5.00982L26.411 5.78101C26.411 5.84665 26.4797 5.84665 26.4797 5.84665C26.8172 6.03808 27.086 6.29514 27.3492 6.61784C27.618 6.80927 27.8182 7.0007 28.1557 7.19214C28.4932 7.38357 28.7564 7.64063 29.0939 7.83206C29.1625 7.8977 29.2941 8.02349 29.3628 8.21492C29.4314 8.40636 29.563 8.53762 29.7632 8.59779C30.032 8.78922 30.3009 9.04628 30.5698 9.30335C30.5698 9.36898 30.7013 9.42915 30.8386 9.49478C30.9073 9.56041 30.8386 9.68621 30.5698 9.68621C30.3695 9.75184 30.1007 9.75184 29.9005 9.68621L29.5 9.49478C29.2312 9.42915 28.9623 9.30335 28.7621 9.17208C28.4932 9.04628 28.293 8.98065 28.0928 8.84938C27.6237 8.72358 27.2862 8.59232 26.8858 8.40089C26.7542 8.33525 26.617 8.27509 26.4854 8.27509C26.3538 8.27509 26.1479 8.20946 25.9477 8.14929C25.8161 8.02349 25.6788 7.95786 25.5472 7.89223C25.347 7.76643 24.9466 7.76643 24.7407 7.63516C24.6091 7.63516 24.4718 7.56953 24.2716 7.56953C24.0714 7.56953 23.8025 7.50389 23.6023 7.44373C23.5336 7.44373 23.4707 7.44373 23.4021 7.50936C23.3334 7.575 23.2019 7.575 23.2019 7.7008C23.1332 7.95786 23.0703 8.21492 23.0703 8.47199C23.0016 8.66342 22.9387 8.85485 22.9387 9.04628C23.0074 9.62058 22.9387 10.2003 23.0074 10.8403C22.9387 11.0973 22.9387 11.2888 22.7385 11.4802L22.4697 11.6716C22.2694 11.7373 22.1321 11.7373 22.0006 11.6716C21.869 11.6716 21.7317 11.606 21.6631 11.5458L21.6574 11.5513ZM10.2566 41.9342C10.125 41.8685 10.0564 41.8685 9.98771 41.8084C9.85614 41.7427 9.85614 41.4857 9.91906 41.3599C10.1193 41.2341 10.2566 41.0372 10.4568 40.9114C10.9259 40.5285 11.4636 40.2058 12.1329 39.9487C12.5333 39.6917 12.9394 39.4346 13.3399 39.1174C13.4085 39.0518 13.4714 39.0518 13.6087 38.9916C13.8089 38.8603 14.1464 38.7345 14.3467 38.5431C14.5469 38.3517 14.8157 38.286 15.016 38.1602L15.6852 37.7774C16.223 37.5203 16.8922 37.2632 17.3613 36.8804C17.43 36.8147 17.4929 36.7546 17.5615 36.7546C17.899 36.4975 18.2308 36.3061 18.4997 36.1147C18.5683 36.049 18.6313 35.9232 18.5683 35.792C18.5054 35.6607 18.4368 35.4693 18.2308 35.4091C18.0993 35.3435 17.8933 35.3435 17.7617 35.152C17.1611 34.8293 16.4232 34.5121 15.8855 34.1238V33.9323C15.9541 33.6753 16.0857 33.5495 16.223 33.4182C16.223 33.4182 16.2916 33.3526 16.3545 33.3526C16.4861 33.2869 16.692 33.2268 16.8922 33.2268L17.8304 32.9041C18.2308 32.7783 18.637 32.7126 19.106 32.5814C19.6438 32.4556 20.1128 32.3899 20.5819 32.2587C20.8508 32.2587 21.1826 32.193 21.5201 32.0672C21.6516 32.0016 21.8576 31.9415 21.9891 31.9415C22.4582 31.8758 22.7957 31.6844 23.1275 31.493C23.5279 31.4273 23.9341 31.3015 24.3345 31.2359C24.3803 31.2359 24.4241 31.214 24.4661 31.1703C24.8036 31.0445 25.2727 30.9788 25.6044 30.8476C25.8733 30.7819 26.2737 30.6561 26.5426 30.5249C26.943 30.3334 27.2805 30.2022 27.618 30.142C27.7496 30.0764 27.9555 30.0162 28.0871 30.0764C28.2873 30.0764 28.4875 30.0764 28.6877 30.0107C29.0252 29.8849 29.357 29.7537 29.6945 29.688H29.8947C30.0263 29.688 30.095 29.7537 30.0263 29.8795C29.9577 30.0709 29.8261 30.2623 29.6259 30.3936C29.4943 30.5194 29.357 30.585 29.2884 30.7765L28.6191 31.225C28.4189 31.3507 28.2187 31.4164 28.0185 31.6078C27.618 31.8649 27.2805 32.0563 26.8801 32.2477C26.7485 32.3134 26.6799 32.4392 26.5426 32.5048C26.4739 32.6306 26.3424 32.7619 26.1422 32.8275C26.0735 32.8931 25.8733 32.9533 25.7417 33.0189C25.5415 33.2104 25.3413 33.4674 25.1411 33.5932C24.9409 33.6589 24.8722 33.7847 24.7407 33.8503C24.6091 34.0417 24.4032 34.173 24.2716 34.3644C24.2029 34.4301 24.2029 34.4902 24.2029 34.5559C24.1343 34.6215 24.2029 34.7473 24.2716 34.8129C24.4032 35.0044 24.6091 35.1356 24.7407 35.3927C24.8722 35.5185 25.0095 35.6497 25.2784 35.7755C25.8161 36.0982 26.2852 36.4811 26.8229 36.7382C27.0231 36.9296 27.1604 37.0609 27.2233 37.3125V37.6352C27.2233 37.761 27.1547 37.8922 27.0917 37.9579L26.6913 38.1493C26.6913 38.2149 26.5597 38.2149 26.5597 38.2149C26.2909 38.2149 25.9591 38.2806 25.7532 38.3407C25.1525 38.5978 24.4775 38.7236 23.8769 38.8549C23.608 38.9205 23.4078 38.9205 23.2076 39.0463C22.5383 39.2377 21.869 39.369 21.1311 39.4948L20.2616 39.6862C20.13 39.812 19.9927 39.812 19.8611 39.8776C19.7296 39.8776 19.4607 39.8776 19.3234 39.9433C19.1232 40.0089 18.923 40.0089 18.7228 40.0691C18.1164 40.2605 17.5844 40.2605 16.9781 40.5176H16.7092C16.3088 40.5832 15.9026 40.6434 15.5708 40.7746C15.239 40.9059 14.8329 40.9004 14.4954 41.1575C14.095 41.2231 13.6259 41.2833 13.2197 41.4802C12.7507 41.5458 12.3502 41.6716 11.9441 41.8029H11.7439C11.475 41.8029 11.1432 41.8685 10.8744 41.9287C10.7428 41.9943 10.6742 41.9943 10.5369 41.9943C10.4682 41.9943 10.3367 41.9943 10.268 41.9287L10.2566 41.9342Z"
                    fill="#FF655D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32_14114">
                    <rect width="32" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              SUCCESS!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="42"
                viewBox="0 0 32 42"
                fill="none"
              >
                <g clipPath="url(#clip0_32_14116)">
                  <path
                    d="M11.9558 26.3571C12.156 26.2915 12.4249 26.1001 12.7624 26.0344C12.894 25.9688 13.0999 25.9688 13.2315 25.9086C13.7005 25.7172 14.2383 25.5258 14.7073 25.3945C15.1764 25.2632 15.7828 25.0116 16.1832 24.8804C16.7209 24.7546 17.19 24.5577 17.6591 24.4319C18.5972 24.1748 19.4724 23.9834 20.4106 23.6607C21.2172 23.4036 21.8864 23.1466 22.5557 22.9551C22.9562 22.7637 23.4252 22.6981 23.8943 22.441L24.432 22.2496C24.6322 22.1238 24.9697 22.1238 25.17 22.0581C25.3702 21.9323 25.639 21.8667 25.9079 21.8011C26.1081 21.6753 26.4456 21.4784 26.6458 21.4182C26.9147 21.2924 27.1149 21.1611 27.3838 21.0955C27.584 20.9697 27.8528 20.8384 28.0531 20.7728C30.1982 20.0672 30.3298 20.0672 31.6054 19.4273L32.0059 18.9132C32.0059 18.8476 31.8743 18.7874 31.8056 18.7218L31.4052 18.3991C31.2736 18.3334 31.1364 18.3334 31.0677 18.3334H30.2611C29.9236 18.4647 29.5232 18.4647 29.1857 18.4647C28.3162 18.4647 27.5096 18.5303 26.7717 18.5303C26.3026 18.5303 25.9022 18.596 25.496 18.6561C25.4274 18.7218 25.2958 18.7218 25.1585 18.7218C24.6208 18.7874 24.0831 18.7874 23.614 18.7874C23.2765 18.7874 23.0134 18.7874 22.8074 18.853C22.2068 18.9788 21.6691 19.0445 21.1314 19.0445C20.5936 19.1101 20.1246 19.0445 19.7241 19.2359C19.1864 19.2359 18.7173 19.3015 18.2483 19.2359C18.1796 19.2359 17.9794 19.0445 18.1167 18.9788C18.3169 18.596 18.5171 18.3389 18.786 18.0162C18.9862 17.6935 19.1864 17.3763 19.3866 16.9278C19.6555 16.6051 19.7871 16.2222 19.9873 15.8394C20.0559 15.7136 20.0559 15.5823 19.9873 15.5167L19.7871 15.194C19.5182 15.0025 19.2493 14.8713 18.9175 14.9369C18.6487 15.0025 18.4485 15.0627 18.1796 15.0627C17.8421 15.1283 17.5733 15.1283 17.3101 15.1283C17.1785 15.1283 17.0413 15.194 16.9097 15.194L16.309 15.3854C16.0402 15.451 15.84 15.5768 15.5711 15.6425C15.3022 15.6425 15.0334 15.7081 14.8332 15.7683C14.4957 15.8339 14.1639 15.9597 13.8264 16.091C13.426 16.1566 13.0198 16.2167 12.688 16.348C12.2189 16.4136 11.8185 16.6707 11.3494 16.6707C10.8804 16.7965 10.4113 16.9278 10.0109 16.9934C9.61044 17.059 9.34157 17.1848 9.07272 17.3161C8.73521 17.3817 8.47207 17.5075 8.20321 17.5732C7.53393 17.8302 6.79599 18.0217 6.1267 18.0873C5.92649 18.0873 5.7892 18.1529 5.72627 18.2787C5.52606 18.4045 5.2572 18.5358 4.98834 18.6014C4.71948 18.7272 4.45062 18.7929 4.18176 18.9241C3.78133 19.0499 3.44383 19.1812 3.17497 19.307L2.77454 19.4984C2.30547 19.6242 1.83639 19.9469 1.29867 20.0727C0.898245 20.1985 0.560738 20.3298 0.29188 20.5212C0.160309 20.5868 0.0916634 20.7126 0.0230179 20.8439C-0.0456276 21.0353 0.0916634 21.358 0.29188 21.4838C0.629383 21.7409 1.02981 21.8667 1.56753 21.8667C1.76775 21.9323 1.96796 21.9323 2.16817 21.9323C2.36839 21.9323 2.56861 21.9323 2.70589 21.998C3.10632 22.1238 3.5754 22.1238 3.98155 21.998L4.31905 22.0636C4.51927 22.1292 4.65656 22.1292 4.85677 22.0636C4.98834 21.998 5.19427 21.9378 5.32584 21.9378C5.92649 21.8722 6.6015 21.8722 7.27079 21.8722C8.00872 21.8722 8.74665 21.9378 9.48458 21.8722H10.0852C10.4857 21.9378 11.0234 21.9378 11.3609 21.9378L12.1675 22.1292C12.2361 22.1949 12.299 22.3863 12.299 22.4519C12.2304 22.709 12.1675 22.9004 12.0302 23.0919C12.0302 23.2177 12.0302 23.2833 11.9615 23.3489C11.624 23.7974 11.4238 24.3116 11.092 24.6944C10.7602 25.0773 10.4227 25.4656 10.2225 25.7828C10.1539 25.9086 10.091 26.0399 10.091 26.2313C10.091 26.297 10.2225 26.4884 10.2912 26.4884C10.8918 26.6142 11.4982 26.6798 11.9672 26.3626L11.9558 26.3571ZM10.3426 11.5513L10.5429 11.4255C10.7431 11.2341 11.0119 11.1028 11.1435 10.9114C11.6812 10.4629 12.0817 10.08 12.6194 9.69168C12.7509 9.50025 12.9569 9.30882 13.1571 9.11739C13.6948 8.79469 14.1639 8.34619 14.633 7.83753C14.8332 7.6461 15.0334 7.45467 15.3022 7.3234C15.5025 7.25777 15.5711 7.13197 15.7027 7.06634C15.7713 6.94054 15.9029 6.80927 16.0402 6.68348C16.1718 6.49204 16.309 6.36078 16.5093 6.23498C16.9097 5.85212 17.3158 5.40362 17.7849 5.08092C17.8536 5.08092 17.9222 5.01529 17.9222 4.95513L18.8603 4.18393C19.1292 3.9925 19.3981 3.60964 19.7298 3.41274C19.9987 3.09004 20.3305 2.83844 20.7366 2.64154C21.1371 2.31884 21.4746 2.06725 21.8121 1.74455C21.8121 1.74455 21.8807 1.74455 21.8807 1.67892C22.0123 1.42185 22.2182 1.29606 22.4184 1.03899L22.6187 0.847559C22.6873 0.781926 22.7502 0.656128 22.7502 0.590494V0.267796C22.7502 0.141999 22.55 -0.0549021 22.4127 0.0107314L21.8064 0.202163C21.2057 0.393594 20.5994 0.585025 19.9987 0.84209C19.5296 1.09915 19.1292 1.35622 18.6601 1.48202C18.5286 1.48202 18.4599 1.54765 18.3913 1.60781C18.1224 1.73361 17.7849 1.86488 17.5218 1.93051C17.3216 1.99615 17.1213 2.12194 16.9211 2.25321C16.6523 2.37901 16.3834 2.51028 16.1832 2.57591C15.6455 2.83297 14.9762 3.1502 14.4385 3.28147C14.3069 3.3471 14.2383 3.40727 14.1696 3.40727C13.7692 3.5987 13.4317 3.72997 13.0942 3.98156C13.0255 3.98156 12.894 3.85576 12.8253 3.79013C12.7567 3.66433 12.6937 3.40727 12.6937 3.276L12.8253 2.76187C12.894 2.12194 12.894 1.48202 12.8253 0.710823L12.6937 0.585025C12.3562 0.519391 12.2247 0.519391 12.0245 0.585025C11.9558 0.585025 11.8929 0.650659 11.8242 0.650659C11.7556 0.776456 11.624 0.84209 11.4867 0.907723C11.2865 1.09915 11.0863 1.42185 10.7488 1.54765L9.61044 2.44464C9.27293 2.76734 8.94115 3.08457 8.535 3.40727C8.40343 3.66433 8.13457 3.79013 7.93435 4.04719C7.80278 4.11283 7.66549 4.23863 7.53392 4.36989C7.26506 4.56132 6.86464 4.75276 6.59578 5.00982L5.58898 5.78101C5.58898 5.84665 5.52034 5.84665 5.52034 5.84665C5.18283 6.03808 4.91397 6.29514 4.65084 6.61784C4.38198 6.80927 4.18176 7.0007 3.84426 7.19214C3.50675 7.38357 3.24361 7.64063 2.90611 7.83206C2.83746 7.8977 2.70589 8.02349 2.63725 8.21492C2.5686 8.40636 2.43703 8.53762 2.23682 8.59779C1.96796 8.78922 1.6991 9.04628 1.43024 9.30335C1.43024 9.36898 1.29867 9.42915 1.16138 9.49478C1.09274 9.56041 1.16138 9.68621 1.43024 9.68621C1.63046 9.75184 1.89931 9.75184 2.09953 9.68621L2.49996 9.49478C2.76882 9.42915 3.03768 9.30335 3.23789 9.17208C3.50675 9.04628 3.70697 8.98065 3.90718 8.84938C4.37626 8.72358 4.71376 8.59232 5.11419 8.40089C5.24576 8.33525 5.38305 8.27509 5.51462 8.27509C5.64619 8.27509 5.85212 8.20946 6.05234 8.14929C6.18391 8.02349 6.3212 7.95786 6.45277 7.89223C6.65298 7.76643 7.05341 7.76643 7.25934 7.63516C7.39091 7.63516 7.5282 7.56953 7.72842 7.56953C7.92863 7.56953 8.19749 7.50389 8.39771 7.44373C8.46635 7.44373 8.52928 7.44373 8.59792 7.50936C8.66657 7.575 8.79814 7.575 8.79814 7.7008C8.86678 7.95786 8.9297 8.21492 8.9297 8.47199C8.99835 8.66342 9.06128 8.85485 9.06128 9.04628C8.99263 9.62058 9.06128 10.2003 8.99263 10.8403C9.06128 11.0973 9.06128 11.2888 9.26149 11.4802L9.53035 11.6716C9.73056 11.7373 9.86786 11.7373 9.99942 11.6716C10.131 11.6716 10.2683 11.606 10.3369 11.5458L10.3426 11.5513ZM21.7434 41.9342C21.875 41.8685 21.9436 41.8685 22.0123 41.8084C22.1439 41.7427 22.1439 41.4857 22.0809 41.3599C21.8807 41.2341 21.7434 41.0372 21.5432 40.9114C21.0741 40.5285 20.5364 40.2058 19.8671 39.9487C19.4667 39.6917 19.0606 39.4346 18.6601 39.1174C18.5915 39.0518 18.5286 39.0518 18.3913 38.9916C18.1911 38.8603 17.8536 38.7345 17.6533 38.5431C17.4531 38.3517 17.1843 38.286 16.984 38.1602L16.3148 37.7774C15.777 37.5203 15.1078 37.2632 14.6387 36.8804C14.57 36.8147 14.5071 36.7546 14.4385 36.7546C14.101 36.4975 13.7692 36.3061 13.5003 36.1147C13.4317 36.049 13.3687 35.9232 13.4317 35.792C13.4946 35.6607 13.5632 35.4693 13.7692 35.4091C13.9007 35.3435 14.1067 35.3435 14.2383 35.152C14.8389 34.8293 15.5768 34.5121 16.1145 34.1238V33.9323C16.0459 33.6753 15.9143 33.5495 15.777 33.4182C15.777 33.4182 15.7084 33.3526 15.6455 33.3526C15.5139 33.2869 15.308 33.2268 15.1078 33.2268L14.1696 32.9041C13.7692 32.7783 13.363 32.7126 12.894 32.5814C12.3562 32.4556 11.8872 32.3899 11.4181 32.2587C11.1492 32.2587 10.8174 32.193 10.4799 32.0672C10.3484 32.0016 10.1424 31.9415 10.0109 31.9415C9.54179 31.8758 9.20428 31.6844 8.8725 31.493C8.47207 31.4273 8.06592 31.3015 7.66549 31.2359C7.61973 31.2359 7.57587 31.214 7.53392 31.1703C7.19642 31.0445 6.72735 30.9788 6.39556 30.8476C6.1267 30.7819 5.72627 30.6561 5.45741 30.5249C5.05698 30.3334 4.71948 30.2022 4.38198 30.142C4.25041 30.0764 4.04447 30.0162 3.9129 30.0764C3.71269 30.0764 3.51247 30.0764 3.31226 30.0107C2.97475 29.8849 2.64297 29.7537 2.30547 29.688H2.10525C1.97368 29.688 1.90504 29.7537 1.97368 29.8795C2.04232 30.0709 2.17389 30.2623 2.37411 30.3936C2.50568 30.5194 2.64297 30.585 2.71161 30.7765L3.3809 31.225C3.58112 31.3507 3.78133 31.4164 3.98155 31.6078C4.38198 31.8649 4.71948 32.0563 5.11991 32.2477C5.25148 32.3134 5.32012 32.4392 5.45741 32.5048C5.52606 32.6306 5.65763 32.7619 5.85784 32.8275C5.92649 32.8931 6.1267 32.9533 6.25827 33.0189C6.45849 33.2104 6.6587 33.4674 6.85892 33.5932C7.05913 33.6589 7.12778 33.7847 7.25934 33.8503C7.39091 34.0417 7.59685 34.173 7.72842 34.3644C7.79706 34.4301 7.79706 34.4902 7.79706 34.5559C7.86571 34.6215 7.79706 34.7473 7.72842 34.8129C7.59685 35.0044 7.39091 35.1356 7.25934 35.3927C7.12778 35.5185 6.99049 35.6497 6.72163 35.7755C6.18391 36.0982 5.71483 36.4811 5.17711 36.7382C4.9769 36.9296 4.83961 37.0609 4.77668 37.3125V37.6352C4.77668 37.761 4.84533 37.8922 4.90825 37.9579L5.30868 38.1493C5.30868 38.2149 5.44025 38.2149 5.44025 38.2149C5.70911 38.2149 6.0409 38.2806 6.24683 38.3407C6.84748 38.5978 7.52248 38.7236 8.12313 38.8549C8.39198 38.9205 8.5922 38.9205 8.79242 39.0463C9.4617 39.2377 10.131 39.369 10.8689 39.4948L11.7384 39.6862C11.87 39.812 12.0073 39.812 12.1389 39.8776C12.2704 39.8776 12.5393 39.8776 12.6766 39.9433C12.8768 40.0089 13.077 40.0089 13.2772 40.0691C13.8836 40.2605 14.4156 40.2605 15.0219 40.5176H15.2908C15.6912 40.5832 16.0974 40.6434 16.4292 40.7746C16.761 40.9059 17.1671 40.9004 17.5046 41.1575C17.905 41.2231 18.3741 41.2833 18.7803 41.4802C19.2493 41.5458 19.6498 41.6716 20.0559 41.8029H20.2561C20.525 41.8029 20.8568 41.8685 21.1256 41.9287C21.2572 41.9943 21.3258 41.9943 21.4631 41.9943C21.5318 41.9943 21.6633 41.9943 21.732 41.9287L21.7434 41.9342Z"
                    fill="#FF655D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32_14116">
                    <rect
                      width="32"
                      height="42"
                      fill="white"
                      transform="matrix(-1 0 0 1 32 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div> Your meat is on the way.</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pb-[50px]">
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full float-right	h-full" src={galleryImage1} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full float-right	h-full" src={galleryImage4} alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full w-full" src={galleryImage2} alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full	h-full" src={galleryImage3} alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full	h-full" src={galleryImage5} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
