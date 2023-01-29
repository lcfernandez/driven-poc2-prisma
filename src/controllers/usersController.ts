import { usersCreate } from "../services/usersService.js";

import { Request, Response } from "express";
import { NewUser } from "../protocols.js";

export async function usersPost(req: Request, res: Response) {
    const newUser = req.body as NewUser;

    try {
        await usersCreate(newUser);

        res.sendStatus(201);
    } catch (err) {
        if (err.name === "ConflictError") {
            return res.status(409).send(err.message);
        }
        
        res.status(500).send(err.message);
    }
}
