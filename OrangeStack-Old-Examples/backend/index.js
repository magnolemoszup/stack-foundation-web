'use strict';

const Hapi = require('@hapi/hapi');
const { v4: uuidv4 } = require('uuid');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        config: {
          cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
          }
        },
        method: 'GET',
        path: '/',
        handler: (request, h) => {
          return [
            {
              id: uuidv4(),
              name: "Load MFE - Orange Foundation",
              "url": "http://localhost:3002/remoteEntry.js",
              "scope": "foundation",
              "module": "./App",
            },
            {
              id: uuidv4(),
              name: "Load Widget - Orange Foundation Button",
              "url": "http://localhost:3002/remoteEntry.js",
              "scope": "foundation",
              "module": "./Button",
            }
          ]
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();