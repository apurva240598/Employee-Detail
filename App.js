import React from "react";
import Heading from "./heading";
import SideButtonLink from "./SideButtonLink";
import Login from "./login";
import Dashboard from "./dashboard";
import axios from "axios";
import Employee from "./employee";
import Setting from "./setting";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logincheck: false,
      passwordcheck: "",
      check: false,
      employee: false,
      setting: false,
      dashboard: "",
      emp: [],
      emp1: [],
      name: "",
      photo: "",
      settingdata: []
    };
    axios.get("https://api.github.com/users").then((res) =>
      //console.log(res.data)
      this.setState({
        setting: false,
        emp: res.data
      })
    );
  }
  handleLogin = (e) => {
    this.setState({
      logincheck: true,
      employee: false,
      setting: false,
      check: false
    });
  };
  handleClick = (user, pass) => {
    if (user !== "" && pass !== "") {
      if (user === "test" && pass === "test") {
        this.setState({
          logincheck: false,
          passwordcheck: "",
          check: true,
          employee: true,
          setting: false
        });
      } else {
        alert("Warning! Wrong Password")
        this.setState({
          logincheck: true,
          passwordcheck: "wrong Password, Please try again",
          check: false
        });
      }
    } else {
      this.setState({
        passwordcheck: "Please type user name and password"
      });
    }
  };
  handleDashboard = (e) => {
    if (e === "Employee") {
      this.setState({
        setting: false,
        employee: true
      });
    } else {
      this.setState({
        employee: false,
        setting: true
      });
    }
  };
  handleparent = (a) => {
    //console.log("a", a);
    this.setState({
      settingdata: [a]
    });
    // <Setting name={e.name} photo={e.avatar_url} />
  };
  handleLogout = () => {
    this.setState({
      logincheck: true,
      check: false
    });
  };
  render() {
    //console.log("emp1", this.state.emp1);
    return (
      <div className="displayQuery">
        <div className="mainBack1">
          <div>
            <SideButtonLink Login={this.handleLogin} />
            <Heading />
          </div>
          {this.state.logincheck && (
            <div>
              <Login onClick={this.handleClick} />
            </div>
          )}
          <div className="passwordcheck">{this.state.passwordcheck} </div>
          {this.state.check && (
            <div>
              {" "}
              <Dashboard onClick={this.handleDashboard} />
            </div>
          )}

          {this.state.employee && (
            <div>
              <p className="List"> List of Employees</p>
              <Employee emp1={this.state.emp} par={this.handleparent} />
            </div>
          )}
          {this.state.employee === false && this.state.check !== false && (
            <div>
              {" "}
              <Setting data={this.state.settingdata} log={this.handleLogout} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
// this.state.emp.map((e) => <div> {e.login}
