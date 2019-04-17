// TODO: Will be a async call to back-end for logging in user
export const loginUser = async (store, email) => {
    store.setState({ status: 'LOADING' });
    await new Promise(resolve => setTimeout(resolve, 1500));
    localStorage.setItem('email', email);
    localStorage.setItem(
        'token',
        'dfsdjajdgjagaj6776789dbsjdsjh______djdhajhda'
    );
    store.setState({ status: '' });
};

export const updateGlobalAuth = (store, isLoggedIn) => {
    if (isLoggedIn) store.setState({ isLoggedIn });
    else store.setState({ isLoggedIn, email: '' });
};
