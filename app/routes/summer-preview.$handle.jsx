import { useState } from 'react'

import { useLoaderData } from '@remix-run/react'
import { defer, json } from '@shopify/remix-oxygen'

import previewImage1 from '~/assets/images/sample-preview-1.jpg'
import previewImage2 from '~/assets/images/sample-preview-2.jpg'
import previewImage3 from '~/assets/images/sample-preview-3.jpg'
import { Banner } from '~/containers/SummerPreview/Banner'
import { FarmToTable } from '~/containers/SummerPreview/FarmToTable'
import { HowItWorks } from '~/containers/SummerPreview/HowItWorks'
import { PartySize } from '~/containers/SummerPreview/PartySize'
import { PRODUCT_BY_HANDLE_QUERY } from '~/graphql/Product'
import { useSubmitPromise } from '~/hooks/useSubmitPromise'
import { sendPageView } from '~/lib/metaPixel.server'

const sampleList = {
  'bbq-sampler-1': {
    headline: 'FOUR 3LB TRAYS JUST $195',
    itemList: (
      <div className="flex justify-between max-w-[612px] w-full pl-[20px] lg:pr-0 pr-[20px]">
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>GARLIC BUTTER</div>
          <div>BISON BURGERS</div>
        </div>
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>SMOKED</div>
          <div>SIRLOIN BURGERS</div>
        </div>
        <div className="flex gap-[6px] items-center">
          <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
            <div>NAKED SMOKED</div>
            <div>CHICKEN WINGS</div>
          </div>
          <div className="font-espiritu lg:text-[24px] leading-[36px] text-[#BF4745]">
            x2
          </div>
        </div>
      </div>
    ),
    cost: '100',
    serves: '40',
    per_serving: '4.88',
    preview_image: previewImage1,
  },
  'bbq-sampler-2': {
    headline: 'four 3lb trays just $176',
    itemList: (
      <div className="flex justify-between max-w-[612px] w-full pl-[20px] lg:pr-0 pr-[20px]">
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>SMOKED</div>
          <div>TURKEY BREAST</div>
        </div>
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>SMOKED</div>
          <div>SIRLOIN BURGERS</div>
        </div>
        <div className="flex gap-[6px] items-center">
          <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
            <div>NAKED SMOKED</div>
            <div>CHICKEN WINGS</div>
          </div>
          <div className="font-espiritu lg:text-[24px] leading-[36px] text-[#BF4745]">
            x2
          </div>
        </div>
      </div>
    ),
    cost: '80',
    serves: '40',
    per_serving: '4.40',
    preview_image: previewImage2,
  },
  'bbq-sampler-3': {
    headline: 'three 3lb trays just $146',
    itemList: (
      <div className="flex justify-around max-w-[612px] w-full pl-[20px] lg:pr-0 pr-[20px]">
        <div className="flex gap-[6px] items-center">
          <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
            <div>SMOKED</div>
            <div>SIRLOIN BURGERS</div>
          </div>
          <div className="font-espiritu lg:text-[24px] leading-[36px] text-[#BF4745]">
            x2
          </div>
        </div>
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>NAKED SMOKED</div>
          <div>CHICKEN WINGS</div>
        </div>
      </div>
    ),
    cost: '50',
    serves: '30',
    per_serving: '4.87',
    preview_image: previewImage3,
  },
}

export const meta = () => {
  return [{ title: 'Just Meats | Summer Preview' }]
}

export async function loader({ request, context, params }) {
  if (typeof sampleList[params.handle] === 'undefined') {
    throw new Response(`${new URL(request.url).pathname} not found`, {
      status: 404,
    })
  }

  sendPageView(request)

  const { storefront } = context

  const { product } = await storefront.query(PRODUCT_BY_HANDLE_QUERY, {
    variables: {
      handle: params.handle,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  })

  return defer({
    product,
    handle: params.handle,
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
  const { handle, product } = useLoaderData()

  const sample = sampleList[handle]

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
        action: `/summer-preview/${handle}`,
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
