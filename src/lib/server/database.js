import postgres from 'postgres';

// Use DATABASE_URL instead of PGCONNECT from your Heroku environment
const PGCONNECT = process.env.DATABASE_URL; // Correctly access the environment variable

// Check if the environment variable is available
if (!PGCONNECT) {
    throw new Error('Missing database connection string!');
}

// Create the SQL client using the connection string and enable SSL if needed (Heroku generally requires SSL for Postgres)
const sql = postgres(PGCONNECT, {
    ssl: { rejectUnauthorized: false } // Set to false to allow self-signed certificates
});

export default sql;