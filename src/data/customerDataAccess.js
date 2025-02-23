import connection from './mysql.js';

async function obtenerUsuarioPorEmail(email) {
  const [rows] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [email]);
  return rows[0];
}

async function crearUsuario(usuario) {
  const { nombre, email, contraseña } = usuario;
  const [result] = await connection.query(
    'INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)',
    [nombre, email, contraseña]
  );
  return { id: result.insertId, ...usuario };
}
