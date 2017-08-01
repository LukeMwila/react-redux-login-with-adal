const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

function setLoginPending(isLoginPending){
    return{
        type: SET_LOGIN_PENDING,
        payload: isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess){
    return{
        type: SET_LOGIN_SUCCESS,
        payload: isLoginSuccess
    };
}

function setLoginError(loginError){
    return{
        type: SET_LOGIN_ERROR,
        payload: loginError
    };
}

export function loginUser(email, password){

    let url = "http://localhost/dummyAPI/login/index.php?email="+ email +"&password=" + password;
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(parsedData) {
                dispatch(setLoginPending(false));
                if(parsedData[0] === true){
                    dispatch(setLoginSuccess(true));
                    console.log("User authenticated.");
                }else{
                    dispatch(setLoginError(true));
                    console.log("User not authenticated.");
                }
            })
    }
}
