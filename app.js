import express, { json } from 'express';
const app = express();
const port = 8080;

app.disable('x-powered-by');
app.use(json());


app.use((req, res) =>{
  res.status(404).send('404 not found')
  console.log(req.url)
  console.log('404 not found')
});

app.listen(port, () => {
  console.log(`Servidor en Linea en http://localhost:${port}`);
});
