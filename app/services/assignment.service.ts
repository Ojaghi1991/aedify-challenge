/**
 * Assignment Services
 */

import AssignmentModel from "../models/assignment.model";
import Status from '../constants/status'
import { AssignmentType, AssignmentIdType, AssignmentStatus } from '../types/assignment'
const AssignmentService = {
    createAssignment: async (Assignment: AssignmentType) =>{
        const data = {...Assignment, start_time: new Date()}
        return await AssignmentModel.createAssignment(data)
    },
    updateAssignment: async (ids: AssignmentIdType, Assignment: AssignmentType) => {
        return await AssignmentModel.updateAssignment(ids, Assignment)
    },
    getAllAssignments: async() => {
        return await AssignmentModel.getAllAssignments()
    },
    getAssignment: async(ids: AssignmentIdType) => {
        return await AssignmentModel.getAssignment(ids)
    },
    removeAssignment: async(ids: AssignmentIdType) => {
        return await AssignmentModel.removeAssignment(ids)
    },
    updateAssignmentStatus: async(ids: AssignmentIdType, status: any) => {
        const data: Partial<any> = { status }
        console.log('Status', Status.Completed)
        if(status === Status.Completed || status === Status.Canceled){
            data.end_time = new Date()
        }   
        return await AssignmentModel.updateAssignmentStatus(ids, data)
    },
}

export default AssignmentService