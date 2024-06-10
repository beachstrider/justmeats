import * as Dialog from '@radix-ui/react-dialog'

import { Check } from '~/components/Check'
import { Dropdown } from '~/components/Dropdown'
import { Label } from '~/components/Label'
import { RadioGroup, RadioGroupItem } from '~/components/Radio'
import { Close32 } from '~/icons/Close32'
import { Filter as FilterIcon } from '~/icons/Filter'

export const Filter = ({ filters, filter, onChange }) => {
  const onServingTypeChange = (value) => {
    onChange({
      ...filter,
      servingType: value,
    })
  }

  const onMeatTypesChange = (value) => {
    let meatTypes = [...filter.meatTypes]

    const index = meatTypes.indexOf(value)

    if (index !== -1) {
      meatTypes = meatTypes.filter((_, i) => i !== index)
    } else {
      meatTypes = [...meatTypes, value]
    }

    onChange({
      ...filter,
      meatTypes,
    })
  }

  const onSpecialTypesChange = (value) => {
    let specialTypes = [...filter.specialTypes]

    const index = specialTypes.indexOf(value)

    if (index !== -1) {
      specialTypes = specialTypes.filter((_, i) => i !== index)
    } else {
      specialTypes = [...specialTypes, value]
    }

    onChange({
      ...filter,
      specialTypes,
    })
  }

  const servingTypeSelect = (
    <RadioGroup defaultValue="comfortable">
      <Label
        htmlFor={`serving-size-all-meats`}
        className="flex items-center gap-[10px] font-barlow font-bold text-[16px] cursor-pointer"
        onClick={() => onServingTypeChange('')}
      >
        <RadioGroupItem
          value=""
          checked={'' === filter.servingType}
          id={`serving-size-all-meats`}
        />
        All Meats
      </Label>
      {filters.servingTypes.map((el, index) => (
        <Label
          key={index}
          htmlFor={`serving-size-${index}`}
          className="flex items-center gap-[10px] font-barlow font-bold text-[16px] cursor-pointer"
          onClick={() => onServingTypeChange(el)}
        >
          <RadioGroupItem
            value={el}
            checked={el === filter.servingType}
            id={`serving-size-${index}`}
          />
          {el}
        </Label>
      ))}
    </RadioGroup>
  )

  const meatTypesSelect = (
    <>
      {filters.meatTypes.map((el, index) => (
        <Label
          key={index}
          htmlFor={`meat-type-${index}`}
          className="flex items-center gap-[10px] font-barlow font-bold text-[16px] cursor-pointer"
        >
          <Check
            id={`meat-type-${index}`}
            checked={filter.meatTypes.includes(el)}
            onClick={() => onMeatTypesChange(el)}
          />
          {el}
        </Label>
      ))}
    </>
  )

  const specialTypesSelect = (
    <>
      {filters.specialTypes.map((el, index) => (
        <Label
          key={index}
          htmlFor={`special-${index}`}
          className="flex items-center gap-[10px] font-barlow font-bold text-[16px] cursor-pointer"
        >
          <Check
            id={`special-${index}`}
            checked={filter.specialTypes.includes(el)}
            onClick={() => onSpecialTypesChange(el)}
          />
          {el}
        </Label>
      ))}
    </>
  )

  return (
    <>
      <div className="sm:flex hidden shrink-0 sm:gap-[18px]">
        {/* <Dropdown
          placeholder={filter.servingType || 'All Meats'}
          placeholderClassName="uppercase"
          buttonClassName="min-w-[171px]"
          menuMinWidth={144}
        >
          {servingTypeSelect}
        </Dropdown> */}
        <Dropdown placeholder={'MEAT TYPES'} menuMinWidth={131}>
          {meatTypesSelect}
        </Dropdown>
        <Dropdown align="end" placeholder={'SPECIALS'}>
          {specialTypesSelect}
        </Dropdown>
      </div>
      <div className="block sm:hidden">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="flex justify-between items-center font-barlow font-medium sm:text-[14px] py-[2px] pl-[8px] pr-[4px] border-2 border-[#6B1626] text-[#6B1626]">
              <div>FILTERS</div>
              <FilterIcon />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[70vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-white p-[20px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Title className="font-barlow m-0 text-[16px] font-medium tracking-[0.8px]">
                FILTERS
              </Dialog.Title>
              <div className="flex flex-col gap-[25px] pt-[20px]">
                {/* <div className="flex flex-col gap-[10px]">
                  {servingTypeSelect}
                </div> */}
                <div className="flex flex-col gap-[12px]">
                  <div className="font-barlow m-0 text-[16px] font-medium tracking-[0.8px]">
                    MEAT TYPES
                  </div>
                  <div className="grid grid-cols-2 gap-[10px]">
                    {meatTypesSelect}
                  </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <div className="font-barlow m-0 text-[16px] font-medium tracking-[0.8px]">
                    SPECIALS
                  </div>
                  <div className="grid grid-cols-1 gap-[10px]">
                    {specialTypesSelect}
                  </div>
                </div>
              </div>
              <Dialog.Close asChild>
                <button
                  className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <Close32 />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  )
}
