import classes from "./loaderSpinner.module.scss";
import {RevolvingDot} from "react-loader-spinner";

export default function LoaderSpinner() {
    return (
        <div className={classes.loaderSpinner}>
            <RevolvingDot
                height="100"
                width="100"
                radius="6"
                color="#F46D6D"
                secondaryColor=''
                ariaLabel="revolving-dot-loading"
                radius="5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}