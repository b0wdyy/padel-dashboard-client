import type { ActionFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'

import { authenticator } from '~/services/auth.server'

export const action: ActionFunction = ({ request }) => {
  return authenticator.authenticate('auth0', request)
}

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Form action="/login" method="post">
        <button>Login with Auth0</button>
      </Form>
    </div>
  )
}
