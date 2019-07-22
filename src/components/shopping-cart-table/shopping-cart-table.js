import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
    <h2>Your Order</h2>
      <table className="table">
        <thead className="">
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody className="">
          <tr>
            <td>1</td>
            <td>Title of book</td>
            <td>5</td>
            <td>$40</td>
            <td>
              <button className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o"></i>
              </button>
              <button className="btn btn-outline-success btn-sm">
                <i className="fa fa-plus-circle"></i>
              </button>
              <button className="btn btn-outline-warning btn-sm ">
                <i className="fa fa-minus-circle"></i>
              </button>
            </td>
          </tr>
          
        </tbody>       
      </table>
      <div className="total">
        Total: $201
      </div>
    </div>
  )
}

export default ShoppingCartTable

