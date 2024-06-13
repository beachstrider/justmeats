import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { Recipe } from '~/containers/RecipeItem/Recipe'
import { YoumayalsoLike } from '~/containers/RecipeItem/YoumayalsoLike'

export const meta = () => {
    return [{ title: 'Recipe - Just Meats' }]
}

export default function RecipeItem() {
    return (
        <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19] your-gym">
            <Recipe />
            <YoumayalsoLike />
        </main>
    )
}
