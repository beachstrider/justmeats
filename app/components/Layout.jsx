import { useMatches } from '@remix-run/react'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Footer as NewFooter } from '~/components/NewFooter'
import { Header as NewHeader } from '~/components/NewHeader'
import { LayoutProvider } from '~/providers/LayoutProvider'

import { MobileMenuAside } from './MobileMenuAside'
import { OrderHeader } from './OrderHeader'

const newLayoutRoutes = [
  '',
  'gym',
  'about',
  'recipe',
  'recipes',
  'account',
  'products',
  'ambassador',
  'gym-launch',
  'rich-froning',
  'mayhem-madness',
]

const noHeaderRoutes = ['ambassador']

export function Layout({ children = null }) {
  const matches = useMatches()
  const { pathname } = matches.at(-1)
  const route = pathname.split('/')[1]
  const isNewLayout = newLayoutRoutes.includes(route)
  const hasHeader = !noHeaderRoutes.includes(route)

  const isProductPage = route === 'products'

  if (isNewLayout) {
    return (
      <LayoutProvider>
        {isProductPage ? <OrderHeader /> : hasHeader ? <NewHeader /> : null}
        <MobileMenuAside />
        {children}
        <NewFooter />
      </LayoutProvider>
    )
  }

  return (
    <LayoutProvider>
      {isProductPage ? <OrderHeader /> : <Header />}
      <MobileMenuAside />
      {children}
      <Footer />
    </LayoutProvider>
  )
}
