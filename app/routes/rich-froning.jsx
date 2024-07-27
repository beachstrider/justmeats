import { useContext, useEffect } from 'react'

import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { Banner } from '~/containers/RichFroning/Banner'
import { CustomerReviews } from '~/containers/RichFroning/CustomerReviews'
import { DoMeatRight } from '~/containers/RichFroning/DoMeatRight'
import { FaqSection } from '~/containers/RichFroning/FaqSection'
import { FarmToTable } from '~/containers/RichFroning/FarmToTable'
import { Featured } from '~/containers/RichFroning/Featured'
import { FeaturedNew } from '~/containers/RichFroning/FeaturedNew'
import { HowItWorks } from '~/containers/RichFroning/HowItWorks'
import { HowItWorksNew } from '~/containers/RichFroning/HowItWorksNew'
import { HowWeDoThis } from '~/containers/RichFroning/HowWeDoThis'
import { LearnMore } from '~/containers/RichFroning/LearnMore'
import { OrderNow } from '~/containers/RichFroning/OrderNow'
import { Review } from '~/containers/RichFroning/Review'
import { COLLECTIONS_QUERY } from '~/graphql/Collection'
import { sendPageView } from '~/lib/metaPixel.server'
import { CustomBundleContext } from '~/providers/CustomBundleProvider'
import { RootContext } from '~/providers/RootProvider'

export const meta = () => {
  return [{ title: 'Rich Froning - Just Meats' }]
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
  const { cartProducts, setCartProducts } = useContext(RootContext)

  const setSelectedProducts = setCartProducts
  const selectedProducts = cartProducts

  return (
    <CustomBundleContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
      }}
    >
      <main className="relative font-barlow tracking-[1px] leading-1 text-[#231B19]">
        <Banner />
        <HowWeDoThis />
        <FeaturedNew />
        <HowItWorksNew />
        <FarmToTable />
        <Review />
        <OrderNow />
        <FaqSection />
        {/* <Featured />
      <HowItWorks />
      <LearnMore />
      <CustomerReviews />
      <DoMeatRight /> */}
      </main>
    </CustomBundleContext.Provider>
  )
}
