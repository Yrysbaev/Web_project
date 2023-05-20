import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import Head from "next/head";

export default function Container({children, ...props}) {

    return (
        <>
            <Head
                title={'Sports Kg'}
            />
            <Header/>
            {children}
            <Footer/>
        </>
    )
}