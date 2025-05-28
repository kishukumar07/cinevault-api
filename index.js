import express from 'express';
import dotenv from 'dotenv';
import connection from './src/configs/db.js';
import movieRoutes from './src/routes/movieRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Allow CORS ONLY from this origin
const allowedOrigin = 'https://fastidious-shortbread-dcfe0c.netlify.app';

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || origin === allowedOrigin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('talking with server');
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {  
  console.log(`Server is live at: http://localhost:${port}`);

  try {
    await connection();
    console.log('Server connected to DB');
  } catch (err) {
    console.error('Unexpected error:', err);
  }
});
