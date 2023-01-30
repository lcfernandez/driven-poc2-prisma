import {
    recipeDelete,
    recipeGet,
    recipePut,
    recipeRatingsGet,
    recipeRatingPost,
    recipesGet,
    recipesPost
} from "../controllers/recipesController.js";
import { validateBody } from "../middlewares/validationMiddleware.js";
import { ratingsSchema } from "../schemas/ratingsSchema.js";
import { recipesSchema } from "../schemas/recipesSchema.js";

import { Router } from "express";

export const recipesRouter = Router();

recipesRouter.delete("/recipes/:id", recipeDelete);
recipesRouter.get("/recipes/:id", recipeGet);
recipesRouter.get("/recipes/:id/ratings", recipeRatingsGet);
recipesRouter.get("/recipes", recipesGet);
recipesRouter.post("/recipes", validateBody(recipesSchema), recipesPost);
recipesRouter.post("/recipes/:id/ratings", validateBody(ratingsSchema), recipeRatingPost);
recipesRouter.put("/recipes/:id", validateBody(recipesSchema), recipePut);
