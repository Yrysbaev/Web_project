import React, {useEffect, useState} from 'react';
import classes from "./slide.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide({galleries}) {

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)

    let slider1;
    let slider2;
    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [])

    return (
        <div className={classes.slide}>
            <Slider
                asNavFor={nav2}
                ref={slider => (slider1 = slider)}
            >{galleries.map((gallery, index) =>
                <img
                    key={index}
                    src={gallery.image}
                    alt=""
                />
            )}
            </Slider>
            <Slider
                asNavFor={nav1}
                ref={slider => (slider2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >{galleries.map((gallery, index) =>
                <img
                    key={index}
                    src={gallery.image}
                    alt=""
                />
            )}
            </Slider>
        </div>
    );
};