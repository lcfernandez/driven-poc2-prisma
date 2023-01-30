import { recipesRouter } from "./recipesRouter.js";
import { usersRouter } from "./usersRouter.js";
import { Router } from "express";

export const router = Router();

router.use(recipesRouter)
router.use(usersRouter)
