import axios from './index';

export const fetchTrendingMovies = async() => {
  const {data} = await axios.get(
    `trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  return data;
}

export const fetchMovieInfo = async id => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  return data;
};

export const fetchReviews = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  return data;
};

export const fetchSearchedMovie = async name => {
  const { data } = await axios.get(
    `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${name}&page=1&include_adult=false`
  );
  return data;
};

