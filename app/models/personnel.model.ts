/*
 * personnel Model
 */

// Postgresql
import { pool } from '../index';

// Types
import { PersonnelTypes, PersonnelIdType } from '../types/personnel';

const personnelModel = {
  createPersonnel: async (personnel: PersonnelTypes) => {
    const { fname, lname, phone } = personnel;
    const sqlQuery =
      'INSERT INTO personnels(fname, lname, phone) VALUES($1, $2, $3) RETURNING *';
    const result = await pool.query(sqlQuery, [fname, lname, phone]);

    return result.rows[0];
  },
  updatePersonnel: async (id: PersonnelIdType, personnel: PersonnelTypes) => {
    const { fname, lname, phone } = personnel;
    const sqlQuery =
      'UPDATE personnels SET fname = $1, lname = $2, phone = $3 WHERE id = $4 RETURNING *';
    const result = await pool.query(sqlQuery, [fname, lname, phone, id]);
    return result.rows[0];
  },
  getAllPersonnels: async () => {
    const sqlQuery = 'SELECT * FROM personnels';
    const result = await pool.query(sqlQuery);
    return result.rows;
  },
  getPersonnel: async (id: PersonnelIdType) => {
    const sqlQuery = 'SELECT * FROM personnels WHERE id = $1';
    const result = await pool.query(sqlQuery, [id]);
    return result.rows[0];
  },
  removePersonnel: async (id: PersonnelIdType) => {
    const sqlQuery = 'DELETE FROM personnels WHERE id = $1 RETURNING *';
    const result = await pool.query(sqlQuery, [id]);
    return result.rows[0];
  },
};

export default personnelModel;
