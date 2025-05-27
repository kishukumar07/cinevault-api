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
    const { q, title, rating, sortBy, page = 1, limit = 5 } = req.query;

    // STEP 1: Build a filter object
    const filter = {};

    if (title) {
      filter.title = title; // exact match
    }

    if (rating) {
      filter.rating = rating; // exact match
    }

    if (q) {
      filter.title = { $regex: q, $options: 'i' }; // case-insensitive search
    }

    // STEP 2: Start building the query
    let query = movieModel.find(filter);

    // STEP 3: Apply sorting if sortBy is provided
    if (sortBy) {
      query = query.sort(sortBy); // e.g., rating or -rating
    }

    // STEP 4: Apply pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    query = query.skip(skip).limit(parseInt(limit));

    // STEP 5: Execute the query
    const movies = await query;

    res.status(200).json({
      success: true,
      count: movies.length,
      data: movies,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
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
















































