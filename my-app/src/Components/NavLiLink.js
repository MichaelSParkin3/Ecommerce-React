import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class NavLiLink extends React.Component {
  render() {
    return (
      <Link to={this.props.link}>
        <li
          onClick={() => {
            console.log(
              this.props.boolsObject,
              this.props.boolString,
              this.props.addFilterFunc,
              this.props.filterToParentFunc
            );
            if (
              this.props.boolsObject !== undefined &&
              this.props.boolString !== undefined &&
              this.props.addFilterFunc !== undefined &&
              this.props.filterToParentFunc !== undefined
            ) {
              console.log("All Props Provided");
              this.props.setTransitionState(
                this.props.boolsObject,
                this.props.boolString,
                this.props.addFilterFunc,
                this.props.filterToParentFunc
              );
            } else {
              this.props.setTransitionState();
            }
          }}
        >
          <div>
            <button>
              {this.props.title}
              <span>
                <img
                  src={window.location.origin + "/imgs/arrow-dark.png"}
                  alt={"Right Arrow"}
                />
              </span>
            </button>
          </div>
        </li>
      </Link>
    );
  }
}
