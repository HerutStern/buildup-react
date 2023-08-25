import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { InputBase, alpha, styled } from '@mui/material';
import { SetUserContext, UserContext } from '../Context/UserContext';

const settings = ['LOGIN', 'SIGNUP', 'LOGOUT'];
  const settingsMapping = {
    Home: '/',
    'LOGIN': '/login',
    'SIGNUP': '/signup',
    'LOGOUT': '/'
  }


const pages = ['HOME', 'BUILDING PERMITS', 'SEND A NEW BUILDING PERMIT', 'BUILDING PERMIT TEMPLATE', 'FILES']
  const pageMapping = {
      'HOME': '/',
      'BUILDING PERMITS': '/building-permits',
      'SEND A NEW BUILDING PERMIT': '/new-building-permit',
      'BUILDING PERMIT TEMPLATE': '/template',
      'FILES': '/files'
  }

  
const Header = () => {
    const setUser = React.useContext(SetUserContext)
    const user = React.useContext(UserContext)
    console.log(user)

    const navigate = useNavigate()

    const handlePageClick = (pageName) => {
        navigate(pageMapping[pageName])
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (pageName) => {
    navigate(pageMapping[pageName])
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    navigate(settingsMapping[setting])
    if (setting==='Logout'){
      localStorage.removeItem('token')
      setUser(
        {user: {}}
      )
    }
    console.log(user)
    setAnchorElUser(null);
  };

// https://storage.googleapis.com/buildup/buildupS.jpg
// https://i.ibb.co/HVdMP5P/buildup2.jpg
    return(
      <>
        <AppBar position="static" style={{boxShadow: 'none'}} sx={{background: 'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img style={{padding: "2em" ,height: "auto", width: "10em", "object-fit": "contain"}}
               src="https://i.ibb.co/HVdMP5P/buildup2.jpg" alt="buildup" border="0"/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu} 
            >
              <MenuIcon  style={{ fill: 'grey' }}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { paddingLeft: "2em", xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button style={{ color: 'grey', fontSize: "0.7em" }}
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ padding: "1.5em",my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonOutlineIcon style={{padding: "1em", fill: 'black' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '-10px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      </>
    )
}

export default Header;