import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { FanFavorite } from '~/containers/Recipes/FanFavorite'
import { RecipeItems } from '~/containers/Recipes/RecipeItems'

export const meta = () => {
  return [{ title: 'All Recipes - Just Meats' }]
}

export default function Recipes() {
  return (
    <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19] your-gym">
      <RecipeItems />
      <FanFavorite />
    </main>
  )
}
