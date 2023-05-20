import Container from "../../container/Container";
import Hero from "../../components/hero/Hero";
import Filter from "../../components/sport-areas-page/filter/Filter";
import classes from "./map.module.scss";
import axios from "axios";
import Map1 from "../../components/map/map1/Map1";
import LoaderSpinner from "../../components/loaderSpinner/LoaderSpinner";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    filteringCategory, filteringInfrastructure, filteringMap,
    filteringMaxPrice,
    filteringMinPrice, filteringPage,
    filteringSearch,
    filteringType
} from "../../filtering/filteringSportArea";
import {getFetcher} from "../../store/api";

export default function MainPage({categories}) {

    const areaHero = {
        title: 'НАХОДИТЕ СПОРТИВНЫЕ ПЛОЩАДКИ ',
        description: 'Cпортивные площадки на карте',
        image: 'http://sports.com.kg/img/banner.jpg'
    }

    const areasDetails = useSelector(state => state.areas);

    const [areas, setAreas] = useState(null);
    let search = filteringSearch(areasDetails);
    let category = filteringCategory(areasDetails);
    let type = filteringType(areasDetails);
    let minPrice = filteringMinPrice(areasDetails);
    let maxPrice = filteringMaxPrice(areasDetails);
    let infrastructure = filteringInfrastructure(areasDetails);
    let page = filteringPage(areasDetails);
    let mark = filteringMap(areasDetails);

    let url = `sports_areas/for_map/` + mark + search + category + type + minPrice + maxPrice + infrastructure + page
    useEffect(() => {
        getFetcher(url)
            .then(res => {
                setAreas(res)
            })
    }, [areasDetails.page,
        areasDetails.category,
        areasDetails.minPrice,
        areasDetails.maxPrice,
        areasDetails.page,
        areasDetails.infrastructure,
        areasDetails.type,

    ])


    if (!categories || !areas) {
        return (
            <LoaderSpinner/>
        )
    }
    return (
        <Container>
            <Hero areaHero={areaHero}/>
            <div className="container">
                <div className={[classes.map_content, 'row'].join(' ')}>
                    <div className={['col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12', classes.filter_content].join(' ')}>
                        <Filter categories={categories}/>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
                        <div className={classes.map_head}>
                            <input placeholder='Kг спорт' type="text"/>
                        </div>
                        <Map1 mapAreas={areas ? areas : []}/>
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