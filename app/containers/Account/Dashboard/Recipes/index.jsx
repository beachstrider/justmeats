import { useEffect, useState } from 'react'

import { recipes as _recipes } from '~/data/recipes'

import { Slider } from './Slider'

export const Recipes = () => {
  const [favoriteRecipeIds, setFavoriteRecipeIds] = useState([])

  const removeFavoriteRecipe = (id) => {
    const newFavoriteRecipeIds = [...favoriteRecipeIds]
    const index = newFavoriteRecipeIds.indexOf(id)

    newFavoriteRecipeIds.splice(index, 1)

    setFavoriteRecipeIds(newFavoriteRecipeIds)
    window.localStorage.setItem(
      'favorite_recipe_ids',
      JSON.stringify(newFavoriteRecipeIds),
    )
  }

  useEffect(() => {
    const favorite_recipe_ids = window.localStorage.getItem(
      'favorite_recipe_ids',
    )
    if (favorite_recipe_ids) {
      setFavoriteRecipeIds(JSON.parse(favorite_recipe_ids))
    }
  }, [])

  if (favoriteRecipeIds.length === 0) {
    return null
  }

  const recipes = _recipes.filter((el) => favoriteRecipeIds.includes(el.id))

  return (
    <section className="relative">
      <div className="bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat px-[13px] py-[13px]"></div>
      <div className="bg-[url('../assets/images/black-horizontal-lines-wallpaper.png')] [background-size:100%] ">
        <div className="container flex flex-col items-center pt-[30%] sm:pt-[20%] md:pt-[10%] xl:pt-[70px] relative">
          <div className="text-center sm:text-[36px] text-[24px] font-hudson font-bold leading-tight sm:tracking-[1.8px] tracking-[1.2px] sm:mb-[20px] mb-[17px] font-mobile">
            RECIPES CURATED FOR YOU
          </div>
        </div>
        <Slider recipes={recipes} removeFavoriteRecipe={removeFavoriteRecipe} />
      </div>
    </section>
  )
}
