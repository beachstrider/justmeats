import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useLoaderData } from '@remix-run/react'

import { Button } from '~/components/Button'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { cn } from '~/lib/utils'

export const PersonalInformation = () => {
  const submit = useSubmitPromise()
  const { customer } = useLoaderData()

  const [submitting, setSubmitting] = useState(false)

  const defaultValues = {
    first_name: customer.first_name,
    last_name: customer.last_name,
  }

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ defaultValues })

  const onSubmit = async (data) => {
    setSubmitting(true)

    const res = await submit(
      {
        body: JSON.stringify(data),
      },
      {
        method: 'post',
        action: `/account/details`,
      },
    )

    if (res.success) {
      console.debug('ok')
    } else {
      console.error(res.message)
    }

    setSubmitting(false)
  }

  return (
    <form
      className="block max-w-[740px] w-full mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="lg:px-[50px] lg:pt-[46px] lg:pb-[64px] px-[26px] pt-[30px] pb-[48px] bg-white lg:mb-[66px] mb-[40px] [box-shadow:0px_18px_25px_-15px_rgba(0,0,0,0.15)]">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[20px] gap-[22px]">
          <div className="">
            <label
              htmlFor="first_name"
              className="block lg:text-[16px] text-[14px] text-[#231B19] leading-[26px]"
            >
              First name
            </label>
            <div className="">
              <input
                id="first_name"
                defaultValue={customer.first_name}
                {...register('first_name', {
                  required: 'First name is required',
                })}
                className={cn(
                  'block w-full lg:text-[16px] text-[14px] rounded-[4px] border border-[#DDDCDB] px-[20px] py-[12px] placeholder:text-gray-400 focus:!ring-transparent [box-shadow:0px_1px_2px_0px_rgba(0,0,0,0.10)]',
                  errors.firstName
                    ? 'ring-red-300 focus:ring-red-500'
                    : 'ring-gray-300 focus:ring-gray-500',
                )}
                minLength={2}
              />
            </div>
          </div>

          <div className="">
            <label
              htmlFor="last_name"
              className="block lg:text-[16px] text-[14px] text-[#231B19] leading-[26px]"
            >
              Last name
            </label>
            <div className="">
              <input
                id="last_name"
                defaultValue={customer.last_name}
                {...register('last_name', {
                  required: 'Last name is required',
                })}
                className={cn(
                  'block w-full lg:text-[16px] text-[14px] rounded-[4px] border border-[#DDDCDB] px-[20px] py-[12px] placeholder:text-gray-400 focus:!ring-transparent [box-shadow:0px_1px_2px_0px_rgba(0,0,0,0.10)]',
                  errors.last_name
                    ? 'ring-red-300 focus:ring-red-500'
                    : 'ring-gray-300 focus:ring-gray-500',
                )}
                minLength={2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end lg:gap-[22px] gap-[18px]">
        <Button
          type="submit"
          loading={submitting}
          className="px-[24px] py-[12px] font-bold text-[14px] tracking-[0.7px] bg-[#BF4745] hover:bg-[#6B1626] text-white"
        >
          SAVE
        </Button>
      </div>
    </form>
  )
}
