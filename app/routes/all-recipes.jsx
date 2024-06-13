import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { RecipeItems } from '~/containers/AllRecipes/RecipeItems'
import { FanFavorite } from '~/containers/AllRecipes/FanFavorite'

export const meta = () => {
    return [{ title: 'All Recipes - Just Meats' }]
}

export default function AllRecipes() {
    return (
        <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19] your-gym">
            <RecipeItems />
            <FanFavorite />
        </main>
    )
}
