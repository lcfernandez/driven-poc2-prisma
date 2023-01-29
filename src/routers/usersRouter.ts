import { userGet, usersGet, usersPost } from "../controllers/usersController.js";
import { validateBody } from "../middlewares/validationMiddleware.js";
import { usersSchema } from "../schemas/usersSchema.js";

import { Router } from "express";

export const usersRouter = Router();

usersRouter.get("/users/:id", userGet);
usersRouter.get("/users", usersGet);
usersRouter.post("/users", validateBody(usersSchema), usersPost);
