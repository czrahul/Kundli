import "./scrollCards.css"
import daily from '../Images/icon3.png'
import freekundli from '../Images/icon7.png'
import compatibility from '../Images/icon1.png'
import festival from '../Images/icon5.png'
import kundlimatching from '../Images/icon2.png'
import horoscope from '../Images/icon6.png'
import panchang from '../Images/icon8.png'

const Widget = ({type}) => {
    let data;
    switch (type) {
        case "daily":
            data = {
                title: "Daily Horoscope",
                desc: "Get free Aries daily horoscope prediction today online from the best astrologer. Read your Aries Zodiac Sign horoscope today!",
                icon: <img src={daily} alt='logo' height='100px' width='100px' />
            };
        break;
        case "free":
            data = {
                title: "Free Kundli",
                desc: "Generate your free online kundli report from Astrotalk. Our Kundli software can help you predict the future for yourself by reading the birth chart.",
                icon: <img src={freekundli} alt='logo' height='100px' width='100px' />
            };
        break;
        case "compatibility":
            data = {
                title: "Compatibility",
                desc: "Love could be confusing, but only until you haven’t found how compatible you two are for each other.",
                icon: <img src={compatibility} alt='logo' height='100px' width='100px' />
            };
        break;
        case "festival":
            data = {
                title: "Festival 2022",
                desc: " Festival -- Its Nothing but an Uncountable forms of celebrations. Check Out for more",
                icon: <img src={festival} alt='logo' height='100px' width='100px' />
            };
        break;
        case "kundli":
            data = {
                title: "Kundli Matching",
                desc: " Check Love Compatibility and Marriage Prediction online at Astrotalk. Get the best Horoscope and kundli matching predictions today! ",
                icon: <img src={kundlimatching} alt='logo' height='100px' width='100px' />
            };
        break;
        case "chinese":
            data = {
                title: "Chinese Horoscope",
                desc: " Are you a Cat? A Mouse? Or the roaring Lion? Let the Chinese astrology reveal it for you. Check your's now ",
                icon: <img src={horoscope} alt='logo' height='100px' width='100px' />
            };
        break;
        case "today":
            data = {
                title: "Today Panchang",
                desc: " Panchang enlists a record of auspicious dates and times for any auspicious task such as marriage, celebration, puja, starting any business etc. ",
                icon: <img src={panchang} alt='logo' height='100px' width='100px' />
            };
        break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="up">
                {data.icon}
            </div>
            <div className="down">
                <span className="title">{data.title}</span>
                <p className="desc">{data.desc}</p>
            </div>
            
        </div>
    )
}

export default Widget;
// import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
// import React from 'react';
// import './scrollCards.css'

// var cardStyle = {
//     display: 'block',
//     width: '200px',
//     transitionDuration: '0.3s',
//     height: '100px',
//     backgroundColor: "white" 
//   }
  

// const ScrollCards = () => {
//     return (
//         <div className='scard'>
//         <Card  style={cardStyle}>
//                 <CardContent >
//                 <Typography gutterBottom variant="h7" component="div" id="title">
//                     Daily Horoscope
//                 </Typography>
//                 <Typography variant="body4" color="text.secondary" id='elem2'>
//                     Get free Aries daily horoscope prediction today online from the best astrologer. Read your Aries Zodiac Sign horoscope today! 
//                 </Typography>
                
//                 </CardContent>
//             <CardActionArea>
//                 <button id='action-btn'>View</button>
//             </CardActionArea>
//         </Card>
//     </div>
//     );
// };

// export default ScrollCards;