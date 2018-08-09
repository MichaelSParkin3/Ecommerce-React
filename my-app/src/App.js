import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Home from './Components/Home';
import ProductListPage from './Components/ProductListPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            render={() => <Home ref={this.child} />}
          />
          <Route
            path={process.env.PUBLIC_URL + '/products'}
            render={() => <ProductListPage ref={this.child} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
