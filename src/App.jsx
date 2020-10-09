import React from "react";
import "./App.scss";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

// Components
import {
  ThemeProvider,
  createMuiTheme,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

// Icons
// import { Menu } from "@material-ui/icons";

// Routes
import Routes from "./routes";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// Theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3ddafe",
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Router basename={`${process.env.REACT_APP_BASENAME}`}>
            <div className="App">
              <AppBar position="static">
                <Toolbar className="toolbar">
                  <div className="links">
                    <NavLink
                      exact
                      to="/"
                      activeClassName="selected"
                      className="nav-link">
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/rules"
                      activeClassName="selected"
                      className="nav-link">
                      Rules
                    </NavLink>
                    <NavLink
                      to="/staff"
                      activeClassName="selected"
                      className="nav-link">
                      Staff
                    </NavLink>
                    <NavLink
                      to="/profile"
                      activeClassName="selected"
                      className="nav-link">
                      Profile
                    </NavLink>
                  </div>
                </Toolbar>
              </AppBar>
              <Routes />
            </div>
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }
}

export default App;
