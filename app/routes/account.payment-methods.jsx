import {
  listPaymentMethods,
  sendCustomerNotification,
} from '@rechargeapps/storefront-client'
import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { Card } from '~/containers/Account/PaymentMethods/Card'
import { sendPageView } from '~/lib/metaPixel.server'
import { rechargeQueryWrapper } from '~/lib/rechargeUtils'

export const meta = () => {
  return [{ title: 'Account – Just Meats' }]
}

export const loader = async ({ request, context }) => {
  return await rechargeQueryWrapper(async (session) => {
    const { payment_methods } = await listPaymentMethods(session, {
      limit: 25,
    })

    sendPageView(request)

    return json(
      { payment_methods },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      },
    )
  }, context)
}

export const action = async ({ request, context }) => {
  return await rechargeQueryWrapper(async (rechargeSession) => {
    const form = await request.formData()
    const data = JSON.parse(form.get('body'))

    try {
      await sendCustomerNotification(
        rechargeSession,
        'SHOPIFY_UPDATE_PAYMENT_INFO',
        {
          ...data,
        },
      )

      return json({ success: true })
    } catch (err) {
      return json({ success: false, message: err.message ?? err })
    }
  }, context)
}

export default function AccountDetails() {
  const { payment_methods } = useLoaderData()

  return (
    <div className="bg-[#efeeed]">
      <div className="container-small">
        <div className="lg:pt-[57px] lg:pb-[88px] pt-[38px] pb-[38px]">
          <div className="font-hudson font-bold lg:text-[36px] lg:tracking-[1.8px] text-[24px] tracking-[1.2px] text-center lg:mb-[40px] mb-[27px]">
            PAYMENT METHODS
          </div>
          <div className="flex flex-col gap-[16px] max-w-[740px] w-full mx-auto">
            {payment_methods.map((paymentMethod) => (
              <Card paymentMethod={paymentMethod} key={paymentMethod.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
