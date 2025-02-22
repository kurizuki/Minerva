import { validateCustomerLogin, validateCustomerRegister } from "../schemas/customer";

export const register = (req, res) => {
  const result  = validateCustomerRegister(req.body);

  if (!result.success) {
    return res.status(400).json({error: JSON.parse(result.error.message)});
  }
};

export const login = (req, res) => {
  const result  = validateCustomerLogin(req.body);

  if (!result.success) {
    return res.status(400).json({error: JSON.parse(result.error.message)});
  }
};

export const logout = (req, res) => {

};

