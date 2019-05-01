import React from 'react';
import useGlobalHook from '../utils/useGlobalHooks';
import * as actions from '../actions';

// app initial state
export const initialState = {
    status: '', // Will be used to show loader when required
    email: '',
    name: '',
    verificationCode: '',
    isLoggedIn: false,
    selectedBackend: '',
    user: {}
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
