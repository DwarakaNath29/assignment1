import React, { Component } from 'react';
import Products from '../Products/Products';
import Filter from '../Products/Filter/Filter';
import CartData from '../CartData/CartData';

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <main>
          <Filter />
          <Products />
        </main>
        <CartData />
      </React.Fragment>
    )
  }
}
