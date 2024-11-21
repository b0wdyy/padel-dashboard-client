import { Center, Heading, Text } from '@chakra-ui/react'
import { withEmotionCache } from '@emotion/react'
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react'
import { ThemeProvider } from 'next-themes'

import { useInjectStyles } from '~/emotion/emotion-client'
import { ChakraProvider } from '~/providers/chakra-provider'

export const meta: MetaFunction = () => {
  return [
    { title: "Bodhi's Padel Stuff" },
    {
      name: 'description',
      content:
        'This will be sort of an inventory of my padel stuff. Since I have lots of it...',
    },
  ]
}

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap',
  },
]

type LayoutProps = React.PropsWithChildren

export const Layout = withEmotionCache((props: LayoutProps, cache) => {
  const { children } = props

  useInjectStyles(cache)

  return (
    <html lang="en">
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <meta
          name="emotion-insertion-point"
          content="emotion-insertion-point"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
})

export default function App() {
  return (
    <ChakraProvider>
      <ThemeProvider disableTransitionOnChange attribute="class">
        <Outlet />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    )
  }

  return (
    <Center w="100vw" h="100vh" display="flex" flexDir="column">
      <Heading size="6xl">Whoops!</Heading>
      <Text>{error?.message ?? 'Unknown error'}</Text>
    </Center>
  )
}
