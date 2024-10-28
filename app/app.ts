/**
 * Create Express Application
 */

// Modules
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Routes
import router from '../config/router'

const app = express();


dotenv.config();



app.use(bodyParser.json())
app.use(router)

export {  app }