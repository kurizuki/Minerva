import express, { json } from 'express';
import { customerRouters } from './routes/customer.js';

export const app = express();

app.disable('x-powered-by');
app.use(json());

app.use('/customer', customerRouters);

app.use((req, res) =>{
  res.status(404).send('404 not found');
  console.log("404 not found:" + req.url);
});
