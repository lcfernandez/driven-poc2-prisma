import { recipeDelete, recipeGet, recipePut,  recipesGet, recipesPost } from "../controllers/recipesController.js";
import { validateBody } from "../middlewares/validationMiddleware.js";
import { recipesSchema } from "../schemas/recipesSchema.js";

import { Router } from "express";

export const recipesRouter = Router();

recipesRouter.delete("/recipes/:id", recipeDelete);
recipesRouter.get("/recipes/:id", recipeGet);
recipesRouter.get("/recipes", recipesGet);
recipesRouter.post("/recipes", validateBody(recipesSchema), recipesPost);
recipesRouter.put("/recipes/:id", validateBody(recipesSchema), recipePut);
