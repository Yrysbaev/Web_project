import classes from "./categories.module.scss";
import Link from "next/link";
import A from "../../link/A";

export default function Categories() {
    const categories = [
        {
            id: 1,
            name: 'Смотреть площадки',
            image: 'http://sports.com.kg/icon/soccer-court.png',
            link: '/sport-areas'
        },
        {
            id: 2,
            name: 'Показать на карте',
            image: 'http://sports.com.kg/icon/marker-icon.png',
            link: '/map'
        },
        {
            id: 3,
            name: 'Читать новости',
            image: 'http://sports.com.kg/icon/news-icon.png',
            link: '/news'
        }
    ]
    return (
        <div className={[classes.categories, 'container'].join(' ')}>
            {categories.map(category =>
                <A
                    key={category.id}
                    href={category.link}
                    className={classes.category}
                >
                    <img src={category.image} alt={category.name} className={classes.categoryImage}/>
                    <p className={classes.categoryName}>{category.name}</p>
                </A>
            )}
        </div>
    );
};

