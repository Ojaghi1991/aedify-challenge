/**
 * Project Services
 */

import projectModel from '../models/project.model';

// Types
import { ProjectTypes, ProjectIdType } from '../types/project';
const projectService = {
  createproject: async (project: ProjectTypes) => {
    return await projectModel.createproject(project);
  },
  updateproject: async (id: ProjectIdType, project: ProjectTypes) => {
    return await projectModel.updateproject(id, project);
  },
  getAllprojects: async () => {
    return await projectModel.getAllprojects();
  },
  getproject: async (id: ProjectIdType) => {
    return await projectModel.getproject(id);
  },
  removeproject: async (id: ProjectIdType) => {
    return await projectModel.removeproject(id);
  },
};

export default projectService;
