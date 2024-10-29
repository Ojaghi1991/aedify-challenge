/**
 * Assignment Types
 */

export type Status= "Active" | 'Completed' | 'Cancelled'

export interface AssignmentType {
    id?: string
    personnel_id : string
    project_id : string
    role : string
    start_time: Date
    end_time: Date
    status: "Active" | 'Completed' | 'Cancelled'
}

export type AssignmentStatus = Partial<Pick<AssignmentType,'end_time' | 'status'>>

export type AssignmentIdType = Pick<AssignmentType, 'personnel_id' | 'project_id'>


