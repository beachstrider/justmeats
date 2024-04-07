import { json } from '@shopify/remix-oxygen'
import { getPaginationVariables } from '@shopify/hydrogen'
import { Header } from '~/containers/MayhemMadness/Header'
import { Banner } from '~/containers/MayhemMadness/Banner'
import { Featured } from '~/containers/MayhemMadness/Featured'
import { FirstContact } from '~/containers/MayhemMadness/FirstContact'
import { FirstInfo } from '~/containers/MayhemMadness/FirstInfo'
import { Footer } from '~/containers/MayhemMadness/Footer'
import { COLLECTIONS_QUERY } from '~/graphql/Collection'
import { SecondInfo } from '~/containers/MayhemMadness/SecondInfo'
import { SecondContact } from '~/containers/MayhemMadness/SecondContact'
import { ChefCook } from '~/containers/MayhemMadness/ChefCook'
import { HowItWorks } from '~/containers/MayhemMadness/HowItWorks'
import { Reviews } from '~/containers/MayhemMadness/Reviews'

export async function loader({ request, context }) {
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

export default function MayhemMadness() {
  return (
    <>
      <Header />
      <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19]">
        <Banner />
        <Featured />
        <FirstContact />
        <FirstInfo />
        <SecondInfo />
        <SecondContact />
        <ChefCook />
        <HowItWorks />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
