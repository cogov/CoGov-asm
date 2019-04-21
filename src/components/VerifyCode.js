import React from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import useGlobal from '../store';

import { Form } from 'react-bootstrap';
import { CoGovButton } from './common';
import { TOAST_MESSAGES } from '../constants';

const VerifyCode = ({ ...props }) => {
    const [globalState, globalActions] = useGlobal();
    const {
        field: { updateByKey },
        user: { verifyCode, updateGlobalAuth }
    } = globalActions;
    const handleVerifyCode = () => {
        const { verificationCode } = globalState;
        verifyCode(verificationCode)
            .then(({ isEmailVerified }) => {
                if (isEmailVerified) {
                    updateGlobalAuth(true);
                    toast.success(TOAST_MESSAGES.LOGGED_IN_SUCCESS);
                    props.history.push('/main');
                }
            })
            .catch(err => {
                toast.error(err);
            });
    };

    return (
        <React.Fragment>
            <h1 className="header-label-cogov">
                Please Enter The Verification Code
            </h1>
            <Form className="main-cogov">
                <Form.Group controlId="formBasicCode">
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
            <CoGovButton
                className="btn-cogov"
                variant="primary"
                type="button"
                block={true}
                label="Verify"
                disabled={!globalState.verificationCode} // TODO: validation for a valid code
                onClick={() => handleVerifyCode()}
            />
        </React.Fragment>
    );
};

export default withRouter(VerifyCode);
