import prisma from "../database.js";
import { NewUser } from "../protocols.js";

export async function create(newUser: NewUser) {
    await prisma.users.create({ data: newUser });
}

export async function destroy(id: number) {
    await prisma.users.delete({ where: { id }});
}

export async function findAll() {
    return await prisma.users.findMany();
}

export async function findById(id: number) {
    return await prisma.users.findUnique({ where: { id }});
}

export async function findByUsername(username: string) {
    return await prisma.users.findUnique({ where: { username }});
}

export async function update(id: number, username: string) {
    await prisma.users.update({ where: { id }, data: { username } });
}
