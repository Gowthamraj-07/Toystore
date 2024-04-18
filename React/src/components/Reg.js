import './Login.css';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchAppBar from './Navbar';
import axios from 'axios';
import {useState} from 'react';
import Popup from './Regpopup';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function SignUp()
{
    const[visible,setVisible]=useState(false);
    const[type,setType]=useState('password');
    function handleVisible()
    {
        if(type==='password')
        {
        setVisible(true);
        setType('text');
        }
        else{
            setVisible(false);
            setType('password');

        }
    }
    const[userdetail,setUserdetail]=useState({
      firstname:'',
      lastname:'',
      email:'',
      password:''
})
    function handleInput(event)
    {
      setUserdetail({...userdetail,[event.target.name]: event.target.value})

    }
    const[popup,setPopup]=useState(false);
    const[reg,setReg]=useState(true);
    
    async function post(event){
          event.preventDefault();
          try{
      await axios.post("http://localhost:8080/postdata",userdetail).
      then(res=> console.log(res)).
      catch(err=>console.log(err))
      console.log("posted")
      setPopup(true);
      setReg(true);
          }
          catch(err)
          {
            alert(err);
          }

    }
   


    
    return(
       <div>
        <div className='logpage'>
        <Popup trigger={popup}/>
        {reg&&<div className="logindiv" >
            
            <h1>Create an account</h1>
            <form onSubmit={post} >
            <TextField
            variant="outlined"
            onChange={handleInput}
            required
            id="firstname"
            placeholder='First name'
            name="firstname"
            InputProps={{
              sx: { backgroundColor:'rgba(255, 255, 255, .2)',width:'187px', color: 'white',marginBottom:'15px', borderRadius: '20px',marginLeft:'6px',marginRight:'6px' },
              placeholderTextColor: 'white',
            }}
          />
           <TextField
          
            variant="outlined"
            onChange={handleInput}
            required
            id="lastname"
            placeholder='Last name'
            name="lastname"
            InputProps={{
              sx: { backgroundColor:'rgba(255, 255, 255, .2)',width:'187px', color: 'white',marginBottom:'15px', borderRadius: '20px',marginLeft:'6px',marginRight:'6px' },
              placeholderTextColor: 'white',
            }}
          />
            <br />
            <TextField
            variant="outlined"
            onChange={handleInput}
            required
            id="username"
            placeholder='Email Address'
            name="email"
            InputProps={{
              sx: { backgroundColor:'rgba(255, 255, 255, .2)',width:'390px', color: 'white',marginBottom:'15px', borderRadius: '20px' },
              placeholderTextColor: 'white',
            }}
          />
            <div className='pass-field' style={{borderColor:"transparent"}}>
            <TextField
    placeholder="Password"
    
    type={type}
    InputProps={{
      sx: { backgroundColor:'rgba(255, 255, 255, .2)',width:'390px', color: 'white',marginBottom:'15px', borderRadius: '20px' },
              placeholderTextColor: 'white',
      endAdornment: (
        <InputAdornment position="end">
                <IconButton
                    onClick={
                      handleVisible
                    }
                    
                >
                    {visible ? (
                      <VisibilityIcon/>
                      ) : (
                        <VisibilityOffIcon />
                        )}
                </IconButton>
            </InputAdornment>
      ),
    }}
    required/>
    <br />
    <TextField
            variant="outlined"
            type='password'
            required
            onChange={handleInput}
            id="username"
            placeholder='Confirm password'
            name="password"
            InputProps={{
              sx: { backgroundColor:'rgba(255, 255, 255, .2)',width:'390px', color: 'white',marginBottom:'25px', borderRadius: '20px' },
              placeholderTextColor: 'white',
            }}
          />

            </div>
            
            <Button variant="contained" type='submit'  className='submit'>SIGN UP</Button>
            </form>
            <div className="remember">
           
            </div>
            <div className='altersignin'>

                <div> 
                <img src={require('./LoginPageImg/googl.png')} id='google' />
                <label htmlFor="" className='alterlog'><h6 style={{margin:'5px 0 0 3px',padding:'0',fontSize:'12px'}}>Signup with Google</h6></label>
                </div>
                <div>
                <img src={require('./LoginPageImg/fb-logo.jpg')} id='fb' />
                <label htmlFor="" className='alterlog'><h6 style={{margin:'5px 0 0 3px',padding:'0',fontSize:'12px'}}>Signup with Facebook</h6></label>
                </div>
            </div>
           


        </div>
}
        </div>
        </div>
    )
}