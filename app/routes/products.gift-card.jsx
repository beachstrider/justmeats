import { useState } from 'react'

import { useLoaderData } from '@remix-run/react'
import { Image, getPaginationVariables } from '@shopify/hydrogen'
import { json, redirect } from '@shopify/remix-oxygen'

import { Button } from '~/components/Button'
import { PRODUCT_BY_HANDLE_QUERY } from '~/graphql/Product'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { cn } from '~/lib/utils'

export const meta = () => {
  return [{ title: 'Gift Card - Just Meats' }]
}

export async function loader({ request, context, params }) {
  const { storefront } = context

  const variables = getPaginationVariables(request, { pageBy: 50 })

  const { product } = await storefront.query(PRODUCT_BY_HANDLE_QUERY, {
    variables: {
      ...variables,
      handle: 'gift-card',
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  })

  return json({
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

export default function Product() {
  const { product } = useLoaderData()
  const submit = useSubmitPromise()

  const [submitting, setSubmitting] = useState(false)
  const [variant, setVariant] = useState(product.variants.nodes[0])

  const onCheckout = async () => {
    setSubmitting(true)

    const res = await submit(
      {
        body: JSON.stringify({
          variant,
        }),
      },
      {
        method: 'post',
        action: `/products/gift-card`,
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
    <main className="sm:py-[80px] py-[60px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image src={variant.image.url} />
          </div>
          <div>
            <div className="sm:text-[50px] text-[36px] sm:mb-[16px] mb-[12px]">
              {product.title}
            </div>
            <div className="sm:text-[20px] text-[16px] sm:mb-[12px] mb-[8px]">
              Amount
            </div>
            <div className="flex flex-wrap justify-start gap-[16px] sm:mb-[120px] mb-[80px]">
              {product.variants.nodes.map((el, index) => (
                <div
                  key={index}
                  onClick={() => setVariant(el)}
                  className={cn(
                    'flex justify-center items-center text-[18px] leading-none px-[20px] py-[16px] border border-[#1d1d1d4d] cursor-pointer hover:border-black',
                    el.id === variant.id ? 'border-2 border-black' : '',
                  )}
                >
                  {el.title}
                </div>
              ))}
            </div>
            <Button
              onClick={onCheckout}
              loading={submitting}
              className="btn-order inline-block bg-[#862E1B] cursor-pointer text-[#fff] hover:bg-[#1d1d1d] transition font-bold text-lg py-3 px-9"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
