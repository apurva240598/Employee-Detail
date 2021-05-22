import React from "react";
import "./App.css";
export default class SideButtonLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logincheck: false,
      detailcheck: false,
      analysischeck: false
    };
  }
  handleLogin = () => {
    this.setState({
      logincheck: true,
      detailcheck: false,
      analysischeck: false
    });
    this.props.Login();
  };
  handleDetails = () => {
    this.setState({
      detailcheck: true,
      logincheck: false,
      analysischeck: false
    });
    this.props.Details();
  };
  handleAnalysis = () => {
    this.setState({
      detailcheck: false,
      logincheck: false,
      analysischeck: true
    });
    this.props.Analysis();
  };
  render() {
    return (
      <div className="mainBack2">
        <div className="sideButtonName">
          <b>Cognitensor</b>{" "}
        </div>
        <div>
          <button
            onClick={() => this.handleLogin()}
            className={this.state.logincheck ? "LoginWhite" : "btnLogin"}
          >
            <i className="fa fa-home"></i>
          </button>
        </div>
      </div>
    );
  }
}
