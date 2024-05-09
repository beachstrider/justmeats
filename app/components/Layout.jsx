import { useContext, useState } from 'react'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Footer as NewFooter } from '~/components/NewFooter'
import { Header as NewHeader } from '~/components/NewHeader'
import { LayoutContext, RootContext } from '~/contexts'

import { MobileMenuAside } from './MobileMenuAside'
import OrderHeader from './OrderHeader'

export function Layout({ children = null, isProductPage }) {
  const [menuToggle, setMenuToggle] = useState(false)
  const { isNewLayout } = useContext(RootContext)

  if (isNewLayout)
    return (
      <LayoutContext.Provider value={{ menuToggle, setMenuToggle }}>
        <NewHeader />

        <MobileMenuAside />
        {children}
        <NewFooter />
      </LayoutContext.Provider>
    )

  return (
    <LayoutContext.Provider value={{ menuToggle, setMenuToggle }}>
      {isProductPage ? (
        <OrderHeader />
      ) : (
        <>
          <Header />
          <div>{isProductPage}</div>
        </>
      )}
      <MobileMenuAside />
      <main>{children}</main>
      <Footer />
    </LayoutContext.Provider>
  )
}
