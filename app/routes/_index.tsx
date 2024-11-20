import { LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import { authenticator } from '~/services/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)

  return Response.json(user)
}

export default function Index() {
  const user = useLoaderData<typeof loader>()

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <p className="mb-4">
        Hiya! 👋 This tool will be an overview Bodhi’s padel stuff...
      </p>

      {user ? (
        <Link to="/dashboard" className="underline">
          Go to your dashboard
        </Link>
      ) : (
        <Link to="/login" className="underline">
          Please login
        </Link>
      )}
    </div>
  )
}
