import React from 'react';

import withBookstoreService from '../hoc/with-bookstore-service';

const Goods = (props) => {
  console.log(props);
  return (
    <h2>Goods</h2>
  )
};

export default withBookstoreService(Goods);