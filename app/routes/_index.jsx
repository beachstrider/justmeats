import { useContext } from 'react'

import { getPaginationVariables } from '@shopify/hydrogen'
import { defer } from '@shopify/remix-oxygen'

import { Banner } from '~/containers/Home/Banner'
import { FaqSection } from '~/containers/Home/FaqSection'
import { FarmToTable } from '~/containers/Home/FarmToTable'
import { Featured } from '~/containers/Home/Featured'
import { HowItWorks } from '~/containers/Home/HowItWorks'
import { HowWeDoThis } from '~/containers/Home/HowWeDoThis'
import { OrderNow } from '~/containers/Home/OrderNow'
import { Review } from '~/containers/Home/Review'
import { COLLECTIONS_QUERY } from '~/graphql/Collection'
import { sendPageView } from '~/lib/metaPixel.server'
import { getShopSuccessInfo } from '~/lib/restAdmin'
import { CustomBundleContext } from '~/providers/CustomBundleProvider'
import { RootContext } from '~/providers/RootProvider'

export const meta = () => {
  return [{ title: 'Just Meats | No Fuss, All Flavor – Ready & Delivered!' }]
}

export async function loader({ request, context }) {
  sendPageView(request)

  const { storefront } = context

  const variables = getPaginationVariables(request, { pageBy: 50 })
  const collectionHandles = ['featured', 'most-popular', 'trending']
  const query = collectionHandles.join(' OR ')

  const { customerCount, deliveryCount } = await getShopSuccessInfo(context)

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

  return defer({ collections, customerCount, deliveryCount })
}

export default function Homepage() {
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
      <main className="relative page-home">
        <Banner />
        <HowWeDoThis />
        <Featured />
        <HowItWorks />
        <FarmToTable />
        <Review />
        <OrderNow />
        <FaqSection />
      </main>
    </CustomBundleContext.Provider>
  )
}
