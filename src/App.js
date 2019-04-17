import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './components';

import './App.css';

class App extends Component {
    render() {
        return (
            <Container>
                <Route path="/" render={props => <Home {...props} />} />
            </Container>
        );
    }
}

export default App;
