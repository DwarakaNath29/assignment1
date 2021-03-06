import React from 'react';
import PropTypes from 'prop-types';

import SortProduct from '../Sort/SortProducts';

const ShelfHeader = props => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{props.productsLength} Product(s) found.</span>
      </small>
      <SortProduct />
    </div>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
