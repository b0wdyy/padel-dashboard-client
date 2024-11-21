import { Center } from '@chakra-ui/react'
import type { ActionFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'

import { Button } from '~/components/ui/button'
import { authenticator } from '~/services/auth.server'

export const action: ActionFunction = ({ request }) => {
  return authenticator.authenticate('auth0', request)
}

export default function Login() {
  return (
    <Center w="100vw" h="100vh">
      <Form action="/login" method="post">
        <Button>Login with Auth0</Button>
      </Form>
    </Center>
  )
}
