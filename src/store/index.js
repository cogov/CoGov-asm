import React from 'react';
import useGlobalHook from '../utils/useGlobalHooks';
import * as actions from '../actions';
// app initial state
const initialState = {
    status: '', // Will be used to show loader when required
    email: '',
    verificationCode: '',
    isLoggedIn: false,
    isEmailVerified: true
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
