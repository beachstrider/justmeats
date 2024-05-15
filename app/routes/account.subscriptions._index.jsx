import React, { useState } from 'react'

import { listSubscriptions } from '@rechargeapps/storefront-client'
import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { AddressForm } from '~/containers/Account/Subscriptions/AddressForm'
import { Card } from '~/containers/Account/Subscriptions/Card'
import { UPDATE_ADDRESS_MUTATION } from '~/graphql/customer-account/CustomerAddressMutations'
import { rechargeQueryWrapper } from '~/lib/rechargeUtils'
import { getBundle } from '~/lib/storefront'
import { getPureId } from '~/lib/utils'

export function shouldRevalidate() {
  return true
}

export const meta = () => {
  return [{ title: 'Subscriptions - Just Meats' }]
}

export async function loader({ request, context }) {
  return await rechargeQueryWrapper(async (rechargeSession) => {
    const bundleProductData = getBundle({
      request,
      context,
    })

    const subscriptionsData = rechargeSession.customerId
      ? listSubscriptions(rechargeSession, {
          limit: 25,
          status: 'active',
        })
      : { subscriptions: [] }

    const [{ bundleProduct }, { subscriptions: allSubscriptions }] =
      await Promise.all([bundleProductData, subscriptionsData])

    const bundleProductId = getPureId(bundleProduct.id, 'Product')
    // Filter only bundle subscriptions
    const subscriptions = allSubscriptions.filter(
      (el) =>
        el.external_product_id.ecommerce === bundleProductId ||
        // TODO: This should be deleted after removing the old fresh bundle subscription
        el.external_product_id.ecommerce === '8619519803673',
    )

    return json(
      {
        subscriptions,
      },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Set-Cookie': await context.session.commit(),
        },
      },
    )
  }, context)
}

export async function action({ request, context }) {
  const { customerAccount } = context

  try {
    const form = await request.formData()

    const addressId = form.has('addressId')
      ? String(form.get('addressId'))
      : null
    if (!addressId) {
      throw new Error('You must provide an address id.')
    }

    // this will ensure redirecting to login never happen for mutatation
    const isLoggedIn = await customerAccount.isLoggedIn()
    if (!isLoggedIn) {
      return json(
        { error: { [addressId]: 'Unauthorized' } },
        {
          status: 401,
          headers: {
            'Set-Cookie': await context.session.commit(),
          },
        },
      )
    }

    const address = {}
    const keys = [
      'address1',
      'address2',
      'city',
      'company',
      'territoryCode',
      'firstName',
      'lastName',
      'phoneNumber',
      'zoneCode',
      'zip',
    ]

    for (const key of keys) {
      const value = form.get(key)
      if (typeof value === 'string') {
        address[key] = value
      }
    }

    switch (request.method) {
      case 'PUT': {
        // handle address updates
        try {
          const { data, errors } = await customerAccount.mutate(
            UPDATE_ADDRESS_MUTATION,
            {
              variables: {
                address,
                addressId: decodeURIComponent(addressId),
              },
            },
          )

          if (errors?.length) {
            throw new Error(errors[0].message)
          }

          if (data?.customerAddressUpdate?.userErrors?.length) {
            throw new Error(data?.customerAddressUpdate?.userErrors[0].message)
          }

          if (!data?.customerAddressUpdate?.customerAddress) {
            throw new Error('Customer address update failed.')
          }

          return json(
            {
              error: null,
              updatedAddress: address,
            },
            {
              headers: {
                'Set-Cookie': await context.session.commit(),
              },
            },
          )
        } catch (error) {
          if (error instanceof Error) {
            return json(
              { error: { [addressId]: error.message } },
              {
                status: 400,
                headers: {
                  'Set-Cookie': await context.session.commit(),
                },
              },
            )
          }
          return json(
            { error: { [addressId]: error } },
            {
              status: 400,
              headers: {
                'Set-Cookie': await context.session.commit(),
              },
            },
          )
        }
      }
      default: {
        return json(
          { error: { [addressId]: 'Method not allowed' } },
          {
            status: 405,
            headers: {
              'Set-Cookie': await context.session.commit(),
            },
          },
        )
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return json(
        { error: error.message },
        {
          status: 400,
          headers: {
            'Set-Cookie': await context.session.commit(),
          },
        },
      )
    }
    return json(
      { error },
      {
        status: 400,
        headers: {
          'Set-Cookie': await context.session.commit(),
        },
      },
    )
  }
}

export default function SubscriptionsPage() {
  const { subscriptions } = useLoaderData()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNavToggle = (prevState, id) => {
    setIsNavOpen(prevState)
    // Handle id as needed
  }

  return (
    <div className="bg-sublistbgGray">
      <div className="container">
        {subscriptions.length > 0 ? (
          <div className="grid w-full gap-4 py-8 md:gap-8">
            <h2 className="font-bold text-lead text-[28px] text-center md:text-left">
              Your Subscriptions
            </h2>
            <div className="bg-custombgGreen w-auto md:w-[300px] p-6 block text-white text-xl text-center md:text-left">
              <span>Next Order Processing On</span>
              <span> {subscriptions[0].next_charge_scheduled_at}</span>
            </div>
            <hr className="border-t-2 border-gray-500"></hr>

            <ul className="grid bg-white border border-2 border-custombgGreen">
              {subscriptions.map((subscription) => (
                <Card
                  setIsNavOpen={handleNavToggle}
                  subscription={subscription}
                  key={subscription.id}
                />
              ))}
            </ul>
            <div
              className={
                isNavOpen
                  ? 'block  w-full  md:w-[30%] xl:w-[22%] border-[#B2B2B2] border-l fixed overflow-y-auto md:overflow-y-hidden h-screen top-0 right-0 bg-white z-10 flex flex-col'
                  : 'hidden'
              }
            >
              <div className="w-full border-[#B2B2B2] border-b px-4 pt-4 pb-2 sticky ">
                <div className="flex items-center justify-between ">
                  <h1 className="text-[20px] font-bold">
                    Edit Shipping Address
                  </h1>
                  <svg
                    className="w-8 h-8 cursor-pointer text-gray"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
              <div className="px-4 py-4">
                Subscription Charge Address Here
                {/* <AddressForm key={address.id} addressId={address.id} address={address}>
                    {({ stateForMethod }) => (
                      <div>
                        <button
                          className="rounded-sm w-full bg-[#252525] px-6 py-2 mb-4 text-sm font-semibold text-white shadow-sm border-2 border-black"
                          disabled={stateForMethod('PUT') !== 'idle'}
                          formMethod="PUT"
                          type="submit"
                        >
                          {stateForMethod('PUT') !== 'idle' ? 'Saving' : 'Save'}
                        </button>
                      </div>
                    )}
                  </AddressForm> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center py-40 text-lg">
            You don&apos;t have any active bundle subscriptions
          </div>
        )}
      </div>
    </div>
  )
}
