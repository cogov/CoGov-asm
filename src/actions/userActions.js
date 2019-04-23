import { callMappedAction } from '../mapper/index';
// TODO: Will be a async call to back-end for logging in user
export const loginUser = async (store, email) => {
    const { selectedBackend } = store.state;
    if (!selectedBackend) return Promise.resolve();
    store.setState({ status: 'LOADING' });
    // send verification code
    await callMappedAction(selectedBackend, 'sendVerificationCode', email);
    localStorage.setItem('email', email);
};

export const verifyCode = async (store, code) => {
    debugger;
    const { selectedBackend } = store.state;
    if (!selectedBackend) return Promise.resolve();
    if (code) {
        debugger;
        store.setState({ status: 'LOADING' });
        const { token } = await callMappedAction(
            selectedBackend,
            'verifyCode',
            code
        );
        if (token) {
            localStorage.setItem('token', token);
            store.setState({ status: '' });
        }
        return {
            isEmailVerified: false
        };
    }
};

export const updateGlobalAuth = (store, isLoggedIn) => {
    if (isLoggedIn) store.setState({ isLoggedIn });
    else store.setState({ isLoggedIn, email: '', verificationCode: '' });
};
