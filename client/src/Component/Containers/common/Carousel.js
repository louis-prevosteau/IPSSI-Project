import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import homepageBanner1 from "../../../../src/assets/img/homepageBanner1.jpg";
import homepageBanner2 from "../../../../src/assets/img/homepageBanner2.jpg";

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src={homepageBanner1} />
                </div>
                <div>
                    <img src={homepageBanner2} />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel
