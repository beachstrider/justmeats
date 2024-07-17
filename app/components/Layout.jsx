import { useContext } from 'react'

import { useMatches } from '@remix-run/react'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Footer as NewFooter } from '~/components/NewFooter'
import { Header as NewHeader } from '~/components/NewHeader'
import { LayoutProvider } from '~/providers/LayoutProvider'
import { RootContext } from '~/providers/RootProvider'

import { MobileMenuAside } from './MobileMenuAside'
import { OrderHeader } from './OrderHeader'

export function Layout({ children = null }) {
  const matches = useMatches()
  const { isNewLayout } = useContext(RootContext)

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
