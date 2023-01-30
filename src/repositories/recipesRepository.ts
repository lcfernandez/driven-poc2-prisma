import prisma from "../database.js";
import { NewRecipe } from "../protocols.js";

async function create(newRecipe: NewRecipe) {
    await prisma.recipes.create({ data: newRecipe });
}

async function destroy(id: number) {
    await prisma.recipes.delete({ where: { id }});
}

async function findAll() {
    return await prisma.recipes.findMany();
}

async function findById(id: number) {
    return await prisma.recipes.findUnique({ where: { id }});
}

async function findByUserName(name: string, user_id: number) {
    return await prisma.recipes.findFirst({ where: { name: { equals: name, mode: "insensitive" }, user_id }});
}

async function update(id: number, recipe: NewRecipe) {
    await prisma.recipes.update({ where: { id }, data: recipe });
}

export const recipesRepository = { create, destroy, findAll, findById, findByUserName, update };
