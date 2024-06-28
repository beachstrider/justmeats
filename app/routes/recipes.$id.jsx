import React from 'react'

import { useParams } from '@remix-run/react'

import { Recipe } from '~/containers/RecipeItem/Recipe'
import { YoumayalsoLike } from '~/containers/RecipeItem/YoumayalsoLike'
import { recipes } from '~/data/recipes'

export const meta = () => {
  return [{ title: 'Recipe - Just Meats' }]
}

export default function RecipeItem() {
  const { id } = useParams()
  const finalData = recipes?.find((ele) => ele.url === id)

  return (
    <main className="relative tracking-[1px] leading-1 text-[#231B19] your-gym">
      <Recipe data={finalData} />
      <YoumayalsoLike />
    </main>
  )
}
