import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataById } from '../../fetchData';
import { img_300,unavailable } from '../../config';
import CastCard from '../../Components/CastCard/CastCard';

function Details({mediaType}) {
    const {id} = useParams();
    console.log(mediaType)

    const [data, setData] = useState({});
    const [genre, setGenre] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetchDataById(id, mediaType);
            setData(response);
            setGenre([...response.genres.map((item)=>item.name)]);
           
        }
        fetchData();
    },[]);

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Box
            sx={{
                position: "relative",
                height: "40vh",
                display: "flex",
                alignItems: "flex-end", // Places text at the bottom
                // padding: "20px",
                color: "white",
                // background: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))", // Smooth blend
                backgroundColor: '#0c131e'
            }}
        >
        {/* Left side - Title and Details */}
            <Box sx={{ width: "35%", padding: "20px", zIndex: 2 }}>
                <Typography variant="h3">{data.original_title || data.name}</Typography>

                {/* Release Year and Runtime */}
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                {data.runtime ? `${data.runtime} min` : `${data.number_of_seasons} Seasons`} ⭐ {data.vote_average} 
                </Typography>

                {/* Genres */}
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                {genre.join(',')}
                </Typography>
            </Box>

            {/* Right side - Image with gradient overlay */}
            <Box
                sx={{
                width: "65%", // Image takes 65% width
                height: "100%",
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), 
                    url(${`${img_300}/${data.backdrop_path}`})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                }}
            />
        </Box>

        {/* summary section */}
        <Box mt={3} ml={2}>
            <Typography variant='h4'> 
                Overview
            </Typography>
            <Typography  variant="subtitle1" sx={{textWrap:'wrap'}}>
                {data.overview}
            </Typography>
        </Box>

        {/* cast section */}
        <Box mt={3} ml={2}>
            <Typography variant='h4'> 
                Cast
            </Typography>
            <CastCard mediaType={mediaType} id={id}/>
        </Box>
    </Box>
    
  )
}

export default Details