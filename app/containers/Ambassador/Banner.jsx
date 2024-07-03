import { NavLink } from '@remix-run/react'
import ambassadorLogo from '~/assets/images/ambassadorLogo.png'
export const Banner = () => {
    return (
        <section>
            <div className="bg-[url('../assets/images/ambassadorBanner.png')] bg-pattern2 py-[160px]">
                <div className="container">
                    <NavLink
                        prefetch="intent"
                        to="/"
                        className="w-full mb-[160px]">
                        <img src={ambassadorLogo} className="m-auto"/>
                    </NavLink>
                    <div className="font-hudson text-center text-[#FFF] sm:text-[52px] text-[42px] font-normal leading-normal tracking-[2.6px] uppercase">Just Meats Ambassador Program</div>
                    <div className="font-barlow text-center text-[#FFF] sm:text-[32px] text-[16px] font-bold leading-[81%] sm:tracking-[10.24px] tracking-[7px] uppercase my-[50px]">No Fuss, All Flavor</div>
                </div>
            </div>
            <div className="bg-[#231B19] h-[72px]"></div>
        </section>
    )
}