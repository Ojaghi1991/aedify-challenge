/*
* Assignment Model
*/

// Postgresql 
import { pool } from '../index'

// Types
import { AssignmentType, AssignmentIdType, AssignmentStatus } from '../types/assignment.d'

const AssignmentModel = {
    createAssignment: async (assignment: AssignmentType) =>{
        const { personnel_id , project_id , role, start_time, end_time, status  } = assignment;
        const sqlQuery = "INSERT INTO assignment(personnel_id , project_id , role, start_time, end_time, status) VALUES($1, $2, $3, $4, $5, $6) RETURNING *"
        const result = await pool.query(sqlQuery, [personnel_id , project_id , role, start_time,end_time, status])
        
        return result.rows[0];
    },
    updateAssignment: async (ids: AssignmentIdType, assignment: AssignmentType) => {
        const { personnel_id , project_id , role, start_time, end_time, status } = assignment;
        const { personnel_id: personnelId, project_id: projectId } = ids;
        const sqlQuery = "UPDATE assignment SET personnel_id = $1, project_id = $2, role = $3, start_time = $4,end_time = $5, status = $6  WHERE personnel_id = $7 AND project_id=$8 RETURNING *";
        const result = await pool.query(sqlQuery, [personnel_id , project_id , role, new Date(start_time).toISOString(), new Date(end_time).toISOString(), status, personnelId,projectId ])
        return result.rows[0]
    },
    getAllAssignments: async() => {
        const sqlQuery = "SELECT * FROM assignment";
        const result = await pool.query(sqlQuery);
        return result.rows
    },
    getAssignment: async({personnel_id, project_id}: AssignmentIdType) => {
        const sqlQuery = "SELECT * FROM assignment WHERE personnel_id = $1 AND project_id=$2";
        const result = await pool.query(sqlQuery, [personnel_id, project_id]);
        return result.rows[0]
    },
    removeAssignment: async({personnel_id, project_id}: AssignmentIdType) => {
        const sqlQuery = "DELETE FROM assignment WHERE personnel_id = $1 AND project_id = $2 RETURNING *"
        const result = await pool.query(sqlQuery, [personnel_id, project_id])
        return result.rows[0]
    },
    updateAssignmentStatus: async (ids: AssignmentIdType, statusTime: AssignmentStatus) => {
        const { end_time, status } = statusTime;
        const { personnel_id: personnelId, project_id: projectId } = ids;
        const sqlQuery = "UPDATE assignment SET end_time = $1, status = $2 WHERE personnel_id = $3 AND project_id=$4 RETURNING *";
        const result = await pool.query(sqlQuery, [end_time , status , personnelId, projectId])
        return result.rows[0]
    } 
}

export default AssignmentModel