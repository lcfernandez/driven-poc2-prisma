import { users } from "../node_modules/.prisma/client/index.js";

export type ApplicationError = {
    name: string;
    message: string;
};

export type RequestError = {
    status: number,
    data: object | null,
    statusText: string,
    name: string,
    message: string,
};

export type NewUser = Omit<users, "id" | "created_at" | "updated_at">;
