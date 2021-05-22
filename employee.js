import React from "react";
import "./App.css";
import Setting from "./setting";
import axios from "axios";
export default class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      log: "",
      ids: 0,
      node: "",
      urls: "",
      lists: [],
      employee: []
    };
    // this.props.emp1.map((e) => {
    //   axios.get(e.url).then((res) =>
    //     this.setState({
    //       lists: res.data
    //     })
    //   );
    // });
    axios.get("https://api.github.com/users").then((res) =>
      //console.log(res.data)
      res.data.map((e) => {
        axios.get(e.url).then((res) =>
          this.setState({
            lists: [...this.state.lists, res.data]
          })
        );
      })
    );
  }
  handleEmployee = (a) => {
    this.setState({
      employee: [a]
    });

    this.props.par(a);
  };
  render() {
    //console.log("employee", this.state.employee);
    return (
      <div>
        {this.state.lists.map((e) => (
          <li className="EmployeeName">
            <u onClick={() => this.handleEmployee(e)}>{e.name}</u>
          </li>
        ))}

        <div className="Detail">
          {/* <p> Login : {this.state.log} </p>
          <p> ID : {this.state.ids} </p>
          <p> Node ID : {this.state.node} </p>
          <p> URL : {this.state.urls} </p> */}
          Detail: 
          {this.state.employee.map((ee) => (
            <p>
              {" "}
              <li>Name: {ee.name} </li>
              <li>Login: {ee.login} </li>
              <li>ID: {ee.id} </li>
              <li>Node ID: {ee.node_id} </li>
              <li>URL: {ee.url} </li>
              <li>Avatar: {ee.avatar_url} </li>
            </p>
          ))}
          {/* {this.state.employee.map((n) => (
            <Setting name={n.name} photo={n.avatar_url}/>
          ))} */}
        </div>
      </div>
    );
  }
}
