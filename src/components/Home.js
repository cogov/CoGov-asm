import React from 'react';
import { Link, Route } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';

import { Login } from './';

export const Home = () => {
    return (
        <React.Fragment>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand>
                    <Link to="/">CoGov Assembly Interface</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>
            <div className="mt-4">
                <Route path="/" exact component={Login} />
            </div>
        </React.Fragment>
    );
};
