const loginReducer = (state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
},
action) => {
    switch(action.type){
        case "SET_LOGIN_PENDING":
            state = {
                ...state,
                isLoginPending: action.payload
            }
            break;
        case "SET_LOGIN_SUCCESS":
            state = {
                ...state,
                isLoginSuccess: action.payload
            }
            break;
        case "SET_LOGIN_ERROR":
            state = {
                ...state,
                loginError: action.payload
            }
            break;
    }
    return state;
};

export default loginReducer;