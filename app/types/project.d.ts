/**
 * Project Types
 */

export interface ProjectTypes {
  projectName: string;
  budget: string;
  deadline: Date;
  id?: string;
}

export type ProjectIdType = Pick<ProjectTypes, 'id'>;
