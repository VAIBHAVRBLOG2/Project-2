import React from "react";
import reactDom from "react-dom";
import '../App.css';


function Nav() {
    return (
      <nav>
        <div className="_nav">
            <div className="_nav1"><img  className="_logo" src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg" /></div>
            <div className="_nav2"><a>What's New</a></div>
            <div className="_nav3">
                <a className="btn_h link_btn">Free listing</a>
                <a className="link_btn">Advertise</a>
                <a className="link_btn">Login/signup</a>
            </div>
         
         </div>
      </nav>
      
    );
  }
  
  export default Nav;
  