import React from 'react';
import Container from "../../container/Container";
import classes from './error.module.scss';
import A from "../../components/link/A";

export default function Error() {
    return (
        <Container>
            <div className={classes.error}>
                <h1>404 | Ohh , something is wrong !!!</h1>
                <p>
                    Go to the
                    <A> Home </A>
                </p>
            </div>
        </Container>
    );
};