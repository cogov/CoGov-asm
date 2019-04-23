import shortid from 'shortid';
import { codes } from '../../constants/testConstants';

// create new user (email is the identity)
export const createUser = user => {
    const userData = {
        id: shortid.generate(),
        ...user
    };
    // Get existing users
    const existingUsers = localStorage.getItem('users');
    // If no existing data, create an array
    const updatedUsers = existingUsers ? JSON.parse(existingUsers) : [];
    localStorage.setItem('users', JSON.stringify([...updatedUsers, userData]));
    return Promise.resolve({
        user: userData,
        token: 'dfsdjajdgjagaj6776789dbsjdsjh______djdhajhda'
    });
};

export const doesEmailExists = email => {
    // Get existing users
    const existingUsers = localStorage.getItem('users');
    const users = JSON.parse(existingUsers) || [];
    // check if email already exists
    if (users.length) {
        return users.find(u => u.email === email);
    }
    return undefined;
};

export const getUser = async email => {
    //check if user exists already
    const userWithEmail = doesEmailExists(email);
    if (userWithEmail)
        return Promise.resolve({
            user: userWithEmail,
            token: 'dfsdjajdgjagaj6776789dbsjdsjh______djdhajhda'
        });
    return createUser({ email });
};

export const sendVerificationCode = email =>
    new Promise(resolve => setTimeout(resolve, 200));

export const verifyCode = code => {
    if (code && codes.findIndex(c => c === code) > -1)
        return Promise.resolve(true);
    else return Promise.reject('Wrong verification code!');
};
