import cors from 'cors';
import express from 'express';

import errorHandlers from './common/middlewares/errorHandlers';
import { env } from './common/utils/envSetting';
import { taskRouter } from './api/task/taskRouter';

const HyperDX = require('@hyperdx/node-opentelemetry');

HyperDX.init({
  apiKey: '5a8b2a1e-92db-44a1-b73e-96593cc62af5',
  service: 'my-service',
});

const app = express();

app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(express.json());

app.use('/tasks', taskRouter);

HyperDX.setupExpressErrorHandler(app);
app.use(errorHandlers());

export { app };
