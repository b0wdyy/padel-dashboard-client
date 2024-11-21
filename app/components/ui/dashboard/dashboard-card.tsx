import { Box, Heading, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import React from 'react'

interface DashboardCardProps {
  href: string
  title: string
  amount: number
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function DashboardCard({
  href,
  title,
  amount,
  icon,
}: DashboardCardProps) {
  const Icon = icon

  return (
    <ChakraLink
      asChild
      _hover={{ textDecoration: 'none' }}
      bg="gray.700"
      p={8}
      rounded="md"
      overflow="hidden"
      pos="relative"
      display="flex"
    >
      <Link to={href}>
        <Box pos="relative" zIndex={2}>
          <Heading size="sm" color="gray.200" mb={2}>
            {title}
          </Heading>
          <Text textStyle="7xl" fontWeight="extrabold">
            {amount}
          </Text>
        </Box>

        <Box
          pos="absolute"
          bottom="-8"
          right="-8"
          w={64}
          fill="gray.600"
          rotate="-12"
        >
          <Icon />
        </Box>
      </Link>
    </ChakraLink>
  )
}
