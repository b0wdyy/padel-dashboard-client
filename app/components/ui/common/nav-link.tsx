import { Link } from '@remix-run/react'
import React from 'react'

interface NavLinkProps {
  href: string
  icon: React.ReactElement
  children: React.ReactNode
}

export default function NavLink({ href, icon, children }: NavLinkProps) {
  return (
    <div className="flex items-center gap-8">
      {icon}
      <Link to={href}>{children}</Link>
    </div>
  )
}
