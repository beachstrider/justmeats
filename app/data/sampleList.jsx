import freePreviewImage1 from '~/assets/images/free-sample-1.jpg'
import freePreviewImage2 from '~/assets/images/free-sample-2.jpg'
import previewImage1 from '~/assets/images/sample-preview-1.jpg'
import previewImage2 from '~/assets/images/sample-preview-2.jpg'
import previewImage3 from '~/assets/images/sample-preview-3.jpg'

export const sampleList = {
  'bbq-sampler-1': {
    headline: 'FOUR 3LB TRAYS JUST $195',
    itemList: (
      <div className="flex justify-between max-w-[612px] w-full pl-[20px] lg:pr-0 pr-[20px]">
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>GARLIC BUTTER</div>
          <div>BISON BURGERS</div>
        </div>
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>SMOKED</div>
          <div>SIRLOIN BURGERS</div>
        </div>
        <div className="flex gap-[6px] items-center">
          <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
            <div>NAKED SMOKED</div>
            <div>CHICKEN WINGS</div>
          </div>
          <div className="font-espiritu lg:text-[24px] leading-[36px] text-[#BF4745]">
            x2
          </div>
        </div>
      </div>
    ),
    cost: '100',
    serves: '40',
    per_serving: '4.88',
    preview_image: previewImage1,
  },
  'bbq-sampler-2': {
    headline: 'four 3lb trays just $176',
    itemList: (
      <div className="flex justify-between max-w-[612px] w-full pl-[20px] lg:pr-0 pr-[20px]">
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>SMOKED</div>
          <div>TURKEY BREAST</div>
        </div>
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>SMOKED</div>
          <div>SIRLOIN BURGERS</div>
        </div>
        <div className="flex gap-[6px] items-center">
          <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
            <div>NAKED SMOKED</div>
            <div>CHICKEN WINGS</div>
          </div>
          <div className="font-espiritu lg:text-[24px] leading-[36px] text-[#BF4745]">
            x2
          </div>
        </div>
      </div>
    ),
    cost: '80',
    serves: '40',
    per_serving: '4.40',
    preview_image: previewImage2,
  },
  'bbq-sampler-3': {
    headline: 'three 3lb trays just $146',
    itemList: (
      <div className="flex justify-around max-w-[612px] w-full pl-[20px] lg:pr-0 pr-[20px]">
        <div className="flex gap-[6px] items-center">
          <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
            <div>SMOKED</div>
            <div>SIRLOIN BURGERS</div>
          </div>
          <div className="font-espiritu lg:text-[24px] leading-[36px] text-[#BF4745]">
            x2
          </div>
        </div>
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>NAKED SMOKED</div>
          <div>CHICKEN WINGS</div>
        </div>
      </div>
    ),
    cost: '50',
    serves: '30',
    per_serving: '4.87',
    preview_image: previewImage3,
  },
}

export const freeSamples = [
  {
    headline: 'THREE 3LB TRAYS JUST $129',
    itemList: (
      <div className="flex justify-around max-w-[612px] w-full pl-[20px] lg:pr-0 pr-[20px]">
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>SMOKED</div>
          <div>SIRLOIN BURGERS</div>
        </div>
        <div className="flex gap-[6px] items-center">
          <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
            <div>NAKED SMOKED</div>
            <div>CHICKEN WINGS</div>
          </div>
          <div className="font-espiritu lg:text-[24px] leading-[36px] text-[#BF4745]">
            x2
          </div>
        </div>
      </div>
    ),
    cost: 'FREE',
    costDescription: '3LB TRAY OF SMOKED TURKEY BREAST ($47 VALUE)',
    serves: '40',
    per_serving: '4.87',
    preview_image: freePreviewImage1,
  },
  {
    headline: 'THREE 3LB TRAYS JUST $129',
    itemList: (
      <div className="flex justify-around max-w-[612px] w-full pl-[20px] lg:pr-0 pr-[20px]">
        <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
          <div>GARLIC BUTTER</div>
          <div>BISON BURGERS</div>
        </div>
        <div className="flex gap-[6px] items-center">
          <div className="font-espiritu-condensed lg:text-[24px] lg:leading-[26px] lg:tracking-[0.48px] text-[18px] leading-[21px] tracking-[0.36px] text-center">
            <div>NAKED SMOKED</div>
            <div>CHICKEN WINGS</div>
          </div>
          <div className="font-espiritu lg:text-[24px] leading-[36px] text-[#BF4745]">
            x2
          </div>
        </div>
      </div>
    ),
    cost: 'FREE',
    costDescription: '3LB TRAY OF SMOKED TURKEY BREAST ($47 VALUE)',
    serves: '40',
    per_serving: '4.87',
    preview_image: freePreviewImage2,
  },
]
