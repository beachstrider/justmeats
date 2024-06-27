import React from 'react'

import { listOrders } from '@rechargeapps/storefront-client'
import { NavLink, useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { Order } from '~/containers/Account/Orders/Order'
import { sendPageView } from '~/lib/metaPixel.server'
import { rechargeQueryWrapper } from '~/lib/rechargeUtils'

export const meta = () => {
  return [{ title: 'Orders – Just Meats' }]
}

export async function loader({ request, context }) {
  sendPageView(request)

  const listOrdersResponse = await rechargeQueryWrapper((session) => {
    if (session.customerId) {
      return listOrders(session, {
        limit: 25,
        sort_by: 'id-asc',
      })
    }
    return { orders: [] }
  }, context)

  return json({
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Set-Cookie': await context.session.commit(),
    },
    listOrdersResponse,
  })
}

export default function Orders() {
  const {
    listOrdersResponse: { orders },
  } = useLoaderData()

  return (
    <div className="py-0 bg-sublistbgGray md:py-8">
      <div className="container">
        <div className="flex flex-col items-center py-4 my-4 border-b-2 border-gray-500 md:flex-row">
          <NavLink
            to="/account/subscriptions"
            className="capitalize bg-[#fff] border-solid border-2 border-gray-500 px-8 text-[22px] py-1"
          >
            Back to Account
          </NavLink>
          <h3 className="text-[28px] md:text-[36px] font-bold ml-0 md:ml-[30%]">
            Your Order History
          </h3>
        </div>
        <div className="bg-[#fff] rounded-md py-8 px-6 mb-8">
          {orders?.length ? (
            <>
              {orders.map((order) => (
                <Order order={order} key={order.id} />
              ))}
            </>
          ) : (
            <h3>No order found.</h3>
          )}
        </div>
      </div>
    </div>
  )
}
