import React from "react"
import "./template1.css"
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

const Template1 = ({type}) => {
    let data;
    switch (type) {
        case "Jayant":
            data = {
                name: "Jayant",
                icon: {as1}
            };
        break;
        case "Vvinod":
            data = {
                name: "Vvinod",
                icon: <img src={as2} alt='logo' height='100px' width='100px' />
            };
        break;
        case "Sujata":
            data = {
                name: "Sujata",
                icon: <img src={as3} alt='logo' height='100px' width='100px' />
            };
        break;
        case "Dimle":
            data = {
                name: "Dimle",
                icon: <img src={as4} alt='logo' height='100px' width='100px' />
            };
        break;
        case "Sanjeev":
            data = {
                name: "Sanjeev",
                icon: <img src={as5} alt='logo' height='100px' width='100px' />
            };
        break;
        case "Dilip":
            data = {
                name: "Dilip",
                icon: <img src={as6} alt='logo' height='100px' width='100px' />
            };
        break;
        case "Choudhary":
            data = {
                name: "Choudhary",
                icon: <img src={as7} alt='logo' height='100px' width='100px' />
            };
        break;
        case "Lakshmish":
            data = {
                name: "Lakshmish",
                icon: <img src={as8} alt='logo' height='100px' width='100px' />
            };
        break;
        case "Nnisha":
            data = {
                name: "Nnisha",
                icon: <img src={as9} alt='logo' height='100px' width='100px' />
            };
        break;
        case "RamNaresh":
            data = {
                name: "RamNaresh",
                icon: <img src={as10} alt='logo' height='100px' width='100px' />
            };
        break;
        case "Pritirashmi":
            data = {
                name: "Pritirashmi",
                icon: <img src={as11} alt='logo' height='100px' width='100px' />
            };
        break;
        case "Shubham":
            data = {
                name: "Shubham",
                icon: {as12}
            };
        break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className='online'>
                <img src={bgimage} alt='bgimage' height='150px' width='150px' />
                <img src={data.icon} alt = 'img' height='150px' width='150px' id='photo' />
                <h3>{data.name}</h3>
                <p>Vedic Astrology</p>
            </div> 
        </div>
    )
}

export default Template1;