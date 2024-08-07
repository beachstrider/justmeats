import React, { useState } from 'react'

import {
  listSubscriptions,
  updateAddress,
} from '@rechargeapps/storefront-client'
import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { AddressForm } from '~/containers/Account/Subscriptions/AddressForm'
import { Card } from '~/containers/Account/Subscriptions/Card'
import { NoSubscriptionCard } from '~/containers/Account/Subscriptions/NoSubscriptionCard'
import { Close } from '~/icons/Close'
import { withAuth } from '~/lib/auth'
import { sendPageView } from '~/lib/metaPixel.server'
import { getBundle } from '~/lib/storefront'
import { getPureId } from '~/lib/utils'

export function shouldRevalidate({ actionResult }) {
  return actionResult.success
}

export const meta = () => {
  return [{ title: 'Subscriptions - Just Meats' }]
}

export const loader = withAuth(
  async ({ request, context, rechargeSession }) => {
    sendPageView(request)

    const bundleProductData = getBundle({
      request,
      context,
    })

    const subscriptionsData = rechargeSession.customerId
      ? listSubscriptions(rechargeSession, {
          limit: 25,
          include: ['address', 'customer'],
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

    return json({ subscriptions })
  },
)

export const action = withAuth(
  async ({ request, context, rechargeSession }) => {
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
  },
)

export default function SubscriptionsPage() {
  const { subscriptions } = useLoaderData()

  const [address, setAddress] = useState(null)

  return (
    <div className="bg-[#efeeed]">
      {subscriptions.length > 0 ? (
        <div className="max-w-[1340px] w-full px-[20px] mx-auto">
          <div className="lg:pt-[57px] lg:pb-[88px] pt-[38px] pb-[38px]">
            <div className="font-hudson font-bold lg:text-[36px] lg:tracking-[1.8px] text-[24px] tracking-[1.2px] text-center lg:mb-[40px] mb-[27px]">
              YOUR SUBSCRIPTIONS
            </div>
            {subscriptions.length === 1 ? (
              <div className="flex justify-center">
                <div className="max-w-[637px] w-full">
                  <Card
                    setAddress={setAddress}
                    subscription={subscriptions[0]}
                  />
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 grid-cols-1 [gap:40px_20px]">
                {subscriptions.map((subscription) => (
                  <Card
                    setAddress={setAddress}
                    subscription={subscription}
                    key={subscription.id}
                  />
                ))}
              </div>
            )}
            {address !== null && (
              <div
                className={
                  'w-full md:w-[30%] xl:w-[22%] border-[#B2B2B2] border-l fixed overflow-y-auto md:overflow-y-hidden h-screen top-0 right-0 bg-white z-40 flex flex-col'
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
        </div>
      ) : (
        <NoSubscriptionCard />
      )}
    </div>
  )
}
