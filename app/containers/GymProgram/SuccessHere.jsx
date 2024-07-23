import videoThumbnail from '~/assets/images/first-contact-video-thumbnail.png'
import videoPlayButton from '~/assets/images/video-play-button.png'

import { ContactForm } from './ContactForm'

export const SuccessHere = () => {
  return (
    <section className="relative bg-[#EFEEED]  sm:pb-[80px] pb-[60px]">
      <div className="relative container-small">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[55px] gap-[52px] items-end">
          <div className="relative flex aspect-square ">
            <iframe
              src="https://player.vimeo.com/video/937966988?h=83f08bf634&amp;badge=0"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="contact video 1"
            />
          </div>
          <div className="flex flex-col justify-between aspect-square">
            <div className="mb-[24px]">
              <div className="xl:text-[14px] text-[12px] text-[#E47A0F] font-normal text-center sm:mb-[6px] tracking-[3px]">
                CLAIM YOUR
              </div>
              <div className="xl:text-[36px] text-[24px] font-bold text-center">
                6 LBS OF FREE MEAT
              </div>
            </div>
            <ContactForm formName="first" />
          </div>
        </div>
      </div>
    </section>
  )
}
