import classes from "./hero.module.scss";

export default function Hero({areaHero}) {

    return (
        <div className={classes.hero}>
            <img src={areaHero.image} className={classes.hero_img} alt=""/>
            <h2 className={classes.heroTitle}>{areaHero.title}</h2>
            <p className={classes.heroDesc}>{areaHero.description}</p>
        </div>
    );
};
