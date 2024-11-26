import { initRecharge } from '@rechargeapps/storefront-client'
import { createHydrogenContext } from '@shopify/hydrogen'

import { CART_QUERY_FRAGMENT } from '~/lib/fragments'
import { getLocaleFromRequest } from '~/lib/i18n'
import { RechargeSession } from '~/lib/rechargeSession.server'
import { AppSession } from '~/lib/session'

/**
 * The context implementation is separate from server.ts
 * so that type can be extracted for AppLoadContext
 * @param {Request} request
 * @param {Env} env
 * @param {ExecutionContext} executionContext
 */
export async function createAppLoadContext(request, env, executionContext) {
  /**
   * Open a cache instance in the worker and a custom session instance.
   */
  if (!env?.SESSION_SECRET) {
    throw new Error('SESSION_SECRET environment variable is not set')
  }

  const waitUntil = executionContext.waitUntil.bind(executionContext)
  const [cache, session] = await Promise.all([
    caches.open('hydrogen'),
    AppSession.init(request, [env.SESSION_SECRET]),
  ])

  initRecharge({
    storeIdentifier: env.PUBLIC_STORE_DOMAIN,
    storefrontAccessToken: env.PUBLIC_RECHARGE_STOREFRONT_ACCESS_TOKEN,
  })
  const rechargeSession = await RechargeSession.init(request, [
    env.SESSION_SECRET,
  ])

  const hydrogenContext = createHydrogenContext({
    env,
    request,
    cache,
    waitUntil,
    session,
    i18n: getLocaleFromRequest(request),
    cart: {
      queryFragment: CART_QUERY_FRAGMENT,
    },
  })

  return {
    ...hydrogenContext,
    // declare additional Remix loader context
    rechargeSession,
  }
}
