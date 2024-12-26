import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ServiceResponse } from "../types/serviceResponse";

export const handleServiceResponse = (
  serviceResponse: ServiceResponse<any>,
  response: Response
): void => {
  try {
    response.status(serviceResponse.statusCode).send(serviceResponse);
  } catch (error) {
    console.error("Error sending response:", error);
    response.status(500).send({ message: "Internal Server Error" });
  }
};

export const validateRequest =
  (validator: (req: Request) => void) => (req: Request, res: Response, next: NextFunction) => {
    try {
      validator(req); // Custom validation logic
      next();
    } catch (err) {
      const errorMessage = `Invalid input: ${(err as Error).message}`;
      const statusCode = StatusCodes.BAD_REQUEST;
      const serviceResponse = ServiceResponse.failure(
        errorMessage,
        null,
        statusCode
      );
      return handleServiceResponse(serviceResponse, res);
    }
  };

export const validateUserInput = (req: Request): void => {
  const { body, query, params } = req;

  if (!body || typeof body.name !== "string" || body.name.trim() === "") {
    throw new Error("Name is required and must be a non-empty string.");
  }
};
