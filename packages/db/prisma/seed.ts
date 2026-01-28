import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { mobNo: '1111111111' },
        update: {},
        create: {
            mobNo: '1111111111',
            password: await bcrypt.hash('alice', 10),
            name: 'alice',
            Balance: {
                create: {
                    amount: 20000,
                    locked: 0
                }
            },
            onRampTransaction: {
                create: {
                    createdAt: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "token__1",
                    provider: "HDFC Bank",
                },
            },
        },
    })
    const bob = await prisma.user.upsert({
        where: { mobNo: '2222222222' },
        update: {},
        create: {
            mobNo: '2222222222',
            password: await bcrypt.hash('bob', 10),
            name: 'bob',
            Balance: {
                create: {
                    amount: 20000,
                    locked: 0
                }
            },
            onRampTransaction: {
                create: {
                    createdAt: new Date(),
                    status: "Failure",
                    amount: 20000,
                    token: "token__2",
                    provider: "HDFC Bank",
                },
            },
        },
    })
    console.log({ alice, bob })
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