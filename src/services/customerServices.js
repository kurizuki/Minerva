// src/services/usuarioService.js
const usuarioData = require('../data/usuarioDataAccess');
const bcrypt = require('bcrypt');

async function registrarUsuario(datosUsuario) {
  const { email, contraseña } = datosUsuario;
  const usuarioExistente = await usuarioData.obtenerUsuarioPorEmail(email);

  if (usuarioExistente) {
    throw new Error('El usuario ya existe');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(contraseña, salt);

  const nuevoUsuario = {
    ...datosUsuario,
    contraseña: hash
  };

  return await usuarioData.crearUsuario(nuevoUsuario);
}

module.exports = {
  registrarUsuario
};
