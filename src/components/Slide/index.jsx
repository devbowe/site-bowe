import React from 'react';
import { Carousel } from 'react-bootstrap'
import '../CarouselComponent/carouselComponent.css';

const CarouselComponent = (props) => {

    return (
        <Carousel className="carrosel">
            {props.slides.map((slide, index) => {
                return <Carousel.Item key={index} interval={props.interval} >
                    <div className="d-flex flex-column justify-content-center">
                        <h2>
                            {slide.title}
                            <span>{slide.subtitle}</span>
                        </h2>
                        <span>{slide.text}</span>
                    </div>
                </Carousel.Item>
            })}
        </Carousel>
    )
}

export default CarouselComponent;
