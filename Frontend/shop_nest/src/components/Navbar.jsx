import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Button,  } from '@mui/material'
import cart from 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/assets/grocery-store.png'
import { NavLink } from 'react-router-dom'



const Navbar = () => {


    
  return (
    <div>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography variant="h6">
              <b>ShopNest</b>
            </Typography>
            <div style={{marginLeft:'450px'}}>
            <Button><NavLink to='/'><h3><b>HOME</b></h3></NavLink></Button>&nbsp;&nbsp;
            <Button><NavLink to='/about'><h3><b>ABOUT</b></h3></NavLink></Button>&nbsp;&nbsp;
            <Button><NavLink to='/shop'><h3><b>SHOP</b></h3></NavLink></Button>&nbsp;&nbsp;
            <Button><NavLink to='/contact'><h3><b>CONTACT</b></h3></NavLink></Button>
            </div>
            <div style={{marginLeft:'450px'}}>
            <Button><NavLink to='/login'><h3><b>LOGIN</b></h3></NavLink></Button>&nbsp;&nbsp;
            </div>
            &nbsp;&nbsp;
            <img src={cart} width={30} height={30} alt='cart'/>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar