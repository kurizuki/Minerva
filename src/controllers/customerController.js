import { validateCustomerLogin, validateCustomerRegister } from '../schemas/customer.js';
import {generateHash, generateSalt} from '../libs/crypto.js';

export const register = (req, res) => {
  const result  = validateCustomerRegister(req.body);

  if (!result.success) {
    return res.status(400).json({error: JSON.parse(result.error.message)});
  }

  const {fullName, email, password} = req.body;

  const salt = generateSalt();
  const hash = generateHash(password, salt, process.env.PEPPER)


};

export const login = (req, res) => {
  const result  = validateCustomerLogin(req.body);

  if (!result.success) {
    return res.status(400).json({error: JSON.parse(result.error.message)});
  }

  const {email, password} = req.body;

  try {
    const salt = generateSalt();
    const hash = generateHash(password, salt, process.env.PEPPER);
  } catch (error) {
    return res.status(500).send("Error interno del servidor al procesar las credenciales")
  }
};

export const logout = (req, res) => {

};

