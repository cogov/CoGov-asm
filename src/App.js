import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Container>
                <Route path="/" render={props => <Home {...props} />} />
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
            </Container>
        );
    }
}

export default App;
