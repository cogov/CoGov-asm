import React from 'react';
import useGlobalHook from '../utils/useGlobalHooks';

// app initial state
const initialState = { counter: 0 };

const useGlobal = useGlobalHook(React, initialState);

export default useGlobal;
