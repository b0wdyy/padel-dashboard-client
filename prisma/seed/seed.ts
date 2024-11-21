import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const categoryBalls = await prisma.category.create({
    data: {
      name: 'Balls',
    },
  })
  const categoryShoes = await prisma.category.create({
    data: {
      name: 'Shoes',
    },
  })
  const categoryRackets = await prisma.category.create({
    data: {
      name: 'Rackets',
    },
  })

  await prisma.product.createMany({
    data: Array.from({ length: 24 }).map(() => ({
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      categoryUuid: faker.helpers.arrayElement([
        categoryBalls.uuid,
        categoryShoes.uuid,
        categoryRackets.uuid,
      ]),
      quantity: faker.number.int(100),
    })),
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
