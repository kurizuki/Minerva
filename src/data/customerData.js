import connection from './mysql.js';

async function isCustomerEmailExists(email) {
  const [result] = await connection.query('SELECT Email FROM User WHERE Email = ?', [email]);
  
  if (result.length === 0) {
    return false;
  }

  return true;
}

export async function registerCustomer(fullName, email, password, salt) {
  const isEmailExists = await isCustomerEmailExists(email);

  if (isEmailExists) {
    throw new Error('El usuario ya existe');
  }

  const [result] = await connection.query(
    'INSERT INTO User (FullName, email, Password, salt) VALUES (?, ?, ?, ?)',
    [fullName, email, password, salt]
  );
  
  if (!(result.affectedRows > 0)) {
    throw new Error('No se pudo registrar el usuario');
  }
}

export async function getCustomerCredentials(email) {
  const [result] = await connection.query('SELECT Password, Salt FROM User WHERE Email = ?', [email]);
  
  if (result.length === 0) {
    throw new Error('El usuario no existe');
  } 

  return result[0];
}
