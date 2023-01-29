import Joi from "joi";

export const usersSchema = Joi.object(
    {
        username: Joi.string().trim().min(1).required()
    }
);
