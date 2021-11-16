import React from "react";
import reactDom from "react-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
  

function Hero() {
    return (

<div className="container-fluid">

<Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/Flights.jpg"
      alt="Image One"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/logistic-banner-web.jpg"
      alt="Image Two"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd_new/jdmart-banner.jpg"
      alt="Image Two"
    />
    
  </Carousel.Item>
</Carousel>
</div>
      
    );
  }
  
  export default Hero;
  