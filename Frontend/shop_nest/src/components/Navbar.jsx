import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import { Button,  } from '@mui/material'
import cart from 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/assets/grocery-store.png'
import { Link,} from 'react-router-dom'
// import logo from 'D:/Tutorial/ICT/ShopNest/Frontend/shop_nest/src/assets/ShopNest_logo.png'


const Navbar = () => {

  // const [menu,setMenu]=useState("home");


    
  return (
    <div>
        <AppBar position="fixed" color="default" sx={{ height: 80 }}>
          <Toolbar sx={{ minHeight: 80 }}>
          {/* <img src={logo} width={80} height={80} alt='logo'/> */}
          <div  className='containerStyle'>
              <h2 className='abril-fatface-regular'><b>ShopNest</b></h2>
              <ul className='ulstyle' style={{marginLeft:'31.5%'}}>
                <li className='listyle'><Link to='/'><h3><b>HOME</b></h3></Link></li>
                <li className='listyle'><Link to='/about'><h3><b>ABOUT</b></h3></Link></li>
                <li className='listyle'><Link to='/shop'><h3><b>SHOP</b></h3></Link></li>
                <li className='listyle'><Link to='/contact'><h3><b>CONTACT</b></h3></Link></li>
              </ul>
            <div style={{marginLeft:'33%'}}>
            <Button className='buttonstyle'><Link to='/login'><h3><b>LOGIN</b></h3></Link></Button>&nbsp;&nbsp;
            </div>
            &nbsp;&nbsp;
            <img src={cart} width={30} height={30} alt='cart'/>
            </div>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar


