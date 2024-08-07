import {
  getCustomer,
  loginWithShopifyCustomerAccount,
} from '@rechargeapps/storefront-client'
import { redirect } from '@shopify/remix-oxygen'

import { CUSTOMER_DETAILS_QUERY } from '~/graphql/customer-account/CustomerDetailsQuery'

import { createCustomer } from './rechargeAdmin'
import { getPureId } from './utils'

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
      return redirect('/account/signin')
    }

    rechargeSession = await loginRecharge(context)
  }

  if (!rechargeSession.customerId) {
    const { data, errors } = await context.customerAccount.query(
      CUSTOMER_DETAILS_QUERY,
    )

    if (errors?.length || !data?.customer) {
      throw new Error('Customer not found')
    }

    const newCustomer = {
      first_name: data.customer.firstName,
      last_name: data.customer.lastName,
      email: data.customer.emailAddress.emailAddress,
      phone: data.customer.phoneNumber.phoneNumber,
      external_customer_id: {
        ecommerce: getPureId(data.customer.id, 'Customer'),
      },
    }

    try {
      await createCustomer(newCustomer, context)
    } catch (err) {
      throw new Error(`Creating Recharge customer faild - ${err.message}`)
    }
  }

  try {
    return await rechargeFn(rechargeSession)
  } catch (err) {
    if (err?.status === 401) {
      return redirect('/account/signin')
    }
    throw new Error(`Recharge Error - ${err.message}`)
  }
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
