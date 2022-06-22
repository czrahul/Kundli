import React from 'react';
import './footer.css'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import playstore from '../Images/news (23).png'
import appstore from '../Images/news (24).png'
import secure from '../Images/private_home.png'
import Verifieduser from '../Images/verifired.png';
import securepay from '../Images/secure_pay.png'

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='header'>
                <h3>About Astrotalk</h3><hr />
                <p>Astrotalk is the best astrology website for online Astrology predictions. Talk to Astrologer on call and get answers to all your worries by seeing the future life through Astrology Kundli Predictions from the best Astrologers from India. Get best future predictions related to Marriage, love life, Career or Health over call, chat, query or report.</p>
            </div>
            <div className='sitemap'>
                <div className='elem1'>
                    <h3>Horoscope 2022</h3><hr/>
                    <p>Love Horoscope 2022</p>
                    <p>Health Horoscope 2022</p>
                    <p>Career Horoscope 2022</p>
                    <p>Finance Horoscope 2022</p>
                    <p>Education Horoscope 2022</p>
                    <p>Chinese Horoscope 2022</p>
                    <p>Lal Kitab Horoscope 2022</p>
                    <p>Numerology Horoscope 2022</p>
                    <p>Tarot Reading Predictions 2022</p>
                    <p>Festival 2022</p>
                    <p>Planetary Transit 2022</p>
                    <p>Planetary Transit 2022 Kannada</p>

                    <br/><h3>Shubh Muhurat 2022</h3><hr/>
                    <p>Shubh Muhurat 2022 in Kannada</p>
                    <p>Marriage Muhurat 2022</p>
                    <p>Annaprashan Muhurat 2022</p>
                    <p>Griha Pravesh Muhurat 2022</p>
                    <p>Namkaran Muhurat 2022</p>
                    <p>Mundan Muhurat 2022</p>
                    
                </div>
                <div className='elem1'>
                <h3>Important Links</h3><hr/>
                    <p>Astrology 2022</p>
                    <p>How to read kundli</p>
                    <p>Free Kundli</p>
                    <p>Kundli Matching</p>
                    <p>Chat with Astrologer</p>
                    <p>Talk to Astrologer</p>
                    <p>Lunar Eclipse</p>
                    <p>Solar Eclipse</p>
                    <p>Astrotalk Reviews</p>
                    <p>Today Panchang</p>
                    <p>Astrology Yoga</p>
                    <p>Kaalsarp Doshas</p>
                    <p>Child Astrology</p>
                    <p>Ascendant Sign Gemstone</p>
                    <p>Nakshatras Constellations</p>
                    <p>Numerology</p>
                    <p>Astrological remedies for job promotion</p>
                    <p>Astromall</p>
                    <p>Blog</p>

                </div>
                <div className='elem1'>
                <h3>Horoscope</h3><hr/>
                    <p>Daily Horoscope</p>
                    <p>Weekly Horoscope</p>
                    <p>Monthly Horoscope</p>
                    <p>Yearly Horoscope</p>

                    <br/><h3>Corporate Info</h3><hr/>
                    <p>Refund & Cancellation Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Disclaimer</p>
                    <p>About Us</p>
                    <p>Pricing Policy</p>
                    <p>Astrologer Login</p>
                    <p>Astrologer Registration</p>
                </div>
                <div className='elem1'>
                <h3>Contact us</h3><hr/>
                    <p><HeadsetMicIcon style={{fontSize: 'medium', marginTop:'-20px', marginRight:'10px'}}/> We are available 24x7 on chat support, click to start chat</p>
                    <p><EmailIcon style={{fontSize: 'medium', marginRight:'10px'}}/> Email ID: contact@astrotalk.com</p>
                    <i>
                        <j><InstagramIcon/></j>
                        <j><FacebookIcon/></j>
                        <j><LinkedInIcon/></j>
                        <j><YouTubeIcon/></j>
                    </i>
                    <i>
                        <img src={playstore} alt='playstore' />
                        <img src={appstore} alt='appstore' />
                    </i><br/>
                    <h3>Submit Article</h3><br/>
                    <h3>Secure</h3><hr/>
                    <p><img src={secure} alt='private' height='40' width='40px' id='logo_image' /> Private & Confidential </p>
                    <p><img src={Verifieduser} alt='verifieduser' height='40px' width='40px' id='logo_image' /> Verified Astrologers </p>
                    <p><img src={securepay} alt='Secure-pay' height='40px' width='40px' id='logo_image' /> Secure Payments </p>
                </div>
            </div>
            
        </div>
        <div className='copyright'>
                Copyright  2022 CodeYeti Software Solutions Pvt. Ltd. All Rights Reserved
        </div>
        </>
    );
};

export default Footer;