import Carousel from "react-bootstrap/Carousel";
import classes from "./slide.module.scss";

export default function Slider({sliders}) {
    return (
        <Carousel
            className={classes.slider}
        >
            {sliders.map(slider =>
                <Carousel.Item
                    className={classes.sliderItem}
                    key={slider.id}
                >
                    <img
                        className={["d-block w-100", classes.sliderImg].join(' ')}
                        src={slider.image}
                        alt={slider.title}
                    />
                    <Carousel.Caption
                        className={classes.sliderCaption}
                    >
                        <h3>{slider.title}</h3>
                        <p>{slider.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    )
}