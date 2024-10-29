/*
 * project Model
 */

// Postgresql
import { pool } from '../index';

// Types
import { ProjectTypes, ProjectIdType } from '../types/project';

const projectModel = {
  createproject: async (project: ProjectTypes) => {
    const { projectName, budget, deadline } = project;
    const sqlQuery =
      'INSERT INTO projects(projectName, budget, deadline) VALUES($1, $2, $3) RETURNING *';
    const result = await pool.query(sqlQuery, [projectName, budget, deadline]);

    return result.rows[0];
  },
  updateproject: async (id: ProjectIdType, project: ProjectTypes) => {
    const { projectName, budget, deadline } = project;
    const sqlQuery =
      'UPDATE projects SET projectName = $1, budget = $2, deadline = $3 WHERE id = $4 RETURNING *';
    const result = await pool.query(sqlQuery, [
      projectName,
      budget,
      new Date(deadline).toISOString(),
      id,
    ]);
    return result.rows[0];
  },
  getAllprojects: async () => {
    const sqlQuery = 'SELECT * FROM projects';
    const result = await pool.query(sqlQuery);
    return result.rows;
  },
  getproject: async (id: ProjectIdType) => {
    const sqlQuery = 'SELECT * FROM projects WHERE id = $1';
    const result = await pool.query(sqlQuery, [id]);
    return result.rows[0];
  },
  removeproject: async (id: ProjectIdType) => {
    const sqlQuery = 'DELETE FROM projects WHERE id = $1 RETURNING *';
    const result = await pool.query(sqlQuery, [id]);
    return result.rows[0];
  },
};

export default projectModel;
