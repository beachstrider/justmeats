import { createContext, useState } from 'react'

export const LayoutContext = createContext()

export const LayoutProvider = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <LayoutContext.Provider value={{ menuToggle, setMenuToggle }}>
      {children}
    </LayoutContext.Provider>
  )
}
