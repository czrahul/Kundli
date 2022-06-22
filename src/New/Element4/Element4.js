import React from 'react';
import './element4.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Template1 from '../Template1/Template1';




const Element4 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        
      };
    return (
        <div className='element4'>
            <div className='elem1'>
                <h1>OUR ASTROLOGERS</h1>
                <p> 4000+ Best Astrologers from India for Online Consultation </p>
            </div>
            <div className='scroll_online'>
                <Slider {...settings}>
                    <div className='online'>
                        <Template1 type='Jayant'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Vvinod'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Sujata'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Dimle'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Sanjeev'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Dilip'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Choudhary'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Lakshmish'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Nnisha'/>
                    </div>
                    <div className='online'>
                        <Template1 type='RamNaresh'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Pritirashmi'/>
                    </div>
                    <div className='online'>
                        <Template1 type='Shubham'/>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Element4;