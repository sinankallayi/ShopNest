import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import { Button,  } from '@mui/material'
import cart from 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/assets/grocery-store.png'
import { Link,} from 'react-router-dom'



const Navbar = () => {

  // const [menu,setMenu]=useState("home");


    
  return (
    <div className='containerStyle'>
        <AppBar position="fixed" color="default">
          <Toolbar>
              <h2><b>ShopNest</b></h2>
              <ul className='ulstyle' style={{marginLeft:'35%'}}>
                <li><Link to='/' style={{textDecoration:'none'}}><h3><b>HOME</b></h3></Link></li>
                <li><Link to='/about' style={{textDecoration:'none'}}><h3><b>ABOUT</b></h3></Link></li>
                <li><Link to='/shop' style={{textDecoration:'none'}}><h3><b>SHOP</b></h3></Link></li>
                <li><Link to='/contact' style={{textDecoration:'none'}}><h3><b>CONTACT</b></h3></Link></li>
              </ul>
            <div style={{marginLeft:'450px'}}>
            <Button><Link to='/login' style={{textDecoration:'none'}}><h3><b>LOGIN</b></h3></Link></Button>&nbsp;&nbsp;
            </div>
            &nbsp;&nbsp;
            <img src={cart} width={30} height={30} alt='cart'/>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar


