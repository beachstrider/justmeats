import { useEffect, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Link } from '@remix-run/react'

import { recipedata } from '~/data/recipe-data'
import { cn } from '~/lib/utils'

export const RecipeItems = () => {
  const [filterd, setFilterd] = useState('')
  const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)
  const [startPage, setStartPage] = useState(0)
  const [endPage, setEndPage] = useState(9)
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)
  const [isOpenedMeat, setIsOpenedMeat] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // const filteredData = recipedata?.filter((item) =>
  //   item?.header?.toLowerCase()?.includes(filterd?.toLowerCase()),
  // )

  useEffect(() => {
    setTotalPage(Math.ceil(filteredData.length / 9))
  }, [filterd])

  const goPage = (no) => {
    const end = no * 9
    setEndPage(end)
    setStartPage(end - 9)
    setCurrentPage(no - 1)
  }

  const DownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
      <path
        d="M9.3335 13.3333L16.0002 20L22.6668 13.3333"
        stroke={isOpenedMenu || isOpenedMeat ? 'white' : '#6B1626'}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  useEffect(() => {
    switch (selectedOption) {
      case 'older':
        setFilteredData(
          recipedata.sort((a, b) => new Date(a.Updated) - new Date(b.Updated)),
        )
        break
      case 'latest':
        setFilteredData(
          recipedata.sort((a, b) => new Date(b.Updated) - new Date(a.Updated)),
        )
        break
      case 'beef':
        setFilteredData(
          recipedata.filter((item) => item.type === selectedOption),
        )
        break
      case 'chicken':
        setFilteredData(
          recipedata.filter((item) => item.type === selectedOption),
        )
        break
      case 'pork':
        setFilteredData(
          recipedata.filter((item) => item.type === selectedOption),
        )
        break
      case 'turkey':
        setFilteredData(
          recipedata.filter((item) => item.type === selectedOption),
        )
        break
      case 'bison':
        setFilteredData(
          recipedata.filter((item) => item.type === selectedOption),
        )
        break
      default:
        setFilteredData(
          recipedata?.filter((item) =>
            item?.header?.toLowerCase()?.includes(filterd?.toLowerCase()),
          ),
        )
    }
  }, [selectedOption])

  return (
    <section className="bg-[#F5F5F5] text-[#231B19] pt-[62px] sm:pt-[103px] relative overflow-x-hidden pb-[50px]">
      <div className="container flex flex-col items-center sm:mb-[56px] relative">
        <div className="text-center sm:text-[36px] text-[24px] font-hudson font-bold leading-tight sm:tracking-[1.8px] tracking-[1.2px] sm:mb-[20px] mb-[17px] font-mobile">
          RECIPES
        </div>
        <div className="max-w-[935px] text-[#231b19] font-barlow sm:text-center text-justify [word-spacing:-1px] sm:[word-spacing:0] sm:text-[18px] text-[16px] font-normal sm:leading-[26px] leading-[25px] tracking-[0.16px] font-nunito sm:mb-[51px] mb-[63px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          finibus sapien non lobortis tincidunt. Aliquam nisl erat, laoreet ut
          enim vitae, egestas fermentum dui. Integer cursus venenatis risus vel
          imperdiet.
        </div>
      </div>
      <div className="container flex flex-wrap justify-between items-center sm:mb-[56px] mb-[41px] relative gap-[15px]">
        <div className="md:w-96 ">
          <div className="relative flex w-full items-stretch">
            <input
              type="search"
              className="relative min-w-72 m-0 -mr-0.5 block flex-auto rounded-l border-neutral-300 bg-[#FFF] shadow-xl bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
              onChange={(e) => setFilterd(e.target.value)}
            />
            <div color="light">
              <button
                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 gap-[18px]">
          <DropdownMenu.Root onOpenChange={(v) => setIsOpenedMenu(v)}>
            <DropdownMenu.Trigger
              className={cn(
                'flex justify-between items-center font-barlow font-medium sm:text-[14px] py-[4px] pl-[14px] pr-[10px] border-2 border-[#6B1626] tracking-[0.7px]',
                isOpenedMenu ? 'bg-[#6B1626] text-white' : 'text-[#6B1626]',
              )}
            >
              Menu
              <div className={'w-[22px]'}>
                <DownIcon />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item
                className={cn(
                  'flex flex-col gap-[8px] cursor-pointer bg-white border-2 border-[#6B1626] px-[20px] py-[2px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
                )}
                onSelect={() => setSelectedOption('latest')}
              >
                Latest
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className={cn(
                  'flex flex-col gap-[8px] cursor-pointer bg-white border-2 border-[#6B1626] px-[20px] py-[2px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
                )}
                onSelect={() => setSelectedOption('older')}
              >
                Older
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          <DropdownMenu.Root onOpenChange={(v) => setIsOpenedMeat(v)}>
            <DropdownMenu.Trigger
              className={cn(
                'flex justify-between items-center font-barlow font-medium sm:text-[14px] py-[4px] pl-[14px] pr-[10px] border-2 border-[#6B1626] tracking-[0.7px]',
                isOpenedMeat ? 'bg-[#6B1626] text-white' : 'text-[#6B1626]',
              )}
            >
              All Meats
              <div className={'w-[22px]'}>
                <DownIcon />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content style={{ zIndex: '9999' }}>
              <DropdownMenu.Item
                className={cn(
                  'flex flex-col gap-[8px] cursor-pointer bg-white border-2 border-[#6B1626] px-[20px] py-[2px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
                )}
                onSelect={() => setSelectedOption('')}
              >
                All
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className={cn(
                  'flex flex-col gap-[8px] cursor-pointer bg-white border-2 border-[#6B1626] px-[20px] py-[2px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
                )}
                onSelect={() => setSelectedOption('beef')}
              >
                Beef
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className={cn(
                  'flex flex-col gap-[8px] cursor-pointer bg-white border-2 border-[#6B1626] px-[20px] py-[2px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
                )}
                onSelect={() => setSelectedOption('chicken')}
              >
                Chicken
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className={cn(
                  'flex flex-col gap-[8px] cursor-pointer bg-white border-2 border-[#6B1626] px-[20px] py-[2px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
                )}
                onSelect={() => setSelectedOption('pork')}
              >
                Pork
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className={cn(
                  'flex flex-col gap-[8px] cursor-pointer bg-white border-2 border-[#6B1626] px-[20px] py-[2px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
                )}
                onSelect={() => setSelectedOption('turkey')}
              >
                Turkey
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className={cn(
                  'flex flex-col gap-[8px] cursor-pointer bg-white border-2 border-[#6B1626] px-[20px] py-[2px] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade',
                )}
                onSelect={() => setSelectedOption('bison')}
              >
                Bison
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
      <div className="container">
        <div className="relative grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-x-[20px] sm:gap-y-[62px] gap-y-[20px] sm:p-3 xl:pr-5 xl:mb-[0px] mb-[50px]">
          {filteredData?.slice(startPage, endPage)?.map((item, i) => {
            return (
              <Link to={`/recipe/${item?.url}`} key={i}>
                <div
                  className="relative rounded-[8px] sm:mb-0 mb-[50px] w-full"
                  style={{
                    boxShadow: '0px 30px 30px -9px rgba(0, 0, 0, 0.14)',
                    cursor: 'pointer',
                  }}
                >
                  <div className="absolute top-[-15px] right-[15px]">
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
                  {item.imgs && item.imgs.length > 0 && (
                    <img className="w-full" src={item.imgs[0]} alt="" />
                  )}
                  <div className="relative bg-white sm:px-[26px] sm:py-[30px] px-[22px] py-[20px] min-h-[132px]">
                    <div className="text-[#231B19] text-center tracking-[1px] leading-[20px] font-bold font-hudson sm:mb-[20px] mb-[18px]">
                      {item?.header}
                    </div>
                    <div className="text-[#231B19] text-center font-barlow text-[14px]">
                      {item?.text}
                    </div>
                  </div>
                  <div className="relative bg-white font-barlow border-t border-[#efeeed] sm:px-[26px] sm:py-[30px] px-[22px] py-[20px] grid grid-cols-3 text-[14px] rounded-b-[8px]">
                    <div className="flex flex-col items-center">
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_5095_3714)">
                            <path
                              d="M14 2.33331C20.4435 2.33331 25.6667 7.55648 25.6667 14C25.6667 20.4435 20.4435 25.6666 14 25.6666C7.55651 25.6666 2.33334 20.4435 2.33334 14C2.33334 7.55648 7.55651 2.33331 14 2.33331ZM14 4.66665C11.5247 4.66665 9.15069 5.64998 7.40035 7.40032C5.65001 9.15066 4.66668 11.5246 4.66668 14C4.66668 16.4753 5.65001 18.8493 7.40035 20.5996C9.15069 22.35 11.5247 23.3333 14 23.3333C16.4754 23.3333 18.8493 22.35 20.5997 20.5996C22.35 18.8493 23.3333 16.4753 23.3333 14C23.3333 11.5246 22.35 9.15066 20.5997 7.40032C18.8493 5.64998 16.4754 4.66665 14 4.66665ZM14 6.99998C14.2858 7.00002 14.5616 7.10493 14.7751 7.29481C14.9887 7.4847 15.1251 7.74635 15.1585 8.03015L15.1667 8.16665V13.517L18.3248 16.6751C18.5341 16.8851 18.6556 17.1668 18.6646 17.4631C18.6737 17.7594 18.5696 18.048 18.3736 18.2703C18.1775 18.4926 17.9042 18.632 17.6091 18.6601C17.314 18.6882 17.0193 18.603 16.7848 18.4216L16.6752 18.3248L13.1752 14.8248C12.9939 14.6433 12.8774 14.4071 12.8438 14.1528L12.8333 14V8.16665C12.8333 7.85723 12.9563 7.56048 13.1751 7.34169C13.3938 7.1229 13.6906 6.99998 14 6.99998Z"
                              fill="#BF4745"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5095_3714">
                              <rect width="28" height="28" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-center">
                        {item?.recipepreptime_text}
                      </div>
                      <div className="font-bold text-center">
                        {item?.recipepreptime_value}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_5095_3714)">
                            <path
                              d="M14 2.33331C20.4435 2.33331 25.6667 7.55648 25.6667 14C25.6667 20.4435 20.4435 25.6666 14 25.6666C7.55651 25.6666 2.33334 20.4435 2.33334 14C2.33334 7.55648 7.55651 2.33331 14 2.33331ZM14 4.66665C11.5247 4.66665 9.15069 5.64998 7.40035 7.40032C5.65001 9.15066 4.66668 11.5246 4.66668 14C4.66668 16.4753 5.65001 18.8493 7.40035 20.5996C9.15069 22.35 11.5247 23.3333 14 23.3333C16.4754 23.3333 18.8493 22.35 20.5997 20.5996C22.35 18.8493 23.3333 16.4753 23.3333 14C23.3333 11.5246 22.35 9.15066 20.5997 7.40032C18.8493 5.64998 16.4754 4.66665 14 4.66665ZM14 6.99998C14.2858 7.00002 14.5616 7.10493 14.7751 7.29481C14.9887 7.4847 15.1251 7.74635 15.1585 8.03015L15.1667 8.16665V13.517L18.3248 16.6751C18.5341 16.8851 18.6556 17.1668 18.6646 17.4631C18.6737 17.7594 18.5696 18.048 18.3736 18.2703C18.1775 18.4926 17.9042 18.632 17.6091 18.6601C17.314 18.6882 17.0193 18.603 16.7848 18.4216L16.6752 18.3248L13.1752 14.8248C12.9939 14.6433 12.8774 14.4071 12.8438 14.1528L12.8333 14V8.16665C12.8333 7.85723 12.9563 7.56048 13.1751 7.34169C13.3938 7.1229 13.6906 6.99998 14 6.99998Z"
                              fill="#BF4745"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5095_3714">
                              <rect width="28" height="28" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-center">
                        {item?.recipetotaltime_text}
                      </div>
                      <div className="font-bold text-center">
                        {item?.recipetotaltime_value}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="29"
                          height="29"
                          viewBox="0 0 29 29"
                          fill="none"
                        >
                          <path
                            d="M14.9107 6.6429C17.8802 6.6429 20.7281 7.81688 22.8278 9.90657C24.9275 11.9963 26.1071 14.8305 26.1071 17.7858C26.1071 18.2404 25.9257 18.6764 25.6026 18.9979C25.2796 19.3194 24.8415 19.5 24.3846 19.5H5.43682C4.97998 19.5 4.54185 19.3194 4.21881 18.9979C3.89577 18.6764 3.71429 18.2404 3.71429 17.7858C3.71429 14.8305 4.89391 11.9963 6.99365 9.90657C9.09339 7.81688 11.9412 6.6429 14.9107 6.6429ZM14.9107 6.6429V4.07147M3.71429 24.0002H26.1071"
                            stroke="#7A392D"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        {item?.recipeserving_text}
                      </div>
                      <div className="font-bold text-center">
                        {item?.recipeserving_value}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div>
          <div className="flex items-center justify-center px-4 py-3 sm:px-6">
            <div className="sm:flex sm:flex-1 sm:items-center sm:justify-center">
              <div>
                <nav
                  className="isolate inline-flex -space-x-px"
                  aria-label="Pagination"
                >
                  {Array.from({ length: totalPage }).map((_, i) => (
                    <p
                      key={i}
                      onClick={() => goPage(i + 1)}
                      className={`${
                        i == currentPage && 'bg-gray-50'
                      } cursor-pointer relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex`}
                    >
                      {i + 1}
                    </p>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
