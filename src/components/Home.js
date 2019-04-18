import React, { useEffect } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import useGlobal from '../store';
import {
    getFromLocalStorage,
    clearLocalStorage
} from '../utils/localStorageHelper';

import { Navbar } from 'react-bootstrap';
import Login from './Login';
import VerifyCode from './VerifyCode';
import { CoGovButton } from './common';
const Home = ({ ...props }) => {
    const [globalState, globalActions] = useGlobal();
    const {
        user: { updateGlobalAuth }
    } = globalActions;
    const { isLoggedIn } = globalState;
    useEffect(() => {
        const { email, token } = getFromLocalStorage();
        if (token) {
            updateGlobalAuth(true); // email is verified
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
            <div className="home">
                <Switch>
                    <Route path="/" exact render={() => <Login {...props} />} />
                    <Route
                        path="/verify"
                        exact
                        render={() => <VerifyCode {...props} />}
                    />
                    <Route
                        path="/main"
                        exact
                        render={() => <h1>Coming soon...</h1>}
                    />
                </Switch>
            </div>
        </React.Fragment>
    );
};

export default withRouter(Home);
