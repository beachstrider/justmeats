import { Banner } from '~/containers/GymProgram/Banner'
import { SuccessHere } from '~/containers/GymProgram/SuccessHere'
import { FarmToTable } from '~/containers/GymProgram/FarmToTable'
import { HowItWorks } from '~/containers/GymProgram/HowItWorks'
import { RampUp } from '~/containers/GymProgram/RampUp'
export const meta = () => {
    return [{ title: 'Gym Program - Just Meats' }]
  }
export default function GymProgram() {
    return (
      <main className="relative font-barlow tracking-[1px] leading-1 text-[#231B19] your-gym">
        <Banner />
        <FarmToTable />
        <HowItWorks />
        <RampUp />
      </main>
    )
}