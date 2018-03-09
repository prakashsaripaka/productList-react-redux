import React, { Component } from 'react';
import './App.css';
import Search from '../components/search';
import Product from '../components/product';
import CustomDropdown from "../components/customDropdown"
import {connect} from 'react-redux';

import PLPAction from '../actions/actions';
import searchSelector from '../selectors/plp-selectors';


class App extends Component {

    constructor(props){
        super(props);
        this.searchEventHandler = this.searchEventHandler.bind(this);
        this.sortEventHandler = this.sortEventHandler.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(PLPAction.loadProductsData());

    }


    searchEventHandler(searchKey){
        this.props.dispatch(PLPAction.search(searchKey));
    }

    sortEventHandler(sortBy){
        this.props.dispatch(PLPAction.sort(sortBy));
    }

  render() {

     /* const getProductList = () => {

          if(this.props.searchString === ""){
              return this.props.products.map((item, index) => {
                  return (<Product key={index} data={item} ></Product>);
              });
          } else {
              return this.props.products
                  .filter((item) => { return (item.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) >= 0); })
                  .map((item, index) => {
                     return (<Product key={index} data={item} ></Product>);
                  });
          }
      };*/
      function compare(a,b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }

      const getProductList = () => {
          let productList = this.props.products;

           if(this.props.sortBy === "A-Z"){
             productList.sort(function(a,b) {return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0);})
           }
          else{
            productList.sort(function(a,b) {return (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : 0);})
         }

          return productList.map((item, index) => {
            return (<Product key={index} data={item} ></Product>);
          });
      };


    return (
      <div className="App">
        <h1>Product List</h1>
          <Search searchEventHandler={this.searchEventHandler}></Search>
          <CustomDropdown sortEventHandler={this.sortEventHandler} options={["A-Z","Z-A"]}/>
          <CustomDropdown options={["price","others"]}/>
          <ul>
              {getProductList()}
          </ul>

      </div>
    );
  }
}

const convertStateToProps = (state) => {
    return {
        products : searchSelector(state),
        searchString : state.searchString,
        sortBy : state.sortBy
    }
};

const convertDispatchToProps = (dispatch)=> {
    return { dispatch };
};


export default connect(convertStateToProps, convertDispatchToProps)(App);
