import React from "react";
import "./style.css";

interface X {
  name?: string
}
export default class App extends React.Component<X, any> {
  render() {
    const x = () => {
      console.log("calling india");
    };
    x();
    return (
      <React.Fragment>
        <div className="container">Hello People</div>
      </React.Fragment>
    );
  }
}
