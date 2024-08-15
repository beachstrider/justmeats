import React from 'react'

import { useParams } from '@remix-run/react'

import { Recipe } from '~/containers/Recipes/Recipe/Recipe'
import { YouMayAlsoLike } from '~/containers/Recipes/Recipe/YouMayAlsoLike'
import { recipes } from '~/data/recipes'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'Recipe - Just Meats' }]
}

export async function loader({ request, context }) {
  sendPageView(request)

  return null
}

export default function RecipeItem() {
  const { id } = useParams()
  const finalData = recipes?.find((ele) => ele.id === id)

  if (typeof finalData === 'undefined') {
    return null
  }

  return (
    <main className="relative tracking-[1px] leading-1 text-[#231B19] your-gym">
      <Recipe data={finalData} />
      {/* <YouMayAlsoLike /> */}
    </main>
  )
}
