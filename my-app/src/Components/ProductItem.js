/*
ProductItem Component:
Empty component to be filled with data and then represent a product in the store.
*/
import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    return (
      <div className={'product-item' + ' ' + 'product-item-' + this.props.id}>
        <a href="/">
          <div className="product-img-cont">
            <img className="pic-anim" src={this.props.img} alt="leggings" />
          </div>
          <div className="product-brand text-center">{this.props.brand}</div>
          <div className="product-name text-center">{this.props.name}</div>
          <div className="product-price text-center">
            <span className="sale-price">{'$' + this.props.sale_price} </span>
            <span className="original-price">
              {'$' + this.props.origin_price}
            </span>
          </div>
        </a>
      </div>
    );
  }
}
