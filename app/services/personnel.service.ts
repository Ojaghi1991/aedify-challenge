/**
 * Personnel Services
 */

import personnelModel from "../models/personnel.model";

// Types
import  { PersonnelTypes, PersonnelIdType } from '../types/personnel'
const personnelService = {
    createPersonnel: async (personnel: PersonnelTypes) =>{
        return await personnelModel.createPersonnel(personnel)
    },
    updatePersonnel: async (id: PersonnelIdType, personnel: PersonnelTypes) => {
        return await personnelModel.updatePersonnel(id, personnel)
    },
    getAllPersonnels: async() => {
        return await personnelModel.getAllPersonnels()
    },
    getPersonnel: async(id: PersonnelIdType) => {
        return await personnelModel.getPersonnel(id)
    },
    removePersonnel: async(id: PersonnelIdType) => {
        return await personnelModel.removePersonnel(id)
    }
}

export default personnelService