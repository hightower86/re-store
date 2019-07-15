import React from 'react';

import withBookstoreService from '../hoc/with-bookstore-service';

const Goods = () => {
  return (
    <h2>Goods</h2>
  )
};

export default withBookstoreService(Goods);