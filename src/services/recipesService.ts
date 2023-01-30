import { conflictError } from "../errors/conflict-error.js";
import { invalidDataError } from "../errors/invalid-data-error.js";
import { notFoundError } from "../errors/not-found-error.js";
import { ownerError } from "../errors/owner-error.js";
import { NewRecipe } from "../protocols.js";
import { recipesRepository } from "../repositories/recipesRepository.js";
import { usersRepository } from "../repositories/usersRepository.js";

export async function recipeDestroy(id: number) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const recipe = await recipesRepository.findById(id);

    if (!recipe) {
        throw notFoundError();
    }

    recipesRepository.destroy(id);
}

export async function recipesCreate(newRecipe: NewRecipe) {
    const recipeUserExists = await recipesRepository.findByUserName(newRecipe.name, newRecipe.user_id);

    if (recipeUserExists) {
        throw conflictError();
    }

    const user = await usersRepository.findById(newRecipe.user_id);

    if (!user) {
        throw notFoundError();
    }
    
    recipesRepository.create(newRecipe);
}

export async function recipeFind(id: number) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const recipe = await recipesRepository.findById(id);

    if (!recipe) {
        throw notFoundError();
    }

    return recipe;
}

export async function recipesFind() {
    const recipes = await recipesRepository.findAll();

    return recipes;
}

export async function recipeUpdate(id: number, recipeUpdate: NewRecipe) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const recipe = await recipesRepository.findById(id);

    if (!recipe) {
        throw notFoundError();
    }

    if (recipe.user_id !== recipeUpdate.user_id) {
        throw ownerError();
    }

    const recipeUserExists = await recipesRepository.findByUserName(recipeUpdate.name, recipeUpdate.user_id);

    if (recipeUserExists && (recipeUserExists.id !== id)) {
        throw conflictError();
    }

    recipesRepository.update(id, recipeUpdate);
}
