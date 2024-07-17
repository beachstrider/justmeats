import { useEffect, useState } from 'react'

import slickCarouselTheme from 'slick-carousel/slick/slick-theme.css?url'
import slickCarousel from 'slick-carousel/slick/slick.css?url'
import sliderAutoplay from 'swiper/css/autoplay?url'
import sliderNavigation from 'swiper/css/navigation?url'
import sliderPagination from 'swiper/css/pagination?url'
import sliderStyles from 'swiper/css?url'

import { getCustomer } from '@rechargeapps/storefront-client'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useMatches,
  useRouteError,
  useRouteLoaderData,
} from '@remix-run/react'
import { Analytics, getShopAnalytics, useNonce } from '@shopify/hydrogen'
import { defer } from '@shopify/remix-oxygen'

import favicon from '~/assets/favicon.svg'
import { CustomAnalytics } from '~/components/CustomAnalytics'
import { GTMNoScript } from '~/components/GTMNoScript'
import { Layout as PageLayout } from '~/components/Layout'
import { MetaNoScript } from '~/components/MetaNoScript'
import { DELIVERY_EVERY_15_DAYS } from '~/consts'
import { RootContext } from '~/contexts'
import { FOOTER_QUERY, HEADER_QUERY } from '~/lib/fragments'
import { addScriptToHead } from '~/lib/utils'
import appStyles from '~/styles/app.css?url'

import { configAspireIQ } from './lib/configAspireIQ'
import { configChatJS } from './lib/configChatJS'
import { configGTM } from './lib/configGTM'
import { configLuckyOrange } from './lib/configLuckyOrange'
import { configMetaPixel } from './lib/configMetaPixel'
import { configTwitterPixel } from './lib/configTwitterPixel'
import { RECHARGE_SESSION_KEY } from './lib/rechargeUtils'

/**
 * This is important to avoid re-fetching root queries on sub-navigations
 * @type {ShouldRevalidateFunction}
 */
export const shouldRevalidate = ({ formMethod, currentUrl, nextUrl }) => {
  // revalidate when a mutation is performed e.g add to cart, login...
  if (formMethod && formMethod !== 'GET') {
    return true
  }

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) {
    return true
  }

  return false
}

export function links() {
  return [
    { rel: 'stylesheet', href: appStyles },
    { rel: 'stylesheet', href: sliderStyles },
    { rel: 'stylesheet', href: slickCarousel },
    { rel: 'stylesheet', href: slickCarouselTheme },
    { rel: 'stylesheet', href: sliderNavigation },
    { rel: 'stylesheet', href: sliderPagination },
    { rel: 'stylesheet', href: sliderAutoplay },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    { rel: 'icon', type: 'image/svg+xml', href: favicon },
  ]
}

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args)

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args)

  const { storefront, env } = args.context

  const publicStoreDomain = env.PUBLIC_STORE_DOMAIN

  let customer = null

  const rechargeSession = args.context.rechargeSession.get(RECHARGE_SESSION_KEY)

  if (rechargeSession) {
    try {
      customer = await getCustomer(rechargeSession)
    } catch (e) {
      if (e?.status === 401) {
        console.debug('session expired')
      }
    }
  }

  return defer({
    ...deferredData,
    ...criticalData,

    customer,
    publicStoreDomain,

    shop: getShopAnalytics({
      storefront,
      publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
    }),

    consent: {
      checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
      storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
    },
  })
}

const newLayoutRoutes = [
  '',
  'mayhem-madness',
  'rich-froning',
  'gym-launch',
  'gym',
  'recipes',
  'recipe',
  'about',
  'ambassador',
]

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({ context }) {
  const { storefront } = context

  const [header] = await Promise.all([
    storefront.query(HEADER_QUERY, {
      cache: storefront.CacheLong(),
      variables: {
        headerMenuHandle: 'main-menu', // Adjust to your header menu handle
      },
    }),
    // Add other queries here, so that they are loaded in parallel
  ])

  return {
    header,
  }
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({ context }) {
  const { storefront, customerAccount, cart } = context

  // defer the footer query (below the fold)
  const footer = storefront
    .query(FOOTER_QUERY, {
      cache: storefront.CacheLong(),
      variables: {
        footerMenuHandle: 'footer', // Adjust to your footer menu handle
      },
    })
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error)
      return null
    })
  return {
    cart: cart.get(),
    isLoggedIn: customerAccount.isLoggedIn(),
    footer,
  }
}

export function Layout({ children }) {
  const nonce = useNonce()
  const data = useRouteLoaderData('root')

  // Quick PATCH
  const matches = useMatches()
  const { pathname } = matches.at(-1)
  const route = pathname.split('/')[1]
  const isNewLayout = newLayoutRoutes.includes(route)

  const [cartSellingPlan, _setCartSellingPlan] = useState(
    DELIVERY_EVERY_15_DAYS,
  )
  const [cartProducts, _setCartProducts] = useState([])
  const [cartBonusVariant, _setCartBonusVariant] = useState(null)
  const [cartSellingPlanFrequency, _setCartSellingPlanFrequency] = useState(
    DELIVERY_EVERY_15_DAYS,
  )

  const [subscriptionSellingPlan, setSubscriptionSellingPlan] = useState(
    DELIVERY_EVERY_15_DAYS,
  )
  const [subscriptionProducts, setSubscriptionProducts] = useState([])
  const [subscriptionBonusVariant, setSubscriptionBonusVariant] = useState(null)
  const [
    subscriptionSellingPlanFrequency,
    setSubscriptionSellingPlanFrequency,
  ] = useState('')

  const cartCount = cartProducts.reduce((prev, item) => prev + item.quantity, 0)
  const cartCost = cartProducts.reduce(
    (acc, curr) => acc + parseFloat(curr.totalAmount),
    0,
  )
  const subscriptionCost = subscriptionProducts.reduce(
    (acc, curr) => acc + parseFloat(curr.totalAmount),
    0,
  )

  useEffect(() => {
    loadCart()
    loadScripts()
  }, [])

  const loadCart = () => {
    // HACK: in order to avoid using old local storage data and errors
    const _new_local_storage_enabled = window.localStorage.getItem(
      '_new_local_storage_enabled',
    )
    if (!_new_local_storage_enabled) {
      document.cookie = 'cart=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      window.localStorage.clear()
      window.localStorage.setItem(
        '_new_local_storage_enabled',
        JSON.stringify(true),
      )
    }

    const _cartSellingPlan = window.localStorage.getItem('_cartSellingPlan')
    const _cartProducts = window.localStorage.getItem('_cartProducts')
    const _cartBonusVariant = window.localStorage.getItem('_cartBonusVariant')
    const _cartSellingPlanFrequency = window.localStorage.getItem(
      '_cartSellingPlanFrequency',
    )

    if (_cartSellingPlan) {
      _setCartSellingPlan(JSON.parse(_cartSellingPlan))
    }
    if (_cartSellingPlanFrequency) {
      _setCartSellingPlanFrequency(JSON.parse(_cartSellingPlanFrequency))
    }
    if (_cartProducts) {
      _setCartProducts(JSON.parse(_cartProducts))
    }
    if (_cartBonusVariant) {
      setCartBonusVariant(JSON.parse(_cartBonusVariant))
    }
  }

  const loadScripts = async () => {
    // HACK: for react hydration error due to direct external script tag imports in head
    addScriptToHead(
      'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UMcvkS',
    )
    addScriptToHead(
      '//loox.io/widget/loox.js?shop=healthius-store.myshopify.com',
    )
    addScriptToHead('https://cdn.reamaze.com/assets/reamaze.js')
    addScriptToHead(
      'https://tools.luckyorange.com/core/lo.js?site-id=a781b4c9',
      () => configLuckyOrange(data.customer),
    )
    addScriptToHead(
      'https://www.googletagmanager.com/gtag/destination?id=MC-K2V1J6S3SN&l=dataLayer&cx=c',
    )
    addScriptToHead(
      'https://www.googletagmanager.com/gtag/js?id=G-3NLNCB6JD1&l=dataLayer&cx=c',
    )
    addScriptToHead('https://www.googletagmanager.com/gtm.js?id=GTM-53HM3TQ7')
    addScriptToHead(
      'https://www.googletagmanager.com/gtag/js?id=AW-11317384601',
    )
    addScriptToHead('https://www.googletagmanager.com/gtag/js?id=G-3NLNCB6JD1')

    configChatJS()
    configTwitterPixel()
    configMetaPixel()
    configGTM()
    configAspireIQ()
  }

  const setCartSellingPlan = (value) => {
    _setCartSellingPlan(value)
    window.localStorage.setItem('_cartSellingPlan', JSON.stringify(value))

    // Adjust cart products according to sellingPlan
    const newCartProducts = value
      ? cartProducts
      : cartProducts.filter((product) => !product.requiresSellingPlan)

    setCartProducts(newCartProducts)
  }

  const setCartSellingPlanFrequency = (value) => {
    _setCartSellingPlanFrequency(value)
    window.localStorage.setItem(
      '_cartSellingPlanFrequency',
      JSON.stringify(value),
    )

    setCartSellingPlan(value)
  }

  const setCartProducts = (value) => {
    _setCartProducts(value)
    window.localStorage.setItem('_cartProducts', JSON.stringify(value))

    triggerKlaviyo({ products: value })
  }

  const setCartBonusVariant = (value) => {
    _setCartBonusVariant(value)
    window.localStorage.setItem('_cartBonusVariant', JSON.stringify(value))
  }

  const triggerKlaviyo = ({ products }) => {
    const _learnq = window._learnq || []

    const cartItems = products.map((product) => ({
      quantity: product.quantity,
      merchandiseId: product.variants.nodes[0].id,
    }))

    const cart = {
      total_price: cartCost,
      value: cartCount,
      original_total_price: cartCost,
      items: cartItems,
    }

    if (products.length) {
      _learnq.push(['track', 'Cart items changed', cart])
    }
  }

  return (
    <html lang="EN">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=0"
        />
        <Meta />
        <Links />
        <MetaNoScript />
      </head>
      <body>
        <GTMNoScript />
        <Analytics.Provider
          cart={data.cart}
          shop={data.shop}
          consent={data.consent}
          cookieDomain="justmeats.com"
        >
          <RootContext.Provider
            value={{
              cartCost,
              cartCount,
              cartProducts,
              cartSellingPlan,
              cartSellingPlanFrequency,
              cartBonusVariant,
              subscriptionCost,
              subscriptionSellingPlan,
              subscriptionProducts,
              subscriptionSellingPlanFrequency,
              subscriptionBonusVariant,
              setCartProducts,
              setCartSellingPlan,
              setCartSellingPlanFrequency,
              setCartBonusVariant,
              setSubscriptionSellingPlan,
              setSubscriptionProducts,
              setSubscriptionSellingPlanFrequency,
              setSubscriptionBonusVariant,
              isNewLayout,
            }}
          >
            {data ? <PageLayout {...data}>{children}</PageLayout> : children}
            <CustomAnalytics />
          </RootContext.Provider>
        </Analytics.Provider>

        {/* CAUTION: Please don't inject script tags here, instead use addScriptToHead util in useEffect like above */}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()
  let errorMessage = 'Unknown error'
  let errorStatus = 500

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data
    errorStatus = error.status
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen route-error">
      <h1>Oops</h1>
      <h2>{errorStatus}</h2>
      {errorMessage && (
        <fieldset>
          <pre>{errorMessage}</pre>
        </fieldset>
      )}
    </div>
  )
}
