import { ApplicationError } from "../protocols.js";

export function ownerError(): ApplicationError {
  return {
    name: "OwnerError",
    message: "Recipe's ownership isn't changeable",
  };
}
