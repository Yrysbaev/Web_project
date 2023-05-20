import Container from "../../container/Container";
import classes from "./sportAreas.module.scss";
import Hero from "../../components/hero/Hero";
import Filter from "../../components/sport-areas-page/filter/Filter";
import axios from "axios";
import LoaderSpinner from "../../components/loaderSpinner/LoaderSpinner";
import Cards from "../../components/sport-areas-page/cards/Cards";
import {getFetcher} from "../../store/api";
import {changeMinPrice, changeSearch} from "../../store/sport-areas/areasSlice";
import {useDispatch, useSelector} from "react-redux";

export default function SportAreas({categories, sportAreas}) {

    const dispatch = useDispatch()
    const areasDetails = useSelector(state => state.areas)

    const areaHero = {
        title: 'СПОРТИВНЫЕ ПЛОЩАДКИ ',
        description: 'Простая и удобная система',
        image: 'http://sports.com.kg/img/banner.jpg'
    }

    const handleSearch = (e) => {
        let value = e.target.value;
        dispatch(changeSearch(value));
    }

    if (!categories) {
        return (
            <LoaderSpinner/>
        )
    }
    return (
        <Container>
            <Hero areaHero={areaHero}/>
            <div className="container">
                <div className={[classes.area_content, 'row'].join(' ')}>
                    <div className={['col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12', classes.filter_content].join(' ')}>
                        <Filter categories={categories}/>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                        <div className={classes.areas_head}>
                            <input
                                placeholder='Kг спорт'
                                type="text"
                                value={areasDetails.search != null ? areasDetails.search : ''}
                                onChange={handleSearch}
                            />
                            <p>Показано 1– 9 из 16 результатов</p>
                        </div>
                        <Cards/>
                    </div>
                </div>
            </div>
        </Container>
    )
}


export const getStaticProps = async () => {
    try {
        const resCategories = await axios.get('http://admin.sports.com.kg/api/categories/')
        const categories = resCategories.data
        if (!categories) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                categories: categories,
            }
        }
    } catch {
        return {
            props: {
                categories: null,
            }
        }
    }
}