import classes from "./about.module.scss";
import {GoLocation} from "react-icons/go";
import {BsInstagram, BsTelephone, BsWhatsapp} from "react-icons/bs";

export default function About({area}) {


    return (
        <div className={classes.detailAbout}>
            {area.price && <p className={classes.price}>{area.price} cом/час</p>}
            {area.address && <div className={classes.address}>
                <p className={classes.address_content}>
                    <GoLocation className={classes.icon}/>
                    {area.address}
                </p>
                {area.infrastructure.map(item =>
                    <div
                        className={classes.infrastructure}
                        key={item.id}
                    >
                        <img src={item.image} alt={item.title}/>
                        <p>{item.title}</p>
                    </div>
                )}
            </div>}
            <ul className={classes.tel}>
                {area.phone_1 && <li>
                    <BsTelephone className={classes.icon}/>
                    <a
                        href={`tel:${area.phone_1}`}
                    >
                        {area.phone_1}
                    </a>
                </li>}
                {area.phone_2 && <li>
                    <BsTelephone className={classes.icon}/>
                    <a
                        href={`tel:${area.phone_2}`}
                    >
                        {area.phone_2}
                    </a>
                </li>}
            </ul>
            <div className={classes.social}>
                Соцсети:
                {area.whats_app_phone &&
                    <a
                        href={`https://wa.me/${area.whats_app_phone}`}
                        target={'_blank'}
                        className={classes.whatsApp}
                    >
                        <BsWhatsapp className={classes.icon}/>
                    </a>}
                {area.instagram &&
                    <a
                        href={`https://instagram.com/${area.instagram}`}
                        target={'_blank'}
                        className={classes.instagram}
                    >
                        <BsInstagram className={classes.icon}/>
                    </a>}
            </div>
        </div>
    );
};