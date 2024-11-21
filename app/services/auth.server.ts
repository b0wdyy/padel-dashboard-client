import { Authenticator } from 'remix-auth'
import { Auth0Strategy } from 'remix-auth-auth0'

import { sessionStorage } from './session.server'

export const authenticator = new Authenticator(sessionStorage)

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: process.env.AUTH0_CALLBACK_URL as string,
    clientID: process.env.AUTH0_CLIENT_ID as string,
    clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
    domain: process.env.AUTH0_DOMAIN as string,
    audience: process.env.AUTH0_AUDIENCE as string,
  },
  async ({ accessToken, profile }) => {
    return { accessToken, profile }
  },
)

authenticator.use(auth0Strategy)
