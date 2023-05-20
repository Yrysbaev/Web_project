import {Form, Nav, Navbar, NavDropdown, Container, Button} from "react-bootstrap";
import classes from "./header.module.scss";
import Link from "next/link";
import A from "../../components/link/A";
import Image from "next/image";
import {useRouter} from "next/router";
import {GrClose} from 'react-icons/gr'
import {GiHamburgerMenu} from "react-icons/gi";
import {gsap} from "gsap";
import $ from 'jquery'
import {useEffect} from "react";

export default function Header() {
    const router = useRouter();

    const headerLinks = [
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

    const openHeaderMenu = () => {
        if ($(window).width() < 767) {
            gsap.to('.header_menu', {duration: .3, width: '100%', padding: '32px 32px'})
            return
        }
        gsap.to('.header_menu', {duration: .3, width: '50%', padding: '32px 32px'})
    }
    const closeHeaderMenu = () => {
        gsap.to('.header_menu', {duration: .3, width: 0, padding: '32px 0'})
    }
    return (
        <header className={classes.header}>
            <div className={[classes.header_content, 'container'].join(' ')}>
                <A
                    href={'/'}
                    className={classes.header_logo}
                >
                    <img
                        src={'http://sports.com.kg/img/logo.png'}

                    />
                </A>
                <div className={[classes.header_menu_content].join(' ')}>
                    <div className={[classes.header_menu].join(' ')}>
                        {headerLinks.map(headerLink =>
                            <A
                                key={headerLink.id}
                                href={headerLink.link}
                                className={[classes.header_menu_link, router.pathname == headerLink.link && classes.active].join(' ')}
                            >
                                {headerLink.name}
                            </A>
                        )}
                    </div>
                    <A
                        href={'/'}
                        className={classes.header_profile}
                    >
                        <img src="http://sports.com.kg/icon/avatar.png" alt=""/>
                    </A>
                </div>

                <div className={[classes.mobileHeader, 'header_menu'].join(' ')}>
                    <div className={classes.header_close_content}>
                        <GrClose
                            color="white"
                            className={classes.header_close}
                            onClick={closeHeaderMenu}
                        />
                    </div>
                    <div className={[classes.header_menu].join(' ')}>
                        {headerLinks.map(headerLink =>
                            <A
                                key={headerLink.id}
                                href={headerLink.link}
                                className={[classes.header_menu_link, router.pathname == headerLink.link && classes.active].join(' ')}
                            >
                                {headerLink.name}
                            </A>
                        )}
                    </div>
                    <A
                        href={'/'}
                        className={classes.header_profile}
                    >
                        <img src="http://sports.com.kg/icon/avatar.png" alt=""/>
                    </A>
                </div>

                <GiHamburgerMenu
                    className={classes.header_burger}
                    onClick={openHeaderMenu}
                />
            </div>
        </header>
    )
}