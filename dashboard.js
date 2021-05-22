import React from "react";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: true,
      setting: false
    };
  }
  render() {
    return (
      <div className="Dashboard">
        <button
          className="employee"
          onClick={() => this.props.onClick("Employee")}
        >
          {" "}
          Employees{" "}
        </button>
        <button
          className="setting"
          onClick={() => this.props.onClick("Setting")}
        >
          {" "}
          Setting{" "}
        </button>
      </div>
    );
  }
}
