import classes from "./newsItem.module.scss";
import Link from "next/link";
import A from "../../link/A";

export default function NewsItem({newsItem}) {


    let title = newsItem.title.length > 50 ? newsItem.title.slice(0, 50) + '...' : newsItem.title
    let description = newsItem.description.length > 80 ? newsItem.description.slice(0, 80) + '...' : newsItem.description

    return (
        <div className={classes.newsItem}>
            <img
                src={newsItem.image ? newsItem.image : 'http://sports.com.kg/img/no-photo.png'}
                className={classes.image}
                alt=""

            />
            <div className={classes.body}>
                <A
                    href={''}
                    className={classes.title}
                >
                    {title}
                </A>
                <p className={classes.description}>{description}</p>
                <p className={classes.date}>{newsItem.date}</p>
            </div>
        </div>
    );
};