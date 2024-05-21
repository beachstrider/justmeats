import { useState } from 'react'

import { phone as formatPhone } from 'phone'

import {
  sendPasswordlessCode,
  validatePasswordlessCode,
} from '@rechargeapps/storefront-client'
import { json } from '@shopify/remix-oxygen'

import { RequestForm } from '~/containers/Account/Login/Request'
import { ValidateForm } from '~/containers/Account/Login/Validate'
import {
  getCustomerByEmail,
  getCustomerFirstAddressPhone,
  updateCustomer,
} from '~/lib/rechargeAdmin'
import { RECHARGE_SESSION_KEY } from '~/lib/rechargeUtils'

export function shouldRevalidate() {
  return false
}

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ request, context }) {
  return json(null, {
    headers: {
      'Set-Cookie': await context.rechargeSession.destroy(),
    },
  })
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */

/**
 * @param {ActionFunctionArgs}
 */
export async function action({ request, context }) {
  const form = await request.formData()
  const body = JSON.parse(form.get('body'))

  const { api, email, ...data } = body

  switch (api) {
    case 'request':
      try {
        // WORKAROUND: for Login sms issue
        const customer = await getCustomerByEmail(email, context)

        if (customer !== null) {
          if (customer.phone === null) {
            if (customer.include.addresses.length > 0) {
              const addressPhone = customer.include.addresses[0].phone

              if (addressPhone) {
                const phoneData = formatPhone(addressPhone)

                if (phoneData.isValid) {
                  await updateCustomer(
                    customer.id,
                    { phone: phoneData.phoneNumber },
                    context,
                  )
                }
              }
            }
          }
        }
        // END WORKAROUND

        const sessionToken = await sendPasswordlessCode(email, {
          send_email: true,
          send_sms: true,
        })

        return json({ success: true, sessionToken })
      } catch (err) {
        return json({ success: false, message: err.message ?? err })
      }

    case 'validate':
      const { code, sessionToken } = data

      try {
        const session = await validatePasswordlessCode(
          email,
          sessionToken,
          code,
        )

        context.rechargeSession.set(RECHARGE_SESSION_KEY, session)

        return json(
          { success: true },
          {
            headers: {
              'Set-Cookie': await context.rechargeSession.commit(),
            },
          },
        )
      } catch (err) {
        return json({ success: false, message: err.message ?? err })
      }

    default:
      break
  }
}

export default function Login() {
  const [requestResponse, setRequestResponse] = useState(null)

  return (
    <main className="">
      <div className="container flex justify-center sm:py-[120px] py-[40px]">
        <div className="sm:max-w-[404px] w-full rounded shadow p-[30px]">
          {requestResponse === null && (
            <RequestForm onSubmit={(res) => setRequestResponse(res)} />
          )}
          {requestResponse !== null && <ValidateForm {...requestResponse} />}
        </div>
      </div>
    </main>
  )
}
