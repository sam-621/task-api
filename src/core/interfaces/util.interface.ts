import { Router } from 'express';
import { HydratedDocument, Model, Types } from 'mongoose';

export type TModel<T> = Model<T, {}, {}, {}, any>;

export type TMongoId = Types.ObjectId;

export type TResultDocument<T> = HydratedDocument<T, {}, {}>;

export interface IController {
  path: string;
  router: Router;
}
