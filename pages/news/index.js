import Container from "../../container/Container";
import Hero from "../../components/hero/Hero";
import classes from "./news.module.scss";
import Categories from "../../components/news/categories/Categories";
import NewsItem from "../../components/news/newsItem/NewsItem";
import LoaderSpinner from "../../components/loaderSpinner/LoaderSpinner";
import {getFetcher} from "../../store/api";
import {useEffect, useState} from "react";
import {newsHero} from "../../components/staticData/pageHeroes/heroes";
import {useDispatch, useSelector} from "react-redux";
import {changeName, changePage} from "../../store/news/newSlice";

export default function MainPage() {


    const [news, setNews] = useState([]);
    const [paginations, setPaginations] = useState([]);
    const dispatch = useDispatch()
    const newsDetails = useSelector(state => state.news)
    const endPoint = `news/category/${newsDetails.name}/${newsDetails.page}/`
    useEffect(() => {
        getFetcher(endPoint)
            .then(res => {
                setPaginations(res.paginations)
                if (newsDetails.page == 1) {
                    setNews(res.results)
                } else if (newsDetails.page > 1) {
                    setNews([...news, ...res.results])
                }
            })
    }, [
        endPoint
    ])

    useEffect(() => {
        dispatch(changePage(1))
    }, [newsDetails.name])


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    })

    useEffect(() => {
        dispatch(changePage(1))
        dispatch(changeName('football'))
    }, [])


    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200 &&
            newsDetails.page < paginations[paginations.length - 1]?.number
        ) {
            setTimeout(() => {
                dispatch(changePage(newsDetails.page + 1))
            }, 200)
        }
    }

    if (news.length < 1) {
        return (
            <LoaderSpinner/>
        )
    }
    return (
        <Container>
            <Hero areaHero={newsHero}/>
            <div className={[classes.news, 'container'].join(' ')}>
                <Categories/>
                {news.length < 1 ?
                    <LoaderSpinner/>
                    :
                    <div
                        className={classes.news_content}
                    >{news.map((newsItem, index) =>
                        <div
                            key={index}
                            className={classes.newsItem}
                        >
                            <NewsItem
                                newsItem={newsItem}
                            />
                        </div>
                    )}
                    </div>}
            </div>
        </Container>
    )
}