/**
 * Personnel Controller
 */

// personnel services
import personnelService from '../services/personnel.service';
import { Request, Response } from 'express';
import { PersonnelIdType } from '../types/personnel';

// Utiles
import errorHandler from '../../utils/errorHandler';

const personnelController = {
  create: async (req: Request, res: Response) => {
    try {
      const personnel = await personnelService.createPersonnel(req.body);
      res.status(201).json(personnel);
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const personnelId = req.params.id;
      const personnel = await personnelService.updatePersonnel(
        personnelId as PersonnelIdType,
        req.body
      );

      if (personnel) {
        res.status(200).json({ personnel });
      } else {
        res.status(404).json({
          message: `Unfortunately, we couldn't find personnel #${personnelId}`,
        });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  getOne: async (req: Request, res: Response) => {
    try {
      const personnelId = req.params.id as PersonnelIdType;
      const personnel = await personnelService.getPersonnel(personnelId);

      if (personnel) {
        res.status(200).json({ personnel });
      } else {
        res.status(404).json({ message: `Personnel not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
  getAll: async (_: Request, res: Response) => {
    try {
      const personnel = await personnelService.getAllPersonnels();

      if (personnel) {
        res.status(200).json({ personnel });
      } else {
        res.status(404).json({ message: `Personnel not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },

  remove: async (req: Request, res: Response) => {
    try {
      const personnelId = req.params.id as PersonnelIdType;
      const personnel = await personnelService.removePersonnel(personnelId);

      if (personnel) {
        res
          .status(200)
          .json({ message: `successfully remove personnel ${personnelId}` });
      } else {
        res.status(404).json({ message: `Personnel not found` });
      }
    } catch (error: any) {
      errorHandler(res, error);
    }
  },
};

export default personnelController;
