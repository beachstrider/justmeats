import React from 'react'

import { Outlet } from '@remix-run/react'

import { Menu } from '~/containers/Account/Menu'

export function shouldRevalidate() {
  return true
}

export default function Layout() {
  return (
    <main className="page-account">
      <Menu />
      <Outlet />
    </main>
  )
}
