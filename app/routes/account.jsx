import React from 'react'

import { getCreditSummary } from '@rechargeapps/storefront-client'
import { Outlet, json } from '@remix-run/react'

import { Menu } from '~/containers/Account/Menu'
import { sendPageView } from '~/lib/metaPixel.server'
import { rechargeQueryWrapper } from '~/lib/rechargeUtils'

export function shouldRevalidate() {
  return true
}

export const loader = async ({ request, context }) => {
  return await rechargeQueryWrapper(async (session) => {
    const credit = await getCreditSummary(session, {
      include: ['credit_details'],
    })

    sendPageView(request)

    return json(
      { credit },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      },
    )
  }, context)
}

export default function Layout() {
  return (
    <main className="page-account">
      <Menu />
      <Outlet />
    </main>
  )
}
