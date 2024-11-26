import { FarmToTable } from '~/containers/Crossfit/FarmToTable'
import { MasterMealTime } from '~/containers/Crossfit/MasterMealTime'
import { NewBanner } from '~/containers/Crossfit/NewBanner'

export const meta = () => {
  return [{ title: 'Crossfit - Just Meats' }]
}

export default function Crossfit() {
  return (
    <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19]">
      <NewBanner />
      <MasterMealTime />
      <FarmToTable />
    </main>
  )
}
