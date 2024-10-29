/**
 * All Assignment Router
 */

// Types
import { Router } from 'express';

// Controllers

import assignmentController from '../app/controllers/assignment.controller';

const assignmentRouter = (router: Router) => {
  /**
   * @swagger
   * /assignment:
   *  post:
   *    parameters:
   *      - name: role
   *        in: path
   *        description: role should not be null and choose proper role for your personnel assignment
   *        required: true
   *        type: string
   *      - name: start_date
   *        in: path
   *        description: should be follow YYYY/MM/DD format and indicate assignment start
   *        required: true
   *        type: string
   *      - name: end_date
   *        in: path
   *        description: should be follow YYYY/MM/DD format and indicate assignment end. It will updated when status become Cancel or Completed
   *        required: true
   *        type: string
   *      - name: status
   *        in: path
   *        description: It has one of Completed, Canceled or Active values
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: Assignment Created successfuly
   */
  router.post('/assignment', assignmentController.create);
  /**
   * @swagger
   * /assignment/:personnelId/:projectId:
   *  put:
   *    parameters:
   *      - name: personnelId
   *        in: path
   *        description: By providing personnelId you can specify the personnel
   *        required: true
   *        type: string
   *      - name: projectId
   *        in: path
   *        description: By providing projectId you can specify the Project
   *        required: true
   *        type: string
   *      - name: role
   *        in: path
   *        description: role should not be null and choose proper role for your personnel assignment
   *        required: true
   *        type: string
   *      - name: start_date
   *        in: path
   *        description: should be follow YYYY/MM/DD format and indicate assignment start
   *        required: true
   *        type: string
   *      - name: end_date
   *        in: path
   *        description: should be follow YYYY/MM/DD format and indicate assignment end. It will updated when status become Cancel or Completed
   *        required: true
   *        type: string
   *      - name: status
   *        in: path
   *        description: It has one of Completed, Canceled or Active values
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: Project Updated successfuly
   */
  router.put(
    '/assignment/:personnelId/:projectId',
    assignmentController.update
  );

  /**
   * @swagger
   * /assignments:
   *  get:
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: Return all Assginments
   */
  router.get('/assignments', assignmentController.getAll);
  /**
   * @swagger
   * /assignment/:personnelId/:projectId:
   *  put:
   *    parameters:
   *      - name: personnelId
   *        in: path
   *        description: By providing personnelId you can specify the personnel
   *        required: true
   *        type: string
   *      - name: projectId
   *        in: path
   *        description: By providing projectId you can specify the Project
   *        required: true
   *        type: string
   *      - name: status
   *        in: path
   *        description: It has one of Completed, Canceled or Active values
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: Get Single Assignment
   */
  router.get(
    '/assignment/:personnelId/:projectId',
    assignmentController.getOne
  );

  /**
   * @swagger
   * /assignment/:personnelId/:projectId:
   *  delete:
   *    parameters:
   *      - name: personnelId
   *        in: path
   *        description: By providing personnelId you can specify the personnel
   *        required: true
   *        type: string
   *      - name: projectId
   *        in: path
   *        description: By providing projectId you can specify the Project
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: by providing id, the assignment will be deleted
   */
  router.delete(
    '/assignment/:personnelId/:projectId',
    assignmentController.remove
  );

  /**
   * @swagger
   * /assignment/status/:personnelId/:projectId:
   *  delete:
   *    parameters:
   *      - name: personnelId
   *        in: path
   *        description: By providing personnelId you can specify the personnel
   *        required: true
   *        type: string
   *      - name: projectId
   *        in: path
   *        description: By providing projectId you can specify the Project
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: by providing id, the assignment will be deleted
   */
  router.put(
    '/assignment/status/:personnelId/:projectId',
    assignmentController.updateStatus
  );
};

export default assignmentRouter;
