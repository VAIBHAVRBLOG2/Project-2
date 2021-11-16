import { LongWithoutOverridesClass } from "bson";
import React from "react";
import reactDom from "react-dom";
import '../App.css';
import firebase from 'firebase/compat';



function Navbar() {

  
  
  function signout(){
    firebase.auth().signOut().then(() => {
     alert('signout successful');
     window.location = '/';
     
    }).catch((error) => {
      
    });

  }





    return (
      <nav>
        <div className="_nav">
            <div className="_nav1"><img  className="_logo" src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg" /></div>
            <div className="_nav2"><a>What's New</a></div>
            <div className="_nav3">
                
                
                <button className="button-primary w-button" onClick={signout}>Logout</button>
            </div>
         
         </div>
      </nav>
      
    );
  }
  
  export default Navbar;