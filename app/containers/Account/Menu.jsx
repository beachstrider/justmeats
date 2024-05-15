import { Form, NavLink } from '@remix-run/react'

import ToggleMenu from '~/containers/Account/AccountMenu/ToggleMenu'

export function Menu() {
  function isActiveStyle({ isActive, isPending }) {
    return {
      fontWeight: isActive ? 'bold' : undefined,
      color: isPending ? 'grey' : 'black',
    }
  }

  return (
    <div className="py-3">
      <nav
        role="navigation"
        className="hidden font-Roboto text-lg font-normal md:flex flex-col sm:flex-row justify-center text-center gap-0 sm:gap-2 lg:gap-[8.5rem]"
      >
        <NavLink to="/account/subscriptions" style={isActiveStyle}>
          Subscriptions &nbsp;
        </NavLink>

        <NavLink to="/account/orders" style={isActiveStyle}>
          &nbsp; Order History &nbsp;
        </NavLink>

        <NavLink to="/account/details" style={isActiveStyle}>
          &nbsp; Account Details &nbsp;
        </NavLink>

        <Form className="account-logout" method="POST" action="/account/logout">
          &nbsp;<button type="submit">Logout</button>
        </Form>
      </nav>
      <div className="block md:hidden">
        <ToggleMenu />
      </div>
    </div>
  )
}
