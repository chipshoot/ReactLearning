import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
