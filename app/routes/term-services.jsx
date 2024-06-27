import React from 'react'

import TermServices from '~/containers/TermServices'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'Terms of Service - Just Meats' }]
}

export async function loader({ request }) {
  sendPageView(request)

  return null
}

const TermServicesPage = () => {
  return (
    <>
      <TermServices />
    </>
  )
}

export default TermServicesPage
