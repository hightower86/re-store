import React, { Component } from 'react';

const withBookstoreService = (View) => {
  return class extends Component {
    render() {
      return (
        <div>
          <h2 className='red'>h2</h2>
          <View />
        </div>
      );
    }
  }
};

export default withBookstoreService;