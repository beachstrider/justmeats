import { useState } from 'react'

import { useLoaderData } from '@remix-run/react'
import { defer, json } from '@shopify/remix-oxygen'

import { Banner } from '~/containers/SummerPreviewFree/Banner'
import { FarmToTable } from '~/containers/SummerPreviewFree/FarmToTable'
import { HowItWorks } from '~/containers/SummerPreviewFree/HowItWorks'
import { PartySize } from '~/containers/SummerPreviewFree/PartySize'
import { WholeCuts } from '~/containers/SummerPreviewFree/WholeCuts'
import { freeSamples as samples } from '~/data/sampleList'
import { PRODUCT_BY_HANDLE_QUERY } from '~/graphql/Product'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { sendPageView } from '~/lib/metaPixel.server'

const product_handle = '4-meat-bbq-box'

export const meta = () => {
  return [{ title: 'Just Meats | Summer Preview' }]
}

export async function loader({ request, context, params }) {
  const index = Number(params.index) - 1
  if (typeof samples[index] === 'undefined') {
    throw new Response(`${new URL(request.url).pathname} not found`, {
      status: 404,
    })
  }

  sendPageView(request)

  const { storefront } = context

  const { product } = await storefront.query(PRODUCT_BY_HANDLE_QUERY, {
    variables: {
      handle: product_handle,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  })

  return defer({
    index,
    product,
  })
}

export async function action({ request, context }) {
  const cart = context.cart
  const discountCode = context.session.get('discountCode')

  const form = await request.formData()
  const data = JSON.parse(form.get('body'))
  const variant = data.variant

  let cartData

  cartData = [
    {
      quantity: 1,
      merchandiseId: variant.id,
    },
  ]

  let cartResult
  let checkoutUrl

  cartResult = await cart.addLines(cartData)
  cart.setCartId(cartResult.cart.id)

  checkoutUrl = cartResult.cart.checkoutUrl ?? checkoutUrl

  if (discountCode) {
    cartResult = await cart.updateDiscountCodes([discountCode])
    cart.setCartId(cartResult.cart.id)
    checkoutUrl = cartResult.cart.checkoutUrl ?? checkoutUrl
  }

  return json({ checkoutUrl, success: true })
}

export default function SummerPreview() {
  const submit = useSubmitPromise()
  const { index, product } = useLoaderData()

  const sample = samples[index]

  const [submitting, setSubmitting] = useState(false)

  const checkout = async (variant) => {
    setSubmitting(true)

    const res = await submit(
      {
        body: JSON.stringify({
          variant,
        }),
      },
      {
        method: 'post',
        action: `/summer-preview/${product_handle}/${index + 1}`,
      },
    )

    if (res.success) {
      location.href = res.checkoutUrl
    } else {
      console.error(res.message)
      setSubmitting(false)
    }
  }

  return (
    <main className="relative">
      <Banner
        sample={sample}
        product={product}
        submitting={submitting}
        checkout={checkout}
      />
      <PartySize
        sample={sample}
        product={product}
        submitting={submitting}
        checkout={checkout}
      />
      <WholeCuts
        sample={sample}
        product={product}
        submitting={submitting}
        checkout={checkout}
      />
      <HowItWorks
        sample={sample}
        product={product}
        submitting={submitting}
        checkout={checkout}
      />
      <FarmToTable
        sample={sample}
        product={product}
        submitting={submitting}
        checkout={checkout}
      />
    </main>
  )
}
