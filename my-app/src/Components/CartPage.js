/*
CartPage Component:

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
import { addCart, removeCart } from "../Actions/actions";
import CartItem from "./CartItem";
import "../SCSS/cartPage.scss";
import { remove } from "animejs";

class CartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.calculateTotal = this.calculateTotal.bind(this);
    this.cartMap = this.cartMap.bind(this);
  }

  onClickRemove = (element) => {
    console.log("onClickRemove", element);
    this.props.removeCart(element);
  };

  render() {
    console.log("--------------------RENDER" + JSON.stringify(this.props.cart));
    return (
      <div className="cart-page">
        <div className="cart-flex-container">
          <div className="cartItem-container">{this.cartMap()}</div>
          <div className="total-container">
            <h4>Your Cart:</h4>
            <ul>
              <li>
                <span>Subtotal</span>
                <strong>${this.calculateTotal()}</strong>
              </li>
              <li>
                <span>Discount</span>
                <strong>0</strong>
              </li>
              <li>
                <span>Delivery</span>
                <strong>0</strong>
              </li>
              <li>
                <span>Total</span>
                <strong>${this.calculateTotal()}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  cartMap() {
    if (this.props.cart[0] != null) {
      return this.props.cart.map((x, index) => {
        console.log("index", index);
        return (
          <CartItem
            cartItem={x.cartItem}
            size={x.cartItem.item.size}
            quantity={x.cartItem.item.quantity}
            onClickRemove={this.onClickRemove}
            key={x.cartItem.uuid}
            uuid={x.cartItem.uuid}
          />
        );
      });
    }
  }

  calculateTotal() {
    if (this.props.cart[0] != null) {
      var total = 0;
      this.props.cart.map((x) => {
        total =
          total + x.cartItem.quantity * x.cartItem.item.itemObject.sale_price;
      });
      return total;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators(
    { addCart: addCart, removeCart: removeCart },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  withRef: true,
})(CartPage);
