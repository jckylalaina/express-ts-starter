import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';
import morganMiddleware from '@middelwares/morgan-middleware';
require('dotenv').config();

const app = express();

app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<any, MessageResponse>('/', (_req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
