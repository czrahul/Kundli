import React from 'react';
import './element2.css'
import Widget from '../Scroll_cards/ScrollCards';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Element2 = () => {
    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return (
        <div className='element2'>
            <h1>COMPLIMENTARY ASTROLOGY SERVICES</h1>
            <div className='widgets'>
                <Slider {...settings}>
                    <div className='widgets'>
                        <Widget type ='daily'/>
                    </div>
                    <div className='widgets'>
                        <Widget type ='free'/>
                    </div>
                    <div className='widgets'>
                        <Widget type ='compatibility'/>
                    </div>
                    <div className='widgets'>
                        <Widget type ='festival'/>
                    </div>
                    <div className='widgets'>
                        <Widget type ='kundli'/>
                    </div>
                    <div className='widgets'>
                        <Widget type ='chinese'/>
                    </div>
                    <div className='widgets'>
                        <Widget type ='today'/>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Element2;