import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import colors from '../utils/colors';
import '../App.css';
import Home from './Home';
import Menu from './Menu';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <BrowserRouter>
          <Switch>
            <div className="App">
              <Menu />
              <Footer />
              <Route exact path="/" component={Home} />
            </div>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
