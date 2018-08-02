import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">
              <span>Shop By Brand</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Leggings</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Tanks</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Tees</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Bras & Crops</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Campaigns</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Blog</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
