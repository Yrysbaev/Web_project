import Container from "../container/Container";
import axios from 'axios';
import LoaderSpinner from "../components/loaderSpinner/LoaderSpinner";
import Slider from "../components/main-page/slider/Slider";
import Categories from "../components/main-page/categories/Categories";
import ViewAreas from "../components/main-page/view-areas/ViewAreas";
import SportAreas from "../components/main-page/sport-areas/SportAreas";
import News from "../components/main-page/news/News";
import Feedback from "../components/main-page/feedback/Feedback";

export default function MainPage({sliders, categories, sportAreas, news, feedback}) {
    if (!sliders || !categories || !sportAreas || !news) {
        return (
            <Container>
                <LoaderSpinner/>
            </Container>
        )
    }
    return (
        <Container>
            <Slider sliders={sliders}/>
            <Categories/>
            <ViewAreas categories={categories}/>
            <SportAreas sportAreas={sportAreas}/>
            <News news={news}/>
            <Feedback feedback={feedback}/>
        </Container>
    )
}


export const getStaticProps = async () => {
    try {
        const resSliders = await axios.get('http://admin.sports.com.kg/api/sliders')
        const sliders = resSliders.data

        const resCategories = await axios.get('http://admin.sports.com.kg/api/categories/')
        const categories = resCategories.data

        const resSportAreas = await axios.get('http://admin.sports.com.kg/api/sports_areas/')
        const sportAreas = resSportAreas.data

        const resNews = await axios.get('http://admin.sports.com.kg/api/news/category/football/1/')
        const news = resNews.data

        const resFeedback = await axios.get('http://admin.sports.com.kg/api/feedback')
        const feedback = resFeedback.data


        if (!sliders || !categories || !sportAreas || !news || !feedback) {
            return {
                notFound: true
            }
        }

        return {
            props: {
                sliders: sliders,
                categories: categories,
                sportAreas: sportAreas,
                news: news,
                feedback: feedback
            }
        }
    } catch {
        return {
            props: {
                sliders: null,
                categories: null,
                sportAreas: null,
                news: null,
                feedback: null
            }
        }
    }
}