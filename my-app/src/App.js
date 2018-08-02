import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Home from './Components/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Redirect from={process.env.PUBLIC_URL + '/'} to="home" />
          <Route
            path={process.env.PUBLIC_URL + '/home'}
            render={() => <Home ref={this.child} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
