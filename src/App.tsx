import React from 'react'; 
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { ThemeProvider } from "@material-ui/styles";

import { createMuiTheme } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import { StartUp } from './startUp';

const theme = createMuiTheme({
  palette: {
    primary: indigo
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <StartUp>
          <Routes />
        </StartUp>
      </Router>
    </ThemeProvider>
  );
}

export default App;
