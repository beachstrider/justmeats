import { redirect } from '@shopify/remix-oxygen'

export const RECHARGE_SESSION_KEY = 'rechargeSession'

// helper function for data fetching
export async function rechargeQueryWrapper(rechargeFn, context) {
  const rechargeSession = context.rechargeSession.get(RECHARGE_SESSION_KEY)

  if (!rechargeSession) {
    return redirect('/account/login')
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
