import prisma from "../database.js";
import { NewRating } from "../protocols.js";

async function create(id: number, newRating: NewRating) {
    await prisma.ratings.create({ data: {...newRating, recipe_id: id} });
}

async function findByRecipeId(id: number) {
    return await prisma.ratings.findMany({ where: { recipe_id: id } });
}

async function findByUserId(id: number) {
    return await prisma.ratings.findMany({ where: { user_id: id } });
}

async function findByUserRecipe(user_id: number, recipe_id: number) {
    return await prisma.ratings.findFirst({ where: { user_id, recipe_id }});
}

export const ratingsRepository = { create, findByRecipeId, findByUserId, findByUserRecipe };
