import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connection from './src/configs/db.js';

const app = express();

app.use(express.json());

// Your middlewares here

app.get('/', (req, res) => {
  res.end('talking with server');
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {  
  console.log(`Server is live at: http://localhost:${port}`);

  try {
   await connection ;
      console.log('Server connected to DB');
  } catch (err) {
    console.error('Unexpected error:', err);
  }
});

