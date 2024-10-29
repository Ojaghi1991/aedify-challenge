/**
 * Handle All 500 Errors
 */

import { Response } from 'express';

const errorHandler = (res: Response, error: Error) => {
  res.status(500).json({
    error: error.message,
  });
};

export default errorHandler;
