import React from 'react'

import { Form, useActionData, useNavigation } from '@remix-run/react'

export function AddressForm({ addressId, address, children }) {
  const { state, formMethod } = useNavigation()

  /** @type {ActionReturnData} */
  const action = useActionData()
  const error = action?.error?.[addressId]

  return (
    <Form id={addressId}>
      <div className="grid grid-cols-1 overflow-y-auto gap-x-3 gap-y-2 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <input type="hidden" name="addressId" defaultValue={addressId} />
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              id="firstName"
              name="firstName"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              defaultValue={address?.firstName ?? ''}
              autoComplete="given-name"
              placeholder="First name"
              aria-label="First name"
              minLength={2}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              id="lastName"
              name="lastName"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              defaultValue={address?.lastName ?? ''}
              autoComplete="family-name"
              placeholder="Last name"
              aria-label="Last name"
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
              name="address1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              defaultValue={address?.address1 ?? ''}
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
              name="address2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              defaultValue={address?.address2 ?? ''}
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
              name="company"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              defaultValue={address?.company ?? ''}
              placeholder="company"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="territoryCode"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <input
              id="territoryCode"
              name="territoryCode"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              defaultValue={address?.territoryCode ?? ''}
              autoComplete="country"
              placeholder="country"
              aria-label="country"
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
              name="city"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              defaultValue={address?.city ?? ''}
              placeholder="city"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="zoneCode"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Province/State
          </label>
          <div className="mt-2">
            <input
              id="zoneCode"
              name="zoneCode"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              defaultValue={address?.zoneCode ?? ''}
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
              name="zip"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              defaultValue={address?.zip ?? ''}
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
              name="phoneNumber"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="tel"
              defaultValue={address?.phoneNumber ?? ''}
              placeholder="phone"
              pattern="^\+?[1-9]\d{3,14}$"
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          {error ? (
            <p>
              <mark>
                <small>{error}</small>
              </mark>
            </p>
          ) : (
            <br />
          )}
          {children({
            stateForMethod: (method) =>
              formMethod === method ? state : 'idle',
          })}
        </div>
      </div>
    </Form>
  )
}
