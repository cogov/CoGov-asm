export const getFromLocalStorage = () => {
    return {
        token: localStorage.getItem('token'),
        email: localStorage.getItem('email')
    };
};
