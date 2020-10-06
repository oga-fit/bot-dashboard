import React, { Component } from "react";

// Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Rules from "./pages/Rules/Rules";
import Profile from "./pages/Profile/Profile";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rules" component={Rules} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default Routes;