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
import { Link, BrowserRouter as Router } from "react-router-dom";

// Icons
import { Menu } from "@material-ui/icons";

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
          <Router>
            <div className="App">
              <AppBar position="static">
                <Toolbar className="toolbar">
                  <div className="links">
                    <Link to="/rules">Rules</Link>
                    <Link to="/staff">Staff</Link>
                    <Link to="/profile">Profile</Link>
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
