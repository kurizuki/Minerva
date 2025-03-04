import registerErrorInDB from '../data/errorData.js';

export function registerError(endPoint, httMethod, statusCode, error, request, response, IPAddress) {
    // Validación de "endPoint"
    if (typeof endPoint !== 'string' || endPoint.trim() === '') {
        console.error('Invalid "endPoint". It must be a non-empty string.');
        return;
    }

    // Validación de "httMethod"
    if (typeof httMethod !== 'string' || !['GET', 'POST', 'PUT', 'DELETE'].includes(httMethod.toUpperCase())) {
        console.error('Invalid "httMethod". It must be one of the following: GET, POST, PUT, DELETE.');
        return;
    }

    // Validación de "statusCode"
    if (typeof statusCode !== 'number' || statusCode < 100 || statusCode > 599) {
        console.error('Invalid "statusCode". It must be a number between 100 and 599.');
        return;
    }

    // Validación de "error"
    if (typeof error !== 'string' || error.trim() === '') {
        console.error('Invalid "error". It must be a non-empty string.');
        return;
    }

    // Validación de "request" (dependiendo del uso de la variable, por ejemplo si es un objeto)
    if (typeof request !== 'object' || request === null) {
        console.error('Invalid "request". It must be a valid object.');
        return;
    }

    // Validación de "response" (dependiendo del uso de la variable, por ejemplo si es un objeto)
    if (typeof response !== 'object' || response === null) {
        console.error('Invalid "response". It must be a valid object.');
        return;
    }

    // Validación de "IPAddress"
    // Validación de "response" (dependiendo del uso de la variable, por ejemplo si es un objeto)
    const ipRegexV4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const ipRegexV6 = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,7}:$|^(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}$|^(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}$|^(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}$|^(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}$|^[0-9a-fA-F]{1,4}:(?::[0-9a-fA-F]{1,4}){1,6}$|^:(?::[0-9a-fA-F]{1,4}){1,7}$/;

    if (typeof IPAddress !== 'string' || !ipRegexV4.test(IPAddress) && !ipRegexV6.test(IPAddress)) {
        console.error('Invalid "IPAddress". It must be a valid IPv4 or IPv6 address.');
        return;
    }

    // Si todo es válido, puedes continuar con el registro del error
    registerErrorInDB(endPoint, httMethod, statusCode, error, request, response, IPAddress);
}

export default registerError;