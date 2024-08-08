import { Banner } from '~/containers/Gym/Banner'
import { Comparigen } from '~/containers/Gym/Comparigen'
import { FarmToTable } from '~/containers/Gym/FarmToTable'
import { HowItWork } from '~/containers/Gym/HowItWork'
import { HowItWorks } from '~/containers/Gym/HowItWorks'
import { MarqueeImage } from '~/containers/Gym/MarqueeImage'
import { RampUp } from '~/containers/Gym/RampUp'
import { Rewards } from '~/containers/Gym/Rewards'
import { SuccessHere } from '~/containers/Gym/SuccessHere'

export const meta = () => {
  return [{ title: 'Gym Program - Just Meats' }]
}
export default function GymProgram() {
  return (
    <main className="relative font-barlow tracking-[1px] leading-1 text-[#231B19] your-gym">
      <Banner />
      <SuccessHere />
      <HowItWork />
      <Comparigen />
      <Rewards />
      <MarqueeImage />
      <FarmToTable />
      <HowItWorks />
      <RampUp />
    </main>
  )
}
