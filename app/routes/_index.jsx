import { useEffect, useState } from 'react'

import OrderButton from 'app/components/OrderButton'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { NavLink } from '@remix-run/react'
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
import { FEATURED_COLLECTION_QUERY } from '~/graphql/Collection'
import { RECOMMENDED_PRODUCTS_QUERY } from '~/graphql/Product'

export const meta = () => {
  return [{ title: 'Just Meats | No Fuss, All Flavor – Ready & Delivered!' }]
}

export async function loader({ context }) {
  const { storefront } = context
  const { collections } = await storefront.query(FEATURED_COLLECTION_QUERY)
  const featuredCollection = collections.nodes[0]
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY)

  return defer({ featuredCollection, recommendedProducts })
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
    <main className="relative page-home">
      <Banner />
    </main>
  )
}
