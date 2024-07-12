import React from 'react'

import { getCustomer } from '@rechargeapps/storefront-client'
import { Outlet, useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { Menu } from '~/containers/Account/Menu'
import { rechargeQueryWrapper } from '~/lib/rechargeUtils'

export function shouldRevalidate() {
  return true
}

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ context }) {
  return await rechargeQueryWrapper(async (rechargeSession) => {
    const customer = await getCustomer(rechargeSession)

    return json(
      {
        customer,
      },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      },
    )
  }, context)
}

export default function Layout() {
  const { customer } = useLoaderData()

  return (
    <main className="page-account">
      <Menu />
      <Outlet context={{ customer }} />
    </main>
  )
}
