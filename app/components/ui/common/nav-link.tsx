import { Flex } from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import React from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function NavLink({ icon, href, children }: NavLinkProps) {
  const Icon = icon

  return (
    <Flex gap={8} alignItems="center">
      <Icon />
      <Link to={href}>{children}</Link>
    </Flex>
  )
}
