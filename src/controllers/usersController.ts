import { userFind, usersCreate, usersFind } from "../services/usersService.js";
import { NewUser } from "../protocols.js";

import { Request, Response } from "express";

export async function userGet(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
        const user = await userFind(id);

        res.status(200).send(user);
    } catch (err) {
        if (err.name === "NotFoundError") {
            return res.status(404).send(err.message);
        } else if (err.name === "InvalidDataError") {
            return res.status(422).send(err.message);
        }

        res.status(500).send(err.message);
    }
}

export async function usersGet(req: Request, res: Response) {
    try {
        const users = await usersFind();

        res.status(200).send(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

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
