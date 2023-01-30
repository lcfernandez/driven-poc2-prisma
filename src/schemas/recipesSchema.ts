import Joi from "joi";

export const recipesSchema = Joi.object(
    {
        name: Joi.string().trim().min(1).required(),
        user_id: Joi.number().integer().strict().min(1).required(),
        ingredients: Joi.string().trim().min(1).required(),
        directions: Joi.string().trim().min(1).required()
    }
);
