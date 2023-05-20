import React from 'react';
import classes from "./card.module.scss";
import A from "../link/A";

export default function Card({card, link}) {
    return (
        <div className={classes.card}>
            <img src={card?.image} alt="" className={classes.cardImg}/>
            <div className={classes.card_body}>
                <p className={classes.cardName}>{card?.title}</p>
                <p className={classes.cardLocation}>{card?.address}</p>
                <div className={classes.card_foot}>
                    <p className={classes.like}>{card?.title}</p>
                    <div className={classes.foot_price}>
                        <p className={classes.price}>{card?.price} сом/час</p>
                        <A href={`/sport-areas/${card.id}`} className={classes.link}>Подробнее</A>
                    </div>
                </div>
            </div>
        </div>
    );
};