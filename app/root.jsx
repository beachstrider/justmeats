import { useEffect, useState } from 'react'

import slickCarouselTheme from 'slick-carousel/slick/slick-theme.css'
import slickCarousel from 'slick-carousel/slick/slick.css'
import sliderStyles from 'swiper/css'
import sliderAutoplay from 'swiper/css/autoplay'
import sliderNavigation from 'swiper/css/navigation'
import sliderPagination from 'swiper/css/pagination'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useMatches,
  useRouteError,
} from '@remix-run/react'
import {
  UNSTABLE_Analytics as Analytics,
  getShopAnalytics,
  useNonce,
} from '@shopify/hydrogen'
import { defer } from '@shopify/remix-oxygen'

import favicon from '~/assets/logo.svg'
import { CustomAnalytics } from '~/components/CustomAnalytics'
import { GTMNoScript } from '~/components/GTMNoScript'
import { Layout } from '~/components/Layout'
import { MetaNoScript } from '~/components/MetaNoScript'
import { SubscriptionCard } from '~/components/SubscriptionCard'
import { DELIVERY_EVERY_15_DAYS } from '~/consts'
import { RootContext } from '~/contexts'
import { FOOTER_QUERY, HEADER_QUERY } from '~/graphql/HeaderMenuFooter'
import { addScriptToHead } from '~/lib/utils'
import appStyles from '~/styles/app.css'
import tailwindStyles from '~/styles/tailwind.css'

import { CUSTOMER_DETAILS_QUERY } from './graphql/customer-account/CustomerDetailsQuery'
import { configAspireIQ } from './lib/configAspireIQ'
import { configChatJS } from './lib/configChatJS'
import { configGTM } from './lib/configGTM'
import { configLuckyOrange } from './lib/configLuckyOrange'
import { configMetaPixel } from './lib/configMetaPixel'
import { configTwitterPixel } from './lib/configTwitterPixel'

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
    // {rel: 'stylesheet', href: resetStyles},
    { rel: 'stylesheet', href: appStyles },
    { rel: 'stylesheet', href: sliderStyles },
    { rel: 'stylesheet', href: slickCarousel },
    { rel: 'stylesheet', href: slickCarouselTheme },
    { rel: 'stylesheet', href: sliderNavigation },
    { rel: 'stylesheet', href: sliderPagination },
    { rel: 'stylesheet', href: sliderAutoplay },
    { rel: 'stylesheet', href: tailwindStyles },
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

export const useRootLoaderData = () => {
  const [root] = useMatches()
  return root?.data
}

export async function loader({ context }) {
  const { storefront, customerAccount, cart, env } = context

  const publicStoreDomain = env.PUBLIC_STORE_DOMAIN

  const isLoggedInPromise = customerAccount.isLoggedIn()

  let customer = null
  if (await isLoggedInPromise) {
    const customerData = await context.customerAccount.query(
      CUSTOMER_DETAILS_QUERY,
    )
    customer = customerData.data.customer
  }

  const cartPromise = cart.get()
  // defer the footer query (below the fold)
  const footerPromise = storefront.query(FOOTER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      footerMenuHandle: 'footer', // Adjust to your footer menu handle
    },
  })

  // await the header query (above the fold)
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      headerMenuHandle: 'main-menu', // Adjust to your header menu handle
    },
  })

  return defer(
    {
      cart: cartPromise,
      customer,
      footer: footerPromise,
      header: await headerPromise,
      isLoggedIn: isLoggedInPromise,
      publicStoreDomain,

      shop: getShopAnalytics({
        storefront,
        publicStorefrontId: env.PUBLIC_STOREFRONT_ID,
      }),
      consent: {
        checkoutDomain: env.PUBLIC_CHECKOUT_DOMAIN,
        storefrontAccessToken: env.PUBLIC_STOREFRONT_API_TOKEN,
      },
    },
    {
      headers: {
        'Set-Cookie': await context.session.commit(),
      },
    },
  )
}

const newLayoutRoutes = ['mayhem-madness', 'rich-froning', 'gym-launch']

export default function App() {
  const nonce = useNonce()
  const data = useLoaderData()

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

    configChatJS()
    configTwitterPixel()
    configMetaPixel()
    configGTM()
    configAspireIQ()
  }, [])

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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
          customData={{ foo: 'bar' }}
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
            <SubscriptionCard></SubscriptionCard>
            <Layout {...data}>
              <Outlet />
            </Layout>
            <CustomAnalytics />
          </RootContext.Provider>
        </Analytics.Provider>

        {/* CAUTION: Please don't inject script tags here, instead use addScriptToHead util in useEffect like above */}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  const nonce = useNonce()
  let errorMessage = 'Unknown error'
  let errorStatus = 500

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data
    errorStatus = error.status
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col items-center justify-center h-screen route-error">
          <h1>Oops</h1>
          <h2>{errorStatus}</h2>
          {errorMessage && (
            <fieldset>
              <pre>{errorMessage}</pre>
            </fieldset>
          )}
        </div>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
      </body>
    </html>
  )
}
