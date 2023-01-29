import { conflictError } from "../errors/conflict-error.js";
import { NewUser } from "../protocols.js";
import { create, findByUsername } from "../repositories/usersRepository.js";

export async function usersCreate(newUser: NewUser) {
    const usernameExists = await findByUsername(newUser.username);

    if (usernameExists) {
        throw conflictError();
    }
    
    create(newUser);
}
