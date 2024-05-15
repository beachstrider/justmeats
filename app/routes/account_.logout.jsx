import { redirect } from '@shopify/remix-oxygen'

/**
 * @param {ActionFunctionArgs}
 */
export async function action({ context }) {
  return redirect('/', {
    headers: {
      'Set-Cookie': await context.rechargeSession.destroy(),
    },
  })
}

/** @typedef {import('@shopify/remix-oxygen').ActionFunctionArgs} ActionFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof action>} ActionReturnData */
