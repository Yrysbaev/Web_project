import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.scss'
import {Provider} from 'react-redux'
import {store} from "../store";

export default function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}