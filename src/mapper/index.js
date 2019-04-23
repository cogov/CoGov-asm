import { USER as LOCAL_USER_ACTIONS } from './local/index';

export const BACKENDS = {
    // holo_chain: {
    //     doesEmailExists: doesEmailExists,
    //     createUser: createUser
    // },
    local_storage: {
        doesEmailExists: LOCAL_USER_ACTIONS.doesEmailExists,
        createUser: LOCAL_USER_ACTIONS.createUser,
        sendVerificationCode: LOCAL_USER_ACTIONS.sendVerificationCode,
        verifyCode: LOCAL_USER_ACTIONS.verifyCode,
        getUser: LOCAL_USER_ACTIONS.getUser
    }
};

export const callMappedAction = (selectedBackend, actionType, payload) => {
    return BACKENDS[selectedBackend][actionType](payload);
};
