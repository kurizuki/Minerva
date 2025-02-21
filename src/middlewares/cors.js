const acceptedOrigins = [
  'http://localhost:8080'
];

export function corsMiddleware(req, res, next) {
  const origin = req.header('origin');

  if(acceptedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Origin', 'GET, POST, PATCH, DELETE');
  }
  next();
}