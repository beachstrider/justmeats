import React from 'react'

import { Passion } from '~/containers/About/Passion'
import { Video } from '~/containers/About/Video'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'About Us – Just Meats' }]
}

export async function loader({ request }) {
  sendPageView(request)

  return null
}

const About = () => {
  return (
    <>
      <Video />
      <Passion />
    </>
  )
}

export default About
