import React, { Component } from 'react';
import ProductItem from './ProductItem';

var productObjects = [
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-full-exterior.png',
    brand: 'Nike',
    name: 'Stadium Full Length Leggings',
    sale_price: '44.00',
    origin_price: '80.00'
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-blue-thumb.png',
    brand: 'Nike',
    name: 'Energize Bra',
    sale_price: '40.00',
    origin_price: '88.00'
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-me-legging-thumb.png',
    brand: 'Nike',
    name: 'Energize Full Length Leggings',
    sale_price: '48.00',
    origin_price: '70.00'
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-bra-thumb.png',
    brand: 'Nike',
    name: 'Stadium Bra',
    sale_price: '45.00',
    origin_price: '65.00'
  }
];

export default class Lineup extends Component {
  render() {
    return (
      <div className="lineup">
        <h4 className="text-center">Most Popular Products</h4>
        <div className="product-container">
          {productObjects.map(x => (
            <ProductItem
              brand={x.brand}
              img={x.img}
              name={x.name}
              sale_price={x.sale_price}
              origin_price={x.origin_price}
            />
          ))}
        </div>
      </div>
    );
  }
}
