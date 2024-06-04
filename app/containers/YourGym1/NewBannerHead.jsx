import React from 'react'
import BannerCharacter from '~/assets/images/Copy-of-JustMeats_Partnerships_Stills_RichFroning_202MAR25_SethH-7.png'
import GymLaunch from '~/assets/images/NewBannerYourgym.png'
import JustMeatsLogo from '~/assets/images/NewBannerlogoYourgym.png'


export const NewBannerHead = () => {
    return (
        <section className="bg-[url('../assets/images/NewBannerYourgym.png')] sm:[background-size:80%] [background-size:130%] bg-black bg-right-top	bg-no-repeat">
            <div className="bg-[url('../assets/images/whiteshadowyourgym-mobile.png')] sm:bg-[url('../assets/images/whiteshadowyourgym.png')] bg-no-repeat bg-transparent bg-left [background-size:100%] sm:[background-size:60%_100%]">
                <div className='w-[80%] mx-auto'>
                    <div className='flex flex-col md:flex-row pt-[150px] text-center sm:[text-left]'>
                        <div className='basis-2/2'>
                            <div className='flex flex-col md:flex-col md:items-left md:pb-0 pb-[30px]'>
                                <div className="w-full md:w-[100%] h-auto  lg:pt-[50px] md:pt-[50px] max-w-[70%] sm:max-w-[100%] m-auto mb-[30px]">
                                    <img className="" src={JustMeatsLogo} />
                                </div>
                                <div className="py-8">
                                    <div className="font-nunito font-bold sm:text-[27px] text-[20px] text-[#7A392D]">
                                        6 lbs of meat FOR FREE!
                                    </div>
                                    <div className="sm:text-[36px] font-bold sm:leading-tight md:pb-[100px] text-[26px] [word-spacing:4px] sm:[word-spacing:0] leading-[42px]">
                                        JUST MEATS GYM PARTNER <br />
                                        EXCLUSIVE DEAL!
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
