import { NewBanner } from '~/containers/CfGamingFroning/NewBanner'
import { MasterMealTime } from '~/containers/CfGamingFroning/MasterMealTime'
import { FarmToTable } from '~/containers/CfGamingFroning/FarmToTable'

export const meta = () => {
  return [{ title: 'Buttery Bros - Just Meats' }]
}

export default function CfGamingFroning() {

  return (
    <main className="relative font-dunbar tracking-[1px] leading-1 text-[#231B19]">
        <NewBanner />
        <MasterMealTime />
        <FarmToTable />
    </main>
  )
}
