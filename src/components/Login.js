import React from 'react';

import { Form } from 'react-bootstrap';
import { CoGovButton } from './common';

export const Login = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <h1>Please Enter Your Email</h1>
                <Form.Control
                    size="lg"
                    type="email"
                    placeholder="Enter email"
                />
            </Form.Group>
            <CoGovButton
                variant="primary"
                type="button"
                block={true}
                label="Login"
            />
        </Form>
    );
};
