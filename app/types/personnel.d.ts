/**
 * Personnel Types
 */

export interface PersonnelTypes {
  fname: string;
  lname: string;
  phone: string;
  id?: string;
}

export type PersonnelIdType = Pick<PersonnelTypes, 'id'>;
