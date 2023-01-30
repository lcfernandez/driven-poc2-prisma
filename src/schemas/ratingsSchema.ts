import Joi from "joi";

export const ratingsSchema = Joi.object(
    {
        user_id: Joi.number().integer().strict().min(1).required(),
        rating: Joi.number().integer().strict().min(1).max(10).required(),
        comment: Joi.string().trim().min(1)
    }
);
