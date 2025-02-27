import connection from './mysql.js';
import DataBaseError from '../errors/DataBaseError.js';

async function isCustomerEmailExists(email) {
  const [result] = await connection.query('SELECT Email FROM Customer WHERE Email = ?', [email]);
  
  if (result.length === 0) {
    return false;
  }

  return true;
}

export async function registerCustomerDB(fullName, email, password, salt) {
  const isEmailExists = await isCustomerEmailExists(email);

  if (isEmailExists) {
    throw new DataBaseError('El usuario ya existe', 409);
  }

  const [result] = await connection.query(
    'INSERT INTO Customer (FullName, Email, Password, salt) VALUES (?, ?, ?, ?)',
    [fullName, email, password, salt]
  );
  
  if (!(result.affectedRows > 0)) {
    throw new DataBaseError('No se pudo registrar el usuario', 500);
  }
}

export async function getCustomerCredentialsDB(email) {
  const [result] = await connection.query('SELECT Password, Salt FROM Customer WHERE Email = ?', [email]);
  
  return result[0];
}
