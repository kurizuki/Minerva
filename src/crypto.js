import {randomBytes, pbkdf2Sync} from 'node:crypto';

export function generateHash(data, salt, pepper) {
  if (data == null || salt == null || pepper == null) {
    throw new Error('data, salt and pepper arguments required');
  }

  if (!(typeof data === 'string') || !(typeof salt === 'string') || !(typeof pepper === 'string')) {
    throw new Error('pepper, data or salt must be a string');
  }

  // Numero de iteraciones recomendadas por la documentacion 100000
  const hash = pbkdf2Sync(data + pepper, salt, 100000, 64, 'sha512');
  
  // Retorna el hash en formato hexadecimal
  return hash.toString('hex');
}

export function generateSalt() {
  return randomBytes(8).toString('hex');
}
