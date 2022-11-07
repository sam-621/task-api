import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export const dataValidator = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
    return;
  }

  return res.status(StatusCodes.BAD_REQUEST).json({
    data: errors.array(),
    message: ReasonPhrases.BAD_REQUEST,
  });
};
