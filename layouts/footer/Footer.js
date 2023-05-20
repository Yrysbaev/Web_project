import classes from "./footer.module.scss";
import Link from "next/link";
import {AiFillFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import A from "../../components/link/A";

export default function Footer() {

    const footerLink = [
        {
            id: 1,
            name: 'Главная',
            link: '/',
        },
        {
            id: 2,
            name: 'Площадки',
            link: '/sport-areas',
        },
        {
            id: 3,
            name: 'На карте',
            link: '/map',
        },
        {
            id: 4,
            name: 'Новости',
            link: '/news',
        }

    ]

    const social = [
        {
            id: 1,
            link: '',
            icon: <AiFillFacebook className={classes.footerIcon}/>
        },
        {
            id: 2,
            link: '',
            icon: <GrInstagram className={classes.footerIcon}/>
        }
    ]
    return (
        <section className={classes.footer_bg}>
            <div className={[classes.footer, 'container'].join(' ')}>
                <img src="http://sports.com.kg/img/logo-light-grey.png" className={classes.footerLogo} alt=""/>
                <div className={classes.menu}>{footerLink.map(link =>
                    <A
                        key={link.id}
                        href={link.link}
                        className={classes.link}
                    >
                        {link.name}
                    </A>
                )}</div>
                <div className={classes.social_contact}>{social.map(item =>
                    <A
                        key={item.id}
                        href={item.link}
                    >
                        {item.icon}
                    </A>
                )}</div>
            </div>
            <div className="container">
                <p className={classes.foot}>
                    Copyright © 2021 By
                    <a
                        href="https://instagram.com/bekbolsun_samaganov"
                        target={'_blank'} className=""
                    >
                        Bekbolsun
                        Samaganov</a>
                </p>
            </div>
        </section>
    )
}