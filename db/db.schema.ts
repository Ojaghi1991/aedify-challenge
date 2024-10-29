/**
 * Create perssonels, project and assignment table for pos
 */

import { Pool } from "pg";

const SQL_PERSONNEL = `
   CREATE TABLE IF NOT EXISTS personnels (
        id SERIAL PRIMARY KEY,
        fname VARCHAR(50) NOT NULL,
        lname VARCHAR(50) NOT NULL,
        phone VARCHAR(20) );
`;

const SQL_PROJECT=`
    CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        projectName VARCHAR(50) NOT NULL,
        budget money NOT NULL,
        deadline DATE );
    `
const SQL_ASSIGNMENT =`
CREATE TABLE IF NOT EXISTS assignment(personnel_id INTEGER REFERENCES personnels(id),
    role VARCHAR(50) NOT NULL,
    start_time DATE,
    end_time DATE,
    project_id INTEGER REFERENCES projects(id),
    status VARCHAR(10) NOT NULL,
    CONSTRAINT personnel_project_pk PRIMARY KEY(personnel_id,project_id) );
`


const createTable = async (pool: Pool) =>{
    try {
        // Creating Tables
        await pool.query(SQL_PERSONNEL);
        console.log('Personnel table created');
        
        await pool.query(SQL_PROJECT);
        console.log('Project table created');

        await pool.query(SQL_ASSIGNMENT);
        console.log('Assignment table created');
    } catch (e) {
        console.error('Error creating tables:', e);
    }
}

export default createTable