import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { ChefPrepared } from '~/containers/HowItWorks/ChefPrepared'
import { HeaderBanner } from '~/containers/HowItWorks/HeaderBanner'
import { MoreMeat } from '~/containers/HowItWorks/MoreMeat'
import { Natural100 } from '~/containers/HowItWorks/Natural100'
import { StartRanch } from '~/containers/HowItWorks/StartRanch'

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
    </main>
  )
}
