import { redirect } from '@shopify/remix-oxygen'

export async function loader({ context }) {
  return redirect('/account/subscriptions', {
    headers: {
      'Set-Cookie': await context.session.commit(),
    },
  })
}

/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
