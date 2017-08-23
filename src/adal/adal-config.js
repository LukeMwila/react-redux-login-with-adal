import AuthenticationContext from 'adal-angular';

var adalConfig = {
    instance: 'https://login.microsoftonline.com/',
    tenant: 'common',
    clientId: 'application id goes here',
    extraQueryParameter: 'nux=1',
    disableRenewal: true,
    endpoints: {
        localhostUri: 'http://localhost:3000'
    }
}

export const authContext = new AuthenticationContext(adalConfig);

const isCallback = authContext.isCallback(window.location.hash);

authContext.handleWindowCallback();

if(isCallback && !authContext.getLoginError()){
    window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
}