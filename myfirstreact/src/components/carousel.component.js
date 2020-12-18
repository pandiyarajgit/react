import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';




export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay centerMode={true} showThumbs={false} dynamicHeight={true}>
                <div>
				     
                    <img src="../img-01.jpg" />
					 <p className="legend">Product Name : Apple | <i>Category : Fruit</i> </p>
					 
					
                </div>
                <div>
                    <img src="../img-02.jpg" />
				        <p className="legend">Product Name : Apple | <i>Category : Fruit</i> </p>
					 
					
                </div>
                <div>
                    <img src="../img-03.jpg" />
					  <p className="legend">Product Name : Apple | <i>Category : Fruit</i> </p>
					 
					 
                </div>
				 <div>
				   
                    <img src="../img-01.jpg" />
					  <p className="legend">Product Name : Apple | <i>Category : Fruit</i> </p>
					 
					 
					
                </div>
				<div>
                    <img src="../img-02.jpg" />
				        <p className="legend">Product Name : Apple | <i>Category : Fruit</i> </p>
					 
					
                </div>
                <div>
                    <img src="../img-03.jpg" />
					  <p className="legend">Product Name : Apple | <i>Category : Fruit</i> </p>
					 
					 
                </div>
				
            </Carousel>
        </div>
    );
}



