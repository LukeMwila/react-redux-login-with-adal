import { authContext } from '../adal/adal-config';
let user = authContext.getCachedUser();
let userName = undefined;
let userToken = null;

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

function setLoginPending(){
    return{
        type: SET_LOGIN_PENDING,
    };
}

function setLoginSuccess(username, token){
    return{
        type: SET_LOGIN_SUCCESS,
        username: username,
        token: token
    };
}

function setLoginError(){
    return{
        type: SET_LOGIN_ERROR
    };
}

export function checkLoginStatus(){
  return dispatch => {
      dispatch(setLoginPending());
      if (user) {
          userName = user.profile.name;
          // Acquire token
          authContext.acquireToken(authContext.config.clientId, function(error, token) {
          // Handle ADAL Errors.
              if (error) {
                  console.log('ADAL error occurred: ' + error);
                  return;
              }

              if (!token) {
                  console.log('No token!');
                  return;
              }
              userToken = token;
          });
          dispatch(setLoginSuccess(userName, userToken));
      } else {
          authContext.login();
      }
  }
}

export function loginUser(){
    authContext.login();
}
