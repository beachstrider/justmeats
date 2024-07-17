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
  'mayhem-madness',
  'rich-froning',
  'gym-launch',
  'gym',
  'recipes',
  'recipe',
  'about',
  'ambassador',
]

export function Layout({ children = null }) {
  const matches = useMatches()
  const { pathname } = matches.at(-1)
  const route = pathname.split('/')[1]
  const isNewLayout = newLayoutRoutes.includes(route)

  const isProductPage = matches[1].params.bundle === 'custom-bundle'
  const isAmbassadorPage = matches[1].pathname == '/ambassador'

  if (isNewLayout) {
    return (
      <LayoutProvider>
        {!isAmbassadorPage && <NewHeader />}
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
