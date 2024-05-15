import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useOutletContext } from '@remix-run/react'

import { Button } from '~/components/Button'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { cn } from '~/lib/utils'

export const Details = () => {
  const submit = useSubmitPromise()
  const { customer } = useOutletContext()

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
        body: JSON.stringify({
          api: 'update-details',
          ...data,
        }),
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first_name"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              id="first_name"
              defaultValue={customer.first_name}
              {...register('first_name', {
                required: 'First name is required',
              })}
              className={cn(
                'block w-full text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset',
                errors.firstName
                  ? 'ring-red-300 focus:ring-red-500'
                  : 'ring-gray-300 focus:ring-gray-500',
              )}
              minLength={2}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last_name"
            className="block text-lg font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              id="last_name"
              defaultValue={customer.last_name}
              {...register('last_name', { required: 'Last name is required' })}
              className={cn(
                'block w-full text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset',
                errors.last_name
                  ? 'ring-red-300 focus:ring-red-500'
                  : 'ring-gray-300 focus:ring-gray-500',
              )}
              minLength={2}
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <Button
            type="submit"
            loading={submitting}
            className="px-8 py-1 text-lg font-bold text-black border-2 border-black rounded-sm shadow-sm"
          >
            SAVE
          </Button>
        </div>
      </div>
    </form>
  )
}
