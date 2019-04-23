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
};

export const doesEmailExists = email => {
    // Get existing users
    const existingUsers = localStorage.getItem('users');
    const users = JSON.parse(existingUsers) || [];
    // check if email already exists
    if (users.length) return users.findIndex(u => u.email === email) !== -1;
    return false;
};

export const sendVerificationCode = email =>
    new Promise(resolve => setTimeout(resolve, 200));

export const verifyCode = code => {
    if (code && codes.findIndex(c => c === code) > -1)
        return Promise.resolve({
            token: 'dfsdjajdgjagaj6776789dbsjdsjh______djdhajhda'
        });
    else return Promise.reject('Wrong verification code!');
};
