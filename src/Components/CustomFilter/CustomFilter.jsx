import React,{useEffect, useState} from 'react'
import {Box, Button, Menu, MenuItem, Slider, Typography, Stack, useTheme} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

function getStyles(name, genre, theme) {
    return {
      fontWeight: genre.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
      width:"100%",
      display:"flex",
      alignItems: "center", // Centers items vertically
      justifyContent: "center",
      
    };
  }

function CustomFilter({genreList, setFilters, setCurrentPage}) {
    const theme = useTheme()
    const [anchorRating, setAnchorRating] = useState(null);
    const [anchorYear, setAnchorYear] = useState(null);
    const [anchorGenre, setAnchorGenre] = useState(null);
    const [releaseYear, setReleaseYear] = useState('');
    const [rating, setRating] = useState('');
    const [genre, setGenre] = useState([]);

    useEffect(()=>{
        setFilters({releaseYear:releaseYear,rating:rating, genre:genre});
        setCurrentPage(1);
       },[releaseYear, rating, genre]);

    const releaseMarks = [
        {
            value:1950,
            label:'1950',
        },
        {
            value:2024,
            label:'2025',
        },
    ];
   const ratingMarks = [
    {
        value:1.0,
        label:'1.0',
    },
    {
        value:10.0,
        label:'10.0',
    },
   ];

   const handleGenreChange = (value)=>{
    setGenre((prevState)=>{
        let newGenre = [...prevState]
        if(newGenre.includes(value)){
            newGenre = newGenre.filter((item)=>item!==value);
        }
        else{
            newGenre.push(value);
        }
        
        return [...newGenre];
    });
   }


    const handleReset = (setter, value)=>{
        setter(value);
    }

  return (
    <Box mt={3} mb={2}
    display="flex"
    flexWrap="wrap"
    justifyContent="space-between"
    gap={3}
    >
        <Stack>
          <Button onClick={(e) => setAnchorYear(e.currentTarget)} variant={releaseYear?"contained":"text"} endIcon={<KeyboardArrowDownIcon/>}>
            Release Year
          </Button>
          <Menu
            anchorEl={anchorYear}
            open={Boolean(anchorYear)}
            onClose={() => setAnchorYear(null)}
            
          >
            <Box width={400} ml={5} mr={5} height={100}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" >
                    <Typography id="non-linear-slider" gutterBottom>
                    Year: {releaseYear}
                    </Typography>
                    <Button variant='text' endIcon={<CloseIcon/>} sx={{color:'grey'}} onClick={(_)=>handleReset(setReleaseYear,'')}>Reset</Button>
                </Stack>
                <Slider
                value={releaseYear}
                min={1950}
                max={2025}
                step={1}
                onChange={(_,value)=>setReleaseYear(value)}
                marks={releaseMarks}
                />
            </Box>
          </Menu>
        </Stack>
      <Stack>
          <Button onClick={(e) => setAnchorRating(e.currentTarget)} variant={rating?"contained":"text"} endIcon={<KeyboardArrowDownIcon/>}>
            Rating
          </Button>
          <Menu
            anchorEl={anchorRating}
            open={Boolean(anchorRating)}
            onClose={() => setAnchorRating(null)}
          >
            <Box width={400} ml={5} mr={5} height={100}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" >
                    <Typography id="non-linear-slider" gutterBottom>
                    TMDB Rating: {rating}
                    </Typography>
                    <Button variant='text' endIcon={<CloseIcon/>} sx={{color:'grey'}} onClick={(_)=>handleReset(setRating,'')}>Reset</Button>
                </Stack>
                <Slider
                    value={rating}
                    min={1.0}
                    step={0.1}
                    max={10.0}
                    onChange={(_, newValue) => setRating(newValue)}
                    marks={ratingMarks}
                />
            </Box>
          </Menu>
        </Stack>
        <Stack>
            <Button onClick={(e) => setAnchorGenre(e.currentTarget)} variant={genre.length?"contained":"text"} endIcon={<KeyboardArrowDownIcon/>}>
                Genre
            </Button>
            <Menu
             sx={{ 
                "& .MuiMenu-paper": { width: 200 } // Makes the menu wider
              }}
            anchorEl={anchorGenre}
            open={Boolean(anchorGenre)}
            onClose={() => setAnchorGenre(null)}
            >
                <Box sx={{ display: "flex", justifyContent: "center"}}>
                    <Button 
                        variant="text" 
                        endIcon={<CloseIcon />} 
                        sx={{ color: "grey" }} 
                        onClick={() => handleReset(setGenre, [])}
                    >
                        Reset
                    </Button>
                </Box>
                {
                    genreList?.map((item, i)=>(
                        <MenuItem key={i} 
                        value={item.id} 
                        style={getStyles(item.id, genre, theme)}
                        onClick={()=>handleGenreChange(item.id)}
                        >
                            {item.name}
                        </MenuItem>
                    ))
                }
            </Menu>
        </Stack>
    </Box>
  )
}

export default CustomFilter