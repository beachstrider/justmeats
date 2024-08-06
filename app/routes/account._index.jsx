import { redirect } from '@shopify/remix-oxygen'

export async function loader({ context }) {
  return redirect('/account/dashboard')
}

/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
