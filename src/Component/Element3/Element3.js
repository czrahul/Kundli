import React from 'react';
import './element3.css'
import image1 from '../Images/1.png'
import image2 from '../Images/2.png'
import image3 from '../Images/3.png'
import image4 from '../Images/4.png'
import image5 from '../Images/5.png'
import image6 from '../Images/6.png'
import image8 from '../Images/8.png'
import image9 from '../Images/9.png'
import image10 from '../Images/10.png'
import image12 from '../Images/12.png'
import image13 from '../Images/13.png'
import image14 from '../Images/14.png'
import image16 from '../Images/16.png'
import image18 from '../Images/18.png'
import image19 from '../Images/19.png'
import image20 from '../Images/20.png'
import image21 from '../Images/21.png'
import image22 from '../Images/22.png'


const Element3 = () => {
    return (
        <div className='element3'>
            <div className='elem1'>
                <span>
                    <h1>4,168+</h1>
                    <p>Total Astrologers</p>
                </span>
                <span>
                    <h1>37 Million Minutes</h1>
                    <p>Total Chat/Call Minutes</p>
                </span>
                <span>
                    <h1>55,660,410</h1>
                    <p>Total Customers</p>
                </span>
            </div>
            <div className='elem2'>
                <h1>ASTROTALK IN NEWS</h1>
                <span>
                    <img src={image1} alt='img' height='80px' width='150px' />
                    <img src={image2} alt='img' height='80px' width='150px' />
                    <img src={image3} alt='img' height='80px' width='150px' />
                    <img src={image4} alt='img' height='80px' width='150px' />
                    <img src={image5} alt='img' height='80px' width='150px' />
                    <img src={image6} alt='img' height='80px' width='150px' />                    
                </span>
                <span>
                    <img src={image3} alt='img' height='80px' width='150px' />
                    <img src={image8} alt='img' height='80px' width='150px' />
                    <img src={image9} alt='img' height='80px' width='150px' />
                    <img src={image10} alt='img' height='80px' width='150px' />
                    <img src={image2} alt='img' height='80px' width='150px' />
                    <img src={image12} alt='img' height='80px' width='150px' />                    
                </span>
                <span>
                    <img src={image13} alt='img' height='80px' width='150px' />
                    <img src={image14} alt='img' height='80px' width='150px' />
                    <img src={image6} alt='img' height='80px' width='150px' />
                    <img src={image16} alt='img' height='80px' width='150px' />
                    <img src={image6} alt='img' height='80px' width='150px' />
                    <img src={image18} alt='img' height='80px' width='150px' />                    
                </span>
                <span >
                    <img src={image19} alt='img' height='80px' width='150px' />
                    <img src={image20} alt='img' height='80px' width='150px' />
                    <img src={image21} alt='img' height='80px' width='150px' />
                    <img src={image22} alt='img' height='80px' width='150px' />
                </span>
            </div>
        </div>
    );
};

export default Element3;