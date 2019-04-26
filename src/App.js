import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import shortid from 'shortid';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
    // required just to create a default currency collection
    // if not already present on app inisialization.
    componentDidMount() {
        // Get existing currencies
        const existingCurrencies = localStorage.getItem('currencies');
        // If no existing data, create an array
        const updatedCurrencies = existingCurrencies
            ? JSON.parse(existingCurrencies)
            : [];
        if (!updatedCurrencies.length) {
            localStorage.setItem(
                'currencies',
                JSON.stringify([
                    ...updatedCurrencies,
                    {
                        id: shortid.generate(),
                        name: 'influence'
                    }
                ])
            );
        }
    }

    render() {
        return (
            <Container>
                <Route path="/" render={props => <Home {...props} />} />
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
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
