/* import postgres from 'postgres';
import { PGCONNECT } from '$env/static/private'; // Correct way to access private env variables

// Check if the environment variable is available
if (!PGCONNECT) {
    throw new Error('Missing database connection string!');
}

// Create the SQL client using the connection string
const sql = postgres(PGCONNECT, {});

export default sql; */
/* 
import postgres from 'postgres';

// Use DATABASE_URL in production and PGCONNECT in development
const connectionString = process.env.DATABASE_URL || process.env.PGCONNECT;

if (!connectionString) {
    throw new Error('Missing database connection string!');
}

// Create the SQL client using the connection string
const sql = postgres(connectionString, {
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false  // Required for Heroku PostgreSQL SSL connection
});

export default sql; */


import postgres from 'postgres';

// Use DATABASE_URL in production and PGCONNECT in development
const connectionString = process.env.DATABASE_URL || process.env.PGCONNECT;

if (!connectionString) {
    throw new Error('Missing database connection string!');
}

// Create the SQL client using the connection string
const sql = postgres(connectionString, {
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export default sql;