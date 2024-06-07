import React from 'react'
import JustMeatsLogo from '~/assets/images/NewBannerlogoYourgym1.png'


export const NewBannerHead = () => {
    return (

        <section className="bg-[url('../assets/images/NewBannerYourgym1.png')] sm:[background-size:100%] [background-size:190%] bg-black bg-right-top	bg-no-repeat">
            <div className="bg-[url('../assets/images/blackgradient.png')] sm:bg-[url('../assets/images/blackgradient.png')] bg-no-repeat bg-transparent bg-bottom [background-size:100%_95%] ">
                <div className='w-[80%] mx-auto'>
                    <div className='flex flex-col md:flex-row pt-[150px] text-center sm:text-left'>
                        <div className='basis-2/2'>
                            <div className='flex flex-col md:flex-col md:items-left md:pb-0 pb-[30px]'>
                                <div className="w-full md:w-[100%] h-auto  lg:pt-[50px] md:pt-[50px] max-w-[70%] sm:max-w-[100%] m-auto mb-[30px]">
                                    <img className="" src={JustMeatsLogo} />
                                </div>
                                <div className="py-8">
                                    <div className="font-nunito font-bold sm:text-[27px] text-[20px] text-[#CCBDB1]">
                                        6 lbs of meat FOR FREE!
                                    </div>
                                    <div className="text-white sm:text-[36px] font-bold sm:leading-tight md:pb-[100px] text-[26px] [word-spacing:4px] sm:[word-spacing:0] leading-[42px]">
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
