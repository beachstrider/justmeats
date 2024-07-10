import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { List } from '~/containers/Recipes'
import { FanFavorite } from '~/containers/Recipes/FanFavorite'

export const meta = () => {
  return [{ title: 'All Recipes - Just Meats' }]
}

export default function Recipes() {
  return (
    <main className="relative tracking-[1px] leading-1 text-[#231B19] your-gym">
      <List />
      {/* <FanFavorite /> */}
    </main>
  )
}
