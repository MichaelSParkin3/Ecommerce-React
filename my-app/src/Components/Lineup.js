/*
Lineup Component:
Used to dynamically generate ProductItem Components and fill them with data from the JSON format.
The items are put into a container and into the popular products section of the Home Component.
*/
import React, { Component } from 'react';
import ProductItem from './ProductItem';

// Dummy JSON data used.
var productObjects = [
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-full-exterior.png',
    brand: 'Nike',
    name: 'Stadium Full Length Leggings',
    sale_price: '44.00',
    origin_price: '80.00',
    id: '1'
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-blue-thumb.png',
    brand: 'Nike',
    name: 'Energize Bra',
    sale_price: '40.00',
    origin_price: '88.00',
    id: '2'
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-me-legging-thumb.png',
    brand: 'Nike',
    name: 'Energize Full Length Leggings',
    sale_price: '48.00',
    origin_price: '70.00',
    id: '3'
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-bra-thumb.png',
    brand: 'Nike',
    name: 'Stadium Bra',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '4'
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
              id={x.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
