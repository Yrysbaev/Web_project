import classes from "./sectionHead.module.scss";
import Link from "next/link";
import A from "../../link/A";

export default function SectionHead({title, linkTitle, link}) {
    return (
        <div className={classes.head}>
            <h4 className={classes.title}>{title}</h4>
            <A
                href={link}
                className={classes.all_link}
            >
                {linkTitle}
            </A>
        </div>
    );
};

