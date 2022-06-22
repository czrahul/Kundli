import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel-card.css'
import ScrollCards from "../Scroll_cards/ScrollCards";
import Widget from "../Scroll_cards/ScrollCards";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
                <Widget type="HostCount"/>
            </div>
          <div>
          <Widget type="HostCount"/>          </div>
          <div>
          <Widget type="HostCount"/>          </div>
          <div>
          <Widget type="HostCount"/>          </div>
          <div>
          <Widget type="HostCount"/>          </div>
          <div>
          <ScrollCards/>
          </div>
        </Slider>
      </div>
    );
  }
}

