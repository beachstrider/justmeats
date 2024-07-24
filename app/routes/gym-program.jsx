import { Banner } from '~/containers/GymProgram/Banner'
import { Comparigen } from '~/containers/GymProgram/Comparigen'
import { FarmToTable } from '~/containers/GymProgram/FarmToTable'
import { HowItWork } from '~/containers/GymProgram/HowItWork'
import { HowItWorks } from '~/containers/GymProgram/HowItWorks'
import { MarqueeImage } from '~/containers/GymProgram/MarqueeImage'
import { RampUp } from '~/containers/GymProgram/RampUp'
import { Rewards } from '~/containers/GymProgram/Rewards'
import { SuccessHere } from '~/containers/GymProgram/SuccessHere'

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
