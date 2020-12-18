import React, { Component } from 'react'  
 

import Slider from "react-slick";  

export class Carousel extends Component {  
    render() {  
        var images = [    
            { img: 'assets/w5.jpeg' },    
            { img: 'assets/w41.jpeg' },    
            { img: 'assets/w3.jpg' },    
            { img: 'assets/w4.jpeg' },    
            { img: 'assets/w4.jpeg' },    
            { img: 'assets/w4.jpeg' },    
          ];   
    var imgSlides = () =>  
    images.map(num => (  
      <div className="imgpad">  
          <img className="imgdetails" src= {num.img} width="100%"/>    
      </div>  
    ));  
  return (  
    <div className="App">  
         <div class='container-fluid'>        
            <div className="row title" style={{marginBottom: "20px"}} >        
            <div class="col-sm-12 btn btn-info">        
            Image Slider In React Application     
            </div>        
            </div>    
            </div>  
      <Slider  
    dots={true}  
        slidesToShow={2}  
        slidesToScroll={2}  
        autoplay={false}  
        arrows={true}  
        autoplaySpeed={3000}>{imgSlides()}</Slider>  
    </div>  
  );  
}  
}  
export default Carousel 