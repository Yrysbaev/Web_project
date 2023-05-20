import React from 'react';
import classes from "./feedback.module.scss";
import SectionHead from "../section-head/SectionHead";
import Slider from "react-slick";
import A from "../../link/A";

export default function Feedback({feedback}) {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className={[classes.feedback, 'feedback'].join(' ')}>
            <div className="container">
                <SectionHead
                    title='Отзывы'
                    linkTitle='Оставить отзыв'
                    link=''
                />
                <div className={classes.categories}>
                    <Slider {...settings}>
                        {feedback.map(item =>
                            <div key={item.id} className={classes.item}>
                                <p className={classes.itemText}>
                                    {item.text.length > 150 ?
                                        item.text.slice(0, 150) + '...'
                                        :
                                        item.text
                                    }
                                </p>
                                <div className={classes.itemUser}>
                                    <img src="http://sports.com.kg/icon/avatar.png" alt=""/>
                                    <p className={classes.userName}>{item.user_name}</p>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
