/**
 * Defining all routes - import them from different controllers
 */

// express
import express from 'express';

// Controllers
import assignmentController from '../app/controllers/assignment.controller';
import personnelController from '../app/controllers/personnel.controller';
import projectController from '../app/controllers/project.controller';

const router = express.Router();

// Personnel Routes
/**
 * @swagger
 * /personnels:
 *  post:
 *    parameters:
 *      - name: fname
 *        in: path
 *        description: first name of person who work in industry
 *        required: true
 *        type: string
 *      - name: lname
 *        in: path
 *        description: last name of person who work in industry
 *        required: true
 *        type: string
 *      - name: phone
 *        in: path
 *        description: Phone of person who work in industry
 *        required: true
 *        type: string
 *    description: please enter the required fields
 *    responses:
 *      '200':
 *        description: Personel Created successfuly
 */
router.post('/personnels', personnelController.create);

/**
 * @swagger
 * /personnels:
 *  put:
 *    parameters:
 *      - name: fname
 *        in: path
 *        description: you can change the first name of person who work in industry
 *        required: true
 *        type: string
 *      - name: lname
 *        in: path
 *        description: you can change the last name of person who work in industry
 *        required: true
 *        type: string
 *      - name: phone
 *        in: path
 *        description: you can change the Phone of person who work in industry
 *        required: true
 *        type: string
 *    description: please enter the required fields
 *    responses:
 *      '200':
 *        description: Personel Updated successfuly
 */
router.put('/personnels/:id', personnelController.update);
router.get('/personnels', personnelController.getAll);
router.get('/personnels/:id', personnelController.getOne);
router.delete('/personnels/:id', personnelController.remove);

// Project Routes
router.post('/project', projectController.create);
router.put('/project/:id', projectController.update);
router.get('/projects', projectController.getAll);
router.get('/project/:id', projectController.getOne);
router.delete('/project/:id', projectController.remove);

// Assignment Routes
router.post('/assignment', assignmentController.create);
router.put('/assignment/:personnelId/:projectId', assignmentController.update);
router.get('/assignments', assignmentController.getAll);
router.get('/assignment/:id', assignmentController.getOne);
router.delete('/assignment/:id', assignmentController.remove);

// Status
router.put(
  '/assignment/status/:personnelId/:projectId',
  assignmentController.updateStatus
);

export default router;
