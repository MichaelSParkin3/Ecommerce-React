import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Components/Home";
import ProductListPage from "./Components/ProductListPage";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ItemDisplay from "./Components/ItemDisplay";
import CartPage from "./Components/CartPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.filterObtain = this.filterObtain.bind(this);
  }
  render() {
    return (
      <Router>
        <div>
          <Header filterToParent={this.filterObtain} />
          <div className="excluding-header">
            <Nav filterToParent={this.filterObtain} />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              render={() => <Home />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/products/item"}
              render={() => <ItemDisplay />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/cart"}
              render={() => <CartPage />}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/products"}
              render={() => (
                <ProductListPage onRef={(ref) => (this.child = ref)} />
              )}
            />
            <Footer filterToParent={this.filterObtain} />
          </div>
        </div>
      </Router>
    );
  }
  filterObtain(filter) {
    this.child.checkSentFilter();
  }
}

export default App;
