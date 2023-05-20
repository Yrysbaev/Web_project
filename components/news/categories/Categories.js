import classes from "./categories.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {changeName} from "../../../store/news/newSlice";

export default function Categories() {

    const dispatch = useDispatch();
    const newsDetails = useSelector(state => state.news);
    const categories = [
        {
            id: 1,
            title: 'ФУТБОЛ',
            value: 'football'
        },
        {
            id: 2,
            title: 'ФУТЗАЛ',
            value: 'football'
        },
        {
            id: 3,
            title: 'ВОЛЕЙБОЛ',
            value: 'football'
        },
        {
            id: 4,
            title: 'БОРЬБА',
            value: 'football'
        },
        {
            id: 5,
            title: 'БОКС',
            value: 'football'
        },
        {
            id: 6,
            title: 'КӨК БӨРҮ',
            value: 'kok-boru'
        },
        {
            id: 7,
            title: 'НАСТОЛЬНЫЙ ТЕННИС',
            value: 'table-tennis'
        },
        {
            id: 8,
            title: 'ШАХМАТ',
            value: 'chess'
        }
    ]


    const handleName = (name) => {
        dispatch(changeName(name))
    }
    return (
        <div className={classes.categories}>
            {categories.map(category =>
                <span
                    className={[classes.category,
                        newsDetails.name == category.value && classes.active
                    ].join(' ')}
                    key={category.id}
                    onClick={() => handleName(category.value)}
                >
                    {category.title}
                </span>
            )}
        </div>
    );
};