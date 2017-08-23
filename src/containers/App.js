import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, checkLoginStatus } from "../actions/loginActions";

class App extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount(){
    this.props.checkLoginStatus();
  }

  onSubmit(e){
    e.preventDefault();
    this.props.login();
  }

  render() {

    let {username} = this.props;
    let welcomeMessage = null;
    if(username !== null){
      welcomeMessage = 'Welcome ' + username;
    }
    return (
      <div className="form-group-collection">
        <form onSubmit={this.onSubmit}>
          <input type="submit" value="Login" />
          <br /><br />
          {welcomeMessage}
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return{
    username: state.loginReducer.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(loginUser());
    },
    checkLoginStatus: () => {
      dispatch(checkLoginStatus());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
