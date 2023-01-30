import { recipeDestroy, recipeFind, recipesCreate, recipesFind , recipeUpdate } from "../services/recipesService.js";
import { NewRecipe } from "../protocols.js";

import { Request, Response } from "express";

export async function recipeDelete(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
        await recipeDestroy(id);

        res.sendStatus(200);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(404).send(err.message);
        } else if (err.name === "InvalidDataError") {
            return res.status(422).send(err.message);
        }

        res.status(500).send(err.message);
    }
}

export async function recipeGet(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
        const recipe = await recipeFind(id);

        res.status(200).send(recipe);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(404).send(err.message);
        } else if (err.name === "InvalidDataError") {
            return res.status(422).send(err.message);
        }

        res.status(500).send(err.message);
    }
}

export async function recipesGet(req: Request, res: Response) {
    try {
        const recipes = await recipesFind();

        res.status(200).send(recipes);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function recipesPost(req: Request, res: Response) {
    const newRecipe = req.body as NewRecipe;

    try {
        await recipesCreate(newRecipe);

        res.sendStatus(201);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(404).send(err.message);
        } else if (err.name === "ConflictError") {
            return res.status(409).send(err.message);
        }
        
        res.status(500).send(err.message);
    }
}

export async function recipePut(req: Request, res: Response) {
    const id = Number(req.params.id);
    const recipe = req.body as NewRecipe;

    try {
        await recipeUpdate(id, recipe);

        res.sendStatus(200);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(404).send(err.message);
        } else if (err.name === "InvalidDataError") {
            return res.status(422).send(err.message);
        } else if (err.name === "ConflictError" || err.name === "OwnerError") {
            return res.status(409).send(err.message);
        }

        res.status(500).send(err.message);
    }
}
