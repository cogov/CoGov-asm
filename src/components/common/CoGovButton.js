import React from 'react';

import { Button } from 'react-bootstrap';

export const CoGovButton = ({ label, ...rest }) => {
    return <Button {...rest}>{label}</Button>;
};
