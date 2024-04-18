import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import './Profile.css';
import { json, useParams } from "react-router-dom";
import Footer from "./Footer";
import SingleBanner from './Banner/SingleBanner';
import Accountfetch from "./Accountfetch";
import Usersidebar from "./Userprofile/Usersidebar";
import Accountsetting from "./Userprofile/Accountsetting";
export default function Profile()
{
    const {activepage}=useParams();
   
    return (
        <div className="userprofile">
            <SingleBanner/>
            <div className="userprofilein">
                <div className="left">
                    <Usersidebar activepage={activepage}/>
                </div>
                <div className="right">
                    {activepage==='accountsettings'&&<Accountsetting/>}
                </div>
            </div>
            <Footer/>
        </div>
    );
    
}