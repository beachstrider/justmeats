import { loginWithShopifyCustomerAccount } from '@rechargeapps/storefront-client'
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

// helper function for data fetching
export async function rechargeQueryWrapper(rechargeFn, context) {
  let rechargeSession = context.rechargeSession.get(RECHARGE_SESSION_KEY)

  if (!rechargeSession) {
    const isShopifyLoggedIn = await context.customerAccount.isLoggedIn()

    if (!isShopifyLoggedIn) {
      return redirect('/account/login')
    }

    rechargeSession = await loginRecharge(context)
  }

  try {
    return await rechargeFn(rechargeSession)
  } catch (e) {
    if (e?.status === 401) {
      return redirect('/account/login')
    }
    // this should match your catch boundary
    throw new Error(`Recharge Error - ${e.message}`)
  }
}
