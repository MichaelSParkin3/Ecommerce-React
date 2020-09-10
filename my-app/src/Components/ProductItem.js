/*
ProductItem Component:
Empty component to be filled with data and then represent a product in the store.
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
import { addItem } from "../Actions/actions";
import Anime from "react-anime";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }

  changeHovered = () => {
    this.setState({ hovered: !this.state.hovered });
  };

  render() {
    const newColor = "#ff707c";
    const oldColor = "#000000";

    return (
      <div
        onMouseOut={() => {
          this.changeHovered();
        }}
        onMouseOver={() => {
          this.changeHovered();
        }}
        className={"product-item" + " " + "product-item-" + this.props.id}
      >
        <Link
          onClick={() => {
            console.log("ProductItem Props:" + JSON.stringify(this.props));
            this.props.addItem(this.props.object);
            if (this.props.onProductClick !== undefined) {
              this.props.onProductClick();
            }
          }}
          to="/products/item"
        >
          <div className="product-img-cont">
            <img className="pic-anim" src={this.props.img} alt="leggings" />
          </div>
          <div className="product-brand text-center">{this.props.brand}</div>
          <Anime
            color={this.state.hovered ? newColor : oldColor}
            easing="easeOutElastic"
            duration={1000}
          >
            <div className="product-name text-center">{this.props.name}</div>
          </Anime>
          <div className="product-price text-center">
            <span className="sale-price">{"$" + this.props.sale_price} </span>
            <span className="original-price">
              {"$" + this.props.origin_price}
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators({ addItem: addItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  withRef: true,
})(ProductItem);
