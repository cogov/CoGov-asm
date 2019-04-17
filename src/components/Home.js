import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import useGlobal from '../store';
import {
    getFromLocalStorage,
    clearLocalStorage
} from '../utils/localStorageHelper';

import { Navbar } from 'react-bootstrap';
import { Main } from './';
import { CoGovButton } from './common';
export const Home = ({ ...props }) => {
    const [globalState, globalActions] = useGlobal();
    const {
        user: { updateGlobalAuth }
    } = globalActions;
    const { isLoggedIn } = globalState;
    useEffect(() => {
        const { email, token } = getFromLocalStorage();
        if (email && token) {
            updateGlobalAuth(true);
        }
    });

    const handleLogout = () => {
        clearLocalStorage();
        updateGlobalAuth(false);
    };

    return (
        <React.Fragment>
            <Navbar className="bg-light justify-content-between">
                <Navbar.Brand>
                    <Link to="/">CoGov Assembly Interface</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    {isLoggedIn && (
                        <Navbar.Text>
                            <CoGovButton
                                variant="info"
                                type="button"
                                label="Logout"
                                onClick={() => handleLogout()}
                            />
                        </Navbar.Text>
                    )}
                </Navbar.Collapse>
            </Navbar>
            <div className="mt-4">
                <Route path="/" exact render={() => <Main {...props} />} />
            </div>
        </React.Fragment>
    );
};
