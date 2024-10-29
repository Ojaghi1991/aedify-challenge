/**
 * project Controller
 */

// project services
import projectService from '../services/project.service';

// Types
import { Request, Response } from 'express';
import { ProjectIdType } from '../types/project';

// Utiles
import errorHandler from '../../utils/errorHandler';

const projectsController = {
  create: async (req: Request, res: Response) => {
    try {
      const projects = await projectService.createproject(req.body);
      res.status(201).json(projects);
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const projectId = req.params.id as ProjectIdType;
      const projects = await projectService.updateproject(projectId, req.body);

      if (projects) {
        res.status(200).json({ projects });
      } else {
        res.status(404).json({
          message: `Unfortunately, we couldn't find projects #${projectId}`,
        });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  getOne: async (req: Request, res: Response) => {
    try {
      const projectId = req.params.id as ProjectIdType;
      const projects = await projectService.getproject(projectId);

      if (projects) {
        res.status(200).json({ projects });
      } else {
        res.status(404).json({ message: `projects not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  getAll: async (_: Request, res: Response) => {
    try {
      const projects = await projectService.getAllprojects();

      if (projects) {
        res.status(200).json({ projects });
      } else {
        res.status(404).json({ message: `projects not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },

  remove: async (req: Request, res: Response) => {
    try {
      const projectsId = req.params.id as ProjectIdType;
      const projects = await projectService.removeproject(projectsId);

      if (projects) {
        res
          .status(200)
          .json({ message: `successfully remove projects ${projectsId}` });
      } else {
        res.status(404).json({ message: `projects not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
};

export default projectsController;
