import {
    userDelete,
    userGet,
    userPut,
    usersGet,
    usersPost,
    userRatingsGet
} from "../controllers/usersController.js";
import { validateBody } from "../middlewares/validationMiddleware.js";
import { usersSchema } from "../schemas/usersSchema.js";

import { Router } from "express";

export const usersRouter = Router();

usersRouter.delete("/users/:id", userDelete);
usersRouter.get("/users/:id", userGet);
usersRouter.get("/users/:id/ratings", userRatingsGet);
usersRouter.get("/users", usersGet);
usersRouter.post("/users", validateBody(usersSchema), usersPost);
usersRouter.put("/users/:id", validateBody(usersSchema), userPut);
