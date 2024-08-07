import React from 'react'

import Faq from '~/containers/Faq'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'Frequently asked questions - Just Meats' }]
}

export async function loader({ request }) {
  sendPageView(request)

  return null
}

const FaqPage = () => {
  return (
    <>
      <Faq />
    </>
  )
}

export default FaqPage
