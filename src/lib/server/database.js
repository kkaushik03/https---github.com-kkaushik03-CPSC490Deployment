import postgres from 'postgres';
import { PGCONNECT } from '$env/static/private'; // Correct way to access private env variables

// Check if the environment variable is available
if (!PGCONNECT) {
    throw new Error('Missing database connection string!');
}

// Create the SQL client using the connection string
const sql = postgres(PGCONNECT, {});

export default sql;