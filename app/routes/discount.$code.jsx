import { redirect } from '@shopify/remix-oxygen'

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ request, context, params }) {
  if (params.code) {
    context.session.set('discountCode', params.code.toUpperCase())
  }

  const urlParams = new URLSearchParams(request.url.split('?')[1])
  const redirectPath = urlParams.get('redirect') ?? '/'

  return redirect(redirectPath, {
    headers: {
      'Set-Cookie': await context.session.commit(),
    },
  })
}
