import express, { Application } from 'express';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log('listening');
    });
  }
}
