import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TheatersIcon from '@mui/icons-material/Theaters';

const pages = ['Trending', 'Movies', 'Tv Shows'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: '300px', // Wider search bar
  [theme.breakpoints.up('md')]: {
    maxWidth: '400px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '16ch',
      '&:focus': {
        width: '24ch',
      },
    },
  },
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
   <>
     <AppBar position="fixed" sx={{ backgroundColor: '#060d17' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

          {/* Small Screens: Hamburger, Title, Search */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', width: '100%' }}>
            
            {/* Hamburger Menu */}
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page,i) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center',  color:  currentPage === i? '#d9e8ed': '#999c9f' }} 
                    onClick={()=>setCurrentPage(i)}
                    component={Link} 
                    to={page.replace(/\s+/g, '').toLowerCase()==='trending' ? '/' : `/${page.replace(/\s+/g, '').toLowerCase()}`}
                    >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

            {/* Title */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={()=>window.scrollTo(0,0)}
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#c0be2a',
                textDecoration: 'none',
                flexGrow: 1,
                textAlign: 'center',
              }}
            >
              MovieZone
            </Typography>

            {/* Search */}
            <Search sx={{ ml: 2 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

          </Box>

          {/* Normal Screens: Title, Pages, Search */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', width: '100%' }}>
            
            {/* Title */}
            <TheatersIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#c0be2a',
                textDecoration: 'none',
                mr: 3,
              }}
            >
              MovieZone
            </Typography>

            {/* Page Links */}
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {pages.map((page,i) => (
                <Button key={page} sx={{ mx: 1, color:  currentPage === i? '#d9e8ed': '#999c9f'}} 
                        onClick={()=>setCurrentPage(i)}
                        component={Link} 
                        to={page.replace(/\s+/g, '').toLowerCase()==='trending' ? '/' : `/${page.replace(/\s+/g, '').toLowerCase()}`}>
                  {page}
                </Button>
              ))}
            </Box>

            {/* Search */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search For Title"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar/>
   </>
  );
}

export default ResponsiveAppBar;
