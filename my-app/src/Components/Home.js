import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Lineup from './Lineup';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner-ad">
          <p>FREE UK Delivery & Returns - on all orders over £85</p>
        </div>
        <Header />
        <div>
          <Nav />
        </div>
        <div className="pic-big-container">
          <div className="cont pic-cont-1">
            <div className="pic pic-1 pic-anim" />
          </div>
          <div className="cont pic-cont-2">
            <div className="pic pic-2 pic-anim" />
            <div className="pic pic-3">
              <div className="text-cont">
                <p className="text-center">Orders over $80...</p>
                <h3 className="text-center">FREE SHIPPING</h3>
              </div>
            </div>
          </div>
          <div className="cont pic-cont-3">
            <div className="pic pic-5">
              <div className="text-cont">
                <p className="text-center">Orders over $80...</p>
                <h3 className="text-center">FREE SHIPPING</h3>
              </div>
            </div>
            <div className="pic pic-4 pic-anim" />
          </div>
        </div>
        <Lineup />

        <div className="blog-container">
          <h4 className="text-center">Straight From The Blog</h4>
          <div className="blog-row-1">
            <div className="row-1-title-div">
              <div className="text-cont">
                4 Kickass Body Positive Instagrammers You Should Follow
              </div>
            </div>
            <div className="row-1-pic-div" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
