import React from 'react';
import useGlobalHook from '../utils/useGlobalHooks';
import * as actions from '../actions';
// app initial state
const initialState = {
    status: '', // Will be used to show loader when required
    email: '',
    isLoggedIn: false
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
