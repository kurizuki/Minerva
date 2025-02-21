import express, { json } from 'express';
// MIDDLEWARES
import { corsMiddleware } from './middlewares/cors.js';
import { httpMonitorMiddleware } from './middlewares/httpLogger.js';
// ROUTES
import { customerRouters } from './routes/customer.js';

export const app = express();

app.use(httpMonitorMiddleware)
app.use(json());
app.disable('x-powered-by');
app.use(corsMiddleware)

app.use('/customer', customerRouters);

app.use((req, res) =>{
  res.status(404).send('404 not found');
});
