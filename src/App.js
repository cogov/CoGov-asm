import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home, Login } from './components';

class App extends Component {
    render() {
        return (
            <Container>
                <Route path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Container>
        );
    }
}

export default App;
