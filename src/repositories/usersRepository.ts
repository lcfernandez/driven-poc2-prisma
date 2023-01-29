import prisma from "../database.js";
import { NewUser } from "../protocols.js";

export async function findAll() {
    return await prisma.users.findMany();
}

export async function findByUsername(username: string) {
    return await prisma.users.findUnique({ where: { username }});
}

export async function findById(id: number) {
    return await prisma.users.findUnique({ where: { id }});
}

export async function create(newUser: NewUser) {
    await prisma.users.create({
        data: newUser
    })
}
