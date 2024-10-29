/**
 * All personnel Routes
 */

import personnelController from '../app/controllers/personnel.controller';
import { Router } from 'express';

const personnelRouter = (router: Router) => {
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
   *      - name: id
   *        in: path
   *        description: please add personel unique ID
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: update Information only for one personnel
   */
  router.put('/personnels/:id', personnelController.update);

  /**
   * @swagger
   * /personnels:
   *  get:
   *    responses:
   *      '200':
   *        description: Return All Information about personnel
   */
  router.get('/personnels', personnelController.getAll);
  /**
   * @swagger
   * /personnels/:id:
   *  get:
   *    parameters:
   *      - name: id
   *        in: path
   *        description: please add personel unique ID
   *        required: true
   *        type: string
   *    description: please enter the required fields
   *    responses:
   *      '200':
   *        description: Return Information only for one person
   */
  router.get('/personnels/:id', personnelController.getOne);
  /**
   * @swagger
   * /personnels/:id:
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
  router.delete('/personnels/:id', personnelController.remove);

  return router;
};

export default personnelRouter;
