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
import {
  Transition,
  TransitionElements,
  TransitionGroup,
} from "react-transition-group";
import NavLiLink from "./NavLiLink";
import "../SCSS/mobileHamNav.scss";
import { boolChange } from "../globalFunctions";

class MobileHamNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transitioning: false,
    };
  }

  setTransitionState = (
    boolsObject,
    boolString,
    addFilterFunc,
    filterToParentFunc
  ) => {
    this.setState({
      transitioning: !this.state.transitioning,
    });

    if (
      boolsObject !== undefined &&
      boolString !== undefined &&
      addFilterFunc !== undefined &&
      filterToParentFunc !== undefined
    ) {
      console.log("SETTRANSITION BOOLCHANGE");
      boolChange(boolsObject, boolString, addFilterFunc, filterToParentFunc);
    } else {
      console.log("No boolChange arguements provided!");
    }
  };

  handleEnter = () => {
    console.log("handlenter");

    const element = document.querySelector(".ham-ul");
    element.style.display = "block";

    anime({
      targets: ".ham-menu",
      width: "100%",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {
        const element = document.querySelector(".excluding-header");
        element.style.display = "none";
      },
    });
    anime({
      targets: ".ham-ul",
      opacity: 1,
      duration: 500,
      delay: 500,
      easing: "easeInOutCirc",
      complete: () => {},
    });
  };

  handleExit = () => {
    console.log("handlexit");

    const element = document.querySelector(".excluding-header");
    element.style.display = "block";

    anime({
      targets: ".ham-ul",
      opacity: 0,
      duration: 500,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {},
    });

    anime({
      targets: ".ham-menu",
      width: "0%",
      duration: 1000,
      delay: 0,
      easing: "easeInOutCirc",
      complete: () => {
        const element = document.querySelector(".ham-ul");
        element.style.display = "none";
      },
    });
  };

  render() {
    var cartLength = 0;
    if (this.props.cart.length == 0) {
      cartLength = 0;
    } else {
      this.props.cart.map((x) => {
        cartLength = cartLength + x.cartItem.quantity;
      });
    }

    return (
      <div className="ham-container">
        <div onClick={this.hambar} className="hamburger">
          <i
            className="fas fa-bars pic-anim"
            onClick={() => {
              this.setState({
                transitioning: !this.state.transitioning,
              });
            }}
          />
        </div>
        <Transition
          in={this.state.transitioning}
          onEnter={this.handleEnter}
          onExit={this.handleExit}
          appear
          duration={1000}
          timeout={1000}
          className="ham-menu"
        >
          <div>
            <ul className="ham-ul">
              <li
                className="ham-close-li"
                onClick={() => {
                  this.setState({
                    transitioning: !this.state.transitioning,
                  });
                }}
              >
                <div>
                  <button>
                    Close
                    <span>
                      <i className="fas fa-times" />
                    </span>
                  </button>
                </div>
              </li>
              <NavLiLink
                link={"/products"}
                title={"Shop By Color"}
                setTransitionState={this.setTransitionState}
              />
              <NavLiLink
                link={"/products"}
                title={"Leggings"}
                setTransitionState={this.setTransitionState}
                boolsObject={{
                  leggingsBool: true,
                  braBool: false,
                  teeBool: false,
                  tankBool: false,
                  whiteBool: false,
                  blackBool: false,
                  blueBool: false,
                }}
                boolString={"leggings"}
                addFilterFunc={this.props.addFilter}
                filterToParentFunc={this.props.filterToParent}
              />

              <NavLiLink
                link={"/products"}
                title={"Tanks"}
                setTransitionState={this.setTransitionState}
                boolsObject={{
                  leggingsBool: false,
                  braBool: false,
                  teeBool: false,
                  tankBool: true,
                  whiteBool: false,
                  blackBool: false,
                  blueBool: false,
                }}
                boolString={"Tanks"}
                addFilterFunc={this.props.addFilter}
                filterToParentFunc={this.props.filterToParent}
              />
              <NavLiLink
                link={"/products"}
                title={"Tees"}
                setTransitionState={this.setTransitionState}
                boolsObject={{
                  leggingsBool: false,
                  braBool: false,
                  teeBool: true,
                  tankBool: false,
                  whiteBool: false,
                  blackBool: false,
                  blueBool: false,
                }}
                boolString={"Tees"}
                addFilterFunc={this.props.addFilter}
                filterToParentFunc={this.props.filterToParent}
              />
              <NavLiLink
                link={"/products"}
                title={"Bras & Crops"}
                setTransitionState={this.setTransitionState}
                boolsObject={{
                  leggingsBool: false,
                  braBool: true,
                  teeBool: false,
                  tankBool: false,
                  whiteBool: false,
                  blackBool: false,
                  blueBool: false,
                }}
                boolString={"Bras"}
                addFilterFunc={this.props.addFilter}
                filterToParentFunc={this.props.filterToParent}
              />
              <NavLiLink
                link={"/products"}
                title={"Campaigns"}
                setTransitionState={this.setTransitionState}
              />
              <NavLiLink
                link={"/products"}
                title={"About"}
                setTransitionState={this.setTransitionState}
              />
              <NavLiLink
                link={"/products"}
                title={"Blog"}
                setTransitionState={this.setTransitionState}
              />
              <Link to={"/cart"}>
                <li
                  className="cart-ham-li"
                  onClick={() => {
                    this.setTransitionState();
                  }}
                >
                  <div>
                    <button>
                      Cart
                      <span>
                        <div class="numberCircle">{cartLength}</div>
                        <i className="fas fa-shopping-cart" />
                      </span>
                    </button>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </Transition>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filterList: state.filterList,
    cart: state.cartArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return bindActionCreators({ addFilter: addFilter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  withRef: true,
})(MobileHamNav);
