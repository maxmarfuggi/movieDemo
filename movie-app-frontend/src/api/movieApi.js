import axios from 'axios';

const API_URL = 'http://localhost:5000/api/movies';

export const getMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovie = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
};

// Add more functions for POST, PUT, DELETE as needed
