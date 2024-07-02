
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Men from './pages/Mens';
import Women from './pages/Women';
import Kids from './pages/Kids';

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
        <Route path='/mens' element={<Men/>}/>
        <Route path='/womens' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        </Routes>



   </div>
    </div>
  );
}

export default App;
