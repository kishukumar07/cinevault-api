import express from 'express';
import {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} from '../controllers/movieController.js';

const router = express.Router();

router.route('/')
  .get(getAllMovies)
  .post(createMovie);

router.route('/:id')
  .get(getMovieById)
  .put(updateMovie)
  .delete(deleteMovie);

export default router;




