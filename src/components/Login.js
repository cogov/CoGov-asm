import React from 'react';

import useGlobal from '../store';

import { Form } from 'react-bootstrap';
import { CoGovButton } from './common';

export const Login = () => {
    const [globalState, globalActions] = useGlobal();
    const {
        field: { updateEmail },
        user: { loginUser }
    } = globalActions;
    const handleLogin = () => {
        const { email } = globalState;
        loginUser(email);
    };

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <h1>Please Enter Your Email</h1>
                <Form.Control
                    size="lg"
                    type="email"
                    placeholder="Enter email"
                    value={globalState.email}
                    onChange={e => updateEmail(e.target.value)}
                />
            </Form.Group>
            <CoGovButton
                variant="primary"
                type="button"
                block={true}
                label="Login"
                disabled={!globalState.email} // TODO: validation for a valid email
                onClick={() => handleLogin()}
            />
        </Form>
    );
};
