import {
  getCustomer,
  loginWithShopifyCustomerAccount,
} from '@rechargeapps/storefront-client'
import { redirect } from '@shopify/remix-oxygen'

export const RECHARGE_SESSION_KEY = 'rechargeSession'

// loginHelper function
export async function loginRecharge(context) {
  const customerAccessToken = await context.customerAccount.getAccessToken()
  const rechargeSession = await loginWithShopifyCustomerAccount(
    customerAccessToken,
  )
  if (rechargeSession) {
    context.rechargeSession.set(RECHARGE_SESSION_KEY, rechargeSession)
  } else {
    // this should match your catch boundary
    throw new Error('No session created')
  }

  return rechargeSession
}

export async function checkRechargeLoggedIn(context) {
  const session = context.rechargeSession.get(RECHARGE_SESSION_KEY)

  if (!session) {
    return false
  }

  try {
    await getCustomer(session)

    return true
  } catch (e) {
    return false
  }
}

export const withAuth = (loader) => {
  return async function (args) {
    const { context } = args

    try {
      let rechargeSession = context.rechargeSession.get(RECHARGE_SESSION_KEY)

      if (!rechargeSession) {
        const isShopifyLoggedIn = await context.customerAccount.isLoggedIn()

        if (!isShopifyLoggedIn) {
          return redirect('/account/signin')
        }

        rechargeSession = await loginRecharge(context)
      }

      return await loader({ ...args, rechargeSession })
    } catch (err) {
      if (err?.status === 401) {
        return redirect('/account/signin')
      }
      throw new Error(`Recharge Error - ${err.message}`)
    }
  }
}
