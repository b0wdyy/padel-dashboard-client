import { Link } from '@remix-run/react'

interface DashboardCardProps {
  href: string
  title: string
  amount: number
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function DashboardCard({
  href,
  title,
  amount,
  icon,
}: DashboardCardProps) {
  const Icon = icon

  return (
    <Link
      to={href}
      className="bg-stone-700 p-8 rounded-md relative overflow-hidden"
    >
      <h2 className="text-xs text-gray-200 mb-2 opacity-75">{title}</h2>
      <p className="text-8xl font-bold">{amount}</p>
      <Icon className="absolute -bottom-8 -right-8 w-72 fill-stone-600 -rotate-12" />
    </Link>
  )
}
