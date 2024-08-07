import { useEffect } from 'react'

import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { Banner } from '~/containers/RichFroning/Banner'
import { CustomerReviews } from '~/containers/RichFroning/CustomerReviews'
import { DoMeatRight } from '~/containers/RichFroning/DoMeatRight'
import { Featured } from '~/containers/RichFroning/Featured'
import { HowItWorks } from '~/containers/RichFroning/HowItWorks'
import { LearnMore } from '~/containers/RichFroning/LearnMore'
import { COLLECTIONS_QUERY } from '~/graphql/Collection'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'BBQ Survey - Just Meats' }]
}

export async function loader({ request, context }) {
  sendPageView(request)

  const { storefront } = context

  const variables = getPaginationVariables(request, { pageBy: 50 })
  const collectionHandles = ['featured', 'most-popular', 'trending']
  const query = collectionHandles.join(' OR ')

  const {
    collections: { nodes: collections },
  } = await storefront.query(COLLECTIONS_QUERY, {
    variables: {
      ...variables,
      query,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  })

  return json({ collections })
}

export default function RichFroning() {
  useEffect(() => {
    window.localStorage.setItem('_froning_visited', true)
  }, [])

  return (
    <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19] my-[30px]">
      <div class="klaviyo-form-VnsCzP"></div>
    </main>
  )
}
