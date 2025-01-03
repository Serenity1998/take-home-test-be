import { StatusCodes } from "http-status-codes";

export class ServiceResponse<T = null> {
  readonly success: boolean;
  readonly message: string;
  readonly statusCode: number;
  readonly responseObject?: T;

  private constructor(
    success: boolean,
    message: string,
    statusCode: number,
    responseObject?: T
  ) {
    this.success = success;
    this.message = message;
    this.responseObject = responseObject;
    this.statusCode = statusCode;
  }

  static success<T>(
    message: string,
    responseObject: T,
    statusCode: number = StatusCodes.OK
  ) {
    return new ServiceResponse(true, message, statusCode, responseObject);
  }

  static failure<T>(
    message: string,
    responseObject?: T,
    statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    return new ServiceResponse(false, message, statusCode, responseObject);
  }
}