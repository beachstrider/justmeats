import { getPaginationVariables } from '@shopify/hydrogen'
import { json } from '@shopify/remix-oxygen'

import { BannerHead } from '~/containers/YourGym1/BannerHead'
import { ChefCook } from '~/containers/YourGym1/ChefCook'
import { EarnAnywhere } from '~/containers/YourGym1/EarnAnywhere'
import { Featured } from '~/containers/YourGym1/Featured'
import { FirstContact } from '~/containers/YourGym1/FirstContact'
import { FirstInfo } from '~/containers/YourGym1/FirstInfo'
import { HowItWorks } from '~/containers/MayhemMadness/HowItWorks'
import { Reviews } from '~/containers/MayhemMadness/Reviews'
import { SecondContact } from '~/containers/YourGym1/SecondContact'
import { SecondInfo } from '~/containers/MayhemMadness/SecondInfo'
import { COLLECTIONS_QUERY } from '~/graphql/Collection'

export const meta = () => {
    return [{ title: 'Your Gym - Just Meats' }]
}

export async function loader({ request, context }) {
    const { storefront } = context

    const variables = getPaginationVariables(request, { pageBy: 50 })
    const collectionHandles = ['featured', 'most-popular', 'trending']
    const query = collectionHandles.join(' OR ')

    const {
        collections: { nodes: collections },
    } = await storefront.query(COLLECTIONS_QUERY, {
        variables: {
            ...variables,
            query,
            country: storefront.i18n.country,
            language: storefront.i18n.language,
        },
    })

    return json({ collections })
}

export default function YourGym1() {
    return (
        <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19] your-gym">
            <BannerHead />
            <EarnAnywhere />
            <Featured />
            <FirstContact />
            <FirstInfo />
            <SecondInfo />
            <SecondContact />
            <ChefCook />
            <HowItWorks />
            <Reviews />
        </main>
    )
}
