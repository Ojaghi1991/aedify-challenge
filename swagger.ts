/**
 * Swagger main config file
 */

const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personnel Dispatching application',
      version: '1.0.0',
      description:
        'Personnel Dsipatching applicating is a test app that use technologies such as Javascript, Typescript, Expressjs, Postgresql',
    },
    servers: [
      {
        url: `http://localhost:6600`,
      },
    ],
  },
  apis: ['./config/router.ts'],
  debug: true,
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
