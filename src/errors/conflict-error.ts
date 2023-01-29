import { ApplicationError } from "../protocols.js";

export function conflictError(): ApplicationError {
  return {
    name: "ConflictError",
    message: "Unique constraint failed",
  };
}
