import { useState } from 'react'

import { Link } from '@remix-run/react'

import Recipeimg1 from '~/assets/images/Recipeimg1.png'
import { RecipeSlider } from '~/components/RecipeSlider'

export const Recipe = ({ data }) => {
  return (
    <section className="relative  font-barlow tracking-[.16px]">
      <div className="container-small py-[50px]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[40px] justify-center">
          <div>
            <RecipeSlider />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex font-bold">
              <Link to={'/recipes'}>Recipes</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M10.4167 17.7084L15.625 12.5L10.4167 7.29171"
                  stroke="#7A392D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {data?.header}
            </div>
            <div className="flex justify-between">
              <div className="font-hudson font-bold sm:text-[36px] text-[24px]">
                {data?.header}
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                >
                  <path
                    d="M50.4583 13.5417V55.3585L32.8939 47.8309L32.5 47.662L32.1061 47.8309L14.5417 55.3585V13.5417C14.5417 12.3197 14.9654 11.299 15.8407 10.4252C16.7168 9.55061 17.7384 9.12661 18.959 9.125H46.0417C47.2637 9.125 48.2856 9.5488 49.1614 10.4246C50.0372 11.3004 50.4598 12.321 50.4583 13.5405V13.5417Z"
                    fill="white"
                    stroke="#BF4745"
                    strokeWidth="2"
                  />
                  <path
                    d="M32.5 34.8798L36.8508 37.5113C37.6476 37.9936 38.6226 37.2807 38.4129 36.379L37.2597 31.4306L41.1073 28.0968C41.8097 27.4887 41.4323 26.3355 40.5097 26.2621L35.446 25.8323L33.4645 21.1565C33.1081 20.3073 31.8919 20.3073 31.5355 21.1565L29.554 25.8218L24.4903 26.2516C23.5677 26.325 23.1903 27.4782 23.8927 28.0863L27.7403 31.4202L26.5871 36.3686C26.3774 37.2702 27.3524 37.9831 28.1492 37.5008L32.5 34.8798Z"
                    fill="#BF4745"
                  />
                </svg>
              </div>
            </div>
            <div className="text-[#999]">Updated:{data?.updated_at}</div>
            <div className="text-[18px]">{data?.text}</div>
            <div
              className="relative bg-[#6B1626] text-white font-barlow border-t border-[#efeeed] sm:px-[26px] sm:py-[30px] px-[22px] py-[20px]  grid grid-cols-[32%_0.7%_32%_0.7%_32%] text-[14px] rounded-[8px]"
              style={{ boxShadow: '0px 40px 50px -15px rgba(0, 0, 0, 0.15)' }}
            >
              <div className="relative flex flex-col items-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5095_4211)">
                      <path
                        d="M14 2.33331C20.4435 2.33331 25.6667 7.55648 25.6667 14C25.6667 20.4435 20.4435 25.6666 14 25.6666C7.55654 25.6666 2.33337 20.4435 2.33337 14C2.33337 7.55648 7.55654 2.33331 14 2.33331ZM14 4.66665C11.5247 4.66665 9.15072 5.64998 7.40038 7.40032C5.65004 9.15066 4.66671 11.5246 4.66671 14C4.66671 16.4753 5.65004 18.8493 7.40038 20.5996C9.15072 22.35 11.5247 23.3333 14 23.3333C16.4754 23.3333 18.8494 22.35 20.5997 20.5996C22.35 18.8493 23.3334 16.4753 23.3334 14C23.3334 11.5246 22.35 9.15066 20.5997 7.40032C18.8494 5.64998 16.4754 4.66665 14 4.66665ZM14 6.99998C14.2858 7.00002 14.5616 7.10493 14.7751 7.29481C14.9887 7.4847 15.1251 7.74635 15.1585 8.03015L15.1667 8.16665V13.517L18.3249 16.6751C18.5341 16.8851 18.6556 17.1668 18.6646 17.4631C18.6737 17.7594 18.5696 18.048 18.3736 18.2703C18.1775 18.4926 17.9042 18.632 17.6092 18.6601C17.3141 18.6882 17.0194 18.603 16.7849 18.4216L16.6752 18.3248L13.1752 14.8248C12.9939 14.6433 12.8774 14.4071 12.8439 14.1528L12.8334 14V8.16665C12.8334 7.85723 12.9563 7.56048 13.1751 7.34169C13.3939 7.1229 13.6906 6.99998 14 6.99998Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5095_4211">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-center">Prep time</div>
                <div className="font-bold text-center">{data?.prep_time}</div>
              </div>
              <div className="text-[50px] overflow-hidden">|</div>
              <div className="relative flex flex-col items-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_5095_4211)">
                      <path
                        d="M14 2.33331C20.4435 2.33331 25.6667 7.55648 25.6667 14C25.6667 20.4435 20.4435 25.6666 14 25.6666C7.55654 25.6666 2.33337 20.4435 2.33337 14C2.33337 7.55648 7.55654 2.33331 14 2.33331ZM14 4.66665C11.5247 4.66665 9.15072 5.64998 7.40038 7.40032C5.65004 9.15066 4.66671 11.5246 4.66671 14C4.66671 16.4753 5.65004 18.8493 7.40038 20.5996C9.15072 22.35 11.5247 23.3333 14 23.3333C16.4754 23.3333 18.8494 22.35 20.5997 20.5996C22.35 18.8493 23.3334 16.4753 23.3334 14C23.3334 11.5246 22.35 9.15066 20.5997 7.40032C18.8494 5.64998 16.4754 4.66665 14 4.66665ZM14 6.99998C14.2858 7.00002 14.5616 7.10493 14.7751 7.29481C14.9887 7.4847 15.1251 7.74635 15.1585 8.03015L15.1667 8.16665V13.517L18.3249 16.6751C18.5341 16.8851 18.6556 17.1668 18.6646 17.4631C18.6737 17.7594 18.5696 18.048 18.3736 18.2703C18.1775 18.4926 17.9042 18.632 17.6092 18.6601C17.3141 18.6882 17.0194 18.603 16.7849 18.4216L16.6752 18.3248L13.1752 14.8248C12.9939 14.6433 12.8774 14.4071 12.8439 14.1528L12.8334 14V8.16665C12.8334 7.85723 12.9563 7.56048 13.1751 7.34169C13.3939 7.1229 13.6906 6.99998 14 6.99998Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5095_4211">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-center">Total time</div>
                <div className="font-bold text-center">{data?.total_time}</div>
              </div>
              <div className="text-[50px] overflow-hidden">|</div>
              <div className="relative flex flex-col items-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M14.9108 6.6429C17.8803 6.6429 20.7281 7.81688 22.8279 9.90657C24.9276 11.9963 26.1072 14.8305 26.1072 17.7858C26.1072 18.2404 25.9257 18.6764 25.6027 18.9979C25.2797 19.3194 24.8415 19.5 24.3847 19.5H5.43688C4.98004 19.5 4.54191 19.3194 4.21887 18.9979C3.89584 18.6764 3.71436 18.2404 3.71436 17.7858C3.71436 14.8305 4.89398 11.9963 6.99371 9.90657C9.09345 7.81688 11.9413 6.6429 14.9108 6.6429ZM14.9108 6.6429V4.07147M3.71436 24.0002H26.1072"
                      stroke="white"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">Servings</div>
                <div className="font-bold text-center">{data?.serving}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-small">
        <div className="sm:text-[18px] text-[16px]">{data?.paragraph}</div>
      </div>
      <div className="container-small py-[50px]">
        <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-[55px] gap-[70px] items-center justify-center">
          <div className="relative xl:pt-[46px] xl:pb-[36px] xl:px-[50px] pt-[30px] pb-[30px] px-[33px] rounded-[8px] bg-white flex flex-col items-start gap-[16px] shadow-lg text-[18px]">
            <div className="flex gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="42"
                  viewBox="0 0 34 42"
                  fill="none"
                >
                  <g
                    id="4053442_bowl_food_health_healthy_salad_icon 1"
                    clipPath="url(#clip0_5095_4226)"
                  >
                    <g id="Capa 2">
                      <g id="Outline">
                        <g id="SaladBowl">
                          <path
                            id="Vector"
                            d="M0 25.0256C0 34.385 7.62406 42 17 42C19.2329 42.0016 21.4442 41.5635 23.5074 40.711C25.5706 39.8585 27.4453 38.6083 29.0242 37.0317C30.6031 35.4552 31.8553 33.5834 32.7091 31.5232C33.5628 29.4631 34.0015 27.2551 34 25.0256C33.9998 24.8391 33.9255 24.6604 33.7934 24.5285C33.6614 24.3967 33.4824 24.3225 33.2956 24.3223H0.704397C0.517647 24.3225 0.338608 24.3967 0.206555 24.5285C0.0745028 24.6604 0.000219319 24.8391 0 25.0256ZM32.5755 25.7289C32.5281 26.7845 32.3734 27.8324 32.1139 28.8567H1.88778C1.62673 27.8327 1.4715 26.7846 1.42454 25.7289H32.5755ZM2.04607 29.4359H31.9548C31.0015 32.6579 29.03 35.4856 26.3346 37.4965C23.6393 39.5075 20.3647 40.5939 17 40.5934C9.93614 40.5934 3.9554 35.8785 2.04607 29.4359Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_2"
                            d="M21.901 37.4738C23.4907 36.7894 24.9038 35.7532 26.0337 34.4437C26.084 34.3854 26.1553 34.3494 26.2321 34.3437C26.3089 34.338 26.3848 34.3629 26.4431 34.4131C26.5015 34.4632 26.5375 34.5344 26.5432 34.6111C26.549 34.6878 26.524 34.7636 26.4738 34.8218C25.2846 36.1981 23.7982 37.2871 22.1264 38.0067C22.0902 38.022 22.0513 38.0298 22.012 38.0299C21.9451 38.03 21.8802 38.0071 21.8283 37.9649C21.7764 37.9227 21.7407 37.864 21.7272 37.7985C21.7138 37.7331 21.7234 37.665 21.7545 37.6058C21.7855 37.5466 21.8361 37.5 21.8977 37.4738H21.901Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_3"
                            d="M31.3598 9.11525C32.723 7.67796 32.3741 5.55719 32.3584 5.47445C32.3371 5.35198 32.2837 5.23732 32.2037 5.14214C32.1236 5.04697 32.0197 4.97468 31.9026 4.93264C31.7854 4.89059 31.6592 4.8803 31.5368 4.9028C31.4144 4.92529 31.3001 4.97978 31.2056 5.06072L28.1129 7.7094L29.0502 3.06903C29.0752 2.94525 29.0664 2.81702 29.0246 2.69782C28.9829 2.57862 28.9098 2.47284 28.813 2.39158C28.7162 2.31032 28.5992 2.25659 28.4744 2.23602C28.3497 2.21545 28.2216 2.2288 28.1038 2.27467C28.011 2.31025 25.8141 3.18487 25.2034 5.27751C24.9232 6.23239 25.0194 7.25844 25.4868 8.3391C24.8832 8.24468 24.2661 8.28969 23.6827 8.47066C22.6659 8.80165 21.8869 9.56621 21.3681 10.7404C21.2104 11.108 21.0762 11.4853 20.9662 11.8699C20.9662 11.8781 20.9612 11.8872 20.9587 11.8955C20.1839 14.5384 19.7381 18.9703 19.8226 21.3004C19.8348 21.6835 19.9556 22.0553 20.1709 22.3727C20.3863 22.6901 20.6873 22.94 21.0391 23.0935C21.3001 23.2091 21.5823 23.2692 21.8678 23.2697C22.3506 23.2692 22.8175 23.097 23.1846 22.784C24.2545 21.8788 25.7229 20.3571 27.0182 18.8122C28.0218 17.614 28.8463 16.4953 29.4024 15.5769C29.6094 15.2414 29.7948 14.8932 29.9576 14.5343C30.4772 13.3609 30.5178 12.272 30.0786 11.2981C29.8929 10.8935 29.637 10.5248 29.3228 10.2091C30.159 10.0271 30.8402 9.66303 31.3598 9.11525ZM26.6677 10.1909L26.6892 10.2017L26.7141 10.2141L26.7364 10.2249H26.7431L26.7588 10.2307L26.787 10.2414L26.8019 10.2472C26.8301 10.2563 28.2936 10.7486 28.7983 11.8814C29.0668 12.483 29.0253 13.1648 28.6706 13.9658C28.5678 14.1924 28.453 14.4133 28.3267 14.6278L27.1541 14.003C27.1205 13.9838 27.0833 13.9715 27.0447 13.9668C27.0062 13.9622 26.9672 13.9653 26.9299 13.976C26.8926 13.9867 26.8578 14.0048 26.8277 14.0291C26.7975 14.0535 26.7725 14.0836 26.7542 14.1178C26.7359 14.1519 26.7247 14.1894 26.7211 14.228C26.7176 14.2666 26.7219 14.3054 26.7336 14.3423C26.7454 14.3793 26.7645 14.4134 26.7898 14.4428C26.815 14.4722 26.8459 14.4963 26.8806 14.5136L28.0251 15.1234C27.4085 16.0634 26.7349 16.9648 26.008 17.8226L23.7531 16.7858C23.6832 16.7536 23.6034 16.7505 23.5312 16.7771C23.459 16.8037 23.4004 16.8579 23.3682 16.9277C23.336 16.9975 23.3329 17.0772 23.3595 17.1492C23.3862 17.2213 23.4404 17.2799 23.5103 17.312L25.6202 18.2868C24.46 19.6413 23.202 20.9297 22.2755 21.7133C22.1846 21.7905 22.0738 21.8406 21.9557 21.8578C21.8376 21.875 21.717 21.8586 21.6078 21.8104C21.4986 21.7623 21.4052 21.6844 21.3384 21.5857C21.2715 21.487 21.2338 21.3715 21.2297 21.2524C21.1527 19.1349 21.5339 15.2012 22.2084 12.6601L24.4583 13.6687C24.4956 13.6857 24.536 13.6944 24.5769 13.6944C24.6432 13.6944 24.7075 13.6717 24.7591 13.6301C24.8107 13.5885 24.8464 13.5305 24.8604 13.4657C24.8743 13.401 24.8657 13.3334 24.8358 13.2743C24.8059 13.2152 24.7566 13.1681 24.6962 13.1408L22.3692 12.0974C22.4499 11.8314 22.5454 11.5701 22.6551 11.3146C23.0098 10.5137 23.4838 10.0238 24.1119 9.81693C25.297 9.42224 26.6536 10.1777 26.6677 10.1868V10.1909ZM27.3373 4.4393L26.6992 7.59521C26.4356 6.8985 26.3851 6.2597 26.5508 5.68462C26.6987 5.20647 26.9699 4.77557 27.3373 4.43516V4.4393ZM30.8626 7.20962C30.7628 7.56229 30.5804 7.8862 30.3305 8.15457C29.9991 8.50376 29.5369 8.73572 28.9441 8.85047L30.8626 7.20962Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_4"
                            d="M12.7554 12.5451C11.7146 9.97999 9.35275 8.29116 6.94537 8.29116H6.87825C6.87079 8.2713 6.8625 8.25061 6.85421 8.23075C6.38102 7.0748 4.95234 6.55846 3.66371 7.07976C3.07052 7.3133 2.58074 7.75127 2.28309 8.31433C2.13428 8.58969 2.04773 8.89429 2.02955 9.20666C2.01136 9.51903 2.06198 9.83159 2.17785 10.1223C2.27431 10.3612 2.41487 10.5799 2.5922 10.7669C1.55715 12.464 1.40881 14.7528 2.23751 16.8015C3.27919 19.3667 5.60867 21.0522 8.02848 21.0563C8.40472 21.6744 9.1116 22.0327 9.87566 22.0327C10.1997 22.0322 10.5205 21.969 10.8204 21.8465C12.0038 21.3683 12.6145 20.1089 12.1819 19.0464C12.1695 19.0175 12.1571 18.9885 12.1438 18.9595C13.4134 17.2326 13.662 14.7784 12.7554 12.5451ZM10.7458 18.4465C10.6248 18.5793 10.5593 18.7533 10.5629 18.9327C10.5664 19.1122 10.6387 19.2835 10.7649 19.4113C10.812 19.4587 10.8491 19.515 10.8742 19.5768C11.0126 19.9169 10.745 20.3604 10.2942 20.5449C9.84334 20.7295 9.33701 20.5971 9.19861 20.2562C9.18933 20.2305 9.18185 20.2043 9.17624 20.1776C9.13859 20.0098 9.04061 19.8616 8.90086 19.7611C8.76111 19.6606 8.5893 19.6147 8.41797 19.6323C6.42909 19.8333 4.42943 18.4523 3.54603 16.2753C2.8002 14.4416 3.02561 12.3929 4.11701 11.0565C4.18483 10.9735 4.23276 10.8762 4.25716 10.7718C4.28156 10.6675 4.28177 10.5591 4.25779 10.4546C4.23381 10.3502 4.18627 10.2527 4.11878 10.1694C4.0513 10.0862 3.96566 10.0194 3.8684 9.9742C3.69765 9.90093 3.56132 9.76539 3.4872 9.59523C3.45014 9.49183 3.43563 9.38172 3.44463 9.27227C3.45363 9.16281 3.48595 9.05654 3.5394 8.96057C3.68197 8.69487 3.91553 8.48928 4.19739 8.38135C4.75594 8.15463 5.37581 8.32674 5.55066 8.75619C5.58387 8.84098 5.59938 8.93164 5.59624 9.02263C5.5935 9.12533 5.61336 9.22738 5.65441 9.32159C5.69545 9.41579 5.7567 9.49987 5.83382 9.56788C5.91094 9.63588 6.00206 9.68618 6.10075 9.71521C6.19945 9.74424 6.30333 9.7513 6.40506 9.7359C6.58826 9.7081 6.77332 9.69427 6.95863 9.69452C8.80001 9.69452 10.629 11.0383 11.4543 13.0705C12.2333 15.0035 11.9565 17.1127 10.7458 18.4465Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_5"
                            d="M9.86153 17.528C9.82191 17.5478 9.7782 17.558 9.73391 17.5578C9.66853 17.5575 9.60517 17.5352 9.55411 17.4944C9.50305 17.4537 9.46728 17.3969 9.4526 17.3333C9.43792 17.2696 9.44519 17.2029 9.47324 17.144C9.50129 17.085 9.54846 17.0372 9.60712 17.0084C9.99928 16.8151 10.2986 16.4744 10.4395 16.061C10.5805 15.6476 10.5514 15.1953 10.3588 14.8032C10.3264 14.7344 10.3224 14.6556 10.3477 14.5839C10.373 14.5121 10.4256 14.4532 10.4941 14.4198C10.5625 14.3865 10.6414 14.3814 10.7136 14.4056C10.7858 14.4298 10.8456 14.4814 10.88 14.5492C11.0087 14.812 11.0842 15.0975 11.1023 15.3895C11.1204 15.6814 11.0807 15.9741 10.9855 16.2507C10.8903 16.5273 10.7415 16.7825 10.5475 17.0017C10.3535 17.2209 10.1181 17.3997 9.8549 17.528H9.86153Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_6"
                            d="M16.3362 21.9053C16.336 22.1697 16.4144 22.4281 16.5614 22.648C16.7084 22.8679 16.9174 23.0393 17.162 23.1406C17.4066 23.2418 17.6757 23.2683 17.9354 23.2168C18.1951 23.1653 18.4337 23.038 18.6209 22.851C18.8081 22.6641 18.9356 22.4259 18.9872 22.1666C19.0388 21.9073 19.0123 21.6385 18.9109 21.3943C18.8095 21.1501 18.6378 20.9414 18.4176 20.7946C18.1973 20.6479 17.9385 20.5696 17.6737 20.5698C17.3192 20.5704 16.9794 20.7113 16.7287 20.9617C16.478 21.212 16.3368 21.5513 16.3362 21.9053ZM16.9163 21.9053C16.9163 21.7555 16.9608 21.6091 17.0441 21.4846C17.1275 21.36 17.246 21.263 17.3846 21.2057C17.5232 21.1484 17.6757 21.1335 17.8228 21.1628C17.9699 21.192 18.105 21.2642 18.211 21.3702C18.317 21.4762 18.3892 21.6112 18.4183 21.7581C18.4475 21.905 18.4324 22.0573 18.3748 22.1956C18.3173 22.3339 18.22 22.4521 18.0952 22.5352C17.9704 22.6183 17.8237 22.6626 17.6737 22.6624C17.4727 22.6622 17.2801 22.5823 17.1381 22.4404C16.996 22.2984 16.9163 22.1059 16.9163 21.9053Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_7"
                            d="M10.929 4.88199C10.929 4.57341 10.8373 4.27175 10.6657 4.01515C10.494 3.75855 10.25 3.55853 9.96452 3.44036C9.67903 3.3222 9.36486 3.2912 9.06173 3.35128C8.7586 3.41136 8.4801 3.55983 8.26146 3.77791C8.04281 3.996 7.89383 4.27391 7.83334 4.57653C7.77284 4.87914 7.80356 5.19287 7.9216 5.47806C8.03964 5.76324 8.2397 6.00709 8.49651 6.17877C8.75331 6.35044 9.05533 6.44225 9.36438 6.44257C9.77904 6.44257 10.1768 6.27821 10.4701 5.98559C10.7635 5.69297 10.9285 5.29604 10.929 4.88199ZM10.3489 4.88199C10.349 5.07605 10.2916 5.2658 10.1838 5.42726C10.0759 5.58872 9.92259 5.71463 9.74311 5.78908C9.56363 5.86354 9.36607 5.88318 9.17541 5.84555C8.98475 5.80791 8.80954 5.71467 8.67194 5.57762C8.53434 5.44058 8.44052 5.26587 8.40234 5.07559C8.36416 4.88531 8.38334 4.688 8.45745 4.50861C8.53156 4.32921 8.65728 4.17578 8.81871 4.06771C8.98013 3.95964 9.17002 3.90179 9.36438 3.90146C9.62512 3.90124 9.87528 4.00439 10.0599 4.18826C10.2445 4.37212 10.3484 4.62164 10.3489 4.88199Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_8"
                            d="M33.5053 17.7953C33.5055 17.4622 33.4067 17.1367 33.2215 16.8597C33.0362 16.5828 32.7729 16.3669 32.4648 16.2395C32.1566 16.1121 31.8176 16.0788 31.4905 16.1438C31.1634 16.2089 30.863 16.3693 30.6273 16.6049C30.3915 16.8405 30.2311 17.1406 30.1663 17.4673C30.1015 17.794 30.1352 18.1325 30.2631 18.44C30.391 18.7476 30.6075 19.0103 30.885 19.195C31.1625 19.3797 31.4887 19.478 31.8222 19.4775C32.2686 19.4764 32.6963 19.2987 33.0117 18.9835C33.3272 18.6682 33.5047 18.2409 33.5053 17.7953ZM32.9252 17.7953C32.9252 18.0137 32.8603 18.2272 32.7387 18.4088C32.6172 18.5903 32.4444 18.7318 32.2422 18.8153C32.0401 18.8988 31.8177 18.9205 31.6032 18.8777C31.3886 18.8349 31.1917 18.7295 31.0372 18.5749C30.8827 18.4203 30.7776 18.2234 30.7352 18.0091C30.6928 17.7948 30.7151 17.5728 30.7991 17.3711C30.8832 17.1695 31.0252 16.9972 31.2074 16.8763C31.3895 16.7553 31.6035 16.6909 31.8222 16.6914C32.1149 16.6923 32.3953 16.809 32.6021 17.0159C32.8088 17.2227 32.925 17.503 32.9252 17.7953Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_9"
                            d="M2.10986 21.3302C2.1097 21.5156 2.16463 21.697 2.2677 21.8512C2.37077 22.0055 2.51735 22.1258 2.6889 22.1969C2.86045 22.268 3.04926 22.2867 3.23145 22.2506C3.41364 22.2145 3.58101 22.1253 3.71241 21.9942C3.8438 21.8631 3.93331 21.6961 3.9696 21.5142C4.0059 21.3323 3.98735 21.1438 3.91631 20.9724C3.84527 20.8011 3.72493 20.6546 3.57051 20.5515C3.41608 20.4485 3.23452 20.3935 3.04878 20.3935C2.79998 20.3937 2.56141 20.4924 2.3854 20.668C2.20939 20.8436 2.1103 21.0817 2.10986 21.3302ZM2.68996 21.3302C2.68996 21.2593 2.711 21.19 2.75043 21.1311C2.78986 21.0722 2.8459 21.0263 2.91147 20.9992C2.97703 20.972 3.04918 20.9649 3.11879 20.9788C3.18839 20.9926 3.25233 21.0267 3.30251 21.0768C3.3527 21.1269 3.38687 21.1908 3.40072 21.2603C3.41456 21.3298 3.40746 21.4018 3.3803 21.4673C3.35314 21.5328 3.30715 21.5887 3.24814 21.6281C3.18913 21.6674 3.11975 21.6885 3.04878 21.6885C2.95362 21.6885 2.86235 21.6507 2.79505 21.5835C2.72776 21.5163 2.68996 21.4252 2.68996 21.3302Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_10"
                            d="M23.4838 2.71406C23.4838 2.5286 23.4287 2.34731 23.3255 2.19312C23.2223 2.03893 23.0756 1.91877 22.904 1.84783C22.7324 1.7769 22.5436 1.75838 22.3614 1.79463C22.1792 1.83087 22.0119 1.92024 21.8807 2.05143C21.7494 2.18263 21.66 2.34975 21.6239 2.53167C21.5878 2.71358 21.6065 2.90211 21.6777 3.0734C21.7489 3.24469 21.8693 3.39105 22.0238 3.49397C22.1784 3.59688 22.36 3.65173 22.5457 3.65157C22.7945 3.65113 23.033 3.55219 23.2088 3.37644C23.3847 3.2007 23.4836 2.96249 23.4838 2.71406ZM22.9037 2.71406C22.9037 2.78496 22.8826 2.85426 22.8432 2.9132C22.8037 2.97214 22.7476 3.01806 22.682 3.04515C22.6164 3.07224 22.5442 3.07929 22.4746 3.0654C22.4049 3.05151 22.341 3.0173 22.2909 2.96711C22.2407 2.91692 22.2066 2.853 22.1928 2.78345C22.1791 2.71389 22.1863 2.64183 22.2136 2.57637C22.2409 2.51092 22.287 2.45502 22.3461 2.41575C22.4052 2.37648 22.4747 2.35561 22.5457 2.35577C22.6407 2.35599 22.7318 2.39383 22.7989 2.461C22.866 2.52817 22.9037 2.61918 22.9037 2.71406Z"
                            fill="#6B1626"
                          />
                          <path
                            id="Vector_11"
                            d="M17.8685 12.9257C19.1431 11.2427 20.5345 8.65688 19.8889 5.90145C19.3536 3.59782 17.4964 1.63757 14.3714 0.0745081C14.2873 0.0326313 14.1956 0.00797337 14.1018 0.00198417C14.008 -0.00400503 13.9139 0.00879538 13.8251 0.0396328C13.7363 0.0704702 13.6546 0.118722 13.5848 0.181551C13.5149 0.244381 13.4584 0.320519 13.4184 0.40549C12.5068 2.34174 11.703 4.25564 11.9267 6.37807C12.1803 8.80913 13.7731 11.0433 16.7962 13.2087C16.8537 13.2498 16.9171 13.2819 16.9843 13.3039C16.8832 14.8413 16.5791 16.1569 16.0935 17.1416C16.0766 17.1757 16.0666 17.2128 16.0641 17.2508C16.0615 17.2888 16.0665 17.3269 16.0788 17.3629C16.091 17.399 16.1103 17.4322 16.1354 17.4609C16.1605 17.4895 16.191 17.5129 16.2252 17.5297C16.2653 17.5491 16.3092 17.5593 16.3537 17.5595C16.4078 17.5594 16.4608 17.5443 16.5068 17.5158C16.5527 17.4873 16.5898 17.4465 16.6139 17.3981C17.1434 16.3224 17.4708 14.8967 17.571 13.2385C17.6452 13.1941 17.7104 13.1363 17.7633 13.068C17.7981 13.0234 17.8346 12.9762 17.871 12.9274L17.8685 12.9257ZM17.5586 10.8637C17.4285 8.85381 17.0009 6.86792 16.3661 5.42401C16.3513 5.38851 16.3295 5.35631 16.3021 5.3293C16.2746 5.30228 16.2421 5.281 16.2063 5.26669C16.1706 5.25237 16.1323 5.24532 16.0938 5.24593C16.0553 5.24655 16.0172 5.25482 15.982 5.27026C15.9467 5.28571 15.9148 5.30802 15.8883 5.33589C15.8617 5.36376 15.841 5.39664 15.8273 5.4326C15.8136 5.46856 15.8072 5.50688 15.8085 5.54533C15.8098 5.58377 15.8188 5.62158 15.8349 5.65653C16.5194 7.21545 16.9528 9.43469 17.0133 11.6142C14.7269 9.84676 13.5187 8.08263 13.3256 6.23078C13.1656 4.69337 13.6977 3.19071 14.3838 1.67067C16.7266 2.96729 18.1171 4.4956 18.5191 6.22168C18.9086 7.88817 18.3326 9.53564 17.5586 10.8637Z"
                            fill="#6B1626"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_5095_4226">
                      <rect width="34" height="42" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="sm:text-[24px] text-[22px] font-barlow font-bold">
                INGREDIENTS
              </div>
            </div>
            <div className="flex gap-2">
              <div className="font-bold">{data?.ingredients1}</div>
              <div>{data?.ingredients1_value}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-bold">{data?.ingredients2}</div>
              <div>{data?.ingredients2_value}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-bold">{data?.ingredients3}</div>
              <div>{data?.ingredients3_value}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-bold">{data?.ingredients4}</div>
              <div>{data?.ingredients4_value}</div>
            </div>
            <div className="flex gap-2">
              <div className="font-bold">{data?.ingredients5}</div>
              <div>{data?.ingredients5_value}</div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[16px]">
            <div className="sm:text-[36px] text-[24px] font-hudson font-bold">
              DIRECTIONS
            </div>
            <div>
              <div className="text-[20px] font-bold">STEP 1</div>
              <div className="sm:text-[18px] text-[16px]">
                {data?.direction_step1}
              </div>
            </div>
            <div>
              <div className="text-[20px] font-bold">STEP 2</div>
              <div className="sm:text-[18px] text-[16px]">
                {data?.direction_step2}
              </div>
            </div>
            <div>
              <div className="text-[20px] font-bold">STEP 3 </div>
              <div className="sm:text-[18px] text-[16px]">
                {data?.direction_step3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
