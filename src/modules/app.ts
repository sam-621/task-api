import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.setupExpressMiddleware();
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
}
