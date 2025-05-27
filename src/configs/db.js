// src/db/connection.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dburl = process.env.DBURL;

if (!dburl) {
  throw new Error('DBURL not found in .env file');
}

// Using mongoose.connect (not createConnection) is recommended for most apps
mongoose
  .connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

export default mongoose;
