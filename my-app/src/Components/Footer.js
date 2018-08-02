import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="customer-care">
            <ul>
              <li>
                <div>Customer Care</div>
              </li>
              <li>
                <a href="/">
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Terms of Use</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Delivery</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Returns</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Terms of Sale of Goods</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Privacy and Cookie Policy</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="brands">
            <ul>
              <li>
                <div>Brands</div>
              </li>
              <li>
                <a href="/">
                  <span>Nike</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Adidas</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Supreme</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="activewear">
            <ul>
              <li>
                <div>Activewear</div>
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
                  <span>Bras and Crops</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <ul>
              <li>
                <div>Newsletter</div>
              </li>
            </ul>
            <form class="form-inline">
              <div class="form-group mb-2" />
              <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Email"
                />
              </div>
              <button type="submit" class="btn btn-primary mb-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
