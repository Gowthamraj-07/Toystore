
import './App.css';
import Login from './components/Login';
import ButtonAppBar from './components/Slogon';
import SignUp from './components/Reg';
import SearchAppBar from './components/Navbar';
import Slogon from './components/Slogon';
import Brands from './components/PopularBrands';
import Shopbyage from './components/Shopbyage';
import Legostore from './components/LegoStore';
import Footer from './components/Footer';
import Home from './HomePage';
import Legopage from './components/Legopage';
import LegoHomePage from './LegoHomePage';
import Aboutuspage from './Aboutus';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from './components/MyContext';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Profile from './components/Profile';
function App()
{
  const [flag,setFlag]=useState(true);
  const [userid,setUserId]=useState(0);
  useEffect(()=>{
    document.title="TinyTreasures"
  })
  return (    
    <div className='App'>
       <Router>
        <MyContext.Provider value={{flag,setFlag,userid,setUserId}}>
       <SearchAppBar/>
        <Routes>
          
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
          <Route exact path='/Reg' element={<SignUp/>}></Route>
          <Route exact path='/Legopage' element={<LegoHomePage/>}></Route>
          <Route exact path='/About' element={<Aboutuspage/>}></Route>
          <Route exact path='/Profile/:activepage' element={<Profile/>}></Route>
          
        </Routes>
        </MyContext.Provider>
      </Router> 
     
      
        
      
    </div>
  );
}

export default App;
