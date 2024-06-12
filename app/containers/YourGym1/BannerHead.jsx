import React from 'react'
import BannerCharacter from '~/assets/images/Copy-of-JustMeats_Partnerships_Stills_RichFroning_202MAR25_SethH-7.png'
import MayhemNationImage from '~/assets/images/Mayhem-Nation-W.png'
import BgBannerHead from '~/assets/images/your-gym-banner.png'

export const BannerHead = () => {
    return (
        <div className="relative flex-1">
            <div className="h-full w-full bg-cover sm:bg-top [background-position-x:920px]">
                <img
                    className="w-full"
                    src={BgBannerHead}
                />
            </div>
        </div>
    )
}
