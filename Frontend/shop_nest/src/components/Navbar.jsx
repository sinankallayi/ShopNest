import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, IconButton, TextField } from '@mui/material';
import cart from 'assets/grocery-store.png';
import { Link } from 'react-router-dom';
import user from 'assets/user.png';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Convert searchQuery to lowercase to make the search case-insensitive
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
    <div>
      <AppBar position="fixed" color="default" sx={{ height: 80 }}>
        <Toolbar sx={{ minHeight: 80, justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <h2 style={{ fontFamily: 'Abril Fatface, cursive', fontWeight: 'bold' }}>ShopNest</h2>
            <ul className='ulstyle' style={{ display: 'flex', marginLeft: '110%', listStyle: 'none', padding: 0 }}>
              <li><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><h3><b>HOME</b></h3></Link></li>
              <li><Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}><h3><b>ABOUT</b></h3></Link></li>
              <li><Link to='/shop' style={{ textDecoration: 'none', color: 'inherit' }}><h3><b>SHOP</b></h3></Link></li>
              <li><Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}><h3><b>CONTACT</b></h3></Link></li>
            </ul>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ marginRight: 1, width: '200px' }}
            />
            <IconButton color="primary" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
            <Button><Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}><h3><b>LOGIN</b></h3></Link></Button>
            <Link to='/cart'><img style={{ marginLeft: '20px', marginRight: '10px' }} src={cart} width={30} height={30} alt='cart' /></Link>
            <Link to='/profile'><img style={{ marginLeft: '10px' }} src={user} width={30} height={30} alt='user' /></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
