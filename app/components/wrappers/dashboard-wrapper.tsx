import FeatherIcon from 'feather-icons-react'
import { PropsWithChildren } from 'react'

import NavLink from '../ui/common/nav-link'

export function DashboardWrapper({ children }: PropsWithChildren) {
  return (
    <main className="flex gap-8 p-8 w-screen h-screen dark:bg-stone-800">
      <nav className="flex flex-col gap-12 mt-8 w-56">
        <NavLink href="/dashboard" icon={<FeatherIcon icon="home" />}>
          Dashboard
        </NavLink>
        <NavLink href="/products" icon={<FeatherIcon icon="hard-drive" />}>
          Products
        </NavLink>
        <NavLink href="/add-product" icon={<FeatherIcon icon="plus" />}>
          Add new product
        </NavLink>
      </nav>

      <div className="dark:bg-stone-900 rounded-md p-8 w-full">{children}</div>
    </main>
  )
}
