import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="searchbar-container">
          <i className="fas fa-search" />
          <input className="form-control" type="text" placeholder="Search" />
        </div>
        <div className="logo-container">
          <h1 className="text-center">NORDSTROM</h1>
        </div>
        <div className="cart-container">
          <i className="fas fa-shopping-cart" />
        </div>
      </div>
    );
  }
}
