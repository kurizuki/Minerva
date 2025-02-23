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

  const salt = 0;
  const hash = generateHash(password, salt, process.env.PEPPER);



  res.send(hash)
};

export const logout = (req, res) => {

};

