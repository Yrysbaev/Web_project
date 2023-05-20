import Container from "../../../container/Container";
import classes from "./areaDetail.module.scss";
import About from "../../../components/areasDetails/about/About";
import Slide from "../../../components/areasDetails/slide/Slide";
import Map1 from "../../../components/map/map1/Map1";
import axios from "axios";

export default function AreaDetail({area}) {
    let map = [
        {
            id: 1,
            latitude: area.latitude,
            longitude: area.longitude
        }
    ]

    console.log(area.latitude)
    return (
        <Container>
            <div className={classes.detail}>
                <div className="container">
                    <h3 className={classes.title}>{area.title}</h3>
                    <div className={[classes.detail_content, 'row'].join(' ')}>
                        <div className={'col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'}>
                            <Slide galleries={area.galleries}/>
                        </div>
                        <div className={'col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12'}>
                            <About area={area}/>
                        </div>
                    </div>
                    <div className={[classes.text, 'row'].join(' ')}>
                        <p className={'col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12'}>{area.text}</p>
                    </div>
                    <div className={classes.map}>
                        <Map1 mapAreas={map}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export const getServerSideProps = async (context) => {
    try {
        const {id} = context.params
        const resArea = await axios.get(`http://admin.sports.com.kg/api/sports_area/detail/${id}/`)
        const area = resArea.data
        if (!area) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                area: area
            }
        }
    } catch {
        return {
            props: {
                area: null
            }
        }
    }
}
