import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { Banner } from '~/containers/Ambassador/Banner'
import { Joinus } from '~/containers/Ambassador/Joinus'
import { Perks } from '~/containers/Ambassador/Perks'
import { WhoYouAre } from '~/containers/Ambassador/WhoYouAre'

export const meta = () => {
  return [{ title: 'Ambassador Program - Just Meats' }]
}

export default function Ambassador() {
  return (
    <main className="relative tracking-[1px] leading-1 text-[#231B19] ambassador">
      <Banner />
      <Perks />
      <WhoYouAre />
      <Joinus />
    </main>
  )
}
