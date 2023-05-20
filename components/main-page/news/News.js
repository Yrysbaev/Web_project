import classes from "./news.module.scss";
import SectionHead from "../section-head/SectionHead";
import Slider from "react-slick";
import A from "../../link/A";

export default function News({news}) {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
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
        <div className={[classes.news_section, 'main-news'].join(' ')}>
            <div className="container">
                <SectionHead
                    title={'Новости'}
                    linkTitle={'ПОКАЗАТЬ ВСЕ'}
                    link={'/'}
                />
                <div className={classes.news}>
                    <Slider {...settings}>
                        {news?.results.map((newsItem, index) =>
                            <div key={index} className={classes.newsItem}>
                                <img
                                    src={newsItem.image ?
                                        newsItem.image
                                        :
                                        'http://sports.com.kg/img/no-photo.png'
                                    }
                                    className={classes.newsImg}
                                    alt=""
                                />
                                <A
                                    href={'/'}
                                    className={classes.newsFoot}
                                >
                                    {newsItem.title.slice(0, 50) + '...'}
                                </A>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

