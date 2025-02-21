import {randomBytes, pbkdf2Sync} from 'node:crypto';

/**
 * Genera un hash a partir de los datos proporcionados, la sal (salt) y el condimento (pepper).
 * 
 * @param {string} data - Los datos que se desean proteger mediante el hash. Este valor debe ser una cadena de texto.
 * @param {string} salt - Un valor aleatorio que se utiliza para incrementar la seguridad del hash. Debe ser una cadena de texto.
 * @param {string} pepper - Un valor secreto adicional que se combina con los datos y la sal para aumentar la complejidad del hash. También debe ser una cadena de texto.
 * 
 * @returns {string} - Devuelve un hash de 128 caracteres en formato hexadecimal.
 * 
 * @throws {Error} - Si alguno de los parámetros es `null`, `undefined` o no es una cadena de texto, se lanzará un error.
 */
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

/**
 * Genera un valor aleatorio (salt) de 16 caracteres en formato hexadecimal.
 * 
 * @returns {string} - Devuelve un `salt` de 16 caracteres generado aleatoriamente.
 */
export function generateSalt() {
  return randomBytes(8).toString('hex');
}
