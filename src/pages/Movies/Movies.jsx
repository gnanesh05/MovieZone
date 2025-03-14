import React,{useState, useEffect} from 'react'
import { Box, Typography} from '@mui/material'
import Card from '../../Components/Card/Card'
import CustomPagination from '../../Components/Pagination/CustomPagination'
import { fetchMovies,fetchGenres } from '../../fetchData'
import CustomFilter from '../../Components/CustomFilter/CustomFilter'


const Movies = () => {
   const [data, setData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [filters, setFilters] = useState({releaseYear:'', rating:'', genre:[]});
   const [genreList, setGenreList] = useState([]);

   useEffect(()=>{
      const fetchGenreData = async()=>{
        const data = await fetchGenres('movie');
        setGenreList([...data]);
      }
      fetchGenreData();
   },[]);

   useEffect(()=>{
    const fetchData  = async()=>{
      const {results=[]} = await fetchMovies(currentPage, filters);
      setData([...results]);
    }
    fetchData();
   },[currentPage, filters]);

  return (
    <Box 
    display="flex"
    flexDirection="column" 
    justifyContent="start" 
    alignItems="center" 
    textAlign="center"
  >
    <Typography variant="h5" fontWeight="bold" sx={{  fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, }}>
      Movies
    </Typography>

    <CustomFilter genreList={genreList} setFilters={setFilters}/>
    
    <Box mt={3} mb={2}
     display="flex"
     flexWrap="wrap"
     justifyContent="space-around"
    >
      {
        data?.map((item,i)=>(
          <Card key={i} name={item.title} poster={item.poster_path} media_type={'movie'} vote_average={item.vote_average} release_date={item.release_date}/>
        ))
      }

    </Box>
    <CustomPagination setPage={setCurrentPage}/>
  </Box>
  )
}

export default Movies