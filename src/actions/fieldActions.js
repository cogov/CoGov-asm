export const updateEmail = (store, email) => {
    store.setState({ email });
};

export const updateByKey = (store, key, value) => {
    store.setState({ [key]: value });
};
