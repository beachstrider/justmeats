import { listSubscriptions } from '@rechargeapps/storefront-client'
import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { UpcomingOrder } from '~/containers/Account/Dashboard/UpcomingOrder'
import { sendPageView } from '~/lib/metaPixel.server'
import { rechargeQueryWrapper } from '~/lib/rechargeUtils'
import { getBundle } from '~/lib/storefront'
import { getPureId } from '~/lib/utils'

export const meta = () => {
  return [{ title: 'Dashboard - Just Meats' }]
}

export const loader = async ({ request, context }) =>
  await rechargeQueryWrapper(async (session) => {
    sendPageView(request)

    const bundleProductData = getBundle({
      request,
      context,
    })

    const subscriptionsData = session.customerId
      ? listSubscriptions(session, {
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
  }, context)

export default function AccountDashboard() {
  const { subscription } = useLoaderData()

  return (
    <main className="bg-[#EFEEED]">
      <div className="container-small">
        <div className="flex lg:flex-row flex-col gap-[20px] lg:pt-[64px] lg:pb-[81px] pt-[31px] pb-[78px]">
          <div className="grow flex flex-col-reverse lg:grid lg:grid-cols-2 bg-white [box-shadow:0px_18px_25px_-15px_rgba(0,0,0,0.15)]">
            <div className="lg:text-start text-center flex flex-col justify-between lg:px-[47px] lg:py-[36px] px-[17px] pt-[21px] pb-[31px] lg:gap-0 gap-[25px]">
              <div className="grow flex flex-col justify-center lg:gap-[6px] gap-[10px]">
                <div className="font-bold lg:text-[20px] text-[18px] leading-[26px] text-[#6B1626]">
                  Coming Soon
                </div>
                <div className="font-hudson font-bold lg:text-[40px] text-[24px] lg:leading-[118%] leading-[123%] lg:tracking-[2px] tracking-[1.2px] text-[#231B19] lg:max-w-[270px] w-full">
                  JUST MEATS REFERRAL PROGRAM
                </div>
                <div className="lg:text-[18px] text-[16px] lg:leading-[26px] leading-[23px]">
                  When your friends buy meat, you eat for free
                </div>
              </div>
              <div className="flex justify-center lg:justify-start shrink-0">
                <button className="w-[226px] text-center px-[24px] py-[12px] bg-[#BF4745] text-white font-bold text-[14px] tracking-[0.7px]">
                  MANAGE SUBSCRIPTION
                </button>
              </div>
            </div>
            <div className="bg-img4 lg:h-[548px] h-[176px]"></div>
          </div>
          {subscription && <UpcomingOrder />}
        </div>
      </div>
    </main>
  )
}
