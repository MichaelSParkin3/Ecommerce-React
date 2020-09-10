/*
CartItem Component:

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
import "../SCSS/cartPage.scss";

export default class CartItem extends Component {
  render() {
    console.log(this.props.cartItem);

    var sizeString = "";

    switch (this.props.cartItem.size) {
      case "XS":
        sizeString = "Extra Small";
        break;
      case "S":
        sizeString = "Small";
        break;
      case "M":
        sizeString = "Medium";
        break;
      case "L":
        sizeString = "Large";
        break;
    }

    return (
      <div className="cart-item">
        <div className="cart-img-and-info">
          <img src={this.props.cartItem.item.itemObject.img} />
          <div className="cart-info">
            <h4>{this.props.cartItem.item.itemObject.name}</h4>
            <p>
              {this.props.cartItem.quantity +
                " X " +
                this.props.cartItem.item.itemObject.sale_price}
            </p>
            <p>{sizeString}</p>
          </div>
        </div>
        <div className="cart-remove-btn">
          <i
            onClick={() => {
              this.props.onClickRemove(this.props.cartItem);
            }}
            className="fas fa-times pic-anim"
          ></i>
        </div>
      </div>
    );
  }
}
