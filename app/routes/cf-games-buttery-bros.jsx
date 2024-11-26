import { FarmToTable } from '~/containers/ButteryBros/FarmToTable'
import { MasterMealTime } from '~/containers/ButteryBros/MasterMealTime'
import { NewBanner } from '~/containers/ButteryBros/NewBanner'

export const meta = () => {
  return [{ title: 'Buttery Bros - Just Meats' }]
}

export default function ButteryBros() {
  return (
    <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19]">
      <NewBanner />
      <MasterMealTime />
      <FarmToTable />
    </main>
  )
}
