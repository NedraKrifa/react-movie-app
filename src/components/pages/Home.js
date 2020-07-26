import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeImage from "../../images/background.png";
import HomeNavbar from "../layout/Home/HomeNavbar";
import Login from "../layout/Home/Login";
import Register from "../layout/Home/register";
import HomeInfo from "../layout/Home/HomeInfo";
import HomeContact from "../layout/Home/HomeContact";
import { users } from "../../data/loginData";

class Home extends Component {
  state = {
    userAccount: users,
    emailUser: "",
    passwordUser: "",
    confirmPasswordUser: "",
    email: "",
    password: "",
  };
  resetInputFieldRegister = () => {
    this.setState({
      emailUser: "",
      passwordUser: "",
      confirmPasswordUser: "",
    });
  };
  /*register*/
  handleChangeEmail = (e) => {
    this.setState({ emailUser: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ passwordUser: e.target.value });
  };
  handleChangeConfirmPassword = (e) => {
    this.setState({ confirmPasswordUser: e.target.value });
  };
  checkInput = (input) => {
    return input !== "";
  };
  checkInputs = (input1, input2, input3) => {
    return (
      this.checkInput(input1) &&
      this.checkInput(input2) &&
      this.checkInput(input3)
    );
  };
  checkRegister = (e) => {
    e.preventDefault();
    if (
      this.state.passwordUser === this.state.confirmPasswordUser &&
      this.checkInputs(
        this.state.emailUser,
        this.state.passwordUser,
        this.state.confirmPasswordUser
      )
    ) {
      alert("Thanks for registration. \nTry to login Now");
      let newUser = {
        email: this.state.emailUser,
        password: this.state.passwordUser,
      };
      this.setState({ userAccount: [...this.state.userAccount, newUser] });
      this.resetInputFieldRegister();
    } else {
      alert("check your information please");
    }
  };
  /*login*/
  handleChangeEmailLogin = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangePasswordLogin = (e) => {
    this.setState({ password: e.target.value });
  };
  isAccountExist = (input1, input2) => {
    for (let i = 0; i < this.state.userAccount.length; i++) {
      if (
        input1 === this.state.userAccount[i].email &&
        input2 === this.state.userAccount[i].password
      ) {
        return true;
      }
    }
    return false;
  };
  checkLogin = (e) => {
    e.preventDefault();
    if (
      this.checkInput(this.state.email) &&
      this.checkInput(this.state.password) &&
      this.isAccountExist(this.state.email, this.state.password)
    ) {
      alert(" yor are login Now \n welcome to your account.");
      console.log(this.props);
      this.props.history.push("/movie");
    } else if (
      this.state.email === "admin" &&
      this.state.password === "admin"
    ) {
      this.props.history.push("/admin");
    } else {
      alert("incorrect email or password");
    }
  };
  render() {
    return (
      <Router>
        <div className="home_page">
          <div className="home_image">
            <img src={HomeImage} alt="home_image" width="100%" />
            <div className="home_top_navbar">
              <HomeNavbar />
            </div>
            <Route
              exact
              path="/"
              render={(props) => (
                <div className="home_title">
                  <h1>Unlimited movies, TV shows, and more.</h1>
                  <p>Watch anywhere. Cancel anytime.</p>
                </div>
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login
                  checkLogin={this.checkLogin}
                  email={this.state.email}
                  password={this.state.password}
                  handleChangeEmailLogin={this.handleChangeEmailLogin}
                  handleChangePasswordLogin={this.handleChangePasswordLogin}
                />
              )}
            />
            <Route
              path="/register"
              render={(props) => (
                <Register
                  handleChangeEmail={this.handleChangeEmail}
                  handleChangePassword={this.handleChangePassword}
                  handleChangeConfirmPassword={this.handleChangeConfirmPassword}
                  emailUser={this.state.emailUser}
                  passwordUser={this.state.passwordUser}
                  confirmPasswordUser={this.state.confirmPasswordUser}
                  checkRegister={this.checkRegister}
                />
              )}
            />
          </div>
          <HomeInfo />
          <HomeContact />
        </div>
      </Router>
    );
  }
}

export default Home;
