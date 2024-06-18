import { useContext, useEffect, useState } from 'react'

import OrderButton from 'app/components/OrderButton'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { NavLink } from '@remix-run/react'
import { getPaginationVariables } from '@shopify/hydrogen'
import { Image } from '@shopify/hydrogen-react'
import { defer } from '@shopify/remix-oxygen'

import carneAsasaImage from '~/assets/images/BodyBulding_Recipie_CarneAsasa.webp'
import tutorialImage2 from '~/assets/images/Hannah_Tall2.webp'
import tutorialImage3 from '~/assets/images/Hannah_Zoomed3.webp'
import tutorialImage1 from '~/assets/images/Hannah_Zoomed.webp'
import mosaicImage from '~/assets/images/Mosaic.webp'
import subscriptionBannerImage from '~/assets/images/april_banner_Desktop.webp'
import subscriptionBannerMobileImage from '~/assets/images/april_banner_Mobile.webp'
import video1 from '~/assets/videos/32c027bc585340199844575c5e85cf42.mp4'
import FaqAccordion from '~/components/FaqAccordion'
import ProductsSlider from '~/components/ProductsSlider'
import { Banner } from '~/containers/Home/Banner'
import { FaqSection } from '~/containers/Home/FaqSection'
import { FarmToTable } from '~/containers/Home/FarmToTable'
import { Featured } from '~/containers/Home/Featured'
import { HowItWorks } from '~/containers/Home/HowItWorks'
import { HowWeDoThis } from '~/containers/Home/HowWeDoThis'
import { OrderNow } from '~/containers/Home/OrderNow'
import { Review } from '~/containers/Home/Review'
import { CustomBundleContext, RootContext } from '~/contexts'
import { COLLECTIONS_QUERY } from '~/graphql/Collection'
import { RECOMMENDED_PRODUCTS_QUERY } from '~/graphql/Product'
import { getShopSuccessInfo } from '~/lib/restAdmin'

export const meta = () => {
  return [{ title: 'Just Meats | No Fuss, All Flavor – Ready & Delivered!' }]
}

export async function loader({ request, context }) {
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

  getShopSuccessInfo()

  return defer(
    { collections, customerCount, deliveryCount },
    {
      headers: {
        'Set-Cookie': await context.session.commit(),
      },
    },
  )
}

export default function Homepage() {
  const [froningVisited, setFroningVisited] = useState(true)

  const tutorialImages = [tutorialImage1, tutorialImage2, tutorialImage3]

  useEffect(() => {
    setFroningVisited(
      JSON.parse(window.localStorage.getItem('_froning_visited')) === true,
    )
  }, [])

  const swiperBreakpoints = {
    200: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }

  const [isMobile, setIsMobile] = useState(false)

  const { cartProducts, setCartProducts } = useContext(RootContext)

  const setSelectedProducts = setCartProducts
  const selectedProducts = cartProducts

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 540)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
