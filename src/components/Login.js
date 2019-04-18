import React from 'react';
import { withRouter } from 'react-router-dom';
import useGlobal from '../store';

import { Form } from 'react-bootstrap';
import { CoGovButton } from './common';

const Login = ({ ...props }) => {
    const [globalState, globalActions] = useGlobal();
    const {
        field: { updateEmail },
        user: { loginUser, updateGlobalAuth }
    } = globalActions;
    const handleLogin = () => {
        const { email } = globalState;
        loginUser(email).then(({ isEmailVerified }) => {
            if (isEmailVerified) {
                updateGlobalAuth(true);
                props.history.push('/main');
            } else {
                props.history.push('/verify');
            }
        });
    };

    return (
        <React.Fragment>
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
            </Form>
            <div className="mt-20">
                <CoGovButton
                    variant="primary"
                    type="button"
                    block={true}
                    label="Login"
                    disabled={!globalState.email} // TODO: validation for a valid email
                    onClick={() => handleLogin()}
                />
            </div>
        </React.Fragment>
    );
};

export default withRouter(Login);
