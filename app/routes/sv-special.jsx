import { Banner } from '~/containers/SvSpecial/Banner'
import { Footer } from '~/containers/SvSpecial/Footer'
import { SageValleyContent } from '~/containers/SvSpecial/SageValleyContent'
import { SelectProductQty } from '~/containers/SvSpecial/SelectProductQty'
import { TestQuality } from '~/containers/SvSpecial/TestQuality'
import { sendPageView } from '~/lib/metaPixel.server'

export const meta = () => {
  return [{ title: 'Sage Valley - Just Meats' }]
}

export async function loader({ request, context }) {
  sendPageView(request)

  return null
}

export default function SageValley() {
  return (
    <>
      <main className="relative font-barlow tracking-[1px] leading-1 text-[#231B19]">
        <Banner />
        <SageValleyContent />
        <TestQuality />
        <SelectProductQty />
      </main>
      <Footer />
    </>
  )
}
