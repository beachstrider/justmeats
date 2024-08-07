import { getCustomer, updateCustomer } from '@rechargeapps/storefront-client'
import { json } from '@shopify/remix-oxygen'

import { PersonalInformation } from '~/containers/Account/Details/PersonalInformation'
import { withAuth } from '~/lib/auth'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'Account – Just Meats' }]
}

export const loader = withAuth(
  async ({ request, context, rechargeSession }) => {
    const customer = await getCustomer(rechargeSession)

    sendPageView(request)

    return json(
      { customer },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      },
    )
  },
)

export const action = withAuth(
  async ({ request, context, rechargeSession }) => {
    const form = await request.formData()
    const data = JSON.parse(form.get('body'))

    try {
      await updateCustomer(rechargeSession, data)

      return json({ success: true })
    } catch (err) {
      return json({ success: false, message: err.message ?? err })
    }
  },
)

export default function AccountDetails() {
  return (
    <div className="bg-[#efeeed]">
      <div className="container-small">
        <div className="lg:pt-[57px] lg:pb-[88px] pt-[38px] pb-[38px]">
          <div className="font-hudson font-bold lg:text-[36px] lg:tracking-[1.8px] text-[24px] tracking-[1.2px] text-center lg:mb-[40px] mb-[27px]">
            PERSONAL INFORMATION
          </div>
          <PersonalInformation />
        </div>
      </div>
    </div>
  )
}
