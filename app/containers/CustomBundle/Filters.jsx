import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Dropdown } from '~/components/Dropdown'

export const Filters = () => {
  return (
    <>
      <div className="sm:flex hidden shrink-0 sm:gap-[18px]">
        <Dropdown placeholder={'SERVING SIZE'}>
          <DropdownMenu.Item className="">KKK</DropdownMenu.Item>
          <DropdownMenu.Label className="">CCC</DropdownMenu.Label>
        </Dropdown>
        <Dropdown placeholder={'MEAT TYPES'}>
          <DropdownMenu.Item className="">KKK</DropdownMenu.Item>
          <DropdownMenu.Label className="">CCC</DropdownMenu.Label>
        </Dropdown>
        <Dropdown align="end" placeholder={'SPECIALS'}>
          <DropdownMenu.Item className="">KKK</DropdownMenu.Item>
          <DropdownMenu.Label className="">CCC</DropdownMenu.Label>
        </Dropdown>
      </div>
      <div className="block sm:hidden">
        <button className="flex justify-between items-center font-dunbar font-medium sm:text-[14px] py-[2px] pl-[8px] pr-[4px] rounded-[6px] border-2 border-[#7A392D] text-[#7A392D]">
          <div>FILTERS</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M8.1665 7V11.5967C8.18983 11.7717 8.1315 11.9583 7.99733 12.0808C7.94337 12.1349 7.87926 12.1778 7.8087 12.2071C7.73813 12.2364 7.66248 12.2514 7.58608 12.2514C7.50968 12.2514 7.43404 12.2364 7.36347 12.2071C7.2929 12.1778 7.2288 12.1349 7.17483 12.0808L6.00233 10.9083C5.93875 10.8461 5.8904 10.77 5.86105 10.6861C5.83171 10.6021 5.82217 10.5124 5.83317 10.4242V7H5.81567L2.45567 2.695C2.36094 2.57339 2.31819 2.41923 2.33678 2.26621C2.35536 2.11318 2.43375 1.97374 2.55483 1.87833C2.66567 1.79667 2.78817 1.75 2.9165 1.75H11.0832C11.2115 1.75 11.334 1.79667 11.4448 1.87833C11.5659 1.97374 11.6443 2.11318 11.6629 2.26621C11.6815 2.41923 11.6387 2.57339 11.544 2.695L8.184 7H8.1665Z"
              fill="#7A392D"
            />
          </svg>
        </button>
      </div>
    </>
  )
}
