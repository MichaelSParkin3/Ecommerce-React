/*
Home Component:
The homepage/landing page for the site. Designed to give you a crash course on what the site has to offer.
-promotions
-popular products
-blog posts
*/
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

        <div className="pic-big-container">
          <div className="cont pic-cont-1">
            <div className="pic pic-1 pic-anim hvr-radial-out" />
            <div className="caption">
              <div className="text">
                <p className="text-center">Nike</p>
                <h3 className="text-center">Desert Bloom</h3>
              </div>
            </div>
          </div>
          <div className="cont pic-cont-2">
            <div className="pic pic-2 pic-anim hvr-radial-out">
              <div className="caption-2">
                <div className="text-2">
                  <p className="text-center">Nike</p>
                  <h3 className="text-center">Desert Bloom</h3>
                </div>
              </div>
            </div>
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
            <div className="pic pic-4 pic-anim hvr-radial-out">
              <div className="caption-3">
                <div className="text-3">
                  <p className="text-center">Nike</p>
                  <h3 className="text-center">Desert Bloom</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Lineup />

        <div className="blog-container">
          <h4 className="text-center">Straight From The Blog</h4>
          <div className="blog-row-1">
            <div className="row-1-title-div">
              <div className="text-cont">
                4 Kickass Body<br />Positive<br />Instagrammers<br />You Should
                Follow
              </div>
            </div>
            <div className="row-1-pic-div" />
          </div>
        </div>
      </div>
    );
  }
}
