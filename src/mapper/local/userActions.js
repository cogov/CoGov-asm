import shortid from 'shortid';
import { codes } from '../../constants/testConstants';

// create new account
export const createAccount = account => {
    const accountData = {
        id: shortid.generate(),
        createdAt: new Date(),
        updatedAt: new Date(),
        ...account
    };

    // Get existing accounts
    const existingAccounts = localStorage.getItem('accounts');
    // If no existing data, create an array
    const updatedAccounts = existingAccounts
        ? JSON.parse(existingAccounts)
        : [];
    localStorage.setItem(
        'accounts',
        JSON.stringify([...updatedAccounts, accountData])
    );
    return Promise.resolve();
};

// create new user (email is the identity)
export const createUser = user => {
    const userData = {
        id: shortid.generate(),
        createdAt: new Date(),
        updatedAt: new Date(),
        ...user
    };
    // Get existing users
    const existingUsers = localStorage.getItem('users');
    // If no existing data, create an array
    const updatedUsers = existingUsers ? JSON.parse(existingUsers) : [];
    localStorage.setItem('users', JSON.stringify([...updatedUsers, userData]));
    // create account with userId as ownerId
    // Get existing currencies
    const existingCurrencies = localStorage.getItem('currencies');
    const updatedCurrencies = existingCurrencies
        ? JSON.parse(existingCurrencies)
        : [];
    const [currency] = updatedCurrencies;
    createAccount({
        ownerId: userData.id,
        currencyId: currency.id,
        balance: 0
    });

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

export const updateUser = async ({ id, ...rest }) => {
    // Get existing users
    const existingUsers = localStorage.getItem('users');
    const users = JSON.parse(existingUsers) || [];
    // check if id already exists
    const user = users.find(u => u.id === id);
    const userIndex = users.findIndex(u => u.id === id);
    const updatedUsers = [
        ...users.slice(0, userIndex),
        {
            ...user,
            ...rest,
            updatedAt: new Date()
        },
        ...users.slice(userIndex + 1)
    ];
    localStorage.setItem('users', JSON.stringify([...updatedUsers]));
    return Promise.resolve(updatedUsers.find(u => u.id === id));
};

export const sendVerificationCode = email =>
    new Promise(resolve => setTimeout(resolve, 200));

export const verifyCode = code => {
    if (code && codes.findIndex(c => c === code) > -1)
        return Promise.resolve(true);
    else return Promise.reject('Wrong verification code!');
};
