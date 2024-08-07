import { listSubscriptions } from '@rechargeapps/storefront-client'
import { json } from '@shopify/remix-oxygen'

import { Recipes } from '~/containers/Account/Dashboard/Recipes'
import { Subscription } from '~/containers/Account/Dashboard/Subscription'
import { withAuth } from '~/lib/auth'
import { sendPageView } from '~/lib/metaPixel.server'
import { getBundle } from '~/lib/storefront'
import { getPureId } from '~/lib/utils'

export const meta = () => {
  return [{ title: 'Dashboard - Just Meats' }]
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

    return json(
      { subscription: subscriptions[0] },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      },
    )
  },
)

export default function AccountDashboard() {
  return (
    <main className="bg-[#EFEEED]">
      <Subscription />
      <Recipes />
    </main>
  )
}
