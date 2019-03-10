import { prisma } from 'prisma-client-package-starter';

async function getUsers() {
    console.log(await prisma.users())
}
getUsers();