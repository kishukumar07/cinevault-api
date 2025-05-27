import { movieModel } from "../models/movie.js";  


//createMovie 
export const createMovie = async (req, res) => {
  try {
    const movie = await movieModel.create(req.body);
    res.status(201).json({ success: true, data: movie });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//getAllMovies 
export const getAllMovies = async (req, res) => {
  try {
    const movies = await movieModel.find();
    res.status(200).json({ success: true, data: movies });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


//getMovieBYID(params) 
export const getMovieById = async (req, res) => {
  try {
    const movie = await movieModel.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json({ success: true, data: movie });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


//UpdateMovie
export const updateMovie = async (req, res) => {
  try {
    const movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json({ success: true , data: movie });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//deleteMovie 
export const deleteMovie = async (req, res) => {
  try {
    const movie = await movieModel.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json({ success: true, message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
















































