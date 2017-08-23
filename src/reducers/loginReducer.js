const loginReducer = (state = {
    isLoginSuccess: false,
    isLoginPending: false,
    token: null,
    username: null,
    loginError: null
},
action) => {
    switch(action.type){
        case "SET_LOGIN_PENDING":
            state = {
                ...state,
                isLoginPending: true
            }
            break;
        case "SET_LOGIN_SUCCESS":
            state = {
                ...state,
                isLoginSuccess: true,
                isLoginPending: false,
                username: action.username,
                token: action.token
            }
            break;
        case "SET_LOGIN_ERROR":
            state = {
                ...state,
                loginError: true,
                isLoginPending: false
            }
            break;
    }
    return state;
};

export default loginReducer;