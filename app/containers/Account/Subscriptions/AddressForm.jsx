import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '~/components/Button'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'

export function AddressForm({ address, onSubmit }) {
  const submit = useSubmitPromise()

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const defaultValues = {
    id: address.id,
    first_name: address.first_name,
    last_name: address.last_name,
    address1: address.address1,
    address2: address.address2,
    company: address.company,
    country_code: address.country_code,
    city: address.city,
    province: address.province,
    zip: address.zip,
    phone: address.phone,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues })

  const onFormSubmit = async (data) => {
    setSubmitting(true)

    const res = await submit(
      {
        body: JSON.stringify({
          api: 'update-address',
          ...data,
        }),
      },
      { method: 'post', action: '/account/subscriptions' },
    )

    if (res.success) {
      onSubmit()
    } else {
      setError('Failed. Please check your inputs.')
    }

    setSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="grid grid-cols-1 overflow-y-auto gap-x-3 gap-y-2 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              id="first_name"
              {...register('first_name', {
                required: 'First Name is required',
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="First name"
              minLength={2}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last_name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              id="last_name"
              {...register('last_name', {
                required: 'Last Name is required',
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Last name"
              minLength={2}
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="address1"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address 1
          </label>
          <div className="mt-2">
            <input
              id="address1"
              {...register('address1', {
                required: 'Address1 is required',
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Address1"
              minLength={5}
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="address2"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address 2
          </label>
          <div className="mt-2">
            <input
              id="address2"
              {...register('address2')}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Address2"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="company"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Company
          </label>
          <div className="mt-2">
            <input
              id="company"
              {...register('company')}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="company"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="country_code"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country Code
          </label>
          <div className="mt-2">
            <input
              id="country_code"
              {...register('country_code', {
                required: 'Country code is required',
              })}
              min={2}
              max={2}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="country"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              id="city"
              {...register('city', {
                required: 'City is required',
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="city"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="province"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Province/State
          </label>
          <div className="mt-2">
            <input
              id="province"
              {...register('province', {
                required: 'State is required',
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="state"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="zip"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Postal Code
          </label>
          <div className="mt-2">
            <input
              id="zip"
              {...register('zip', {
                required: 'Zip is required',
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="postalcode"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone
          </label>
          <div className="mt-2">
            <input
              id="phoneNumber"
              {...register('phone', {
                required: 'Phone is required',
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="tel"
              placeholder="phone"
              pattern="^\+?[1-9]\d{3,14}$"
            />
          </div>
        </div>
        {error && <div className="text-red-500 sm:col-span-6">{error}</div>}
        <div className="mt-[30px] sm:col-span-6">
          <Button
            className="rounded-sm w-full bg-[#252525] px-6 py-2 mb-4 text-sm font-semibold text-white shadow-sm border-2 border-black"
            loading={submitting}
            type="submit"
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  )
}
