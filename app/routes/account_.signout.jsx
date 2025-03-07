import { redirect } from '@shopify/remix-oxygen'

// if we dont implement this, /account/logout will get caught by account.$.tsx to do login

export async function loader() {
  return redirect('/')
}

/**
 * @param {ActionFunctionArgs}
 */
export async function action({ context }) {
  return redirect('/account/logout', {
    headers: {
      'Set-Cookie': await context.rechargeSession.destroy(),
    },
  })
}

/** @typedef {import('@shopify/remix-oxygen').ActionFunctionArgs} ActionFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof action>} ActionReturnData */
