import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import { Category } from '@prisma/client'
import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useCallback } from 'react'

import { DashboardCard } from '~/components/ui/dashboard/dashboard-card'
import { ShoeIcon } from '~/components/ui/icons/shoe'
import { TennisBallIcon } from '~/components/ui/icons/tennis-ball'
import { TennisRacketIcon } from '~/components/ui/icons/tennis-racket'
import { prisma } from '~/utils/db.server'

export const loader: LoaderFunction = async () => {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  })

  return Response.json(categories)
}

export default function Dashboard() {
  const categories = useLoaderData<typeof loader>()

  const getCategory = useCallback(
    (category: string) => {
      return categories.find((c: Category) => c.name === category)
    },
    [categories],
  )

  const getAmount = useCallback(
    (category: string) => {
      return (
        categories.find((c: Category) => c.name === category)?.products
          .length ?? 0
      )
    },
    [categories],
  )

  const createQueryString = useCallback(
    (category: string) => {
      const params = new URLSearchParams()
      const categoryUuid = getCategory(category).uuid
      params.set('uuid', categoryUuid)

      return params.toString()
    },
    [getCategory],
  )

  return (
    <Box>
      <Heading size="2xl">Hiya! Check your stock</Heading>

      <Grid gap={8} templateColumns="repeat(3, 1fr)" mt={8}>
        <GridItem>
          <DashboardCard
            title="Rackets"
            href={`/products?${createQueryString('Rackets')}`}
            amount={getAmount('Rackets')}
            icon={TennisRacketIcon}
          />
        </GridItem>
        <GridItem>
          <DashboardCard
            title="Shoes"
            href={`/products?${createQueryString('Shoes')}`}
            amount={getAmount('Shoes')}
            icon={ShoeIcon}
          />
        </GridItem>
        <GridItem>
          <DashboardCard
            title="Balls"
            href={`/products?${createQueryString('Balls')}`}
            amount={getAmount('Balls')}
            icon={TennisBallIcon}
          />
        </GridItem>
      </Grid>
    </Box>
  )
}
