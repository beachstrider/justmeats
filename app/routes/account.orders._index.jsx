import React, { useState } from 'react'

import { listOrders } from '@rechargeapps/storefront-client'
import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { Card } from '~/containers/Account/Orders/Card'
import { CUSTOMER_DETAILS_QUERY } from '~/graphql/customer-account/CustomerDetailsQuery'
import { withAuth } from '~/lib/auth'
import { sendPageView } from '~/lib/metaPixel.server'
import { getUserOrders } from '~/lib/restAdmin'
import { getPureId } from '~/lib/utils'

export const meta = () => {
  return [{ title: 'Orders – Just Meats' }]
}

export const loader = withAuth(
  async ({ request, context, rechargeSession }) => {
    sendPageView(request)

    if (rechargeSession.customerId) {
      const { orders } = await listOrders(rechargeSession, {
        limit: 25,
        sort_by: 'id-asc',
      })

      return json({ orders, api: 'recharge' })
    } else {
      const { data, errors } = await context.customerAccount.query(
        CUSTOMER_DETAILS_QUERY,
      )

      if (errors?.length || !data?.customer) {
        // Do logout
      }

      const customerId = getPureId(data.customer.id, 'Customer')
      const ordersResponse = await getUserOrders(context, customerId)

      const orders = ordersResponse.orders.map((element) => ({
        id: element.id,
        line_items: element.line_items,
        total_price: element.total_price,
        processed_at: element.processed_at,
        subtotal_price: element.subtotal_price,
        shipping_lines: element.shipping_lines,
        total_discounts: element.total_discounts,
        shipping_address: element.shipping_address,
        external_order_id: { ecommerce: element.id },
      }))

      return json({ orders, api: 'shopify' })
    }
  },
)

export default function Orders() {
  const { orders, api } = useLoaderData()

  const [expandedOrderId, setExpandedOrderId] = useState(orders?.[0]?.id)

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
                  api={api}
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
