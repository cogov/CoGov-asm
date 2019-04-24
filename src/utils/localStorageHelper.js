export const getFromLocalStorage = () => {
    return {
        token: localStorage.getItem('token'),
        email: localStorage.getItem('email')
    };
};

export const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const clearLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('backend');
};

export const getUserByEmail = email => {
    // Get existing users
    const existingUsers = localStorage.getItem('users');
    // If no existing data, create an array
    const users = existingUsers ? JSON.parse(existingUsers) : [];
    return users.find(u => u.email === email);
};
