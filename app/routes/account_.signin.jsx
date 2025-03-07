import { useState } from 'react'

import { phone as formatPhone } from 'phone'

import {
  sendPasswordlessCode,
  validatePasswordlessCode,
} from '@rechargeapps/storefront-client'
import { NavLink } from '@remix-run/react'
import { json, redirect } from '@shopify/remix-oxygen'

import { RequestForm } from '~/containers/Account/Login/Request'
import { ValidateForm } from '~/containers/Account/Login/Validate'
import { RECHARGE_SESSION_KEY, checkRechargeLoggedIn } from '~/lib/auth'
import { sendPageView } from '~/lib/metaPixel.server'
import { getCustomerByEmail, updateCustomer } from '~/lib/rechargeAdmin'

export function shouldRevalidate() {
  return false
}

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ request, context }) {
  sendPageView(request)

  const isShopifyLoggedin = await context.customerAccount.isLoggedIn()
  const isRechargeLoggedin = await checkRechargeLoggedIn(context)

  if (isShopifyLoggedin) {
    return redirect('/account/dashboard')
  }

  if (isRechargeLoggedin) {
    return redirect('/account/dashboard')
  }

  return json(null)
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
      // WORKAROUND: for Login sms issue
      try {
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
      } catch (err) {
        return json({ success: false, message: err.message ?? err })
      }
      // END WORKAROUND

      try {
        const sessionToken = await sendPasswordlessCode(email, {
          send_email: true,
          send_sms: true,
        })

        return json({ success: true, sessionToken })
      } catch (err) {
        // NOTE: We use this because recharge sms for global number doesn't work for some reason
        try {
          const sessionToken = await sendPasswordlessCode(email, {
            send_email: true,
            send_sms: false,
          })

          return json({ success: true, sessionToken })
        } catch (err) {
          return json({ success: false, message: err.message ?? err })
        }
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
    <main className="bg-[#EFEEED]">
      <div className="container flex flex-col items-center sm:py-[120px] py-[40px]">
        <div className="sm:max-w-[404px] w-full lg:px-[33px] px-[30px] lg:py-[37px] py-[32px] bg-white [box-shadow:0px_18px_25px_-15px_rgba(0,0,0,0.15)]">
          {requestResponse === null && (
            <RequestForm onSubmit={(res) => setRequestResponse(res)} />
          )}
          {requestResponse !== null && (
            <ValidateForm
              {...requestResponse}
              setRequestResponse={setRequestResponse}
            />
          )}
        </div>
        <div className="flex gap-1 lg:mt-[18px] mt-[16px] justify-center text-center font-medium">
          One-time customers login
          <NavLink
            prefetch="intent"
            to="/account/login"
            className="font-bold underline"
          >
            HERE
          </NavLink>
        </div>
      </div>
    </main>
  )
}
