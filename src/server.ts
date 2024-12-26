import cors from 'cors';
import express from 'express';

import errorHandlers from './common/middlewares/errorHandlers';
import { env } from './common/utils/envSetting';

const app = express();

app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(express.json());


app.use(errorHandlers());

export { app };
