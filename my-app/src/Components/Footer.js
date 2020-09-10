/*
Footer Component:
Footer div with all the relevent links seperated into columns.
Includes newsletter email sign up form.
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
import "../SCSS/footer.scss";
import { boolChange } from "../globalFunctions";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="customer-care">
            <ul>
              <li>
                <div>Customer Care</div>
              </li>
              <li className="foot-li">
                <Link to="/">
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Terms of Use</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Delivery</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Returns</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Terms of Sale of Goods</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Privacy and Cookie Policy</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="brands">
            <ul>
              <li>
                <div>Brands</div>
              </li>
              <li>
                <Link to="/">
                  <span>Nike</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Adidas</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Supreme</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="activewear">
            <ul>
              <li>
                <div>Activewear</div>
              </li>
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
                    "leggings",
                    this.props.addFilter,
                    this.props.filterToParent
                  );
                }}
              >
                <Link to="/products">
                  <span>Leggings</span>
                </Link>
              </li>
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
              >
                <Link to="/products">
                  <span>Tanks</span>
                </Link>
              </li>
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
              >
                <Link to="/products">
                  <span>Tees</span>
                </Link>
              </li>
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
              >
                <Link to="/products">
                  <span>Bras and Crops</span>
                </Link>
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
              <div class="form-group mb-2 blocker" />
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
})(Footer);
