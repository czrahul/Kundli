import React from 'react';
import './element4.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import as1 from '../Images/as1.jpg'
import as2 from '../Images/as2.jpg'
import as3 from '../Images/as3.jpg'
import as4 from '../Images/as4.jpg'
import as5 from '../Images/as5.jpg'
import as6 from '../Images/as6.jpg'
import as7 from '../Images/as7.jpg'
import as8 from '../Images/as8.jpg'
import as9 from '../Images/as9.jpg'
import as10 from '../Images/as10.jpg'
import as11 from '../Images/as11.jpg'
import as12 from '../Images/as12.jpg'
import bgimage from '../Images/astro-background-gray.jpg'



const Element4 = () => {
    const settings = {
        // dots: true,
        infinite: false,
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
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as1} alt = 'img' height='150px' width='150px' id='photo' />
                        <h3>Jayant</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as2} alt = 'img' height='150px' width='150px'  />
                        <h3>Vvinod</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as3} alt = 'img' height='150px' width='150px'  />
                        <h3>Sujata</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as4} alt = 'img' height='150px' width='150px' id='photo' />
                        <h3>Dimple</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as5} alt = 'img' height='150px' width='150px'  />
                        <h3>Sanjeev</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as6} alt = 'img' height='150px' width='150px'  />
                        <h3>Dilip</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as7} alt = 'img' height='150px' width='150px'  />
                        <h3>Choudhary</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as8} alt = 'img' height='150px' width='150px'  />
                        <h3>Lakshmish</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as9} alt = 'img' height='150px' width='150px'  />
                        <h3>Nnisha</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as10} alt = 'img' height='150px' width='150px'  />
                        <h3>RamNaresh</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as11} alt = 'img' height='150px' width='150px'  />
                        <h3>Pritirashmi</h3>
                        <p>Vedic Astrology</p>
                    </div>
                    <div className='online'>
                        <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                        <img src={as12} alt = 'img' height='150px' width='150px'  />
                        <h3>Shubham</h3>
                        <p>Vedic Astrology</p>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Element4;