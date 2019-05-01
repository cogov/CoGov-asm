import React from 'react';
import { withRouter } from 'react-router-dom';
import useGlobal from '../store';
import { setToLocalStorage } from '../utils/localStorageHelper';

import { Form } from 'react-bootstrap';
import { CoGovButton } from './common';

const Welcome = ({ ...props }) => {
    const [globalState, globalActions] = useGlobal();
    const {
        field: { updateByKey }
    } = globalActions;
    const handleSelectBackend = () => {
        const { selectedBackend } = globalState;
        if (selectedBackend) {
            setToLocalStorage('backend', selectedBackend);
            props.history.push('/login');
        }
    };

    return (
        <React.Fragment>
            <h1 className="header-label-cogov">
                Please choose a back-end service
            </h1>
            <Form className="main-cogov">
                <Form.Group>
                    <Form.Control
                        as="select"
                        onChange={e =>
                            updateByKey('selectedBackend', e.target.value)
                        }
                    >
                        <option value="">Choose...</option>
                        <option value="local_storage">
                            Holochain simulated
                        </option>
                        <option disabled value="holochain">
                            Holochain
                        </option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <CoGovButton
                className="btn-cogov"
                variant="primary"
                type="button"
                block={true}
                label="Next"
                disabled={!globalState.selectedBackend} // TODO: validation for a valid code
                onClick={() => handleSelectBackend()}
            />
        </React.Fragment>
    );
};

export default withRouter(Welcome);
