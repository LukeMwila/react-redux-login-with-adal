import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from "../actions/loginActions";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {

    let {isLoginPending, isLoginSuccess, loginError} = this.props;

    return (
      <div className="form-group-collection">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={this.state.email} />
          </div>
          <br />
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={this.state.password} />
          </div>
          <br />
          <input type="submit" value="Login" />
          <br /><br />
          { isLoginPending && <div>Please wait...</div> }
          { isLoginSuccess && <div>Successful login!</div> }
          { loginError && <div>Incorrect login details!</div> }
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return{
    isLoginPending: state.loginReducer.isLoginPending,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    loginError: state.loginReducer.loginError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(loginUser(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
