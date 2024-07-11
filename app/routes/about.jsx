import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { ChefPrepared } from '~/containers/About/ChefPrepared'
import { DeliverToDoor } from '~/containers/About/DeliverToDoor'
import { GotQuestion } from '~/containers/About/GotQuestion'
import { HeaderBanner } from '~/containers/About/HeaderBanner'
import { HeatEatRepeat } from '~/containers/About/HeatEatRepeat'
import { MoreMeat } from '~/containers/About/MoreMeat'
import { Natural100 } from '~/containers/About/Natural100'
import { OrderContentAndGallery } from '~/containers/About/OrderContentAndGallery'
import { StartRanch } from '~/containers/About/StartRanch'
import { SubscribeAndSave } from '~/containers/About/SubscribeAndSave'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'How It Works - Just Meats' }]
}

export async function loader({ request }) {
  sendPageView(request)

  return null
}

export default function About() {
  return (
    <main className="relative font-barlow tracking-[1px] leading-1 text-[#231B19]">
      <HeaderBanner />
      <StartRanch />
      <Natural100 />
      <MoreMeat />
      <ChefPrepared />
      <SubscribeAndSave />
      <OrderContentAndGallery />
      <DeliverToDoor />
      <HeatEatRepeat />
      <GotQuestion />
    </main>
  )
}
