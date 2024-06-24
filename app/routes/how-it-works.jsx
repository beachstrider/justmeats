import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { HeaderBanner } from '~/containers/HowItWorks/HeaderBanner'
import { StartRanch } from '~/containers/HowItWorks/StartRanch'
import { Natural100 } from '~/containers/HowItWorks/Natural100'
import { MoreMeat } from '~/containers/HowItWorks/MoreMeat'
import { ChefPrepared } from '~/containers/HowItWorks/ChefPrepared'
import { SubscribeAndSave } from '~/containers/HowItWorks/SubscribeAndSave'
import { OrderContentAndGallery } from '~/containers/HowItWorks/OrderContentAndGallery'
import { DeliverToDoor } from '~/containers/HowItWorks/DeliverToDoor'
import { HeatEatRepeat } from '~/containers/HowItWorks/HeatEatRepeat'
import { GotQuestion } from '~/containers/HowItWorks/GotQuestion'

export const meta = () => {
  return [{ title: 'How It Works - Just Meats' }]
}

export default function HowItWorks() {
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
