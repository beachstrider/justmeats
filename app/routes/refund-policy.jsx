import React from 'react'

import RefundPolicy from '~/containers/RefundPolicy'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'Cancellation Policy - Just Meats' }]
}

export async function loader({ request }) {
  sendPageView(request)

  return null
}

const RefundPolicyPage = () => {
  return (
    <>
      <RefundPolicy />
    </>
  )
}

export default RefundPolicyPage
