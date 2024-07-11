import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useUser } from 'hooks/useUser';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = [{ name: 'Home', link: "/" }, { name: 'About', link: "/about" }, { name: 'Shop', link: "/shop" }, { name: 'Contact', link: "/contact" }];
const profile = [{ name: 'Profile', link: '/profile' }, { name: 'Logout', link: '/logout' }];
const login = [{ name: 'Login', link: '/login' }];

function Navbar() {
  const { user, logout } = useUser();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLinkClick = (page) => {
    if (page.link === "/logout") {
      logout();
      navigate('/');
    } else {
      navigate(page.link);
    }
    handleCloseNavMenu();
    handleCloseUserMenu();
  };

  const logoName = "ShopNest";

  const [settings, setSettings] = useState(login);
  
  useEffect(() => {
    setSettings(user == null ? login : profile);
  }, [user]);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    if (query.includes('women')) {
      navigate('/womens');
    } else if (query.includes('men')) {
      navigate('/mens');
    } else if (query.includes('kids')) {
      navigate('/kids');
    } else {
      alert('No matching category found!');
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => handleLinkClick({ link: "/" })}
            sx={{
              mr: 58,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            {logoName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.link} onClick={() => handleLinkClick(page)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => handleLinkClick({ link: "/" })}
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
            {logoName}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleLinkClick(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0.05, display: { xs: 'none', md: 'flex' } }}>
            <TextField
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearch}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
              sx={{ backgroundColor: 'white', borderRadius: '4px', mr: 2 }}
            />
            <IconButton
              size="large"
              aria-label="account of current user"
              onClick={() => handleLinkClick({ link: '/cart' })}
              color="inherit"
            >
              <ShoppingBag />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user?.email} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={() => handleLinkClick(setting)}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
