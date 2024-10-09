import { useState } from 'react'

import { useLoaderData } from '@remix-run/react'
import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { Banner } from '~/containers/SvSpecial/Banner'
import { Footer } from '~/containers/SvSpecial/Footer'
import { SageValleyContent } from '~/containers/SvSpecial/SageValleyContent'
import { SelectProductQty } from '~/containers/SvSpecial/SelectProductQty'
import { TasteQuality } from '~/containers/SvSpecial/TasteQuality'
import { COLLECTION_QUERY } from '~/graphql/Collection'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { sendPageView } from '~/lib/metaPixel.server'

const handle = 'sv-special'

export const meta = () => {
  return [{ title: 'Sage Valley - Just Meats' }]
}

export async function loader({ request, context }) {
  sendPageView(request)

  const { storefront } = context

  const variables = getPaginationVariables(request, { pageBy: 50 })

  const { collection } = await storefront.query(COLLECTION_QUERY, {
    variables: { handle, ...variables },
  })

  return json({
    collection,
  })
}

export async function action({ request, context }) {
  const cart = context.cart
  const discountCode = context.session.get('discountCode')

  const form = await request.formData()
  const products = JSON.parse(form.get('body'))
  const cartData = products.map(({ merchandiseId, quantity }) => ({
    merchandiseId,
    quantity,
  }))

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

export default function SvSpecial() {
  const submit = useSubmitPromise()

  const { collection } = useLoaderData()

  const [submitting, setSubmitting] = useState(false)
  const [products, setProducts] = useState(
    collection.products.nodes.map((product) => ({
      merchandiseId: product.variants.nodes[0].id,
      quantity: 1,
      ...product,
    })),
  )

  const checkout = async () => {
    setSubmitting(true)

    const res = await submit(
      {
        body: JSON.stringify(products),
      },
      {
        method: 'post',
        action: `/sv-special`,
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
    <>
      <main className="relative font-barlow tracking-[1px] leading-1 text-[#231B19]">
        <Banner />
        <SageValleyContent
          products={products}
          checkout={checkout}
          submitting={submitting}
        />
        <TasteQuality />
        <SelectProductQty products={products} setProducts={setProducts} />
      </main>
      <Footer />
    </>
  )
}
