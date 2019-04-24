import React from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import useGlobal from '../../store';

import { Form } from 'react-bootstrap';
import { CoGovButton } from '../common';
import { TOAST_MESSAGES } from '../../constants';

const Name = ({ ...props }) => {
    const [globalState, globalActions] = useGlobal();
    const {
        field: { updateByKey },
        user: { updateUser }
    } = globalActions;
    const handleUpdateUser = () => {
        const { name } = globalState;
        updateUser({ name })
            .then(res => {
                if (res) {
                    // updateGlobalAuth(true);
                    // toast.success(TOAST_MESSAGES.LOGGED_IN_SUCCESS);
                    // props.history.push('/main');
                }
            })
            .catch(err => {
                toast.error(err);
            });
    };

    return (
        <React.Fragment>
            <h1 className="header-label-cogov">Please Enter Your Name</h1>
            <Form className="main-cogov">
                <Form.Group controlId="formBasicCode">
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter name"
                        value={globalState.name}
                        onChange={e => updateByKey('name', e.target.value)}
                    />
                </Form.Group>
            </Form>
            <CoGovButton
                className="btn-cogov"
                variant="primary"
                type="button"
                block={true}
                label="Next"
                disabled={!globalState.name} // TODO: validation for a valid code
                onClick={() => handleUpdateUser()}
            />
        </React.Fragment>
    );
};

export default withRouter(Name);
