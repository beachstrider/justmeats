import { useContext, useState } from 'react'

import { useMatches } from '@remix-run/react'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Footer as NewFooter } from '~/components/NewFooter'
import { Header as NewHeader } from '~/components/NewHeader'
import { LayoutContext, RootContext } from '~/contexts'

import { MobileMenuAside } from './MobileMenuAside'
import { OrderHeader } from './OrderHeader'

export function Layout({ children = null }) {
  const matches = useMatches()
  const { isNewLayout } = useContext(RootContext)
  const [menuToggle, setMenuToggle] = useState(false)
  const isProductPage = matches[1].params.bundle === 'custom-bundle'
  const isAmbassadorPage = matches[1].pathname == '/ambassador'

  if (isNewLayout) {
    return (
      <LayoutContext.Provider value={{ menuToggle, setMenuToggle }}>
        {!isAmbassadorPage && <NewHeader />}
        <MobileMenuAside />
        {children}
        <NewFooter />
      </LayoutContext.Provider>
    )
  }

  return (
    <LayoutContext.Provider value={{ menuToggle, setMenuToggle }}>
      {isProductPage ? <OrderHeader /> : <Header />}
      <MobileMenuAside />
      {children}
      <Footer />
    </LayoutContext.Provider>
  )
}
