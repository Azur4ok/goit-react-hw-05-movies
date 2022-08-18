import {
  fetchSearchedMovie,
  fetchTrendingMovies,
  fetchMovieInfo,
  fetchCast,
} from 'axios/fetchData';

const fetchData = async (argv=null) => {
  try {
    let result = null;
    if(!argv) {
    const { results } = await fetchTrendingMovies();
    result = results;
    } else {
      const { results } = await fetchSearchedMovie(argv);
      result = results;
    }
    return (
      result &&
      result.map(object => ({
        id: object.id,
        title: object.name || object.title,
        poster_url: object.poster_path,
        vote_average: object.vote_average,
        vote_count: object.vote_count,
      }))
    );
  } catch (error) {
    console.log(error);
    alert('failed to retrieve');
  }
};

export const fetchMovieData = async id => {
  try {
    const response = await fetchMovieInfo(id);
    return {
      id: response.id,
      release_year: response.release_date.slice(0, 4),
      overview: response.overview,
      genres: response.genres,
      title: response.name || response.title,
      poster_url: response.poster_path,
      vote_average: response.vote_average,
    };
  } catch (error) {
    console.log(error);
    return alert('failed')
  }
};

export const fetchCastsData = async id => {
  try {
    const { cast } = await fetchCast(id);
    return (
      cast &&
      cast.map(object => ({
        id: object.id,
        name: object.name,
        character: object.character,
        image_url: object.profile_path,
      }))
    );
  } catch (error) {
    console.log(error);
    alert('failed to fetch');
  }
};

export default fetchData;
