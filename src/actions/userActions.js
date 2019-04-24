import { initialState } from '../store';
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
    const { selectedBackend, email } = store.state;
    if (!selectedBackend || !email) return Promise.resolve();
    if (code) {
        store.setState({ status: 'LOADING' });
        await callMappedAction(selectedBackend, 'verifyCode', code);
        const { user, token } = await callMappedAction(
            selectedBackend,
            'getUser',
            email
        );
        localStorage.setItem('token', token);
        store.setState({ status: '' });
        return Promise.resolve(user);
    }
};

export const updateUser = async (store, variables) => {
    debugger;
    const {
        user: { id }
    } = store.state;
    const selectedBackend =
        store.state.selectedBackend || localStorage.getItem('backend');
    if (!selectedBackend || !id) return Promise.resolve();
    return callMappedAction(selectedBackend, 'updateUser', {
        id,
        ...variables
    });
};

export const updateGlobalAuth = (store, isLoggedIn, user) => {
    if (isLoggedIn) store.setState({ isLoggedIn, user });
    else store.setState({ ...initialState });
};
