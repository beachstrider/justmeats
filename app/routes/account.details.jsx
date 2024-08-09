import { getCustomer, updateCustomer } from '@rechargeapps/storefront-client'
import { json } from '@shopify/remix-oxygen'

import { PersonalInformation } from '~/containers/Account/Details/PersonalInformation'
import { CUSTOMER_DETAILS_QUERY } from '~/graphql/customer-account/CustomerDetailsQuery'
import { CUSTOMER_UPDATE_MUTATION } from '~/graphql/customer-account/CustomerUpdateMutation'
import { withAuth } from '~/lib/auth'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'Account – Just Meats' }]
}

export const loader = withAuth(
  async ({ request, context, rechargeSession }) => {
    sendPageView(request)

    if (!rechargeSession.customerId) {
      const { data, errors } = await context.customerAccount.query(
        CUSTOMER_DETAILS_QUERY,
      )

      if (errors?.length || !data?.customer) {
        // Do logout
      }

      const customer = {
        first_name: data.customer.firstName,
        last_name: data.customer.lastName,
      }

      return json({ customer, api: 'shopify' })
    }

    const customer = await getCustomer(rechargeSession)

    return json({ customer, api: 'recharge' })
  },
)

export const action = withAuth(
  async ({ request, context, rechargeSession }) => {
    const form = await request.formData()
    const body = JSON.parse(form.get('body'))
    const { api, ...payload } = body

    switch (api) {
      case 'recharge':
        try {
          await updateCustomer(rechargeSession, payload)

          return json({ success: true })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }

      case 'shopify':
        const customer = {
          firstName: payload.first_name,
          lastName: payload.last_name,
        }

        const { errors } = await context.customerAccount.mutate(
          CUSTOMER_UPDATE_MUTATION,
          {
            variables: {
              customer,
            },
          },
        )

        if (errors) {
          return json({ success: false, message: JSON.stringify(errors) })
        }

        return json({ success: true })

      default:
        break
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
