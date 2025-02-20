import express, { json } from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.disable('x-powered-by');
app.use(json());

app.get('/',(req, res) => {
  res.send('Hola mundo!!!!')
});

app.post('/login',(req, res) => {

});
app.post('/register',(req, res) => {
  const {email, password} = req.body;

  console.log(email + password);
  res.send("ho");

});
app.post('/logout',(req, res) => {

});

app.get('/protected',(req, res) => {

});

app.use((req, res) =>{
  res.status(404).send('404 not found');
  console.log(req.url);
  console.log('404 not found');
});

app.listen(port, () => {
  console.log(`Servidor en Linea en http://localhost:${port}`);
});
