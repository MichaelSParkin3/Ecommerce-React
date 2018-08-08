/*
Header Component:
Top of page complete with search input box, Logo, shopping cart button, and uses the imported Nav component.
Designed to be at the top of every page.
*/
import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.hambar = this.hambar.bind(this);
  }
  render() {
    return (
      <div className="flex-container">
        <div className="searchbar-container">
          <i className="fas fa-search" />
          <input className="form-control" type="text" placeholder="Search" />
        </div>
        <div className="logo-container">
          <h1 className="text-center pic-anim">NORDSTROM</h1>
        </div>
        <div className="cart-container">
          <i className="pic-anim fas fa-shopping-cart" />
        </div>
        <div onClick={this.hambar} className="hamburger">
          <i className="fas fa-bars" />
        </div>
        <div id="ham-menu" className="ham-menu">
          <div onClick={this.closeHam} className="ham-exit">
            <i class="fas fa-times" />
          </div>
          <ul>
            <li className="">
              <a href="/">
                <span>Shop By Brand</span>
              </a>
            </li>
            <li className="">
              <a href="/">
                <span>Leggings</span>
              </a>
            </li>
            <li className="">
              <a href="/">
                <span>Tanks</span>
              </a>
            </li>
            <li className="">
              <a href="/">
                <span>Tees</span>
              </a>
            </li>
            <li className="">
              <a href="/">
                <span>Bras & Crops</span>
              </a>
            </li>
            <li className="">
              <a href="/">
                <span>Campaigns</span>
              </a>
            </li>
            <li className="">
              <a href="/">
                <span>About</span>
              </a>
            </li>
            <li className="">
              <a href="/">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  hambar() {
    console.log('hi');
    document.getElementById('ham-menu').style.display = 'block';
  }
  closeHam() {
    document.getElementById('ham-menu').style.display = 'none';
  }
}
