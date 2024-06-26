import React from 'react'

import { useParams } from '@remix-run/react'

import { Recipe } from '~/containers/RecipeItem/Recipe'
import { YoumayalsoLike } from '~/containers/RecipeItem/YoumayalsoLike'
import { recipedata } from '~/data/recipe-data'

export const meta = () => {
  return [{ title: 'Recipe - Just Meats' }]
}

export default function RecipeItem() {
  const { id } = useParams()
  const finalData = recipedata?.find((ele) => ele.url === id)
  console.log('finalData::: ', finalData);
  return (
    <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19] your-gym">
      <Recipe data={finalData} />
      <YoumayalsoLike />
    </main>
  )
}
