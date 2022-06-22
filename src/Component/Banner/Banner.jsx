import React from 'react';
import "./banner.css"

const Banner = () => {
    return (
        <div className='banner'>
            <div className='left'>
                <img src="https://astrotalk.com/assets/images/banner/Shweta.webp" alt="ShwetaTiwari" width="223" height="362" />
                <span>Shweta Tiwari</span>
            </div>
            <div className='right'>
                <span id='span1'>Got any questions?</span>
                <span id='span2'>Chat with Astrologer</span>
                <span id='span3'>FOR FREE</span>
                <button>Chat now</button>
            </div>
        </div>
    );
};

export default Banner;