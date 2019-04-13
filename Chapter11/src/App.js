import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Carlist from './components/Carlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                CarList
              </Typography>
            </Toolbar>
          </AppBar>
          <Carlist />
      </div>
    );
  }
}

export default App;
