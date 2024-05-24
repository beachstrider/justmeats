import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Check } from '~/components/Check'
import { Dropdown } from '~/components/Dropdown'
import { Label } from '~/components/Label'
import { RadioGroup, RadioGroupItem } from '~/components/Radio'

import { Mobile } from './Mobile'

export const Filters = () => {
  const servingSizes = ['All Meats', 'Everyday Meats', 'BBQ Meats']
  const meatTypes = ['Beef', 'Chicken', 'Bison', 'Pork', 'Turkey']
  const specials = ['Subscriber exclusives', 'Collaborations']

  return (
    <>
      <div className="sm:flex hidden shrink-0 sm:gap-[18px]">
        <Dropdown placeholder={'SERVING SIZE'} menuMinWidth={144}>
          <RadioGroup defaultValue="comfortable">
            {servingSizes.map((el, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={el} id={`serving-size-${index}`} />
                <Label
                  className="font-nunito font-bold text-[16px]"
                  htmlFor={`serving-size-${index}`}
                >
                  {el}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Dropdown>
        <Dropdown placeholder={'MEAT TYPES'} menuMinWidth={131}>
          {meatTypes.map((el, index) => (
            <DropdownMenu.Label
              key={index}
              className="flex gap-[8px] items-center"
            >
              <Check id={`meat-type-${index}`} />
              <Label
                className="font-nunito font-bold text-[16px]"
                htmlFor={`meat-type-${index}`}
              >
                {el}
              </Label>
            </DropdownMenu.Label>
          ))}
        </Dropdown>
        <Dropdown align="end" placeholder={'SPECIALS'}>
          {specials.map((el, index) => (
            <DropdownMenu.Label
              key={index}
              className="flex gap-[8px] items-center"
            >
              <Check id={`special-${index}`} />
              <Label
                className="font-nunito font-bold text-[16px]"
                htmlFor={`special-${index}`}
              >
                {el}
              </Label>
            </DropdownMenu.Label>
          ))}
        </Dropdown>
      </div>
      <div className="block sm:hidden">
        <Mobile
          servingSizes={servingSizes}
          meatTypes={meatTypes}
          specials={specials}
        />
      </div>
    </>
  )
}
