import { List } from '~/containers/Recipes'
import { FanFavorite } from '~/containers/Recipes/FanFavorite'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'All Recipes - Just Meats' }]
}

export async function loader({ request, context }) {
  sendPageView(request)

  return null
}

export default function Recipes() {
  return (
    <main className="relative tracking-[1px] leading-1 text-[#231B19] your-gym">
      <List />
      {/* <FanFavorite /> */}
    </main>
  )
}
