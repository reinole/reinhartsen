import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import '../App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Menu />
            <Route exact path="/" component={Home} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
