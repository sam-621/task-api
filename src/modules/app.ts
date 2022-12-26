import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { TaskController } from './task/task.controller';
import { connectToDB } from '@/db/connect';
import { IController } from '@/interfaces/util.interface';
import { MONGO_DB_URI } from '@/config/env.config';

export class App {
  private app: Application;
  private controllers: IController[];

  constructor() {
    this.app = express();
    this.controllers = [new TaskController()];
    this.setupExpressMiddleware();
    this.setupControllers();
    this.setupDb();
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log('listening');
    });
  }

  private setupExpressMiddleware() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private setupControllers() {
    this.controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private setupDb() {
    connectToDB(MONGO_DB_URI);
  }
}
