import connection from './mysql.js';

export async function registerErrorInDB(endPoint, httMethod, statusCode, error, request, response, IPAddress) {
    try {
        // Insertar el error en la base de datos
        const query = `
        INSERT INTO apierror (EndPoint, HTTPMethod, StatusCode, ErrorMessage, Request, Response, IPAddress, RegistrationDate)
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`;

        const [result] = await connection.query(query, [
        endPoint,
        httMethod,
        statusCode,
        error,
        JSON.stringify(request), 
        JSON.stringify(response),
        IPAddress
        ]);

        // Si la inserción es exitosa, puedes devolver un mensaje o el ID del registro insertado
        console.log('Error registrado exitosamente en la base de datos.');
        return result.insertId;  // Retorna el ID del nuevo registro si es necesario

    } catch (err) {
        console.error('Error al registrar el error en la base de datos:', err);
        throw err;  // Propagar el error para que pueda ser manejado por quien invoque esta función
    }
}

export default registerErrorInDB;