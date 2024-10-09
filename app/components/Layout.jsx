import { useMatches } from '@remix-run/react'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { LayoutProvider } from '~/providers/LayoutProvider'

import { MobileMenuAside } from './MobileMenuAside'
import { OrderHeader } from './OrderHeader'

const withoutHeader = ['routes/ambassador']
const withoutFooter = [
  'routes/products.custom-bundle',
  'routes/account.subscriptions.$id',
  'routes/sv-special',
]

export function Layout({ children = null }) {
  const matches = useMatches()
  const { id: routeId } = matches.at(-1)

  const hasHeader = !withoutHeader.includes(routeId)
  const hasFooter = !withoutFooter.includes(routeId)

  return (
    <LayoutProvider>
      {hasHeader ? (
        routeId === 'routes/products.custom-bundle' ? (
          <OrderHeader />
        ) : (
          <Header />
        )
      ) : null}
      <MobileMenuAside />
      {children}
      {hasFooter && <Footer />}
    </LayoutProvider>
  )
}
