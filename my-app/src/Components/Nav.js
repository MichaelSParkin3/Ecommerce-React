/*
Nav Component:
Simple navbar component to route to different pages.
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
import { boolChange } from "../globalFunctions";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <li className="hvr-float-shadow shopByColor">
            <Link to="/products">
              <span>Shop By Color</span>
            </Link>
          </li>
          <Link to="/products">
            <li
              onClick={() => {
                boolChange(
                  {
                    leggingsBool: true,
                    braBool: false,
                    teeBool: false,
                    tankBool: false,
                    whiteBool: false,
                    blackBool: false,
                    blueBool: false,
                  },
                  "bra",
                  this.props.addFilter,
                  this.props.filterToParent
                );
              }}
              className="hvr-float-shadow"
            >
              <span>Leggings</span>
            </li>
          </Link>
          <Link to="/products">
            <li
              onClick={() => {
                boolChange(
                  {
                    leggingsBool: false,
                    braBool: false,
                    teeBool: false,
                    tankBool: true,
                    whiteBool: false,
                    blackBool: false,
                    blueBool: false,
                  },
                  "tank",
                  this.props.addFilter,
                  this.props.filterToParent
                );
              }}
              className="hvr-float-shadow"
            >
              <span>Tanks</span>
            </li>
          </Link>
          <Link to="/products">
            <li
              onClick={() => {
                boolChange(
                  {
                    leggingsBool: false,
                    braBool: false,
                    teeBool: true,
                    tankBool: false,
                    whiteBool: false,
                    blackBool: false,
                    blueBool: false,
                  },
                  "tee",
                  this.props.addFilter,
                  this.props.filterToParent
                );
              }}
              className="hvr-float-shadow"
            >
              <span>Tees</span>
            </li>
          </Link>
          <Link to="/products">
            <li
              onClick={() => {
                boolChange(
                  {
                    leggingsBool: false,
                    braBool: true,
                    teeBool: false,
                    tankBool: false,
                    whiteBool: false,
                    blackBool: false,
                    blueBool: false,
                  },
                  "bra",
                  this.props.addFilter,
                  this.props.filterToParent
                );
              }}
              className="hvr-float-shadow"
            >
              <span>Bras & Crops</span>
            </li>
          </Link>
          <li className="hvr-float-shadow">
            <Link to="/products">
              <span>Campaigns</span>
            </Link>
          </li>
          <li className="hvr-float-shadow">
            <Link to="/products">
              <span>About</span>
            </Link>
          </li>
          <li className="hvr-float-shadow">
            <Link to="/products">
              <span>Blog</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterList: state.filterList,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators({ addFilter: addFilter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  withRef: true,
})(Nav);
