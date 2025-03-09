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

export const fetchMovies = async(page_number)=>{
  try {
    const response = await axios(`${api_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${api_key}&page=${page_number}`);
    return response.data;
  } 
  catch (error) {
    console.log(error)
  }
}

export const fetchShows =  async(page_number)=>{
  try {
    const response = await axios(`${api_url}/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${api_key}&page=${page_number}`);
    return response.data;
  } 
  catch (error) {
    console.log(error)
  }
}