import React, { useState } from 'react'

import {
  listSubscriptions,
  updateAddress,
} from '@rechargeapps/storefront-client'
import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { AddressForm } from '~/containers/Account/Subscriptions/AddressForm'
import { Card } from '~/containers/Account/Subscriptions/Card'
import { Close } from '~/icons/Close'
import { sendPageView } from '~/lib/metaPixel.server'
import { rechargeQueryWrapper } from '~/lib/rechargeUtils'
import { getBundle } from '~/lib/storefront'
import { getPureId } from '~/lib/utils'

export function shouldRevalidate({ actionResult }) {
  return actionResult.success
}

export const meta = () => {
  return [{ title: 'Subscriptions - Just Meats' }]
}

export const loader = async ({ request, context }) =>
  await rechargeQueryWrapper(async (rechargeSession) => {
    sendPageView(request)

    const bundleProductData = getBundle({
      request,
      context,
    })

    const subscriptionsData = rechargeSession.customerId
      ? listSubscriptions(rechargeSession, {
          limit: 25,
          include: 'address',
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
      case 'update-address':
        try {
          await updateAddress(rechargeSession, data.id, data)

          return json({ success: true })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }
    }
  }, context)

export default function SubscriptionsPage() {
  const { subscriptions } = useLoaderData()

  const [address, setAddress] = useState(null)

  return (
    <div className="bg-[#efeeed]">
      <div className="container">
        <div className="flex sm:flex-row flex-col gap-[20px] justify-between items-center sm:pt-[30px] pt-[20px] sm:pb-[10px] pb-[8px]">
          <h2 className="font-bold text-lead text-[28px] text-center md:text-left">
            Your Subscriptions
          </h2>
        </div>
        <hr className="border-t-2 border-gray-500"></hr>
        {subscriptions.length > 0 ? (
          <div className="flex flex-col sm:gap-[30px] gap-[20px] sm:py-[40px] py-[30px]">
            {subscriptions.map((subscription) => (
              <Card
                setAddress={setAddress}
                subscription={subscription}
                key={subscription.id}
              />
            ))}
            {address !== null && (
              <div
                className={
                  'w-full md:w-[30%] xl:w-[22%] border-[#B2B2B2] border-l fixed overflow-y-auto md:overflow-y-hidden h-screen top-0 right-0 bg-white z-10 flex flex-col'
                }
              >
                <div className="w-full border-[#B2B2B2] border-b px-4 pt-4 pb-2 sticky ">
                  <div className="flex items-center justify-between ">
                    <h1 className="text-[20px] font-bold">
                      Edit Shipping Address
                    </h1>
                    <button onClick={() => setAddress(null)}>
                      <Close />
                    </button>
                  </div>
                </div>
                <div className="px-4 py-4">
                  <AddressForm
                    address={address}
                    onSubmit={() => setAddress(null)}
                  />
                </div>
              </div>
            )}
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
