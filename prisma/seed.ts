import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const pendingStatus = await prisma.friendshipStatus.create({
        data: {
            status: 'PENDING'
        }
    })

    const declinedStatus = await prisma.friendshipStatus.create({
        data: {
            status: 'DECLINED'
        }
    })

    const acceptedStatus = await prisma.friendshipStatus.create({
        data: {
            status: 'ACCEPTED'
        }
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