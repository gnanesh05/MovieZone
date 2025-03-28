import React, {useState, useEffect} from 'react'
import { Box, Typography } from "@mui/material";
import Card from '../../Components/Card/Card';
import { fetchTrending } from '../../fetchData';
import CustomPagination from '../../Components/Pagination/CustomPagination';

const Trending = () => {
 const [data, setData] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);

 useEffect(()=>{
  const fetchData  = async()=>{
    const {results=[]} = await fetchTrending(currentPage);
    setData([...results]);
  }
  fetchData();
 },[currentPage]);


  return (
    <Box 
      display="flex"
      flexDirection="column" 
      justifyContent="start" 
      alignItems="center" 
      textAlign="center"
    >
      <Typography variant="h4" fontWeight="bold" sx={{  fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, }}>
        Trending Now
      </Typography>
      <Box mt={3} mb={2}
       display="flex"
       flexWrap="wrap"
       justifyContent="space-around"
      >
        {
          data?.map((item,i)=>(
            <Card key={i} id={item.id} name={item.title || item.name} poster={item.poster_path} media_type={item.media_type} vote_average={item.vote_average} release_date={item.first_air_date||item.release_date}/>
          ))
        }

      </Box>
      <CustomPagination setPage={setCurrentPage}/>
    </Box>
  )
}

export default Trending