import React from 'react';

import { Form, Button, Jumbotron } from 'react-bootstrap';

export const Login = () => {
    return (
        <Jumbotron>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="button">
                    Login
                </Button>
            </Form>
        </Jumbotron>
    );
};
