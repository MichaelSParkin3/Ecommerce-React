/*
Lineup Component:
Used to dynamically generate ProductItem Components and fill them with data from the JSON format.
The items are put into a container and into the popular products section of the Home Component.
*/
import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "../SCSS/lineup.scss";

// Dummy JSON data used.
var productObjects = [
  {
    img: window.location.origin + "/imgs/StadiumLeggings.jpeg",
    brand: "Nike",
    name: "Stadium Full Length Leggings",
    sale_price: "44.00",
    origin_price: "80.00",
    id: "1",
    tags: ["leggings", "black"],
  },
  {
    img: window.location.origin + "/imgs/EnergizeLeggings.jpeg",
    brand: "Nike",
    name: "Energize Full Length Leggings",
    sale_price: "48.00",
    origin_price: "70.00",
    id: "3",
    tags: ["leggings", "black"],
  },
  {
    img: window.location.origin + "/imgs/StadiumBra.jpeg",
    brand: "Nike",
    name: "Stadium Bra",
    sale_price: "45.00",
    origin_price: "65.00",
    id: "4",
    tags: ["bra", "white"],
  },
  {
    img: window.location.origin + "/imgs/PerfTank.jpeg",
    brand: "Nike",
    name: "Perf Tank",
    sale_price: "45.00",
    origin_price: "65.00",
    id: "6",
    tags: ["tank", "black"],
  },
];

export default class Lineup extends Component {
  render() {
    return (
      <div className="lineup">
        <h4 className="text-center">Most Popular Products</h4>
        <div className="product-container">
          {productObjects.map((x, index) => (
            <ProductItem
              object={x}
              brand={x.brand}
              img={x.img}
              name={x.name}
              sale_price={x.sale_price}
              origin_price={x.origin_price}
              id={x.id}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
