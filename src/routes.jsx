import React, { Component } from "react";

// Components
import { Switch, Route } from "react-router-dom";

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
          <Route strict path="/profile/:userId?" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
