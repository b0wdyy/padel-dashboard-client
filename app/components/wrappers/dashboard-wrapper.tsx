import { Box, Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { LuHome, LuPlus, LuTable } from 'react-icons/lu'

import NavLink from '../ui/common/nav-link'

export function DashboardWrapper({ children }: PropsWithChildren) {
  return (
    <Flex gap={8} p={8} w="100vw" h="100vh" bg="gray.800" as="main">
      <Flex as="nav" flexDir="column" w={56} gap={12} mt={8}>
        <NavLink href="/dashboard" icon={LuHome}>
          Dashboard
        </NavLink>
        <NavLink href="/products" icon={LuTable}>
          Products
        </NavLink>
        <NavLink href="/add-product" icon={LuPlus}>
          Add new product
        </NavLink>
      </Flex>

      <Box rounded={8} p={8} w="full" bg="gray.900">
        {children}
      </Box>
    </Flex>
  )
}
