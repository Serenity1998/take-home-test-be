import { Prisma } from '@prisma/client';
import type { ErrorRequestHandler, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const unexpectedRequest: RequestHandler = (_req, res) => {
  res.sendStatus(StatusCodes.NOT_FOUND);
};

const addErrorToRequestLog: ErrorRequestHandler = (err, _req, res, next) => {
  res.locals.err = err;
  next(err);
};

export const prismaErrorHandler = (ex: unknown): string => {
  let errorMessage = '';

  if (ex instanceof Prisma.PrismaClientKnownRequestError) {
    errorMessage = `Database error (code ${ex.code}): ${ex.message}`;
  } else if (ex instanceof Prisma.PrismaClientUnknownRequestError) {
    errorMessage = `Unknown database error: ${ex.message}`;
  } else if (ex instanceof Prisma.PrismaClientInitializationError) {
    errorMessage = `Database initialization error: ${ex.message}`;
  } else if (ex instanceof Prisma.PrismaClientRustPanicError) {
    errorMessage = `Critical database error: ${ex.message}`;
  } else if (ex instanceof Error) {
    errorMessage = `General error: ${ex.message}`;
  } else {
    errorMessage = `Unexpected error: ${JSON.stringify(ex)}`;
  }

  return errorMessage;
};

export default () => [unexpectedRequest, addErrorToRequestLog];
