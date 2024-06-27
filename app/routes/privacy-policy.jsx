import React from 'react'

import PrivacyPolicy from '~/containers/PrivacyPolicy'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'Privacy Policy - Just Meats' }]
}

export async function loader({ request }) {
  sendPageView(request)

  return null
}

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyPolicy />
    </>
  )
}

export default PrivacyPolicyPage
