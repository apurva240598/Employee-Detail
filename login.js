import React from "react";
import "./App.css";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  };
  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };
  render() {
    return (
      <div>
        <div className="labelQuery">Username: </div>
        <div>
          <input
            className="textarea"
            value={this.state.username}
            placeholder="Username"
            onChange={this.handleChangeUsername}
          />
        </div>
        <div className="labelQuery">Password: </div>
        <div>
          <input
            className="textarea"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChangePassword}
          />
        </div>
        <div>
          <div className="button">
            <button
              className="button1"
              onClick={() =>
                this.props.onClick(this.state.username, this.state.password)
              }
            >
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
