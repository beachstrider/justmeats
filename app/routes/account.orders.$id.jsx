import { redirect } from '@shopify/remix-oxygen'

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({ data }) => {
  return [{ title: `Order ${data?.order?.name} - Just Meats` }]
}

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ params, context, request }) {
  return redirect('/account/orders')
}
