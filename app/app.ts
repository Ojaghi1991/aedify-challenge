/**
 * Create Express Application
 */

// Modules
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

// Swagger
import swaggerDocs from '../swagger';

// Routes
import router from '../config/router';

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
export { app };
