import { useLoaderData } from '@remix-run/react'
import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { Header } from '~/components/Header'
import { Banner } from '~/containers/SvSpecial/Banner'
import { Footer } from '~/containers/SvSpecial/Footer'
import { Products } from '~/containers/SvSpecial/Products'
import { SageValleyContent } from '~/containers/SvSpecial/SageValleyContent'
import { TasteQuality } from '~/containers/SvSpecial/TasteQuality'
import { COLLECTION_QUERY } from '~/graphql/Collection'
import { sendPageView } from '~/lib/metaPixel.server'
import { OnetimeBundleProvider } from '~/providers/OnetimeBundleProvider'

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
  const { collection } = useLoaderData()

  return (
    <OnetimeBundleProvider products={collection.products.nodes}>
      <Header cartType="onetime" />
      <main className="relative font-barlow tracking-[1px] leading-1 text-[#231B19]">
        <Banner />
        <SageValleyContent />
        <TasteQuality />
        <Products />
      </main>
      <Footer />
    </OnetimeBundleProvider>
  )
}
