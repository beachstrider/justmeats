import React, { useState } from 'react'

import { listOrders } from '@rechargeapps/storefront-client'
import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { Card } from '~/containers/Account/Orders/Card'
import { withAuth } from '~/lib/auth'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'Orders – Just Meats' }]
}

export const loader = withAuth(
  async ({ request, context, rechargeSession }) => {
    sendPageView(request)

    if (!rechargeSession.customerId) {
      return json({ orders: [] })
    }

    const { orders } = await listOrders(rechargeSession, {
      limit: 25,
      sort_by: 'id-asc',
    })

    return json({ orders })
  },
)

export default function Orders() {
  const { orders } = useLoaderData()

  const [expandedOrderId, setExpandedOrderId] = useState(orders[0]?.id)

  return (
    <div className="bg-[#efeeed]">
      <div className="container-small">
        <div className="lg:pt-[57px] lg:pb-[88px] pt-[38px] pb-[38px]">
          <div className="font-hudson font-bold lg:text-[36px] lg:tracking-[1.8px] text-[24px] tracking-[1.2px] text-center lg:mb-[40px] mb-[27px]">
            ORDER HISTORY
          </div>
          {orders?.length ? (
            <div className="flex flex-col gap-[16px]">
              {orders.map((order) => (
                <Card
                  order={order}
                  key={order.id}
                  isExpanded={expandedOrderId === order.id}
                  setIsExpanded={(expanded) =>
                    setExpandedOrderId(expanded ? order.id : null)
                  }
                />
              ))}
            </div>
          ) : (
            <div className="py-[40px] text-lg text-center">No Order found.</div>
          )}
        </div>
      </div>
    </div>
  )
}
