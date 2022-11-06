import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectToDB } from '../core/db/connect';
import { MONGO_DB_URI } from '../core/config/env.config';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.setupExpressMiddleware();
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

  private setupDb() {
    connectToDB(MONGO_DB_URI);
  }
}
