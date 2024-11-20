import { Outlet } from '@remix-run/react'

import { DashboardWrapper } from '~/components/wrappers/dashboard-wrapper'

export default function DashboardLayout() {
  return (
    <DashboardWrapper>
      <Outlet />
    </DashboardWrapper>
  )
}
