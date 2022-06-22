import React from 'react';
import './element5.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import r1 from '../Images/Reetikaverma.webp'
import r2 from '../Images/deependerdeol.webp'
import r3 from '../Images/gurdeepchawla.webp'
import r4 from '../Images/abhiudaychandra.webp'
import r5 from '../Images/julieepatankar.webp'
import r6 from '../Images/kirti.webp'
import r7 from '../Images/nisha.webp'
import r8 from '../Images/Pinkiagarwalla.webp'
import r9 from '../Images/poojatiwari.webp'
import r10 from '../Images/prabharani.webp'

const Element5 = () => {
    const settings = {
        // dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        
      };
    return (
        <div className='element5'>
            <h1>ASTROTALK REVIEWS FROM OUR CUSTOMERS</h1>
            <p>Top Astrologers. 24 * 7 customer support. Happy to help</p>
            <div className='allReviews'>
                <Slider {...settings}>
                    <div className='review'>
                        <img src={r1} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Reetika Verma</p>
                        <p id='place'>Delhi, India</p>
                        <p id='content'> Thanks Astrotalk for being available at my difficult time and motivating me to get through that phase. I am finally doing good now after Navgrah Pooja performed by them. The complete process was very smooth. I'll recommend it to my friends. </p>
                    </div>
                    <div className='review'>
                        <img src={r2} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Dale Stricklin</p>
                        <p id='place'>Sydney, Australia</p>
                        <p id='content'>  There is no comparison of Astrotalk when it comes to getting a free horoscope and checking horoscope online in the Astrology industry. They have revolutionized everything with excellent customer service by having a controlled marketplace for best astrologers from India.  </p>
                    </div>
                    <div className='review'>
                        <img src={r3} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Gurdeep Chawla</p>
                        <p id='place'>Muscat, Oman</p>
                        <p id='content'>  I really love the service of Astrotalk. Astrologers are really skilled and co-operative. Customer support team is very active and friendly. I get all answers and have a good conversation with astrologers at a decent price. And the predictions are also very accurate.  </p>
                    </div>
                    <div className='review'>
                        <img src={r4} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Abhiuday Chandra</p>
                        <p id='place'>Berlin, Germany</p>
                        <p id='content'>  Have been using this for 6 months now. I am an ardent follower of Astrology and getting such a user friendly application in Astrotalk has just made it very easy for me to contact any good astrologer at anytime and release my stress. Astrologers do counsel very well.  </p>
                    </div>
                    <div className='review'>
                        <img src={r5} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Juilee Patankar</p>
                        <p id='place'>New Jersey, USA</p>
                        <p id='content'>  Brilliant app. Asked queries from 5 experts, got answer within 4 - 5 hours every time and the answer were detailed which no other app provides in this cost. Predictions were quite accurate. And they were available to clear any follow up doubts also.  </p>
                    </div>
                    <div className='review'>
                        <img src={r6} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Kirti Patil</p>
                        <p id='place'>Kolkata, India</p>
                        <p id='content'>  Astrology reports are very detailed and accurate. Had ordered an annual report from 3 different astrologers and the insights I got were really good. AstroTalk has the best astrologers from India and they provide best astrology predictions. Totally worth the money.  </p>
                    </div>
                    <div className='review'>
                        <img src={r7} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Nisha Koranga</p>
                        <p id='place'>Bangalore, India</p>
                        <p id='content'> Had a wonderful session with couple of astrologers and it was quite satisfying. They listened to me carefully and answered very patiently. Customer support makes life very comfortable as they are always there to support. Best experience on any service app from India till date.  </p>
                    </div>
                    <div className='review'>
                        <img src={r8} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Pinki Agarwalla</p>
                        <p id='place'>Mumbai, India</p>
                        <p id='content'>  Tried it out of desperation during bad phase of my life and it really helped as the astrologer listened to my problem like a friend and then assured me that everything will be fine and gave remedies. And when the things are good now, I use it regularly as they made me a believer.  </p>
                    </div>
                    <div className='review'>
                        <img src={r9} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Pooja Tiwari</p>
                        <p id='place'>Pune, India</p>
                        <p id='content'> Brilliant user experience. From the interface to app to ease of asking a query to speaking to well spoken and experience astrologers. It was a delight. Have used many astrology apps but this is something like Uber experience. Great work  </p>
                    </div>
                    <div className='review'>
                        <img src={r10} alt = 'img' height='100px' width='100px' id='photo' />
                        <p id='name'>Prabha Rani</p>
                        <p id='place'>London, UK</p>
                        <p id='content'> AstroTalk is really helpful for me in seeking astrology advice from England at any time. Thanks Guys, I am really happy with the service and support I get from customer support and Astrologers. Everyone is so friendly and helpful.Very good experience with the app so far.  </p>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Element5;