/**
 * Starting Application and connect to DB
 */

// Package
import { Pool, PoolConfig } from 'pg';
import { Response, Request } from 'express';
// Components
import createTable from '../db/db.schema';
import { app } from './app';

const port = process.env.APP_PORT;

// PostgreSQL connection pool
const dbConfig: PoolConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME,
};

// Set Config
const pool = new Pool(dbConfig);

// Base API
app.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Server is Up and running...' });
});

app.listen(port, async () => {
  pool
    .connect()
    .then(() => console.log('Connected to the PostgreSQL database'))
    .catch((err) => console.error('connecting to the database error', err));

  await createTable(pool);
  console.log('Sever running...!');
});

export { pool };
