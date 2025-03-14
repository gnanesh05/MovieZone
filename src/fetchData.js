import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY
const api_url = import.meta.env.VITE_API_URL

export const fetchTrending = async(page_number)=>{
  try {
    const response = await axios(`${api_url}/trending/all/day?api_key=${api_key}&page=${page_number}`);
    return response.data;
  } 
  catch (error) {
    console.log(error)
  }
}

export const fetchMovies = async(page_number, filter)=>{
  const {releaseYear, rating, genre} = filter;
  const genreQueryParam = encodeURIComponent(genre.join(','));
  console.log(filter, genreQueryParam, page_number);
  try {
    const response = await axios(`${api_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&primary_release_year=${releaseYear}&vote_average.gte=${rating}&with_genres=${genreQueryParam}&api_key=${api_key}&page=${page_number}`);
    return response.data;
  } 
  catch (error) {
    console.log(error)
  }
}

export const fetchShows =  async(page_number, filter)=>{
  try {
    const {releaseYear, rating, genre} = filter;
    const genreQueryParam = encodeURIComponent(genre.join(','));
    const response = await axios(`${api_url}/discover/tv?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&first_air_date_year=${releaseYear}&vote_average.gte=${rating}&with_genres=${genreQueryParam}&api_key=${api_key}&page=${page_number}`);
    return response.data;
  } 
  catch (error) {
    console.log(error)
  }
}

export const fetchGenres = async(type)=>{
  try{
    const response = await axios(`${api_url}/genre/${type}/list?api_key=${api_key}&language=en-US`)
    return response.data.genres;
  }
  catch(error){
    console.log(error)
  }
}