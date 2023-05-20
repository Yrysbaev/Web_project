import classes from "./viewAreas.module.scss";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import A from "../../link/A";
import SectionHead from "../section-head/SectionHead";

export default function ViewAreas({categories}) {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
        <>
            <div className={[classes.view_areas, 'view-areas'].join(' ')}>
                <div className="container">
                    <SectionHead
                        title='Вид площадки'
                        linkTitle='Вид площадки'
                        link='/sport-areas'
                    />
                    <div className={classes.categories}>
                        <Slider {...settings}>
                            {categories.map(category =>
                                <div key={category.id} className={classes.category}>
                                    <img src={category.image} className={classes.categoryImg} alt=""/>
                                    <p className={classes.categoryFoot}>
                                        {category.title} ({category.area_count})
                                    </p>
                                    <A className={classes.categoryLink}></A>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>

            <style>`

                `
            </style>
        </>
    );
};