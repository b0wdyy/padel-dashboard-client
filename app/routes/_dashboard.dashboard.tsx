import { DashboardCard } from '~/components/ui/dashboard/dashboard-card'
import { ShoeIcon } from '~/components/ui/icons/shoe'
import { TennisBallIcon } from '~/components/ui/icons/tennis-ball'
import { TennisRacketIcon } from '~/components/ui/icons/tennis-racket'

export default function Dashboard() {
  return (
    <div>
      <h1>Hiya! Check your stock</h1>

      <div className="mt-8 grid grid-cols-3 gap-8">
        <DashboardCard title="Rackets" amount={12} icon={TennisRacketIcon} />
        <DashboardCard title="Shoes" amount={20} icon={ShoeIcon} />
        <DashboardCard title="Balls" amount={24} icon={TennisBallIcon} />
      </div>
    </div>
  )
}
