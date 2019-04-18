import { users } from '../constants/testConstants';

// TODO: Will be a async call to back-end for logging in user
export const loginUser = async (store, email) => {
    store.setState({ status: 'LOADING' });
    await new Promise(resolve => setTimeout(resolve, 200));
    // this will return from back-end api, also token will return only if email is verified.
    const isEmailVerified = users.find(
        e => e.email === email && e.emailVerified
    );
    if (isEmailVerified) {
        localStorage.setItem('email', email);
        localStorage.setItem(
            'token',
            'dfsdjajdgjagaj6776789dbsjdsjh______djdhajhda'
        );
        // after verification code is sent or email is already verified
        store.setState({ status: '' });
        return {
            isEmailVerified: true
        };
    } else {
        // after verification code is sent or email is already verified
        store.setState({ status: '' });
        localStorage.setItem('email', email);
        return {
            isEmailVerified: false
        };
    }
};

export const verifyCode = async (store, code) => {
    if (code) {
        store.setState({ status: 'LOADING' });
        await new Promise(resolve => setTimeout(resolve, 100));
        localStorage.setItem(
            'token',
            'dfsdjajdgjagaj6776789dbsjdsjh______djdhajhda'
        );
        store.setState({ status: '' });
    }
    return {
        isEmailVerified: true
    };
};

export const updateGlobalAuth = (store, isLoggedIn) => {
    if (isLoggedIn) store.setState({ isLoggedIn });
    else store.setState({ isLoggedIn, email: '', verificationCode: '' });
};
