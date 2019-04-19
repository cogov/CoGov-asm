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
