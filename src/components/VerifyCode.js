import React from 'react';
import { withRouter } from 'react-router-dom';
import useGlobal from '../store';

import { Form } from 'react-bootstrap';
import { CoGovButton } from './common';

const VerifyCode = ({ ...props }) => {
    const [globalState, globalActions] = useGlobal();
    const {
        field: { updateByKey },
        user: { verifyCode, updateGlobalAuth }
    } = globalActions;
    const handleVerifyCode = () => {
        const { verificationCode } = globalState;
        verifyCode(verificationCode).then(({ isEmailVerified }) => {
            if (isEmailVerified) {
                updateGlobalAuth(true);
                props.history.push('/main');
            }
        });
    };

    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="formBasicCode">
                    <h1>Please Enter The Verification Code</h1>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter code"
                        value={globalState.verificationCode}
                        onChange={e =>
                            updateByKey('verificationCode', e.target.value)
                        }
                    />
                </Form.Group>
            </Form>
            <div className="mt-20">
                <CoGovButton
                    variant="primary"
                    type="button"
                    block={true}
                    label="Verify"
                    disabled={!globalState.verificationCode} // TODO: validation for a valid code
                    onClick={() => handleVerifyCode()}
                />
            </div>
        </React.Fragment>
    );
};

export default withRouter(VerifyCode);
