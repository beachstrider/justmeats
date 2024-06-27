import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'

import { sendPageView } from '~/lib/metaPixel.server'

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ request, params }) {
  sendPageView(request)

  const { name } = params

  const source = `/videos/${name}.mp4`

  return json({ source })
}

export default function Instruction() {
  const { source } = useLoaderData()

  return (
    <main className="sm:py-[40px] py-[100px]">
      <div className="container">
        <div className="flex justify-center">
          <div className="sm:max-w-[1000px] w-full">
            <video
              loop
              muted
              controls
              autoPlay
              playsInline
              preload="auto"
              loading="lazy"
              className="object-cover w-full h-full"
            >
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  )
}
