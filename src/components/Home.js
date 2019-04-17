import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import useGlobal from '../store';
import { getFromLocalStorage } from '../utils/localStorageHelper';

import { Navbar } from 'react-bootstrap';
import { Main } from './';

export const Home = ({ ...props }) => {
    const [_, globalActions] = useGlobal();
    const {
        user: { updateGlobalAuth }
    } = globalActions;
    useEffect(() => {
        const { email, token } = getFromLocalStorage();
        if (email && token) {
            updateGlobalAuth(true);
        }
    });
    return (
        <React.Fragment>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand>
                    <Link to="/">CoGov Assembly Interface</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>
            <div className="mt-4">
                <Route path="/" exact render={() => <Main {...props} />} />
            </div>
        </React.Fragment>
    );
};
