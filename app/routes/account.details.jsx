import React, { useState } from 'react'

import {
  listPaymentMethods,
  sendCustomerNotification,
  updateCustomer,
} from '@rechargeapps/storefront-client'
import { NavLink, useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { Details } from '~/containers/Account/Details'
import { Payment } from '~/containers/Account/Details/Payment'
import { rechargeQueryWrapper } from '~/lib/rechargeUtils'

export const meta = () => {
  return [{ title: 'Account – Just Meats' }]
}

export const loader = async ({ context }) =>
  await rechargeQueryWrapper(async (session) => {
    const { payment_methods } = await listPaymentMethods(session, {
      limit: 25,
    })

    return json(
      { payment_methods },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Set-Cookie': await context.session.commit(),
        },
      },
    )
  }, context)

export const action = async ({ request, context }) =>
  await rechargeQueryWrapper(async (rechargeSession) => {
    const form = await request.formData()
    const body = JSON.parse(form.get('body'))

    const { api, ...data } = body

    switch (api) {
      case 'update-details':
        try {
          await updateCustomer(rechargeSession, data)

          return json({ success: true })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }

      case 'send-update-payment-email':
        try {
          await sendCustomerNotification(
            rechargeSession,
            'SHOPIFY_UPDATE_PAYMENT_INFO',
            {
              ...data,
            },
          )

          return json({ success: true })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }

      default:
        break
    }
  }, context)

export default function AccountDetails() {
  const [showAccountDetails, setShowAccountDetails] = useState(true)
  const { payment_methods } = useLoaderData()

  return (
    <div className="py-6 bg-sublistbgGray">
      <div className="container">
        <div className="flex flex-col items-center gap-2 py-4 my-4 border-b-2 border-gray-500 md:flex-row md:gap-14">
          <NavLink
            to="/account/subscriptions"
            className="basis-2/12 bg-[#fff] text-center capitalize border-solid border-2 border-gray-500 px-4 text-[22px] py-1"
          >
            Back to Account
          </NavLink>

          <button
            className={`basis-5/12 text-[36px] font-bold ${
              showAccountDetails ? 'text-black' : 'text-gray-500'
            }`}
            onClick={() => setShowAccountDetails(true)}
          >
            Account Details
          </button>
          <button
            className={`basis-5/12 text-[36px] font-bold ${
              showAccountDetails ? 'text-gray-500' : 'text-black'
            }`}
            onClick={() => setShowAccountDetails(false)}
          >
            Payment Methods
          </button>
        </div>

        {showAccountDetails && (
          <div className="bg-[#FFF] rounded-sm py-8 px-6 mb-8 border border-black ">
            <div className="py-4 mb-4 border-b border-gray-500">
              <h3 className="text-[26px] text-center font-bold ">
                Account Details
              </h3>
            </div>
            <Details />
          </div>
        )}

        {!showAccountDetails && (
          <div className="bg-[#FFF] rounded-sm py-8 px-6 mb-8 border border-black ">
            {payment_methods.map((paymentMethod) => (
              <Payment paymentMethod={paymentMethod} key={paymentMethod.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
