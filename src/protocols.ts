import { ratings, recipes, users } from "../node_modules/.prisma/client/index.js";

export type ApplicationError = {
    name: string;
    message: string;
};

export type NewRating = Omit<ratings, "id" | "recipe_id" | "created_at" >;

export type NewRecipe = Omit<recipes, "id" | "created_at" >;

export type NewUser = Omit<users, "id" | "created_at" >;
