import postgres from 'postgres';

const PGCONNECT = process.env.DATABASE_URL || 'postgres://udrskkfeujed89:pdf40e847bd0a225779abcea6f2712f8457f8c01b4f9c2f81bdffb10fc6a26c99@cat670aihdrkt1.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d7oa3f76jp43lc';

// Check if the environment variable is available
if (!PGCONNECT) {
    throw new Error('Missing database connection string!');
}

// Create the SQL client using the connection string
const sql = postgres(PGCONNECT, {
    ssl: { rejectUnauthorized: false } // Allow SSL self-signed certificates
});

export default sql;