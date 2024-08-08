import videoThumbnail from '~/assets/images/first-contact-video-thumbnail.png'
import videoPlayButton from '~/assets/images/video-play-button.png'

import { ContactForm } from './ContactForm'

export const RampUp = () => {
  return (
    <section>
      <div className="relative bg-[#EFEEED] sm:py-[80px] py-[60px] bg-pattern2">
        <div className="relative container-small">
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[55px] gap-[2px] items-center">
            <div className="flex flex-col justify-between aspect-square bg-[#F8F2E8] md:mx-0 mx-[-20px] sm:mb-0 mb-[50px]">
              <div className="mt-[30px] xl:px-[50px] px-[33px]">
                <div className="font-hudson text-[24px] font-[620] text-center tracking-[1.2px] leading-[29px] uppercase">
                  ramp up your results
                </div>
                <div className="text-[16px] text-[#BF4745] font-bold text-center sm:mb-[6px] tracking-[0.8px] leading-normal uppercase">
                  sign up today
                </div>
              </div>
              <ContactForm formName="second" />
            </div>

            <div className="relative aspect-video border-[3px] border-solid border-white overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
                <iframe
                  src="https://player.vimeo.com/video/937966988?h=83f08bf634&cc_load_policy=0"
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="contact video 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('../assets/images/recipe-bottom-img.png')] bg-repeat px-[13px] py-[13px] mb-[5%]"></div>
    </section>
  )
}
