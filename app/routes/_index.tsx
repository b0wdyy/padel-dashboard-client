import { Center, Text } from '@chakra-ui/react'
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
    <Center w="100vw" h="100vh" display="flex" flexDir="column">
      <Text mb={4}>
        Hiya! 👋 This tool will be an overview Bodhi’s padel stuff...
      </Text>

      {user ? (
        <Link to="/dashboard" className="underline">
          Go to your dashboard
        </Link>
      ) : (
        <Link to="/login" className="underline">
          Please login
        </Link>
      )}
    </Center>
  )
}
