import { Router } from "express";
import { usersRouter } from "./usersRouter.js";

export const router = Router();

router.use(usersRouter)
