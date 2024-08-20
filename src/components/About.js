import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>about</h1>
        <UserClass name="Anurag Kumar from class based component" />
      </div>
    );
  }
};

export default About;
