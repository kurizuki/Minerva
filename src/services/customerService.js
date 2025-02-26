import {registerCustomerDB, getCustomerCredentialsDB} from '../data/customerData.js';

export async function registerCustomer(fullName, email, password, salt) {
  if (typeof fullName !== "string" || fullName.length > 50) {
    throw new Error('El fullName debe ser de tipo string y menor a 50 caracteres.');
  }
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !regexEmail.test(email) || email.length > 50) {
    throw new Error("El email no es válido.");
  }
  if (typeof password !== "string" || password.length !== 128) {
    throw new Error("La contraseña debe ser de 128 caracteres.");
  }
  if (typeof salt !== "string" || salt.length !== 16) {
    throw new Error("La salt debe ser de 16 caracteres.");
  }

  await registerCustomerDB(fullName, email, password, salt);
}

export async function getCustomerCredentials(email) {
  if (typeof email !== "string" || email.length > 50) {
    throw new Error("El email debe ser de tipo string y menor a 50 caracteres.");
  }
  return await getCustomerCredentialsDB(email);
}