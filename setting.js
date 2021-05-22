import React from "react";

import "./App.css";
export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //name: "",
      firstname: "",
      lastname: "",
      // photo: "",
      list: [],
      alt: ""
    };
  }

  render() {
    var emp = [];
    //var nm = "";
    emp = [this.props.data];

    // console.log("name", this.state.name);
    // console.log("photo", this.state.photo);
    // console.log("nm", nm)
    return (
      <div>
        {emp.map((e) =>
          e.map((ee) => (
            <p className="Setting">
              
              <img
                src={ee.avatar_url}
                alt={this.state.alt}
                height="300"
                width="350"
              />
              <li className="firstname">
                {" "}
                First Name : {ee.name.split(" ").slice(0, -1).join(" ")}
              </li>
              <li className="lastname">
                {" "}
                Last Name: {ee.name.split(" ").slice(-1).join(" ")}
              </li>
            <button className="logout" onClick={this.props.log}> Logout </button>

            </p>
          ))
        )}
        {/* FirstName: {nm.split(" ").slice(0, -1).join(" ")} */}
        {/* LastName: {this.props.lastname} */}
      </div>
    );
  }
}
