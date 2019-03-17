import React from "react";
import "./style.css";

export default class App extends React.Component {
  render() {
    const x = () => {console.log('calling india')};
    x();
    return (
      <React.Fragment>
        <div className="container">Hello People</div>
      </React.Fragment>
    );
  }
}
