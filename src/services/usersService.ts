import { conflictError } from "../errors/conflict-error.js";
import { invalidDataError } from "../errors/invalid-data-error.js";
import { notFoundError } from "../errors/not-found-error.js";
import { NewUser } from "../protocols.js";
import { ratingsRepository } from "../repositories/ratingsRepository.js";
import { usersRepository } from "../repositories/usersRepository.js";

export async function userDestroy(id: number) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const user = await usersRepository.findById(id);

    if (!user) {
        throw notFoundError();
    }

    usersRepository.destroy(id);
}

export async function usersCreate(newUser: NewUser) {
    const usernameExists = await usersRepository.findByUsername(newUser.username);

    if (usernameExists) {
        throw conflictError();
    }
    
    usersRepository.create(newUser);
}

export async function userFind(id: number) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const user = await usersRepository.findById(id);

    if (!user) {
        throw notFoundError();
    }

    return user;
}

export async function userRatingsFind(id: number) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const user = await usersRepository.findById(id);

    if (!user) {
        throw notFoundError();
    }

    const ratings = await ratingsRepository.findByUserId(id);

    return ratings;
}

export async function usersFind() {
    const users = await usersRepository.findAll();

    return users;
}

export async function userUpdate(id: number, username: string) {
    if (isNaN(id)) {
        throw invalidDataError();
    }

    const usernameExists = await usersRepository.findByUsername(username);

    if (usernameExists) {
        throw conflictError();
    }

    const user = await usersRepository.findById(id);

    if (!user) {
        throw notFoundError();
    }

    usersRepository.update(id, username);
}
