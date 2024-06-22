import { NextFunction, Request, Response } from 'express';

import { ErrorResponse } from './interfaces/Error';
import ApiError from '@utils/restapi-error';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

export function errorHandler(
  err: Error | ApiError,
  req: Request,
  res: Response<ErrorResponse>,
  _next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  if (err instanceof ApiError) {
    res.status(err.statusCode);
    res.json({
      message: err.message,
      code: err?.errorCode || 'UNDEFINED',
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
  } else {
    res.status(statusCode);
    res.json({
      message: err.message,
      code: 'SERVER_ERROR',
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
  }
}
