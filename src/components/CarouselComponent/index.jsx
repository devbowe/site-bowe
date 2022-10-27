import React from 'react';
import { Carousel } from 'react-bootstrap'
import './carouselComponent.css';

const CarouselComponent = (props) => {

  return (
    <Carousel className="carrosel">
      {props.slides.map((slide, index) => {
        return <Carousel.Item key={index} interval={props.interval} >
          <div className="d-flex justify-content-center carousel-img w-100">
            {slide.img.map((img, indexImg) => {
              return <img key={indexImg} className="d-flex" src={img}
              />
            })}
          </div>
        </Carousel.Item>
      })}
    </Carousel>

  )
}

export default CarouselComponent;
