import { Router } from 'express';
import { HydratedDocument, Model, Types } from 'mongoose';

export type TModel<T> = Model<
  T,
  Record<string, unknown>,
  Record<string, unknown>,
  Record<string, unknown>,
  any
>;

export type TMongoId = Types.ObjectId;

export type TResultDocument<T> = HydratedDocument<
  T,
  Record<string, unknown>,
  Record<string, unknown>
>;

export interface IController {
  path: string;
  router: Router;
}
