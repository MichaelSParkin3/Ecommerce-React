/*
ProductListPage Component:
  Provides a list of products from Json that can be filtered through two groups of radio buttons (color & type).
*/
import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import Nav from "./Nav";
import "../SCSS/productListPage.scss";
import { addFilter } from "../Actions/actions";
import {
  Transition,
  TransitionElements,
  TransitionGroup,
} from "react-transition-group";
import anime from "animejs";

// Dummy JSON data used.
import { productObjectArray } from "../dummyData.js";
var productObjects = productObjectArray;

class ProductListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      filterDisplay: false,
      fullProducts: productObjects,
      filteredProducts: productObjects,

      whiteBool: false,
      blackBool: false,
      blueBool: false,
    };

    this.filter = this.filter.bind(this);
    this.searchTags = this.searchTags.bind(this);
    this.setTags = this.setTags.bind(this);
    this.checkSentFilter = this.checkSentFilter.bind(this);
  }

  handleResize = (e) => {
    const windowSize = window.innerWidth;
    this.setState({ windowWidth: windowSize });
    console.log(windowSize);
  };

  componentDidMount() {
    this.props.onRef(this);
    this.filter("blue", 1234, "color");
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    //  If filtered product array is empty then generate message else generate list of products
    let list;

    if (this.state.filteredProducts.length == 0) {
      list = <h1 className="text-center">None Available</h1>;
    } else {
      list = this.state.filteredProducts.map((x) => (
        <ProductItem
          object={x}
          brand={x.brand}
          img={x.img}
          name={x.name}
          sale_price={x.sale_price}
          origin_price={x.origin_price}
          id={x.id}
          tags={x.tags}
        />
      ));
    }

    var filterStyle;

    if (this.state.windowWidth <= 900) {
      filterStyle = this.state.filterDisplay
        ? { display: "flex" }
        : { display: "none" };
    } else {
      filterStyle = { display: "block" };
    }

    console.log("FILTERSTYLE", filterStyle, this.state.filterDisplay);

    return (
      <div className="product-list-page">
        <div className="product-flexbox">
          <div className="basket-btn-wrapper">
            <button
              onClick={() => {
                console.log("filter btn cick", window.innerWidth);
                this.setState({
                  filterDisplay: !this.state.filterDisplay,
                  windowWidth: window.innerWidth,
                });
              }}
              type="button"
              className="btn btn-dark text-center"
            >
              Show Filters
            </button>
          </div>

          <div style={filterStyle} className="filters">
            <h4>Shop by Type</h4>
            <div
              className="form-check"
              onClick={() => {
                const boolChange = () => {
                  return new Promise((resolve, reject) => {
                    this.props.addFilter({
                      leggingsBool: !this.props.filterList.filterObject[
                        "leggingsBool"
                      ],
                      braBool: false,
                      teeBool: false,
                      tankBool: false,
                      whiteBool: false,
                      blackBool: false,
                      blueBool: false,
                    });

                    const error = false;

                    if (!error) {
                      resolve();
                    } else {
                      reject("ERROR!");
                    }
                  });
                };

                boolChange()
                  .then(() => {
                    this.filter("tank", this.id, "type");
                  })
                  .catch((err) => console.log(err));
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="leggings"
                value="option1"
                checked={this.props.filterList.filterObject["leggingsBool"]}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios1">
                Leggings
              </label>
            </div>
            <div
              className="form-check"
              onClick={() => {
                const boolChange = () => {
                  return new Promise((resolve, reject) => {
                    this.props.addFilter({
                      leggingsBool: false,
                      braBool: false,
                      teeBool: false,
                      tankBool: !this.props.filterList.filterObject["tankBool"],
                      whiteBool: false,
                      blackBool: false,
                      blueBool: false,
                    });

                    const error = false;

                    if (!error) {
                      resolve();
                    } else {
                      reject("ERROR!");
                    }
                  });
                };

                boolChange()
                  .then(() => {
                    this.filter("tank", this.id, "type");
                  })
                  .catch((err) => console.log(err));
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="leggings"
                value="option1"
                checked={this.props.filterList.filterObject["tankBool"]}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios1">
                Tanks
              </label>
            </div>
            <div
              className="form-check"
              onClick={() => {
                const boolChange = () => {
                  return new Promise((resolve, reject) => {
                    this.props.addFilter({
                      leggingsBool: false,
                      braBool: false,
                      teeBool: !this.props.filterList.filterObject["teeBool"],
                      tankBool: false,
                      whiteBool: false,
                      blackBool: false,
                      blueBool: false,
                    });

                    const error = false;

                    if (!error) {
                      resolve();
                    } else {
                      reject("ERROR!");
                    }
                  });
                };

                boolChange()
                  .then(() => {
                    this.filter("tank", this.id, "type");
                  })
                  .catch((err) => console.log(err));
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="leggings"
                value="option1"
                checked={this.props.filterList.filterObject["teeBool"]}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios1">
                Tees
              </label>
            </div>
            <div
              className="form-check"
              onClick={() => {
                const boolChange = () => {
                  return new Promise((resolve, reject) => {
                    this.props.addFilter({
                      leggingsBool: false,
                      braBool: !this.props.filterList.filterObject["braBool"],
                      teeBool: false,
                      tankBool: false,
                      whiteBool: false,
                      blackBool: false,
                      blueBool: false,
                    });

                    const error = false;

                    if (!error) {
                      resolve();
                    } else {
                      reject("ERROR!");
                    }
                  });
                };

                boolChange()
                  .then(() => {
                    this.filter("tank", this.id, "type");
                  })
                  .catch((err) => console.log(err));
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="leggings"
                value="option1"
                checked={this.props.filterList.filterObject["braBool"]}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios1">
                Bras & Crops
              </label>
            </div>
            {/* Shop by Color
              ....
              ....
              */}
            <h4>Shop by Color</h4>
            <div
              className="form-check"
              onClick={() => {
                this.setState(
                  {
                    whiteBool: false,
                    blackBool: !this.state.blackBool,
                    blueBool: false,
                  },
                  function () {
                    this.filter("black", this.id, "color");
                  }
                );
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="colors"
                id="black"
                value="option2"
                checked={this.state.blackBool}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios2">
                Black
              </label>
            </div>
            <div
              className="form-check"
              onClick={() => {
                this.setState(
                  {
                    whiteBool: !this.state.whiteBool,
                    blackBool: false,
                    blueBool: false,
                  },
                  function () {
                    this.filter("white", this.id, "color");
                  }
                );
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="colors"
                id="white"
                value="option2"
                checked={this.state.whiteBool}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios2">
                White
              </label>
            </div>
            <div
              className="form-check"
              onClick={() => {
                this.setState(
                  {
                    whiteBool: false,
                    blackBool: false,
                    blueBool: !this.state.blueBool,
                  },
                  function () {
                    this.filter("blue", this.id, "color");
                  }
                );
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="colors"
                id="blue"
                value="option2"
                checked={this.state.blueBool}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios2">
                Blue
              </label>
            </div>
          </div>
          <div className="product-list">
            <div className="product-container">{list}</div>
          </div>
        </div>
      </div>
    );
  }

  //  Filter: Checks what radio button filters are checked and then filters through all the products and returns an array of product objects that match the filters.
  filter(tag, id, filter) {
    this.setState({ filteredProducts: [] });
    if (
      (this.props.filterList.filterObject["tankBool"] ||
        this.props.filterList.filterObject["teeBool"] ||
        this.props.filterList.filterObject["leggingsBool"] ||
        this.props.filterList.filterObject["braBool"]) &&
      (this.state.whiteBool || this.state.blackBool || this.state.blueBool)
    ) {
      var tagArray = this.setTags();

      var filteredObjects = this.searchTags(
        tagArray[0],
        this.state.fullProducts
      );

      var filteredObjects2 = this.searchTags(tagArray[1], filteredObjects);

      this.setState({ filteredProducts: filteredObjects2 });
    } else if (
      this.props.filterList.filterObject["tankBool"] ||
      this.props.filterList.filterObject["teeBool"] ||
      this.props.filterList.filterObject["leggingsBool"] ||
      this.props.filterList.filterObject["braBool"]
    ) {
      var tagArray = this.setTags();

      var filteredObjects = this.searchTags(
        tagArray[0],
        this.state.fullProducts
      );
      this.setState({ filteredProducts: filteredObjects });
    } else if (
      this.state.whiteBool ||
      this.state.blackBool ||
      this.state.blueBool
    ) {
      var tagArray = this.setTags();

      var filteredObjects = this.searchTags(
        tagArray[0],
        this.state.fullProducts
      );
      this.setState({ filteredProducts: filteredObjects });
    } else if (
      !this.props.filterList.filterObject["tankBool"] &&
      !this.props.filterList.filterObject["teeBool"] &&
      !this.props.filterList.filterObject["leggingsBool"] &&
      !this.props.filterList.filterObject["braBool"] &&
      !this.state.whiteBool &&
      !this.state.blackBool &&
      !this.state.blueBool
    ) {
      this.setState({ filteredProducts: this.state.fullProducts });
    }
  }
  // SEARCH TAGS: maps through json object and returns the objects with the right tags
  searchTags(tag, stateObjects) {
    var listArray = [];
    var list = stateObjects.map((x) => {
      x.tags.map((t) => {
        if (t == tag) {
          listArray.push(x);
          return x;
        }
      });
    });

    return listArray;
  }
  // setTags: Checks what radio button filters are currently pressed and returns an array of tags to search for.
  setTags() {
    var tagArray = [];
    if (this.props.filterList.filterObject["leggingsBool"]) {
      tagArray.push("leggings");
    }
    if (this.props.filterList.filterObject["teeBool"]) {
      tagArray.push("tee");
    }
    if (this.props.filterList.filterObject["tankBool"]) {
      tagArray.push("tank");
    }
    if (this.props.filterList.filterObject["braBool"]) {
      tagArray.push("bra");
    }
    if (this.state.blackBool) {
      tagArray.push("black");
    }
    if (this.state.whiteBool) {
      tagArray.push("white");
    }
    if (this.state.blueBool) {
      tagArray.push("blue");
    }
    return tagArray;
  }
  checkSentFilter() {
    this.filter("tank", this.id, "type");
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
})(ProductListPage);
