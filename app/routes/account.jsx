import React from 'react'

import { getCreditSummary } from '@rechargeapps/storefront-client'
import { Outlet, json } from '@remix-run/react'

import { Menu } from '~/containers/Account/Menu'
import { withAuth } from '~/lib/auth'
import { sendPageView } from '~/lib/metaPixel.server'

export function shouldRevalidate() {
  return true
}

export const loader = withAuth(
  async ({ request, context, rechargeSession }) => {
    sendPageView(request)

    if (!rechargeSession.customerId) {
      return json({ credit: null })
    }

    const credit = await getCreditSummary(rechargeSession, {
      include: ['credit_details'],
    })

    return json({ credit })
  },
)

export default function Layout() {
  return (
    <main className="page-account">
      <Menu />
      <Outlet />
    </main>
  )
}
