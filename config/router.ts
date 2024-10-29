/**
 * Defining all routes - import them from different controllers
 */

// express
import express from 'express';

// Controllers
import assignmentRouter from './assignmentRouter';
import personnelRouter from './personnelRouter';
import projectRouter from './projectRouter';

const router = express.Router();

// Personnel Routes
personnelRouter(router);

// Project
projectRouter(router);

// Assignment Routes
assignmentRouter(router);

export default router;

export { personnelRouter };
