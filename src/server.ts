import 'module-alias/register';
import { App } from '@modules/app';

const bootstrap = () => {
  const app = new App();
  app.start(4000);
};

bootstrap();
