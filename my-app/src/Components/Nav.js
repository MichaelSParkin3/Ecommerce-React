/*
Nav Component:
Simple navbar component to route to different pages.
*/
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.sendFilter = this.sendFilter.bind(this);
  }
  render() {
    return (
      <nav>
        <ul>
          <li className="hvr-float-shadow">
            <Link to="/products">
              <span>Shop By Color</span>
            </Link>
          </li>
          <Link to="/products">
            <li
              onClick={() => {
                this.sendFilter('leggings');
              }}
              className="hvr-float-shadow"
            >
              <span>Leggings</span>
            </li>
          </Link>
          <Link to="/products">
            <li
              onClick={() => {
                this.sendFilter('tank');
              }}
              className="hvr-float-shadow"
            >
              <span>Tanks</span>
            </li>
          </Link>
          <Link to="/products">
            <li
              onClick={() => {
                this.sendFilter('tee');
              }}
              className="hvr-float-shadow"
            >
              <span>Tees</span>
            </li>
          </Link>
          <Link to="/products">
            <li
              onClick={() => {
                this.sendFilter('bra');
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
  sendFilter(filter) {
    this.props.filterToParent(filter);
  }
}
