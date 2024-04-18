import {Link} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import {useEffect, useState} from 'react';
import { useContext } from 'react';
import { MyContext } from './MyContext';
import { Button } from '@mui/material';
export default function SearchAppBar()
{
  const {flag}=useContext(MyContext)
  
  return(
    <nav class="navbar  fixed-top navbar-expand-lg navbar-light bg-light" id="navbar-bt">
  <div class="container-fluid navbar-bt">
    <Link to='/'><a class="navbar-brand" href="#"><h3 className="brand">TinyTreasures</h3></a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/Legopage'><a class="nav-link">Lego</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#shop-by-age">Shop by Age</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Brands
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to='/Legopage'><li><a class="dropdown-item">Lego</a></li></Link>
          </ul>
        </li>
        <li class="nav-item">
          <Link to='/About'><a class="nav-link" href="#footer">About Us</a></Link>
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{height:'38px'}}/>
        <button class="btn btn-outline-dark" type="submit" style={{height:'38px'}}>Search</button>
        {flag?(<Link to='/Login'><button class="btn btn-dark" style={{marginLeft:'10px'}}>Login</button></Link>):
        (<Link to='/Profile/accountsettings'><Button variant='contained'  style={{marginLeft:'10px',backgroundColor:'black',color:'white'}}><PersonIcon/></Button></Link>)}
      </form>
    </div>
  </div>
</nav>
  )
}