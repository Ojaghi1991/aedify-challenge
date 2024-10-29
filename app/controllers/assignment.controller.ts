/**
 * Assignment Controller
 */

// Assignments services
import assignmentService from '../services/assignment.service';

// Types
import { Request, Response } from 'express';

// Utils
import errorHandler from '../../utils/errorHandler';
import statusValidation from '../../utils/statusValidation';

const assignmentController = {
  create: async (req: Request, res: Response) => {
    try {
      const status = req.body.status;

      if (!statusValidation(status)) {
        return res.status(404).json({
          message: 'Invalid Status',
        });
      }

      const assignment = await assignmentService.createAssignment(req.body);
      res.status(201).json(assignment);
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const projectId = req.params.projectId;
      const personnelId = req.params.personnelId;
      const status = req.body.status;

      if (!statusValidation(status)) {
        return res.status(404).json({
          message: 'Invalid Status',
        });
      }

      const assignment = await assignmentService.updateAssignment(
        { personnel_id: personnelId, project_id: projectId },
        req.body
      );

      if (assignment) {
        res.status(200).json({ assignment });
      } else {
        res.status(404).json({
          message: `Unfortunately, we couldn't find assignment with Personnel_Id#${personnelId} And Project_id#${projectId}`,
        });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  getOne: async (req: Request, res: Response) => {
    try {
      const projectId = req.params.projectId;
      const personnelId = req.params.personnelId;
      const assignment = await assignmentService.getAssignment({
        personnel_id: projectId,
        project_id: personnelId,
      });

      if (assignment) {
        res.status(200).json({ assignment });
      } else {
        res.status(404).json({ message: `Assignment not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  getAll: async (_: Request, res: Response) => {
    try {
      const assignment = await assignmentService.getAllAssignments();

      if (assignment) {
        res.status(200).json({ assignment });
      } else {
        res.status(404).json({ message: `assignment not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },

  remove: async (req: Request, res: Response) => {
    try {
      const projectId = req.params.projectId;
      const personnelId = req.params.personnelId;
      const assignment = await assignmentService.removeAssignment({
        personnel_id: projectId,
        project_id: personnelId,
      });

      if (assignment) {
        res.status(200).json({
          message: `successfully remove Personnel_Id#${personnelId} And Project_id#${projectId} assignment.`,
        });
      } else {
        res.status(404).json({ message: `assignment not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  updateStatus: async (req: Request, res: Response) => {
    try {
      const projectId = req.params.projectId;
      const personnelId = req.params.personnelId;
      const status = req.body.status;

      if (!statusValidation(status)) {
        return res.status(404).json({
          message: 'Invalid Status',
        });
      }

      const assignment = await assignmentService.updateAssignmentStatus(
        { personnel_id: projectId, project_id: personnelId },
        status
      );

      if (assignment) {
        res.status(200).json({
          message: `successfully updated Assignment Status with Personnel_Id#${personnelId} And Project_id#${projectId} to ${status}.`,
        });
      } else {
        res.status(404).json({ message: `assignment not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
};

export default assignmentController;
