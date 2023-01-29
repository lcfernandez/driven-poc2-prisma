import { ApplicationError } from "../protocols.js";

export function invalidDataError(): ApplicationError {
  return {
    name: "InvalidDataError",
    message: "Invalid data"
  };
}
