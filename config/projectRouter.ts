/**
 * All project routes
 */

// Types
import { Router } from 'express';

// Controllers
import projectController from '../app/controllers/project.controller';

const projectRouter = (router: Router) => {
  /**
   * @swagger
   * /project:
   *  post:
   *    parameters:
   *      - name: projectName
   *        in: path
   *        description: projectName should not be null and choose proper project name
   *        required: true
   *        type: string
   *      - name: budget
   *        in: path
   *        description: should be carefull when choosing project budget
   *        required: true
   *        type: string
   *      - name: deadline
   *        in: path
   *        description: It's a date and should use this YYYY/MM/DD
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: Project Created successfuly
   */
  router.post('/project', projectController.create);
  /**
   * @swagger
   * /project/:id:
   *  put:
   *    parameters:
   *      - name: id
   *        in: path
   *        description: By providing id you can update the file
   *        required: true
   *        type: string
   *      - name: projectName
   *        in: path
   *        description: projectName should not be null and choose proper project name
   *        required: true
   *        type: string
   *      - name: budget
   *        in: path
   *        description: should be carefull when choosing project budget
   *        required: true
   *        type: string
   *      - name: deadline
   *        in: path
   *        description: It's a date and should use this YYYY/MM/DD
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: Project Updated successfuly
   */
  router.put('/project/:id', projectController.update);

  /**
   * @swagger
   * /projects:
   *  get:
   *    responses:
   *      '200':
   *        description: Return All Information about Projects
   */
  router.get('/projects', projectController.getAll);
  /**
   * @swagger
   * /project/:id:
   *  get:
   *    parameters:
   *      - name: id
   *        in: path
   *        description: please add project unique ID
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: Return Information only for one project
   */
  router.get('/project/:id', projectController.getOne);
  /**
   * @swagger
   * /project/:id:
   *  delete:
   *    parameters:
   *      - name: id
   *        in: path
   *        description: please add personel unique ID
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: by providing id, the personnel will be deleted
   */
  router.delete('/project/:id', projectController.remove);
};

export default projectRouter;
