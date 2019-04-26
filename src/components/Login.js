import React from 'react';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import useGlobal from '../store';

import { Form } from 'react-bootstrap';
import { CoGovButton } from './common';

const Login = ({ ...props }) => {
    const [globalState, globalActions] = useGlobal();
    const {
        field: { updateEmail },
        user: { loginUser }
    } = globalActions;
    const handleLogin = () => {
        const { email } = globalState;
        loginUser(email)
            .then(() => {
                props.history.push('/verify');
            })
            .catch(err => {
                toast.error(err);
            });
    };

    return (
        <React.Fragment>
            <h1 className="header-label-cogov">Please enter your email</h1>
            <Form className="main-cogov">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        size="lg"
                        type="email"
                        placeholder="Enter email"
                        value={globalState.email}
                        onChange={e => updateEmail(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <CoGovButton
                className="btn-cogov"
                variant="primary"
                type="button"
                block={true}
                label="Login"
                disabled={!globalState.email} // TODO: validation for a valid email
                onClick={() => handleLogin()}
            />
        </React.Fragment>
    );
};

export default withRouter(Login);
