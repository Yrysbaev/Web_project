import classes from "./filter.module.scss";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    changeCategory, changeInfrastructure,
    changeMaxPrice,
    changeMinPrice, changePerPage,
    changeSearch,
    changeType
} from "../../../store/sport-areas/areasSlice";

export default function Filter({categories}) {

    const dispatch = useDispatch();
    const areasDetails = useSelector(state => state.areas)

    const [category, setCategory] = useState()

    useEffect(() => {
        dispatch(dispatch(changeCategory(null)))
    }, [])

    useEffect(() => {
        setCategory(categories.find(cat => cat.numeration == areasDetails.category))
        dispatch(changeType(null));
        dispatch(changeMinPrice(null));
        dispatch(changeMaxPrice(null));
        dispatch(changeInfrastructure(null));
        dispatch(changeSearch(null));
        dispatch(changePerPage(null))
    }, [areasDetails.category])


    const handleCategory = (e) => {
        let num = !e.target.value ? null : parseFloat(e.target.value);
        dispatch(changeCategory(num))
    }

    const handleMinPrice = (e) => {
        let value = e.target.value;
        dispatch(changeMinPrice(value));
    }

    const handleMaxPrice = (e) => {
        let value = e.target.value;
        dispatch(changeMaxPrice(value));
    }
    const handleType = (e) => {
        let value = e.target.value;
        let checked = e.target.checked;
        if (areasDetails.type == null) {
            return dispatch(changeType([value]));
        } else if (checked) {
            let prevValue = areasDetails.type
            return dispatch(changeType([...prevValue, value]))

        } else {
            if (areasDetails.type.length == 1) {
                return dispatch(changeType(null));
            } else {
                let filtered = areasDetails.type.filter(val => val != value)
                dispatch(changeType([...filtered]))
            }
        }
    }

    const handleInfrastructure = (e) => {
        let value = e.target.value;
        let checked = e.target.checked;
        if (areasDetails.infrastructure == null) {
            return dispatch(changeInfrastructure([value]));
        } else if (checked) {
            let prevValue = areasDetails.infrastructure
            return dispatch(changeInfrastructure([...prevValue, value]))

        } else {
            if (areasDetails.infrastructure.length == 1) {
                return dispatch(changeInfrastructure(null));
            } else {
                let filtered = areasDetails.infrastructure.filter(val => val != value)
                dispatch(changeInfrastructure([...filtered]))
            }
        }
    }


    const clearFilter = (e) => {
        e.preventDefault();
        dispatch(changeSearch(null))
        dispatch(changeCategory(null))
        dispatch(changeType(null));
        dispatch(changeMinPrice(null));
        dispatch(changeMaxPrice(null));
        dispatch(changeInfrastructure(null))
    }

    useEffect(() => {
        dispatch(changeCategory(null));
        dispatch(changeType(null));
        dispatch(changeMinPrice(null));
        dispatch(changeMaxPrice(null));
        dispatch(changeInfrastructure(null));
        dispatch(changeSearch(null));
    }, [])
    return (
        <div className={classes.filter}>
            <select
                className={classes.category}
                value={areasDetails.category != null && areasDetails.category}
                onChange={handleCategory}
            >
                <option>Выберите вид спорта</option>
                {categories.map(category =>
                    <option
                        key={category.id}
                        onClick={(e) => handleCategory(category.numeration)}
                        value={category.numeration}
                    >
                        {category.title}
                    </option>
                )}
            </select>
            <div className={classes.price}>
                <p className={classes.priceTitle}>Цена</p>
                <div className={classes.from}>
                    <p className={classes.fromTitle}>От</p>
                    <input
                        type="number"
                        name='minPrice'
                        value={areasDetails.minPrice != null && areasDetails.minPrice}
                        onChange={handleMinPrice}
                    />
                </div>
                <div className={classes.from}>
                    <p className={classes.fromTitle}>До</p>
                    <input
                        type="number"
                        name='maxPrice'
                        value={areasDetails.maxPrice != null && areasDetails.maxPrice}
                        onChange={handleMaxPrice}
                    />
                </div>
            </div>
            {category?.types.length > 0 &&
                <div className={classes.types}>
                    {category.types.map(type =>
                        <label
                            key={type.id}
                        >
                            <input
                                type="checkbox"
                                value={type.id}
                                onChange={handleType}
                            />
                            {type?.title}
                        </label>
                    )}
                </div>
            }
            {category?.infrastructures.length > 0 &&
                <div className={classes.infrastructures}>
                    {category.infrastructures.map(inf =>
                        <label key={inf.id}>
                            <input
                                type="checkbox"
                                value={inf.id}
                                onChange={handleInfrastructure}
                            />
                            {inf?.title}
                        </label>
                    )}
                </div>
            }
            <button
                className={classes.clear}
                onClick={clearFilter}
            >
                Очистить
            </button>
        </div>
    );
};