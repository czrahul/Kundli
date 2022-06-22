import React from 'react';
import "./card.css"
import message from '../Images/message.png'
import call from '../Images/call.png'
import live from '../Images/live.png'
import blog from '../Images/blog.png'

const Card = (props) => {
    return (
        <div className='cards'>
            <div className=''>
                <span id='span1'>
                    <img src={message} alt='message' height='60px' width='60px'  />
                </span>
                <p>
                    Chat with Astrologer
                </p>
            </div>
            <div>
                <span id='span2'>
                    <img src={call} alt='call' height='60px' width='60px'  />
                </span>
                <p>
                Talk to Astrologer
                </p>
            </div>
            <div>
                <span id='span3'>
                    <img src={live} alt='live' height='60px' width='60px'  />
                </span>
                <p>
                    Live Event
                </p>
            </div>
            <div>
                <span id='span4'>
                    <img src={blog} alt='blog' height='60px' width='60px'  />
                </span>
                <p>
                    Astrotalk Blog
                </p>
            </div>
        </div>
    );
};

export default Card;