import { conflictError } from "../errors/conflict-error.js";
import { invalidDataError } from "../errors/invalid-data-error.js";
import { notFoundError } from "../errors/not-found-error.js";
import { NewUser } from "../protocols.js";
import { create, destroy, findAll, findById, findByUsername, update } from "../repositories/usersRepository.js";

export async function userDestroy(id: number) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const user = await findById(id);

    if (!user) {
        throw notFoundError();
    }

    destroy(id);
}

export async function usersCreate(newUser: NewUser) {
    const usernameExists = await findByUsername(newUser.username);

    if (usernameExists) {
        throw conflictError();
    }
    
    create(newUser);
}

export async function userFind(id: number) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const user = await findById(id);

    if (!user) {
        throw notFoundError();
    }

    return user;
}

export async function usersFind() {
    const users = await findAll();

    return users;
}

export async function userUpdate(id: number, username: string) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const usernameExists = await findByUsername(username);

    if (usernameExists) {
        throw conflictError();
    }

    const user = await findById(id);

    if (!user) {
        throw notFoundError();
    }

    update(id, username);
}
