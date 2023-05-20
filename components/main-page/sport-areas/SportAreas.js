import React from 'react';
import classes from "./sportAreas.module.scss";
import SectionHead from "../section-head/SectionHead";
import Card from "../../card/Card";

export default function SportAreas({sportAreas}) {

    return (
        <div className={[classes.sport_areas, 'container'].join(' ')}>
            <SectionHead
                title={'Спортивные площадки'}
                link={'/'}
                linkTitle={'ПОКАЗАТЬ ВСЕ'}
            />
            <div className={classes.cards}>
                {sportAreas?.results.slice(0, 9).map(area =>
                    <div key={area.id} className={classes.card}>
                        <Card card={area} link={'/'}/>
                    </div>
                )}
            </div>
        </div>
    );
};