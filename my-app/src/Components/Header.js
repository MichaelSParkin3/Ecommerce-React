/*
Header Component:
Top of page complete with search input box, Logo, shopping cart button, and uses the imported Nav component.
Designed to be at the top of every page.
*/
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { addFilter } from "../Actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Anime from "react-anime";
import "../SCSS/header.scss";
import SearchBar from "./SearchBar";
import MobileHamNav from "./MobileHamNav";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartAnim: {
        translateX: [
          {
            value: 10 * -1,
          },
          {
            value: 10,
          },
          {
            value: 10 / -2,
          },
          {
            value: 10 / 2,
          },
          {
            value: 0,
          },
        ],
        easing: "easeInOutQuad",
        duration: 390,
      },
    };
  }

  render() {
    return (
      <div className="flex-container">
        <SearchBar />
        <div className="logo-container">
          <Link to="/">
            <h1 className="text-center pic-anim">NORDSTROM</h1>
          </Link>
        </div>
        <div className="cart-container">
          <Link to="/cart">
            <Anime {...this.state.cartAnim}>
              <i className="pic-anim fas fa-shopping-cart" />
            </Anime>
          </Link>
        </div>
        <MobileHamNav filterToParent={this.props.filterToParent} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterList: state.filterList,
    cartArray: state.cartArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators({ addFilter: addFilter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  withRef: true,
})(Header);
