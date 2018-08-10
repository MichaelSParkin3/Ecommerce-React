/*
ProductListPage Component:
  Provides a list of products from Json that can be filtered through two groups of radio buttons (color & type).
*/
import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import ProductItem from './ProductItem';
import Nav from './Nav';
import '../CSS/productListPage.css';

// Dummy JSON data used.
var productObjects = [
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-full-exterior.png',
    brand: 'Nike',
    name: 'Stadium Full Length Leggings',
    sale_price: '44.00',
    origin_price: '80.00',
    id: '1',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-blue-thumb.png',
    brand: 'Nike',
    name: 'Energize Bra',
    sale_price: '40.00',
    origin_price: '88.00',
    id: '2',
    tags: ['bra', 'blue']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-me-legging-thumb.png',
    brand: 'Nike',
    name: 'Energize Full Length Leggings',
    sale_price: '48.00',
    origin_price: '70.00',
    id: '3',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-bra-thumb.png',
    brand: 'Nike',
    name: 'Stadium Bra',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '4',
    tags: ['bra', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/oh-boy-thumb.png',
    brand: 'Nike',
    name: 'Oh Boy Tee',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '5',
    tags: ['tee', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/active-tank-thumb-0.png',
    brand: 'Nike',
    name: 'Perf Tank',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '6',
    tags: ['tank', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-full-exterior.png',
    brand: 'Nike',
    name: 'Stadium Full Length Leggings',
    sale_price: '44.00',
    origin_price: '80.00',
    id: '1',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-blue-thumb.png',
    brand: 'Nike',
    name: 'Energize Bra',
    sale_price: '40.00',
    origin_price: '88.00',
    id: '2',
    tags: ['bra', 'blue']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-me-legging-thumb.png',
    brand: 'Nike',
    name: 'Energize Full Length Leggings',
    sale_price: '48.00',
    origin_price: '70.00',
    id: '3',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-bra-thumb.png',
    brand: 'Nike',
    name: 'Stadium Bra',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '4',
    tags: ['bra', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/oh-boy-thumb.png',
    brand: 'Nike',
    name: 'Oh Boy Tee',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '5',
    tags: ['tee', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/active-tank-thumb-0.png',
    brand: 'Nike',
    name: 'Perf Tank',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '6',
    tags: ['tank', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-full-exterior.png',
    brand: 'Nike',
    name: 'Stadium Full Length Leggings',
    sale_price: '44.00',
    origin_price: '80.00',
    id: '1',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-blue-thumb.png',
    brand: 'Nike',
    name: 'Energize Bra',
    sale_price: '40.00',
    origin_price: '88.00',
    id: '2',
    tags: ['bra', 'blue']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-me-legging-thumb.png',
    brand: 'Nike',
    name: 'Energize Full Length Leggings',
    sale_price: '48.00',
    origin_price: '70.00',
    id: '3',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-bra-thumb.png',
    brand: 'Nike',
    name: 'Stadium Bra',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '4',
    tags: ['bra', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/oh-boy-thumb.png',
    brand: 'Nike',
    name: 'Oh Boy Tee',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '5',
    tags: ['tee', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/active-tank-thumb-0.png',
    brand: 'Nike',
    name: 'Perf Tank',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '6',
    tags: ['tank', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-full-exterior.png',
    brand: 'Nike',
    name: 'Stadium Full Length Leggings',
    sale_price: '44.00',
    origin_price: '80.00',
    id: '1',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-blue-thumb.png',
    brand: 'Nike',
    name: 'Energize Bra',
    sale_price: '40.00',
    origin_price: '88.00',
    id: '2',
    tags: ['bra', 'blue']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-me-legging-thumb.png',
    brand: 'Nike',
    name: 'Energize Full Length Leggings',
    sale_price: '48.00',
    origin_price: '70.00',
    id: '3',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-bra-thumb.png',
    brand: 'Nike',
    name: 'Stadium Bra',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '4',
    tags: ['bra', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/oh-boy-thumb.png',
    brand: 'Nike',
    name: 'Oh Boy Tee',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '5',
    tags: ['tee', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/active-tank-thumb-0.png',
    brand: 'Nike',
    name: 'Perf Tank',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '6',
    tags: ['tank', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-full-exterior.png',
    brand: 'Nike',
    name: 'Stadium Full Length Leggings',
    sale_price: '44.00',
    origin_price: '80.00',
    id: '1',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-blue-thumb.png',
    brand: 'Nike',
    name: 'Energize Bra',
    sale_price: '40.00',
    origin_price: '88.00',
    id: '2',
    tags: ['bra', 'blue']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/energise-me-legging-thumb.png',
    brand: 'Nike',
    name: 'Energize Full Length Leggings',
    sale_price: '48.00',
    origin_price: '70.00',
    id: '3',
    tags: ['leggings', 'black']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/stadium-bra-thumb.png',
    brand: 'Nike',
    name: 'Stadium Bra',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '4',
    tags: ['bra', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/oh-boy-thumb.png',
    brand: 'Nike',
    name: 'Oh Boy Tee',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '5',
    tags: ['tee', 'white']
  },
  {
    img:
      'https://njorunactive.com/uploads/images/productThumbnails/_400x400_crop_center-center_100/active-tank-thumb-0.png',
    brand: 'Nike',
    name: 'Perf Tank',
    sale_price: '45.00',
    origin_price: '65.00',
    id: '6',
    tags: ['tank', 'black']
  }
];

var initialFilterRan;

export default class ProductListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullProducts: productObjects,
      filteredProducts: productObjects,
      sentFilter: '',
      sentFilterBool: false,
      typeFiltered: false,
      colorFiltered: false,
      leggingsBool: false,
      braBool: false,
      teeBool: false,
      tankBool: false,
      whiteBool: false,
      blackBool: false,
      blueBool: false
    };

    this.filter = this.filter.bind(this);
    this.searchTags = this.searchTags.bind(this);
    this.setTags = this.setTags.bind(this);
    this.checkSentFilter = this.checkSentFilter.bind(this);
  }
  componentWillMount() {
    initialFilterRan = false;
    this.setState(
      {
        sentFilter: this.props.sentFilter
      },
      function() {


        var promise = new Promise((resolve, reject)=> {

          console.log('this.state.sentFilter: ' + this.state.sentFilter);


          switch (this.state.sentFilter) {
            case 'leggings':
              this.setState({
                leggingsBool: true,
                sentFilter: ''
              });

              break;

            case 'tank':
              this.setState({
                tankBool: true,
                sentFilter: ''
              });

              break;

            case 'tee':
            console.log('CASE TEE');
              this.setState({
                teeBool: true,
                sentFilter: ''
              },
              function() {
                this.filter('tee', this.id, 'type');
                console.log('CASE TEEBOOL: '+this.state.teeBool);
              });

              break;

            case 'bra':
              this.setState({
                braBool: true,
                sentFilter: ''
              });

              break;
          }



        });

        promise.then(this.filter('tee', this.id, 'type'))
        .catch(err => console.log(err));

      }
    );
  }
  render() {
    //  If filtered product array is empty then generate message else generate list of products
    let list;
    console.log('RENDER');
    if (this.state.filteredProducts.length == 0) {
      list = <h1 className="text-center">None Available</h1>;
    } else {
      console.log('PRINMT');
      list = this.state.filteredProducts.map(x => (
        <ProductItem
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

    return (
      <div className="product-list-page">
        <div className="product-flexbox">
          <div className="filters">
            <h4>Shop by Type</h4>
            <div
              className="form-check"
              onClick={() => {
                this.setState(
                  {
                    leggingsBool: !this.state.leggingsBool,
                    teeBool: false,
                    tankBool: false,
                    braBool: false
                  },
                  function() {
                    this.filter('leggings', this.id, 'type');
                  }
                );
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="leggings"
                value="option1"
                checked={this.state.leggingsBool}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios1">
                Leggings
              </label>
            </div>
            <div
              className="form-check"
              onClick={() => {
                this.setState(
                  {
                    leggingsBool: false,
                    teeBool: false,
                    tankBool: !this.state.tankBool,
                    braBool: false
                  },
                  function() {
                    this.filter('tank', this.id, 'type');
                  }
                );
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="leggings"
                value="option1"
                checked={this.state.tankBool}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios1">
                Tanks
              </label>
            </div>
            <div
              className="form-check"
              onClick={() => {
                this.setState(
                  {
                    leggingsBool: false,
                    teeBool: !this.state.teeBool,
                    tankBool: false,
                    braBool: false
                  },
                  function() {
                    this.filter('tees', this.id, 'type');
                  }
                );
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="leggings"
                value="option1"
                checked={this.state.teeBool}
              />
              <span className="checkmark" />
              <label className="form-check-label" for="exampleRadios1">
                Tees
              </label>
            </div>
            <div
              className="form-check"
              onClick={() => {
                this.setState(
                  {
                    leggingsBool: false,
                    teeBool: false,
                    tankBool: false,
                    braBool: !this.state.braBool
                  },
                  function() {
                    this.filter('bra', this.id, 'type');
                  }
                );
              }}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="leggings"
                value="option1"
                checked={this.state.braBool}
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
                    blueBool: false
                  },
                  function() {
                    this.filter('black', this.id, 'color');
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
                    blueBool: false
                  },
                  function() {
                    this.filter('white', this.id, 'color');
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
                    blueBool: !this.state.blueBool
                  },
                  function() {
                    this.filter('blue', this.id, 'color');
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
    console.log('filter func: '+JSON.stringify(this.state.teeBool));
    initialFilterRan = true;
    this.setState({ filteredProducts: [] });
    if (
      (this.state.tankBool ||
        this.state.teeBool ||
        this.state.leggingsBool ||
        this.state.braBool) &&
      (this.state.whiteBool || this.state.blackBool || this.state.blueBool)
    ) {
      var tagArray = this.setTags();
      console.log(tagArray);
      var filteredObjects = this.searchTags(
        tagArray[0],
        this.state.fullProducts
      );
      console.log('1st filtered: ' + filteredObjects);
      var filteredObjects2 = this.searchTags(tagArray[1], filteredObjects);
      console.log(filteredObjects2);
      this.setState({ filteredProducts: filteredObjects2 });
    } else if (
      this.state.tankBool ||
      this.state.teeBool ||
      this.state.leggingsBool ||
      this.state.braBool
    ) {
      var tagArray = this.setTags();
      console.log('tagArray! ' + tagArray);
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
      console.log(tagArray);
      var filteredObjects = this.searchTags(
        tagArray[0],
        this.state.fullProducts
      );
      this.setState({ filteredProducts: filteredObjects });
    } else if (
      !this.state.tankBool &&
      !this.state.teeBool &&
      !this.state.leggingsBool &&
      !this.state.braBool &&
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
    var list = stateObjects.map(x => {
      x.tags.map(t => {
        if (t == tag) {
          listArray.push(x);
          return x;
        }
      });
    });

    console.log('filtered: ' + JSON.stringify(listArray));
    return listArray;
  }
  // setTags: Checks what radio button filters are currently pressed and returns an array of tags to search for.
  setTags() {
    var tagArray = [];
    if (this.state.leggingsBool) {
      tagArray.push('leggings');
    }
    if (this.state.teeBool) {
      tagArray.push('tee');
    }
    if (this.state.tankBool) {
      console.log('TANKBOOL------' + this.state.tankBool);
      tagArray.push('tank');
    }
    if (this.state.braBool) {
      tagArray.push('bra');
    }
    if (this.state.blackBool) {
      tagArray.push('black');
    }
    if (this.state.whiteBool) {
      tagArray.push('white');
    }
    if (this.state.blueBool) {
      tagArray.push('blue');
    }
    return tagArray;
  }
  checkSentFilter() {

console.log('state SentFilter: '+this.state.sentFilter);


    switch (this.state.sentFilter) {
      case 'leggings':
        this.setState({
          leggingsBool: true,
          sentFilter: ''
        });

        break;

      case 'tank':
        this.setState({
          tankBool: true,
          sentFilter: ''
        });

        break;

      case 'tee':
      console.log('CASE TEE');
        this.setState({
          teeBool: true,
          sentFilter: ''
        },
        function() {
          console.log('CASE TEEBOOL: '+this.state.teeBool);
        });

        break;

      case 'bra':
        this.setState({
          braBool: true,
          sentFilter: ''
        });

        break;
    }


console.log('checkSentFilter: '+this.state.teeBool);


  }
}
