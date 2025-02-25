import { validateCustomerLogin, validateCustomerRegister } from '../schemas/customer.js';
import {generateHash, generateSalt} from '../libs/crypto.js';


import {registerCustomer, getCustomerCredentials} from '../data/customerData.js';


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
    res.status(201).send("Usuario registrado correctamente");
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
    const passwordDB = customerCredentials.Password; // Accede a la propiedad Password
    const saltDB = customerCredentials.Salt; // Accede a la propiedad Salt

    const hashCustomer = generateHash(password, saltDB, process.env.PEPPER);

    if (passwordDB === hashCustomer) {
      return res.status(200).send("Credenciales correctas");
    } else {
      return res.status(401).send("Credenciales incorrectas");
    }
  } catch (error) {
    return res.status(500).send('credenciales incorrectas');
  }
};

export const logout = (req, res) => {

};

