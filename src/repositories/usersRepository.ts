import prisma from "../database.js";
import { NewUser } from "../protocols.js";

async function create(newUser: NewUser) {
    await prisma.users.create({ data: newUser });
}

async function destroy(id: number) {
    await prisma.users.delete({ where: { id }});
}

async function findAll() {
    return await prisma.users.findMany();
}

async function findById(id: number) {
    return await prisma.users.findUnique({ where: { id }});
}

async function findByUsername(username: string) {
    return await prisma.users.findFirst({ where: { username: { equals: username, mode: "insensitive" } }});
}

async function update(id: number, username: string) {
    await prisma.users.update({ where: { id }, data: { username } });
}

export const usersRepository = { create, destroy, findAll, findById, findByUsername, update };
