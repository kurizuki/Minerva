import mysql from 'mysql2/promise';

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const connection = mysql.createPool({
  host:'localhost',
  port: 3306,
  database: 'thoth',
  user: user,
  password: password,

  //Si todas las conexiones estan en uso, las solicitudes adicionales se quedaran en cola
  waitForConnections: true,
  //El numero maximo de conexiones simultaneas que el pool puede crear
  connectionLimit: 10,
  //Con un valor de 0, se establece que no hay límite en la cantidad de solicitudes que se pueden poner en cola. 
  queueLimit: 0
});

export default connection;
