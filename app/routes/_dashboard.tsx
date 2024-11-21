import { LoaderFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

import { DashboardWrapper } from '~/components/wrappers/dashboard-wrapper'
import { authenticator } from '~/services/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: '/login',
  })

  return null
}

export default function DashboardLayout() {
  return (
    <DashboardWrapper>
      <Outlet />
    </DashboardWrapper>
  )
}
