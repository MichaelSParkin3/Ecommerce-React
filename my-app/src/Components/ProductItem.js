import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    return (
      <div className="product-item">
        <img src={this.props.img} alt="leggings" />
        <div className="product-brand text-center">{this.props.brand}</div>
        <div className="product-name text-center">{this.props.name}</div>
        <div className="product-price text-center">
          <span className="sale-price">{'$' + this.props.sale_price} </span>
          <span className="original-price">
            {'$' + this.props.origin_price}
          </span>
        </div>
      </div>
    );
  }
}
