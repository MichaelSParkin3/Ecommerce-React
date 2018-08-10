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
import Footer from './Components/Footer';
import Header from './Components/Header';
import Nav from './Components/Nav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sentFilter: '',
      sentFilterBool: false
    };

    this.filterObtain = this.filterObtain.bind(this);
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Nav filterToParent={this.filterObtain} />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            render={() => <Home ref={this.child} />}
          />
          <Route
            path={process.env.PUBLIC_URL + '/products'}
            render={() => (
              <ProductListPage
                sentFilter={this.state.sentFilter}
                sentFilterBool={this.state.sentFilterBool}
                changeFilterBool={this.changeFilterBool}
                ref={this.child}
              />
            )}
          />
          <Footer />
        </div>
      </Router>
    );
  }
  filterObtain(filter) {
    console.log(filter);
    this.setState({
      sentFilter: filter,
      sentFilterBool: true
    });
  }
  changeFilterBool() {
    this.setState({ sentFilterBool: false });
  }
}

export default App;
