import './AboutUsMain.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SecurityIcon from '@mui/icons-material/Security';
import { Button } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom'
export default function Aboutus()
{
    return(
        <div>
        <div className="abtus">
            <div style={{paddingTop:'50px'}}>
                <h1 style={{fontWeight:'800'}}>TinyTreasures</h1>
                <p style={{marginTop:'30px',fontSize:'18px',color:'white'}}>Welcome to Tiny Treasures - Where Playful Dreams Come to Life!</p>

<p style={{fontSize:'18px',color:'white'}}>At Tiny Treasures, we believe in the magic of childhood and the power of play. our toy store is more than just a place to buy toys; it's a haven for imagination, a space where laughter echoes, and where the joy of discovery is sparked in every corner.</p>
            <Link to='/Legopage'><Button style={{backgroundColor:'white',color:'black',marginTop:'20px',width:'150px',height:'40px'}}>SHOP NOW</Button></Link>
            </div>
        </div>
            <div className='whyus'>
                <h1 style={{color:'#D83D4C',fontWeight:'800',margin:'30px 0 70px 0'}}>WHY CHOOSE US?</h1>
            <div class="container">
  <div class="row">
    <div class="col">
      <CheckCircleIcon style={{color:'#D83D4C',fontSize:'70px'}}/>
      <h4 style={{color:'#D83D4C',fontWeight:"800",fontSize:'20px',margin:'20px 0'}}>Original<br/> Products</h4>
    </div>
    <div class="col">
      <EmojiEmotionsIcon style={{color:'#D83D4C',fontSize:'70px'}}/>
      <h4 style={{color:'#D83D4C',fontWeight:"800",fontSize:'20px',margin:'20px 0'}}>Shipping Across India</h4>
    </div>
    <div class="col">
      <LocalShippingIcon style={{color:'#D83D4C',fontSize:'70px'}}/>
      <h4 style={{color:'#D83D4C',fontWeight:"800",fontSize:'20px',margin:'20px 0'}}>A+ Customer Reviews</h4>
    </div>
    <div class="col">
    <SecurityIcon style={{color:'#D83D4C',fontSize:'70px'}}/>
      <h4 style={{color:'#D83D4C',fontWeight:"800",fontSize:'20px',margin:'20px 0'}}>Secured Payments</h4>
    </div>
  </div>
</div>
            </div>
            <div className='mission'>
                <h1 style={{color:'black',fontWeight:'800',marginBottom:'25px'}}>Our Mission</h1>
                <p style={{fontSize:'16px',marginBottom:'80px'}}>At Tiny Treasures, we are on a mission to redefine playtime. We believe that toys are more than just objects – they are gateways to a world of possibilities. That's why we carefully select each item in our store, ensuring they meet the highest standards of safety, quality, and, most importantly, fun. We aim to foster a love for learning, creativity, and exploration in every child who walks through our doors.</p>
            </div>
           
            <div className='accordion' >
                <h1 style={{color:'black',fontWeight:'800',marginBottom:'80px'}}>FREQUENTLY ASKED QUESTIONS</h1>
                
             
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 style={{color:'black',fontWeight:'400'}}>Do you offer gift wrapping services?</h4>
        </AccordionSummary>
        <AccordionDetails>
           <p style={{textAlign:'left',fontSize:'16px'}}>
           Absolutely! We provide gift wrapping services to make your present extra special. You can select this option during the checkout process.
            </p>
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 style={{color:'black',fontWeight:'400'}}>Can I return a toy if it's not suitable?</h4>
        </AccordionSummary>
        <AccordionDetails>
           <p style={{textAlign:'left',fontSize:'16px'}}>
           Yes, we have a hassle-free return policy. If the toy doesn't meet your expectations, you can return it within 7 days of purchase. Please refer to our Returns & Exchanges page for more details.
            </p>
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 style={{color:'black',fontWeight:'400'}}>How can I track my order?</h4>
        </AccordionSummary>
        <AccordionDetails>
           <p style={{textAlign:'left',fontSize:'16px'}}>
           Once your order is shipped, you'll receive a confirmation email with a tracking number. You can use this number to track the status of your shipment on our website or the courier's site.
            </p>
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 style={{color:'black',fontWeight:'400'}}>How can I contact customer support?</h4>
        </AccordionSummary>
        <AccordionDetails>
           <p style={{textAlign:'left',fontSize:'16px'}}>
           You can reach our friendly customer support team through the "Contact Us" page on our website. We're here to assist you with any questions or concerns..
            </p>
        </AccordionDetails>
      </Accordion>
    
      
            </div>
        </div>
    )
}


