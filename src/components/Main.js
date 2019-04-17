import React from 'react';
import { Login } from './';

import useGlobal from '../store';

export const Main = () => {
    const [globalState] = useGlobal();
    const { isLoggedIn } = globalState;
    return (
        <div>
            {!isLoggedIn && <Login />}
            {isLoggedIn && <div>{'logged In'}</div>}
        </div>
    );
};
