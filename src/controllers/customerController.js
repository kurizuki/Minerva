import { registerCustomer, getCustomerCredentials } from '../services/customerService.js';

import { validateCustomerLogin, validateCustomerRegister } from '../schemas/customerSchema.js';
import { generateHash, generateSalt } from '../libs/crypto.js';


export const register = async (req, res) => {
  const result  = validateCustomerRegister(req.body);

  if (!result.success) {
    return res.status(400).json({error: JSON.parse(result.error.message)});
  }

  const {fullName, email, password} = req.body;

  const salt = generateSalt();
  const hash = generateHash(password, salt, process.env.PEPPER)

  try {
    await registerCustomer(fullName, email, hash, salt);
    return res.status(201).send("Usuario registrado correctamente");
  } catch (error) {
    res.status(500).send(error.message);
    // Aqui iria el registro en la tabla de errores db
  }
};

export const login = async (req, res) => {
  const result  = validateCustomerLogin(req.body);

  if (!result.success) {
    return res.status(400).json({error: JSON.parse(result.error.message)});
  }

  const {email, password} = req.body;

  try {
    const customerCredentials = await getCustomerCredentials(email);
    if (customerCredentials === undefined) {
      return res.status(401).send("Credenciales inválidas");      
    }
    const hashCustomer = generateHash(password, customerCredentials.Salt, process.env.PEPPER);

    if (customerCredentials.Password !== hashCustomer) {
      return res.status(401).send("Credenciales inválidas");
    }  
    
    return res.status(200).send("Credenciales válidas");
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error al procesar las credenciales');
  }
};

export const logout = (req, res) => {

};

