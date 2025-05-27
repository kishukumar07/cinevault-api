// Import statements need to use 'import ... from' syntax properly
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the database URL from environment variables
const dburl = process.env.DBURL;

console.log
// Create the connection
const connection = mongoose.createConnection(dburl);

// Export the connection
export default connection;
