import { createServer } from 'node:net';

export function findAvaiblePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = createServer();

    server.listen(desiredPort, () => {
      const port = server.address();
      server.close(() => {
        resolve(port);
      });
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvaiblePort(0)).then(resolve);
      } else {
        reject(err);
      }
    })
  })
}
