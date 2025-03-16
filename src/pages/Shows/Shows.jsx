import React,{useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material';
import { fetchShows, fetchGenres } from '../../fetchData';
import Card from '../../Components/Card/Card';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import CustomFilter from '../../Components/CustomFilter/CustomFilter';

const Shows = () => {
   const [data, setData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [filters, setFilters] = useState({releaseYear:'', rating:'', genre:[]});
   const [genreList, setGenreList] = useState([]);
  
   useEffect(()=>{
         const fetchGenreData = async()=>{
           const data = await fetchGenres('tv');
           setGenreList([...data]);
         }
         fetchGenreData();
      },[]);

   useEffect(()=>{
    const fetchData  = async()=>{
      const {results=[]} = await fetchShows(currentPage,filters);
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
    <Typography variant="h4" fontWeight="bold" sx={{  fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, }}>
      TV Shows
    </Typography>

    <CustomFilter genreList={genreList} setFilters={setFilters} setCurrentPage={setCurrentPage}/>

    <Box mt={3} mb={2}
     display="flex"
     flexWrap="wrap"
     justifyContent="space-around"
    >
      {
        data?.map((item)=>(
          <Card key={item.id} id={item.id} name={item.title || item.name} poster={item.poster_path} media_type={'tv'} vote_average={item.vote_average} release_date={item.first_air_date||item.release_date}/>
        ))
      }

    </Box>
    <CustomPagination setPage={setCurrentPage}/>
  </Box>
  )
}

export default Shows