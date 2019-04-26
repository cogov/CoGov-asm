import React, { useEffect } from 'react';
import { Link, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import useGlobal from '../store';
import { ProtectedRoute } from './routeConfig/ProtectedRoutes';
import {
    getFromLocalStorage,
    clearLocalStorage,
    getUserByEmail
} from '../utils/localStorageHelper';

import { Navbar, Nav } from 'react-bootstrap';
import { Main } from './Main/index';
import Login from './Login';
import VerifyCode from './VerifyCode';
import Welcome from './Welcome';

const Home = ({ ...props }) => {
    const [globalState, globalActions] = useGlobal();
    const {
        user: { updateGlobalAuth }
    } = globalActions;
    const { isLoggedIn, selectedBackend, email: userEmail } = globalState;
    useEffect(() => {
        const { email, token } = getFromLocalStorage();
        if (token && email) {
            const user = getUserByEmail(email);
            updateGlobalAuth(true, user); // user is loggedIn
            props.history.push('/main');
        }
        // returned function will be called on component unmount
        return () => {
            if (email && !token) {
                clearLocalStorage();
                updateGlobalAuth(false);
            }
        };
    }, []);

    const handleLogout = () => {
        clearLocalStorage();
        updateGlobalAuth(false);
        props.history.push('/');
    };

    return (
        <React.Fragment>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="bg-light justify-content-between"
            >
                <Navbar.Brand>
                    <Link to={isLoggedIn ? '/main' : '/'}>
                        CoGov Assembly Interface
                    </Link>
                </Navbar.Brand>
                {isLoggedIn && (
                    <React.Fragment>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="ml-auto">
                                <Nav.Link onClick={() => handleLogout()}>
                                    Logout
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </React.Fragment>
                )}
            </Navbar>
            <div className="home">
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => <Welcome {...props} />}
                    />
                    <Route
                        path="/login"
                        exact
                        render={() => {
                            return selectedBackend && !isLoggedIn ? (
                                <Login {...props} />
                            ) : (
                                <Redirect to={isLoggedIn ? '/main' : '/'} />
                            );
                        }}
                    />
                    <Route
                        path="/verify"
                        exact
                        render={() => {
                            return selectedBackend &&
                                userEmail &&
                                !isLoggedIn ? (
                                <VerifyCode {...props} />
                            ) : (
                                <Redirect to={isLoggedIn ? '/main' : '/'} />
                            );
                        }}
                    />
                    />
                    <ProtectedRoute
                        path="/main"
                        isLoggedIn={isLoggedIn}
                        component={Main}
                    />
                </Switch>
            </div>
        </React.Fragment>
    );
};

export default withRouter(Home);
