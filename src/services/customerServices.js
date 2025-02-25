import {registerCustomer, getCustomerPassword} from '../data/customerData.js';

export async function register(fullName, email, password) {
  await registerCustomer(fullName, email, password);
}

export async function login(email, password) {
  const result = await getCustomerPassword(email);

  if (customer.Password !== password) {
    throw new Error('Contraseña incorrecta');
  }
}