
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{marginTop:'90px'}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='navbar' element={<Navbar/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        


      </Routes>
      </div>
    </div>
  );
}

export default App;
