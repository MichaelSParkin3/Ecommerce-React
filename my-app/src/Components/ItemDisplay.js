/*
ItemDisplay Component:

*/
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { addCart } from "../Actions/actions";
import "../SCSS/itemDisplay.scss";
import Magnifier from "react-magnifier";
import Anime from "react-anime";
import { v4 as uuidv4 } from "uuid";

class ItemDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      extraSmallBool: false,
      smallBool: false,
      mediumBool: false,
      largeBool: false,
      quantity: 1,
      hovered: false,
    };
  }

  changeHovered = () => {
    this.setState({ hovered: !this.state.hovered });
  };

  componentDidMount() {}
  render() {
    const darkBack = {
      "background-color": "#000000",
    };
    const lightBack = {
      "background-color": "#ff707c",
    };

    return (
      <div className="ItemDisplay">
        <div className="flex-1">
          <div className="img-section">
            <Magnifier
              src={this.props.currentItem.itemObject.img}
              alt={this.props.currentItem.itemObject.name}
            />
          </div>
          <div className="btn-section">
            <div className="product-brand text-center">
              {this.props.currentItem.itemObject.brand}
            </div>
            <div className="product-name text-center">
              {this.props.currentItem.itemObject.name}
            </div>
            <div className="product-price text-center">
              <span className="sale-price">
                {"$" + this.props.currentItem.itemObject.sale_price}{" "}
              </span>
              <span className="original-price">
                {"$" + this.props.currentItem.itemObject.origin_price}
              </span>
            </div>
            <div className="size-container">
              <p className="product-size text-center">Size</p>
              <div className="text-center size-btn-container">
                <div
                  className="form-check"
                  onClick={() => {
                    this.setState({
                      extraSmallBool: !this.state.extraSmallBool,
                      smallBool: false,
                      mediumBool: false,
                      largeBool: false,
                    });
                    console.log(this.state);
                  }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="size"
                    id="XS"
                    value="option1"
                    checked={this.state.extraSmallBool}
                  />
                  <span className="checkmark" />
                  <label className="form-check-label" for="exampleRadios1">
                    XS
                  </label>
                </div>
                <div
                  className="form-check"
                  onClick={() => {
                    this.setState({
                      smallBool: !this.state.smallBool,
                      extraSmallBool: false,
                      mediumBool: false,
                      largeBool: false,
                    });
                  }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="size"
                    id="S"
                    value="option1"
                    checked={this.state.smallBool}
                  />
                  <span className="checkmark" />
                  <label className="form-check-label" for="exampleRadios1">
                    S
                  </label>
                </div>
                <div
                  className="form-check"
                  onClick={() => {
                    this.setState({
                      extraSmallBool: false,
                      smallBool: false,
                      mediumBool: !this.state.mediumBool,
                      largeBool: false,
                    });
                    console.log(this.state);
                  }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="size"
                    id="M"
                    value="option1"
                    checked={this.state.mediumBool}
                  />
                  <span className="checkmark" />
                  <label className="form-check-label" for="exampleRadios1">
                    M
                  </label>
                </div>
                <div
                  className="form-check"
                  onClick={() => {
                    this.setState({
                      extraSmallBool: false,
                      smallBool: false,
                      mediumBool: false,
                      largeBool: !this.state.largeBool,
                    });
                    console.log(this.state);
                  }}
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="size"
                    id="L"
                    value="option1"
                    checked={this.state.largeBool}
                  />
                  <span className="checkmark" />
                  <label className="form-check-label" for="exampleRadios1">
                    L
                  </label>
                </div>
              </div>
            </div>
            <div className="size-chart-wrapper">
              <button type="button" className="btn btn-link text-center">
                View Size Chart
              </button>
            </div>
            <p className="product-quantity text-center">Quantity</p>
            <div className="text-center quantity-btn-container">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  if (this.state.quantity == 1) {
                  } else {
                    this.setState({ quantity: this.state.quantity - 1 });
                  }
                }}
              >
                -
              </button>
              <h3>{this.state.quantity}</h3>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  this.setState({ quantity: this.state.quantity + 1 });
                }}
              >
                +
              </button>
            </div>
            <div className="basket-btn-wrapper">
              <button
                type="button"
                className="btn btn-dark text-center"
                onMouseOut={() => {
                  this.changeHovered();
                }}
                onMouseOver={() => {
                  this.changeHovered();
                }}
                style={this.state.hovered ? darkBack : lightBack}
                onClick={() => {
                  if (
                    !this.state.extraSmallBool &&
                    !this.state.smallBool &&
                    !this.state.mediumBool &&
                    !this.state.largeBool
                  ) {
                    alert("Please select a size!");
                  } else {
                    var size = this.getSize();
                    this.props.addCart({
                      item: this.props.currentItem,
                      size: size,
                      quantity: this.state.quantity,
                      uuid: uuidv4(),
                    });
                  }
                }}
              >
                Add To Basket
              </button>
            </div>
          </div>
        </div>
        <div className="flex-2">
          <div className="product-desc">
            <h4>Product Description</h4>
            <p>
              Integer egestas varius tortor, at tempus felis sagittis ac. Donec
              ut turpis sed mauris viverra volutpat. Morbi ullamcorper ex quam,
              id convallis mauris gravida nec. Nulla ut malesuada nibh. Vivamus
              feugiat, ipsum rhoncus faucibus sagittis, metus arcu tempor eros,
              ac laoreet ligula purus at massa. Vivamus ac dictum diam. Integer
              leo lorem, pulvinar ut fermentum at, viverra non ipsum. Phasellus
              rutrum tempus quam, eu consectetur metus fringilla sit amet.
              Integer vitae varius ex, nec sollicitudin purus. Vestibulum tempor
              orci a tortor semper efficitur vel pretium dui. Donec eget felis
              sed nunc fermentum maximus. Phasellus efficitur pellentesque
              tempor. Duis diam sapien, cursus et accumsan sed, laoreet eleifend
              risus. Quisque tempor fermentum lacus, vitae condimentum odio.
              Fusce posuere fringilla arcu eget volutpat.
            </p>
          </div>
          <div className="product-details">
            <h4>Details & Care</h4>
            <p>
              73% Nylon, <br />
              27% Spandex <br />
              COLD MACHINE WASH SEPARATELY <br />
              DO NOT BLEACH SOAK OR RUB <br />
              LINE DRY IN SHADE <br />
              DO NOT IRON <br />
              DO NOT TUMBLE DRY
            </p>
          </div>
        </div>
      </div>
    );
  }
  getSize() {
    if (this.state.extraSmallBool) {
      return "XS";
    } else if (this.state.smallBool) {
      return "S";
    } else if (this.state.mediumBool) {
      return "M";
    } else if (this.state.largeBool) {
      return "L";
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators({ addCart: addCart }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  withRef: true,
})(ItemDisplay);
