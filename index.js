import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

// Your middlewares here

app.get('/', (req, res) => {
  res.end('talking with server');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is live at: http://localhost:${port}`);
});
