/**
 * Validate Status
 */

// check Status
import allStatus from '../app/constants/status';

// Types
import { Status } from '../app/types/assignment';

const statusValidation = (status: Status) => {
  const statuses = Object.keys(allStatus);

  if (statuses.includes(status)) {
    return true;
  }

  return false;
};

export default statusValidation;
