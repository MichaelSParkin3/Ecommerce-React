/*
Header Component:
Top of page complete with search input box, Logo, shopping cart button, and uses the imported Nav component.
Designed to be at the top of every page.
*/
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { addFilter } from "../Actions/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Anime from "react-anime";
import anime from "animejs";
import "../SCSS/header.scss";
import {
  Transition,
  TransitionElements,
  TransitionGroup,
} from "react-transition-group";
// Dummy JSON data used.
import { productObjectArray } from "../dummyData.js";
import ProductItem from "./ProductItem";

var isTimerRunning = false;
var suggestionsLoaded = false;
var searchTerm;
var typeTimer;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transitioning: false,
      productResults: [],
      term: "",
    };
  }

  handleEnter = () => {
    console.log("handlenter");

    const element = document.querySelector(".searchbar-window");
    element.style.display = "block";

    anime({
      targets: ".searchbar-window",
      width: "100%",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {},
    });
    anime({
      targets: ".input-container",
      translateY: 50,
      opacity: 1,
      duration: 500,
      delay: 300,
      easing: "easeInOutCirc",
      complete: () => {
        const element = document.querySelector(".excluding-header");
        element.style.display = "none";
      },
    });
    anime({
      targets: ".results-container",
      translateY: 50,
      opacity: 1,
      duration: 500,
      delay: 300,
      easing: "easeInOutCirc",
      complete: () => {},
    });
  };

  handleExit = () => {
    console.log("handlexit");

    const element = document.querySelector(".excluding-header");
    element.style.display = "block";

    anime({
      targets: ".searchbar-window",
      width: "0%",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {
        const element = document.querySelector(".searchbar-window");
        element.style.display = "none";
      },
    });
    anime({
      targets: ".input-container",
      translateY: -50,
      opacity: 0,
      duration: 500,
      delay: 100,
      easing: "easeInOutCirc",
      complete: () => {},
    });
    anime({
      targets: ".results-container",
      translateY: -50,
      opacity: 0,
      duration: 500,
      delay: 100,
      easing: "easeInOutCirc",
      complete: () => {},
    });
  };

  onProductClick = () => {
    this.setState({ transitioning: false });
  };

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({ term: event.target.value });
    this.setState({ productResults: [] });
    console.log(this.state.productResults);
    searchTerm = event.target.value;
    if (isTimerRunning == false) {
      isTimerRunning = true;
      typeTimer = setTimeout(() => {
        this.startSearch(searchTerm);
        isTimerRunning = false;
      }, 300);
    } else {
      console.log("Timer is Runnoing");
      clearTimeout(typeTimer);
      typeTimer = setTimeout(() => {
        this.startSearch(searchTerm);
        isTimerRunning = false;
      }, 300);
    }
  };

  /*
  checks to see if current search term is blank and if it isn't it will continue generating items
  */

  startSearch(term) {
    if (term == "") {
      console.log("NO TERM");
      this.setState({ productResults: [] });
    } else {
      console.log(term);
      this.getSearchSuggestions(term);
    }
  }

  /*
  Gets the suggestions from the database and adds them to the current state
  */

  getSearchSuggestions(term) {
    console.log(productObjectArray);
    var results = [];
    productObjectArray.map((productObject) => {
      console.log("productObject.name", productObject.name);
      console.log("term", term);
      if (productObject.name.toLowerCase().includes(term.toLowerCase())) {
        console.log("MATCH");
        results.push(productObject);
      }
    });
    this.setState({ productResults: results });
    console.log(results);
  }

  render() {
    let list;

    if (this.state.productResults.length == 0) {
      //list = <h1 className="text-center results-default">No Results</h1>;
    } else {
      list = this.state.productResults.map((x) => (
        <ProductItem
          object={x}
          brand={x.brand}
          img={x.img}
          name={x.name}
          sale_price={x.sale_price}
          origin_price={x.origin_price}
          id={x.id}
          tags={x.tags}
          onProductClick={this.onProductClick}
        />
      ));
    }

    return (
      <div className="searchbar-container">
        <i
          onClick={() => {
            console.log("search cick");
            this.setState({ transitioning: !this.state.transitioning });
          }}
          className="fas fa-search pic-anim"
        />
        <Transition
          in={this.state.transitioning}
          onEnter={this.handleEnter}
          onExit={this.handleExit}
          appear
          duration={1000}
          timeout={1000}
          className="searchbar-window"
        >
          <div>
            <div className="big-search">
              <i
                onClick={() => {
                  console.log("search cick");
                  this.setState({ transitioning: !this.state.transitioning });
                }}
                className="fas fa-times pic-anim"
              ></i>
              <div className="input-container">
                <i className="fas fa-search big-search-icon" />
                <input
                  className="big-search-input"
                  type="text"
                  placeholder="Search Here"
                  onChange={this.onInputChange}
                />
              </div>
              <div className="results-container">
                <div className="product-list">
                  <div className="product-container">{list}</div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterList: state.filterList,
    cartArray: state.cartArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators({ addFilter: addFilter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  withRef: true,
})(SearchBar);
